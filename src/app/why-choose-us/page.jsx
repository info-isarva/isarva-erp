import React from 'react';
import WhyChooseUsContent from '../../components/why-choose-us/WhyChooseUsContent';

export const metadata = {
  title: 'Why Choose ISARVA ERP – Unified Cloud Architecture & Statutory Mastery',
  description:
    'Discover why 1,000+ enterprises choose ISARVA ERP over fragmented software and legacy monolithic suites. Native India GST & Saudi ZATCA Phase 2 compliance, zero per-user penalties, 99.98% uptime, and 2-4 week rapid deployment.',
  keywords:
    'Why Choose ISARVA ERP, Cloud ERP Comparison, Best ERP India, Best ERP Saudi Arabia, ZATCA Phase 2 ERP, GST Compliant ERP, Enterprise Resource Planning, Business Management Software, Retail POS & ERP',
  alternates: {
    canonical: 'https://demoweb.isarva.in/why-choose-us',
  },
  openGraph: {
    title: 'Why Choose ISARVA ERP – High-Performance Unified Cloud Business Core',
    description:
      'Engineered for modern enterprises that refuse to settle. Compare ISARVA with legacy ERPs and discover native statutory compliance, transparent ROI, and zero seat penalties.',
    url: 'https://demoweb.isarva.in/why-choose-us',
    siteName: 'ISARVA ERP',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/why-us/hero-core-hub.jpg',
        secureUrl: 'https://demoweb.isarva.in/images/why-us/hero-core-hub.jpg',
        width: 1200,
        height: 630,
        alt: 'Why Choose ISARVA ERP Architecture & Solutions Hub',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose ISARVA ERP – Unified Business Intelligence',
    description:
      'Native India GST & Saudi ZATCA compliance, transparent pricing with no per-user penalty, and 2-4 weeks rapid deployment.',
    images: ['/images/why-us/hero-core-hub.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://demoweb.isarva.in/why-choose-us#webpage',
      url: 'https://demoweb.isarva.in/why-choose-us',
      name: 'Why Choose ISARVA ERP – High-Performance Cloud Business Software',
      description:
        'Detailed comparison and core architectural pillars explaining why enterprises trust ISARVA ERP for multi-branch retail, manufacturing, logistics, and healthcare.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://demoweb.isarva.in/#website',
        name: 'ISARVA ERP',
        url: 'https://demoweb.isarva.in',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://demoweb.isarva.in/why-choose-us#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://demoweb.isarva.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Why Choose Us',
          item: 'https://demoweb.isarva.in/why-choose-us',
        },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Top Reasons to Choose ISARVA ERP',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Native Dual-Region Statutory Compliance',
          description: 'Automated India GST e-way bills & IRN, plus 100% Phase 2 ZATCA cryptographic clearance for Saudi Arabia.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Zero Per-User Headcount Penalty',
          description: 'Transparent pricing that lets businesses scale counter staff, store clerks, and accountants without bill spikes.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '2 to 4-Week Rapid Deployment',
          description: 'Turnkey data migration and white-glove setup that gets operations live 4x faster than legacy monoliths.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Unified Real-Time Architecture',
          description: 'Shared data core keeping POS, inventory, multi-branch ledgers, and HRMS synchronized in milliseconds.',
        },
      ],
    },
  ],
};

export default function WhyChooseUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WhyChooseUsContent initialCountry="IN" />
    </>
  );
}
