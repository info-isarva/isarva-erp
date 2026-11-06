import SolutionsContent from '../../components/solutions/SolutionsContent';

export const metadata = {
  title: 'ERP Solutions — Integrated Business Management Suites | ISARVA ERP',
  description:
    'Discover ISARVA ERP solutions: Restaurant POS, BillSoft Accounting, HRMS & Payroll, CRM, Multi-Branch Management and IoT. Unified cloud software with native India GST and Saudi ZATCA compliance.',
  keywords:
    'ERP Solutions, Business Management Software, Restaurant POS Software, BillSoft Accounting, GST Invoicing Software, HRMS and Payroll Software, CRM Software India, Multi-Branch ERP, ZATCA e-Invoicing ERP',
  alternates: {
    canonical: 'https://demoweb.isarva.in/solutions',
  },
  openGraph: {
    title: 'ERP Solutions — Integrated Business Management Suites | ISARVA ERP',
    description:
      'From point-of-sale and GST-compliant accounting to multi-branch HRMS and automated customer pipelines — discover how ISARVA ERP connects every corner of your business.',
    url: 'https://demoweb.isarva.in/solutions',
    siteName: 'ISARVA ERP',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/isarva-og.jpg',
        secureUrl: 'https://demoweb.isarva.in/isarva-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ISARVA ERP Solutions — Integrated Business Suites',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERP Solutions — Integrated Business Management Suites | ISARVA ERP',
    description:
      'From point-of-sale and GST-compliant accounting to multi-branch HRMS and automated customer pipelines.',
    images: ['/isarva-og.jpg'],
  },
};

const SOLUTIONS_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://demoweb.isarva.in/solutions/#webpage',
      url: 'https://demoweb.isarva.in/solutions',
      name: 'ERP Solutions — Integrated Business Management Suites | ISARVA ERP',
      description:
        'Explore the full suite of modular and interconnected cloud business software from ISARVA ERP.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://demoweb.isarva.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Solutions',
            item: 'https://demoweb.isarva.in/solutions',
          },
        ],
      },
    },
    {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'SoftwareApplication',
          position: 1,
          name: 'ISARVA Restaurant POS Software',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, Android, iOS, Windows',
          url: 'https://demoweb.isarva.in/restaurant-pos',
        },
        {
          '@type': 'SoftwareApplication',
          position: 2,
          name: 'ISARVA BillSoft Accounting Software',
          applicationCategory: 'FinancialApplication',
          operatingSystem: 'Web, Windows, Cloud',
          url: 'https://demoweb.isarva.in/billsoft',
        },
        {
          '@type': 'SoftwareApplication',
          position: 3,
          name: 'ISARVA HRMS & Payroll Management',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, Android, iOS',
          url: 'https://demoweb.isarva.in/hrms',
        },
        {
          '@type': 'SoftwareApplication',
          position: 4,
          name: 'ISARVA CRM & Sales Pipeline',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, Cloud',
          url: 'https://demoweb.isarva.in/crm',
        },
      ],
    },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOLUTIONS_JSON_LD) }}
      />
      <SolutionsContent />
    </>
  );
}
