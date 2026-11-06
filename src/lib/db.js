import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;

export const sql = databaseUrl ? neon(databaseUrl) : null;

let isInitialized = false;

/**
 * Automatically creates necessary tables if they don't exist.
 * Called lazily upon first database query.
 */
export async function initDb(defaultContent) {
  if (!sql || isInitialized) return;

  try {
    // 1. Create site_content table for JSON CMS data
    await sql`
      CREATE TABLE IF NOT EXISTS site_content (
        id VARCHAR(50) PRIMARY KEY,
        data JSONB NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Create inquiries table for lead captures
    await sql`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        inquiry_id VARCHAR(50) UNIQUE,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        phone VARCHAR(50) NOT NULL,
        company VARCHAR(255),
        product VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 3. Seed default content if none exists
    const existing = await sql`
      SELECT id FROM site_content WHERE id = 'main' LIMIT 1;
    `;

    if (existing.length === 0 && defaultContent) {
      await sql`
        INSERT INTO site_content (id, data)
        VALUES ('main', ${JSON.stringify(defaultContent)})
        ON CONFLICT (id) DO NOTHING;
      `;
    }

    isInitialized = true;
    console.log('[Neon DB] Successfully connected and initialized database schema.');
  } catch (error) {
    console.error('[Neon DB] Error initializing schema:', error);
  }
}
