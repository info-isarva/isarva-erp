// Master Data & Content Store for ISARVA ERP
// Supports regional content: India (IN) & Saudi Arabia (SA)

import { indiaContent, saudiContent, getDefaultContentForCountry } from './content';
import { sql, initDb } from './db';

export { indiaContent, saudiContent };
export const defaultContent = indiaContent;

// Global in-memory content storage per country
const memoryStore = {
  IN: { ...indiaContent },
  SA: { ...saudiContent }
};

export async function getContent(countryCode = 'IN') {
  const code = (countryCode || 'IN').toUpperCase();
  const defaultForCountry = getDefaultContentForCountry(code);
  const dbKey = `content_${code.toLowerCase()}`;

  if (sql) {
    try {
      await initDb(defaultForCountry);
      // Query country-specific record
      const rows = await sql`
        SELECT data FROM site_content WHERE id = ${dbKey} LIMIT 1;
      `;
      if (rows && rows.length > 0 && rows[0].data) {
        const rawProducts = rows[0].data.products || defaultForCountry.products;
        const cleanProducts = rawProducts.filter((p) => p.id !== 'industry-erp');
        memoryStore[code] = { ...defaultForCountry, ...rows[0].data, products: cleanProducts };
        return memoryStore[code];
      }

      // Backward compatibility for India: check legacy 'main' record
      if (code === 'IN') {
        const legacyRows = await sql`
          SELECT data FROM site_content WHERE id = 'main' LIMIT 1;
        `;
        if (legacyRows && legacyRows.length > 0 && legacyRows[0].data) {
          const rawProducts = legacyRows[0].data.products || defaultForCountry.products;
          const cleanProducts = rawProducts.filter((p) => p.id !== 'industry-erp');
          memoryStore.IN = { ...defaultForCountry, ...legacyRows[0].data, products: cleanProducts };
          return memoryStore.IN;
        }
      }
    } catch (err) {
      console.error(`[Content Store] Neon DB fetch failed for ${code}, using memory:`, err.message);
    }
  }

  return memoryStore[code] || defaultForCountry;
}

export async function updateContent(newContent, countryCode = 'IN') {
  const code = (countryCode || newContent?.countryCode || 'IN').toUpperCase();
  const defaultForCountry = getDefaultContentForCountry(code);
  const dbKey = `content_${code.toLowerCase()}`;

  const current = memoryStore[code] || defaultForCountry;
  const updated = { ...current, ...newContent, countryCode: code };
  memoryStore[code] = updated;

  if (sql) {
    try {
      await initDb(defaultForCountry);
      await sql`
        INSERT INTO site_content (id, data, updated_at)
        VALUES (${dbKey}, ${JSON.stringify(updated)}, NOW())
        ON CONFLICT (id) DO UPDATE
        SET data = ${JSON.stringify(updated)}, updated_at = NOW();
      `;

      // If updating India, also keep legacy 'main' in sync for safety
      if (code === 'IN') {
        await sql`
          INSERT INTO site_content (id, data, updated_at)
          VALUES ('main', ${JSON.stringify(updated)}, NOW())
          ON CONFLICT (id) DO UPDATE
          SET data = ${JSON.stringify(updated)}, updated_at = NOW();
        `;
      }
    } catch (err) {
      console.error(`[Content Store] Neon DB update failed for ${code}, saved to memory:`, err.message);
    }
  }

  return updated;
}

export async function getInquiries(countryCode) {
  if (sql) {
    try {
      await initDb(indiaContent);
      const rows = await sql`
        SELECT 
          inquiry_id as id,
          name,
          email,
          phone,
          company,
          product,
          message,
          to_char(created_at, 'YYYY-MM-DD HH24:MI') as "createdAt"
        FROM inquiries 
        ORDER BY created_at DESC;
      `;
      if (rows && rows.length > 0) {
        return rows;
      }
    } catch (err) {
      console.error('[Content Store] Neon DB getInquiries failed, using memory:', err.message);
    }
  }
  return memoryStore.IN?.inquiries || [];
}

export async function addInquiry(inquiry) {
  const newInq = {
    id: 'inq-' + Date.now(),
    ...inquiry,
    createdAt: new Date().toLocaleString()
  };

  if (!memoryStore.IN.inquiries) memoryStore.IN.inquiries = [];
  memoryStore.IN.inquiries.unshift(newInq);

  if (sql) {
    try {
      await initDb(indiaContent);
      await sql`
        INSERT INTO inquiries (inquiry_id, name, email, phone, company, product, message)
        VALUES (
          ${newInq.id},
          ${inquiry.name || ''},
          ${inquiry.email || ''},
          ${inquiry.phone || ''},
          ${inquiry.company || ''},
          ${inquiry.product || ''},
          ${inquiry.message || ''}
        );
      `;
    } catch (err) {
      console.error('[Content Store] Neon DB addInquiry failed, saved to memory:', err.message);
    }
  }

  return newInq;
}
