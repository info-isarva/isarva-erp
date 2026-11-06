import { NextResponse } from 'next/server';
import { getContent, updateContent } from '../../../lib/content-store';
import { getDefaultContentForCountry } from '../../../lib/content';

export const dynamic = 'force-dynamic';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'isarva2026';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country') || 'IN';
  const content = await getContent(country);
  return NextResponse.json({ success: true, country, content });
}

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

    const { searchParams } = new URL(request.url);
    const country = searchParams.get('country') || undefined;

    if (searchParams.get('action') === 'sync') {
      const targetCountry = (country || 'IN').toUpperCase();
      const defaultContent = getDefaultContentForCountry(targetCountry);
      const updated = await updateContent(defaultContent, targetCountry);
      return NextResponse.json({ success: true, message: `Successfully synced database with ${targetCountry} master content`, country: targetCountry, content: updated });
    }

    const body = await request.json();
    const targetCountry = country || body.countryCode || 'IN';
    const updated = await updateContent(body, targetCountry);
    return NextResponse.json({ success: true, country: targetCountry, content: updated });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update content' }, { status: 500 });
  }
}
