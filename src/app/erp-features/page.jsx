import ErpFeaturesPageContent from '../../components/erp-features/ErpFeaturesPageContent';

export const metadata = {
  title: 'ERP Features — Everything Your Business Needs | Isarva ERP',
  description:
    'Explore Isarva ERP features: Financial Management, Inventory, Sales & Purchasing, CRM, HRMS, Project Management, Analytics and Multi-Branch Management — all in one platform.',
  keywords:
    'ERP features, financial management software, inventory management, CRM software India, HRMS software, project management ERP, analytics reporting ERP, multi-branch ERP',
  alternates: {
    canonical: 'https://demoweb.isarva.in/erp-features',
  },
  openGraph: {
    title: 'ERP Features — All in One Business Platform | Isarva ERP',
    description:
      'Streamline finance, sales, inventory, HR, projects and more with Isarva ERP. Real-time insights, automation and complete business control.',
    url: 'https://demoweb.isarva.in/erp-features',
    siteName: 'ISARVA ERP',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/erp-features/erp-dashboard-hero.jpg',
        secureUrl: 'https://demoweb.isarva.in/images/erp-features/erp-dashboard-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Isarva ERP Dashboard — All-in-One Business Management',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP Features | Isarva ERP — All-in-One Business Platform',
    description:
      'Finance, inventory, sales, CRM, HRMS, projects and analytics — all in one ERP built for Indian businesses.',
    images: ['/images/erp-features/erp-dashboard-hero.jpg'],
  },
};

export default function ErpFeaturesPage() {
  return <ErpFeaturesPageContent />;
}
