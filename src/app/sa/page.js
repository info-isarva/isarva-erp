import MainPageContent from '../../components/MainPageContent';

export const metadata = {
  title: 'ISARVA ERP Saudi Arabia | Certified ZATCA Phase 2 Cloud ERP',
  description: 'Certified Bilingual Cloud ERP in Saudi Arabia. Restaurant POS, Accounting (BillSoft), HRMS (GOSI/WPS), and CRM with ZATCA Phase 2 Fatoora e-Invoicing compliance.',
  keywords: 'ISARVA ERP Saudi Arabia, ZATCA e-Invoicing, Fatoora Phase 2, Saudi Restaurant POS, BillSoft KSA, HRMS GOSI, Riyadh Business Software',
  alternates: {
    canonical: 'https://demoweb.isarva.in/sa',
  },
  openGraph: {
    title: 'ISARVA ERP Saudi Arabia | Certified ZATCA Phase 2 Cloud ERP',
    description: 'Certified Bilingual Cloud ERP in Saudi Arabia. Restaurant POS, Accounting (BillSoft), HRMS (GOSI/WPS), and CRM with ZATCA Phase 2 Fatoora e-Invoicing compliance.',
    url: 'https://demoweb.isarva.in/sa',
    siteName: 'ISARVA ERP Saudi Arabia',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/isarva-og.jpg',
        secureUrl: 'https://demoweb.isarva.in/isarva-og.jpg',
        width: 1200,
        height: 630,
        alt: 'ISARVA ERP Saudi Arabia — Certified ZATCA Phase 2 Cloud ERP',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISARVA ERP Saudi Arabia | Certified ZATCA Phase 2 Cloud ERP',
    description: 'Certified Bilingual Cloud ERP in Saudi Arabia. Restaurant POS, Accounting (BillSoft), HRMS (GOSI/WPS), and CRM with ZATCA Phase 2 Fatoora e-Invoicing compliance.',
    images: ['/isarva-og.jpg'],
  },
};

export default function SaudiPage() {
  return <MainPageContent initialCountry="SA" />;
}
