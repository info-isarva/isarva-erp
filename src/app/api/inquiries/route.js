import { NextResponse } from 'next/server';
import { getInquiries, addInquiry } from '../../../lib/content-store';

export const dynamic = 'force-dynamic';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'isarva2026';
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

function buildCrmTitle(inquiryData) {
  const product = inquiryData.product || 'Product Inquiry';
  const prefix = inquiryData.inquiryType === 'brochure' ? 'Brochure Request' : 'Demo Request';
  return `${prefix}: ${product}`;
}

function resolveCategoryId(inquiryData) {
  const raw = inquiryData.categoryId ?? inquiryData.categories ?? CRM_CATEGORY_ID;
  const parsed = parseInt(raw, 10);
  return Number.isFinite(parsed) ? parsed : CRM_CATEGORY_ID;
}

async function sendToCrm(inquiryData) {
  try {
    const payload = {
      title: buildCrmTitle(inquiryData),
      description: inquiryData.message || '',
      organization_name: inquiryData.company || inquiryData.name || '',
      address: inquiryData.address || '',
      website: inquiryData.website || '',
      full_name: inquiryData.name,
      email: inquiryData.email || '',
      mobile: inquiryData.phone,
      mobile: formatMobileNumber(inquiryData.phone),
      categories: resolveCategoryId(inquiryData),
      lead_source: CRM_LEAD_SOURCE
    };

    const res = await fetch(CRM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        'Accept': 'application/json',
        'X-Api-Key': CRM_API_KEY
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(4000)
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
      console.error('CRM lead API rejected inquiry:', res.status, rawText.slice(0, 500));
      return { success: false, error: data?.message || `CRM API returned ${res.status}`, crmResponse: data };
    }

    return { success: true, crmResponse: data };
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

function isValidPhoneNumber(value) {
  const raw = String(value || '').trim();
  if (!raw || !/^[+\d][\d\s\-().]*$/.test(raw)) return false;
  const digits = raw.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return false;
  if (/^(\d)\1+$/.test(digits)) return false;
  return true;
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone || !body.email || !body.company) {
      return NextResponse.json(
        { success: false, error: 'Full name, email, phone, and company are required' },
        { status: 400 }
      );
    }

    if (!isValidPhoneNumber(body.phone)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid phone number with 10–15 digits' },
        { status: 400 }
      );
    }

    if (!body.categoryId && !body.product) {
      return NextResponse.json(
        { success: false, error: 'Please select a product category' },
        { status: 400 }
      );
    }

    // 1. Always record inquiry in PostgreSQL / content-store first
    let newInquiry = null;
    try {
      newInquiry = await addInquiry(body);
    } catch (localErr) {
      console.warn('Local inquiry save failed:', localErr.message);
    }

    // 2. Sync to Isarva CRM (best-effort, non-blocking so customers are never rejected if CRM is unconfigured)
    let crmResult = { success: false };
    try {
      crmResult = await sendToCrm(body);
      if (!crmResult.success) {
        console.warn('CRM sync notice (lead saved locally):', crmResult.error);
      }
    } catch (crmErr) {
      console.warn('CRM sync notice (lead saved locally):', crmErr.message);
    }

    return NextResponse.json({
      success: true,
      inquiry: newInquiry,
      crmSynced: Boolean(crmResult?.success),
      crmLead: crmResult?.crmResponse?.lead || null
    });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json({ success: false, error: 'Failed to record inquiry' }, { status: 500 });
  }
}

