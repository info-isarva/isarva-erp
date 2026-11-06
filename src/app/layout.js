import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://demoweb.isarva.in'),
  title: 'ISARVA ERP | Smart Business Solutions for a Connected Tomorrow',
  description: 'Power your restaurant, retail and business operations with ISARVA ERP – featuring Restaurant POS, Accounting (BillSoft), HRMS and CRM with Indian GST and e-Invoicing compliance.',
  keywords: 'ISARVA ERP, Restaurant POS, BillSoft Accounting, GST e-Invoicing, HRMS, CRM, India Business Software',
  openGraph: {
    title: 'ISARVA ERP | Complete Business Management Platform',
    description: 'All-in-One ERP Platform featuring Restaurant POS, Accounting, HRMS, and CRM with Indian GST and e-Invoicing compliance.',
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
        alt: 'ISARVA ERP — Business Management, POS & Accounting Platform',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISARVA ERP | Complete Business Management Platform',
    description: 'All-in-One ERP Platform featuring Restaurant POS, Accounting (BillSoft), HRMS, and CRM with Indian GST and e-Invoicing compliance.',
    images: ['/isarva-og.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
