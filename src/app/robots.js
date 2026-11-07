const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://demoweb.isarva.in';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Keep CMS/API private; all marketing pages are indexable
        disallow: ['/admin', '/api/']
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
