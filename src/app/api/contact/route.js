import { NextResponse } from 'next/server';
import { addInquiry } from '../../../lib/content-store';

export const dynamic = 'force-dynamic';
const CRM_API_URL = process.env.CRM_API_URL || process.env.CRM_WEBHOOK_URL || 'https://crm.isarva.in/api/leads';
const CRM_CATEGORY_ID = parseInt(process.env.CRM_CATEGORY_ID || '1', 10);
const CRM_LEAD_SOURCE = parseInt(process.env.CRM_LEAD_SOURCE || '11', 10);

async function sendToCrm(inquiryData) {
  try {
    const subject = inquiryData.subject || inquiryData.product || 'General Inquiry';
    const payload = {
      title: `Contact Request: ${subject}`,
      description: inquiryData.message || '',
      organization_name: inquiryData.company || inquiryData.name || '',
      address: inquiryData.address || '',
      website: inquiryData.website || '',
      full_name: inquiryData.name,
      email: inquiryData.email || '',
      mobile: inquiryData.phone,
      categories: CRM_CATEGORY_ID,
      lead_source: CRM_LEAD_SOURCE
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

    if (!res.ok) {
      console.error('CRM lead API rejected contact:', res.status, rawText.slice(0, 500));
      return { success: false, error: data?.message || `CRM API returned ${res.status}`, crmResponse: data };
    }

    return { success: true, crmResponse: data };
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

    // 1. Create lead in Isarva CRM (primary)
    const crmResult = await sendToCrm(body);
    if (!crmResult.success) {
      return NextResponse.json(
        { success: false, error: crmResult.error || 'Failed to submit lead to CRM' },
        { status: 502 }
      );
    }

    // 2. Keep a local copy for Admin CMS (non-blocking)
    let newInquiry = null;
    try {
      newInquiry = await addInquiry({
        ...body,
        product: body.subject || body.product || 'Contact Inquiry',
        source: 'Contact Page Clone'
      });
    } catch (localErr) {
      console.warn('Local contact inquiry save failed after CRM success:', localErr.message);
    }

    return NextResponse.json({
      success: true,
      inquiry: newInquiry,
      crmSynced: true,
      crmLead: crmResult.crmResponse?.lead || null
    });
  } catch (error) {
    console.error('Contact inquiry error:', error);
    return NextResponse.json({ success: false, error: 'Failed to record contact inquiry' }, { status: 500 });
  }
}

