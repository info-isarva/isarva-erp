const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.isarvaerp.com';

const PUBLIC_ROUTES = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/sa', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/erp-features', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/why-choose-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/billsoft', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/restaurant-pos', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/hrms', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/crm', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 }
];

export default function sitemap() {
  const lastModified = new Date();

  return PUBLIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
