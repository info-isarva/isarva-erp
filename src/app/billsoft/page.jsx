import BillsoftPageContent from '../../components/billsoft/BillsoftPageContent';

export const metadata = {
  title: 'BillSoft Accounting Software | GST Invoicing, E-Way Bill & Multi-Branch ERP',
  description: 'Scale your business with BillSoft ERP. 100% statutory compliant GST billing, automated E-Way bills, sub-second E-Invoicing with signed QR codes, multi-branch inventory, and AI financial analytics in India and Saudi Arabia.',
  keywords: 'BillSoft accounting software, GST billing software India, E-Invoicing IRN software, E-Way bill automation, Multi-branch accounting software, ZATCA Phase 2 billing Saudi Arabia, Inventory ERP, Party ledgers and SOA, Wholesale and retail billing software',
  alternates: {
    canonical: 'https://demoweb.isarva.in/billsoft',
  },
  openGraph: {
    title: 'BillSoft Accounting Software | GST Invoicing, E-Way Bill & Multi-Branch ERP',
    description: 'Transform billing, statutory GST/E-Invoicing, automated E-Way bills, multi-branch inventory, and AI financial reporting with BillSoft ERP in India and Saudi Arabia.',
    url: 'https://demoweb.isarva.in/billsoft',
    siteName: 'ISARVA ERP',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/billsoft/dashboard.png',
        secureUrl: 'https://demoweb.isarva.in/images/billsoft/dashboard.png',
        width: 1200,
        height: 630,
        alt: 'BillSoft Accounting Software and AI Financial Dashboard',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BillSoft Accounting Software – GST Invoicing, E-Way Bill & Multi-Branch ERP',
    description: 'Empower your business with BillSoft ERP: 1-click E-Way bills, sub-second IRN E-invoices, multi-branch stock sync, and AI financial analytics.',
    images: ['/images/billsoft/dashboard.png'],
  },
};

export default function BillsoftPage() {
  return <BillsoftPageContent />;
}
