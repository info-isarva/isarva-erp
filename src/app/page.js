import MainPageContent from '../components/MainPageContent';

export const metadata = {
  title: 'ISARVA ERP – Business Management, POS & Accounting Software',
  description: 'ISARVA ERP helps businesses manage restaurant POS, GST accounting, inventory, payroll, HRMS and CRM in one integrated business management platform.',
  keywords: 'ERP software for businesses in India, Restaurant POS software, GST accounting software, Inventory management software, HRMS and payroll software, CRM software, Multi-branch ERP',
  alternates: {
    canonical: 'https://demoweb.isarva.in/',
  },
  openGraph: {
    title: 'ISARVA ERP – Business Management, POS & Accounting Software',
    description: 'ISARVA ERP helps businesses manage restaurant POS, GST accounting, inventory, payroll, HRMS and CRM in one integrated business management platform.',
    url: 'https://demoweb.isarva.in/',
    siteName: 'ISARVA ERP',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/isarva-og.jpg',
        secureUrl: 'https://demoweb.isarva.in/isarva-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ISARVA ERP – Business Management, POS & Accounting Software',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISARVA ERP – Business Management, POS & Accounting Software',
    description: 'ISARVA ERP helps businesses manage restaurant POS, GST accounting, inventory, payroll, HRMS and CRM in one integrated business management platform.',
    images: ['/isarva-og.jpg'],
  },
};

export default function HomePage() {
  return <MainPageContent initialCountry="IN" />;
}
