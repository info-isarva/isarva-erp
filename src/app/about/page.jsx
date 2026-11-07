import AboutPageContent from '../../components/about/AboutPageContent';

export const metadata = {
  title: 'About Us - Leading IT Solutions Provider | Isarva Infotech',
  description:
    "Precision in Technology. Purpose in Impact. Learn about Isarva Infotech's legacy of innovation, our expert team, and commitment to delivering exceptional digital solutions since our founding.",
  keywords:
    'about us, company profile, IT company, software development company, technology partner, innovation, web design, web development, software development, Next.js, React, WordPress, ERP, CRM, HRMS, custom software, digital transformation',
  alternates: {
    canonical: 'https://www.isarvaerp.com/about',
  },
  openGraph: {
    title: 'About Us - Leading IT Solutions Provider | Isarva Infotech',
    description:
      "Precision in Technology. Purpose in Impact. Learn about Isarva Infotech's legacy of innovation, our expert team, and commitment to delivering exceptional digital solutions since our founding.",
    url: 'https://www.isarvaerp.com/about',
    siteName: 'Isarva Infotech',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/isarva-og.jpg',
        secureUrl: 'https://www.isarvaerp.com/isarva-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About Isarva Infotech — Precision in Technology, Purpose in Impact',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Leading IT Solutions Provider | Isarva Infotech',
    description:
      "Precision in Technology. Purpose in Impact. Learn about Isarva Infotech's legacy of innovation, our expert team, and commitment to delivering exceptional digital solutions.",
    images: ['/isarva-og.jpg'],
  },
};

const ABOUT_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://www.isarvaerp.com/about/#webpage',
      url: 'https://www.isarvaerp.com/about',
      name: 'About Us - Leading IT Solutions Provider | Isarva Infotech',
      description:
        "Precision in Technology. Purpose in Impact. Learn about Isarva Infotech's legacy of innovation, our expert team, and commitment to delivering exceptional digital solutions.",
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
            name: 'About Us',
            item: 'https://www.isarvaerp.com/about',
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
      foundingDate: '2010',
      description:
        'Strategic technology partner providing enterprise ERP, cloud software, retail POS, and custom digital transformation solutions.',
      sameAs: [
        'https://linkedin.com/company/isarvait',
        'https://x.com/isarva',
        'https://facebook.com/isarvait',
        'https://instagram.com/isarvait',
        'https://youtube.com/@isarvainfotech',
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_JSON_LD) }}
      />
      <AboutPageContent initialCountry="IN" />
    </>
  );
}
