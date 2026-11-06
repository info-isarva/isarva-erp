import PosPageContent from '../../components/pos/PosPageContent';

export const metadata = {
  title: 'ISARVA Restaurant POS Software – Live Floor Plan, Kitchen Display (KDS) & Billing',
  description: 'Run your restaurant floor with ISARVA Restaurant POS. Live table floor maps, kitchen display tickets (KDS), split billing, HungerStation & Jahez delivery sync, recipe inventory, and ZATCA / GST compliance.',
  keywords: 'Restaurant POS software India, Restaurant POS Saudi Arabia, Kitchen Display System KDS, Restaurant floor management, ZATCA Phase 2 POS, HungerStation POS integration, Jahez POS integration, Cloud restaurant billing, Dine-in and QSR billing',
  alternates: {
    canonical: 'https://demoweb.isarva.in/restaurant-pos',
  },
  openGraph: {
    title: 'ISARVA Restaurant POS Software – Live Floor Plan, Kitchen Display (KDS) & Billing',
    description: 'Manage floor tables, fire kitchen display orders, split checks, sync delivery aggregators, and print compliant ZATCA & GST invoices with ISARVA Restaurant POS.',
    url: 'https://demoweb.isarva.in/restaurant-pos',
    siteName: 'ISARVA ERP',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/pos/feature-floor-tables.png',
        secureUrl: 'https://demoweb.isarva.in/images/pos/feature-floor-tables.png',
        width: 1200,
        height: 630,
        alt: 'ISARVA Restaurant POS Live Floor Plan and Table Status',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISARVA Restaurant POS – Floor, Kitchen & Cloud Billing Platform',
    description: 'Seat guests on visual floor plans, fire KOT to kitchen displays, split bills, and print compliant receipts.',
    images: ['/images/pos/feature-floor-tables.png'],
  },
};

export default function RestaurantPosPage() {
  return <PosPageContent />;
}
