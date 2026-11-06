import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'isarva2026';

export async function POST(request) {
  try {
    const authHeader = request.headers.get('authorization') || request.headers.get('x-admin-key');
    const token = authHeader?.replace('Bearer ', '');

    if (token !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Invalid Admin Password' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate mime type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif', 'image/avif'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid file format. Please upload JPG, PNG, WebP, SVG, or GIF.' },
        { status: 400 }
      );
    }

    // Limit to 10MB
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return NextResponse.json(
        { success: false, error: 'File size exceeds 10MB limit.' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const originalName = file.name || 'image.png';
    const ext = path.extname(originalName).toLowerCase() || '.png';
    const baseName = path.basename(originalName, ext)
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, '-')
      .replace(/-+/g, '-')
      .slice(0, 40);
    const uniqueFileName = `${baseName || 'upload'}-${Date.now()}${ext}`;

    try {
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadDir)) {
        await fs.promises.mkdir(uploadDir, { recursive: true });
      }
      const filePath = path.join(uploadDir, uniqueFileName);
      await fs.promises.writeFile(filePath, buffer);

      return NextResponse.json({
        success: true,
        url: `/uploads/${uniqueFileName}`,
        fileName: uniqueFileName,
      });
    } catch (fsErr) {
      // In read-only serverless environments, fallback to data URL
      console.warn('Filesystem write failed, falling back to base64 Data URL:', fsErr);
      const base64 = buffer.toString('base64');
      const dataUrl = `data:${file.type};base64,${base64}`;
      return NextResponse.json({
        success: true,
        url: dataUrl,
        fileName: uniqueFileName,
      });
    }
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'File upload failed' },
      { status: 500 }
    );
  }
}
