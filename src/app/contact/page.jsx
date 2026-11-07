import ContactContent from '../../components/contact/ContactContent';

export const metadata = {
  title: 'Contact Us - Get in Touch with Our Experts | Isarva Infotech',
  description: "Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours. Contact ISARVA Infotech for Restaurant POS, BillSoft Accounting, HRMS, CRM, and cloud ERP solutions.",
  keywords: 'Contact ISARVA, ERP Consultation, Restaurant POS Support, BillSoft Accounting Demo, HRMS Software Contact, ISARVA Infotech Mangalore Bangalore Dubai UK, Business Management Software',
  alternates: {
    canonical: 'https://www.isarvaerp.com/contact',
  },
  openGraph: {
    title: 'Contact Us - Get in Touch with Our Experts | Isarva Infotech',
    description: "Have a project in mind? Connect with ISARVA Infotech for enterprise ERP, Restaurant POS, Accounting, and HRMS solutions. We respond within 24 hours.",
    url: 'https://www.isarvaerp.com/contact',
    siteName: 'ISARVA ERP',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/isarva-og.jpg',
        secureUrl: 'https://www.isarvaerp.com/isarva-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact ISARVA Infotech — Get in Touch with Our ERP Experts',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Get in Touch with Our Experts | Isarva Infotech',
    description: "Have a project in mind? Connect with ISARVA Infotech for enterprise ERP, Restaurant POS, Accounting, and HRMS solutions.",
    images: ['/isarva-og.jpg'],
  },
};

const CONTACT_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://www.isarvaerp.com/contact/#webpage',
      url: 'https://www.isarvaerp.com/contact',
      name: 'Contact Us - Get in Touch with Our Experts | Isarva Infotech',
      description: "Have a project in mind? Send us a message and we'll respond within 24 hours.",
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.isarvaerp.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Contact Us',
            item: 'https://www.isarvaerp.com/contact',
          },
        ],
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.isarvaerp.com/#organization',
      name: 'ISARVA Infotech Private Limited',
      url: 'https://www.isarvaerp.com/',
      logo: 'https://www.isarvaerp.com/favicon.png',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-9902863697',
          contactType: 'customer support',
          email: 'marketing@isarvait.com',
          availableLanguage: ['English', 'Hindi', 'Arabic'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:30',
            closes: '18:30',
          },
        },
      ],
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
          streetAddress: 'Bajpe',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Bangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Dubai',
          addressCountry: 'AE',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'United Kingdom',
          addressCountry: 'GB',
        },
      ],
      sameAs: [
        'https://linkedin.com/company/isarva',
        'https://twitter.com/isarvait',
        'https://facebook.com/isarvait',
        'https://instagram.com/isarvait',
        'https://youtube.com/@isarvait',
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_JSON_LD) }}
      />
      <ContactContent />
    </>
  );
}
