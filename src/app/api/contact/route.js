import { NextResponse } from 'next/server';
import { addInquiry } from '../../../lib/content-store';

export const dynamic = 'force-dynamic';
const CRM_API_URL = process.env.CRM_API_URL || process.env.CRM_WEBHOOK_URL || 'https://crm.isarva.in/api/leads';
const CRM_CATEGORY_ID = parseInt(process.env.CRM_CATEGORY_ID || '1', 10);

async function sendToCrm(inquiryData) {
  try {
    const title = `[Contact Page] ${inquiryData.subject || inquiryData.product || 'General Inquiry'} (${inquiryData.country || 'IN'})`;
    const orgName = inquiryData.company || inquiryData.name || 'Individual / Business';
    const notes = [
      'Category: Contact Us Page Inquiry',
      inquiryData.subject ? `Subject: ${inquiryData.subject}` : '',
      inquiryData.message ? `Requirements: ${inquiryData.message}` : '',
      inquiryData.country ? `Country: ${inquiryData.country}` : '',
      'Source: ISARVA Contact Form'
    ].filter(Boolean).join(' | ');

    const payload = {
      title,
      organization_name: orgName,
      full_name: inquiryData.name,
      mobile: inquiryData.phone,
      email: inquiryData.email || '',
      description: notes,
      categories: CRM_CATEGORY_ID,
      category_name: 'Contact Page Inquiries'
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
    console.error('Failed to sync contact inquiry to CRM:', err);
    return { success: false, error: err.message };
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone) {
      return NextResponse.json({ success: false, error: 'Name and Phone number are required' }, { status: 400 });
    }

    // 1. Save locally in content store / DB
    const newInquiry = await addInquiry({
      ...body,
      product: body.subject || body.product || 'Contact Inquiry',
      source: 'Contact Page Clone'
    });

    // 2. Sync to CRM
    const crmResult = await sendToCrm(body);

    return NextResponse.json({
      success: true,
      inquiry: newInquiry,
      crmSynced: crmResult.success
    });
  } catch (error) {
    console.error('Contact inquiry error:', error);
    return NextResponse.json({ success: false, error: 'Failed to record contact inquiry' }, { status: 500 });
  }
}

