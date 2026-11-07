import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const CRM_PRODUCT_CATEGORIES_URL =
  process.env.CRM_PRODUCT_CATEGORIES_URL || 'https://crm.isarva.in/api/product-categories';

/**
 * CRM category ids for the 4 ISARVA ERP products on this site.
 * Order controls dropdown display order.
 */
const ERP_PRODUCT_CATEGORY_IDS = [
  77, // Billsoft Accounting Software
  73, // Restaurant POS Software
  1,  // HRMS Software
  2   // CRM Software
];

function filterErpCategories(categories) {
  const byId = new Map(
    (categories || [])
      .filter((c) => c && c.id != null)
      .map((c) => [Number(c.id), c])
  );

  return ERP_PRODUCT_CATEGORY_IDS.map((id) => byId.get(id)).filter(Boolean);
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const scope = (searchParams.get('scope') || 'erp').toLowerCase();

    const res = await fetch(CRM_PRODUCT_CATEGORIES_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      cache: 'no-store'
    });

    const rawText = await res.text();
    let data = null;
    const jsonStart = rawText.indexOf('{');
    const jsonEnd = rawText.lastIndexOf('}');
    if (jsonStart !== -1 && jsonEnd !== -1) {
      try {
        data = JSON.parse(rawText.substring(jsonStart, jsonEnd + 1));
      } catch (e) {
        console.warn('Product categories JSON parse warning:', e.message);
      }
    }

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: data?.message || `CRM API returned ${res.status}`, categories: [] },
        { status: 502 }
      );
    }

    const allCategories = Array.isArray(data?.categories) ? data.categories : [];
    const categories =
      scope === 'all'
        ? [...allCategories].sort((a, b) =>
            String(a.category_name || '').localeCompare(String(b.category_name || ''))
          )
        : filterErpCategories(allCategories);

    return NextResponse.json({ success: true, categories, scope });
  } catch (error) {
    console.error('Failed to fetch product categories:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to load product categories', categories: [] },
      { status: 500 }
    );
  }
}
