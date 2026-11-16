import { NextResponse } from 'next/server';
import { addInquiry } from '../../../lib/content-store';

export const dynamic = 'force-dynamic';
const CRM_API_URL = process.env.CRM_API_URL || process.env.CRM_WEBHOOK_URL || 'https://crm.isarva.in/api/leads';
const CRM_API_KEY = process.env.CRM_API_KEY || '82a5b93bbb3e774daedb1267eeeeb9aae9272d2e7f43fa5a';
const CRM_CATEGORY_ID = parseInt(process.env.CRM_CATEGORY_ID || '1', 10);
const CRM_LEAD_SOURCE = parseInt(process.env.CRM_LEAD_SOURCE || '11', 10);

function formatMobileNumber(phone) {
  if (!phone) return '';
  const digitsOnly = String(phone).replace(/\D/g, '');
  if (!digitsOnly) return String(phone);
  if (digitsOnly.length === 10) return `+91${digitsOnly}`;
  if (String(phone).startsWith('+')) return `+${digitsOnly}`;
  return `+${digitsOnly}`;
}

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
      mobile: formatMobileNumber(inquiryData.phone),
      categories: CRM_CATEGORY_ID,
      lead_source: CRM_LEAD_SOURCE
    };

    const res = await fetch(CRM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Api-Key': CRM_API_KEY
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000)
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
      if (data?.duplicate && data?.lead) {
        return { success: true, duplicate: true, crmResponse: data };
      }
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

    // 1. Always record inquiry in PostgreSQL / content-store first
    let newInquiry = null;
    try {
      newInquiry = await addInquiry({
        ...body,
        product: body.subject || body.product || 'Contact Inquiry',
        source: 'Contact Page Clone'
      });
    } catch (localErr) {
      console.warn('Local contact inquiry save failed:', localErr.message);
    }

    // 2. Sync to Isarva CRM (best-effort, non-blocking so inquiries succeed even if CRM is unconfigured)
    let crmResult = { success: false };
    try {
      crmResult = await sendToCrm(body);
      if (!crmResult.success) {
        console.warn('CRM sync notice (contact inquiry saved locally):', crmResult.error);
      }
    } catch (crmErr) {
      console.warn('CRM sync notice (contact inquiry saved locally):', crmErr.message);
    }

    return NextResponse.json({
      success: true,
      inquiry: newInquiry,
      crmSynced: Boolean(crmResult?.success),
      crmLead: crmResult?.crmResponse?.lead || null
    });
  } catch (error) {
    console.error('Contact inquiry error:', error);
    return NextResponse.json({ success: false, error: 'Failed to record contact inquiry' }, { status: 500 });
  }
}

