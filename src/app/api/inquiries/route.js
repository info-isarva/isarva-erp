import { NextResponse } from 'next/server';
import { getInquiries, addInquiry } from '../../../lib/content-store';

export const dynamic = 'force-dynamic';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'isarva2026';
const CRM_API_URL = process.env.CRM_API_URL || process.env.CRM_WEBHOOK_URL || 'https://crm.isarva.in/api/leads';
const CRM_CATEGORY_ID = parseInt(process.env.CRM_CATEGORY_ID || '1', 10);

async function sendToCrm(inquiryData) {
  try {
    const title = `[ERP Inquiries] ${inquiryData.product || 'All-in-One ERP'} (${inquiryData.country || 'IN'})`;
    const orgName = inquiryData.company || inquiryData.name || 'Individual / Business';
    const notes = [
      'Category: ERP Inquiries',
      inquiryData.product ? `Interested Product: ${inquiryData.product}` : '',
      inquiryData.message ? `Requirements: ${inquiryData.message}` : '',
      inquiryData.country ? `Target Market: ${inquiryData.country}` : '',
      'Source: ISARVA ERP Website'
    ].filter(Boolean).join(' | ');

    const payload = {
      title,
      organization_name: orgName,
      full_name: inquiryData.name,
      mobile: inquiryData.phone,
      email: inquiryData.email || '',
      description: notes,
      categories: CRM_CATEGORY_ID,
      category_name: 'ERP Inquiries'
    };

    const res = await fetch(CRM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const rawText = await res.text();
    let data = null;
    const jsonStart = rawText.indexOf('{');
    const jsonEnd = rawText.lastIndexOf('}');
    if (jsonStart !== -1 && jsonEnd !== -1) {
      try {
        data = JSON.parse(rawText.substring(jsonStart, jsonEnd + 1));
      } catch (e) {
        console.warn('CRM JSON parse warning:', e.message);
      }
    }

    return { success: res.ok, crmResponse: data };
  } catch (err) {
    console.error('Failed to sync inquiry to CRM:', err);
    return { success: false, error: err.message };
  }
}

export async function GET(request) {
  const authHeader = request.headers.get('authorization') || request.headers.get('x-admin-key');
  const token = authHeader?.replace('Bearer ', '');

  if (token !== ADMIN_PASSWORD) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized: Invalid Admin Password' },
      { status: 401 }
    );
  }

  const inquiries = await getInquiries();
  return NextResponse.json({ success: true, inquiries: inquiries || [] });
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone) {
      return NextResponse.json({ success: false, error: 'Name and Phone are required' }, { status: 400 });
    }

    // 1. Save to local PostgreSQL database
    const newInquiry = await addInquiry(body);

    // 2. Automatically dispatch to Isarva CRM
    const crmResult = await sendToCrm(body);

    return NextResponse.json({
      success: true,
      inquiry: newInquiry,
      crmSynced: crmResult.success,
      crmLead: crmResult.crmResponse?.lead || null
    });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json({ success: false, error: 'Failed to record inquiry' }, { status: 500 });
  }
}

