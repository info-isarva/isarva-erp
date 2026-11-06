import CrmPageContent from '../../components/crm/CrmPageContent';

export const metadata = {
  title: 'ISARVA CRM – Sales Pipeline, Lead Management & GST Quotation Software',
  description: 'Transform your sales pipeline with ISARVA CRM. Capture inbound leads, manage visual Kanban deals, generate 1-click GST quotations, and empower sales teams on mobile & web.',
  keywords: 'CRM software India, Lead management software, Kanban sales pipeline, GST quotation software, Mobile CRM app, B2B sales management, Cloud CRM',
  alternates: {
    canonical: 'https://demoweb.isarva.in/crm',
  },
  openGraph: {
    title: 'ISARVA CRM – Sales Pipeline, Lead Management & GST Quotation Software',
    description: 'Capture inbound leads, track visual Kanban deals, generate instant GST quotations and boost team productivity with ISARVA CRM.',
    url: 'https://demoweb.isarva.in/crm',
    siteName: 'ISARVA ERP',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/crm/CRM-dashboard-v3.png',
        secureUrl: 'https://demoweb.isarva.in/images/crm/CRM-dashboard-v3.png',
        width: 1200,
        height: 630,
        alt: 'ISARVA CRM Dashboard Interface',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISARVA CRM – High-Velocity Sales & Customer Intelligence Platform',
    description: 'Capture leads, track visual deals, generate instant GST quotes, and empower field teams on mobile & web.',
    images: ['/images/crm/CRM-dashboard-v3.png'],
  },
};

export default function CrmPage() {
  return <CrmPageContent />;
}
