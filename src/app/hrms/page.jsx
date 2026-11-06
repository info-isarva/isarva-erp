import HrmsPageContent from '../../components/hrms/HrmsPageContent';

export const metadata = {
  title: 'ISARVA HRMS & Payroll Software – Biometric Attendance, Statutory Compliance & ESS',
  description: 'Automate payroll processing, biometric & GPS geofenced attendance, statutory PF, ESI, TDS, and WPS compliance with ISARVA HRMS. Empower teams with web & mobile self-service (ESS).',
  keywords: 'HRMS software India, Payroll software India, Biometric attendance software, GPS attendance app, PF ESI TDS compliance software, Employee self service portal, Cloud payroll ERP, Saudi Arabia WPS payroll',
  alternates: {
    canonical: 'https://demoweb.isarva.in/hrms',
  },
  openGraph: {
    title: 'ISARVA HRMS & Payroll Software – Biometric Attendance, Statutory Compliance & ESS',
    description: 'Automate monthly payroll, manage shifts, sync biometric punches, and generate 1-click statutory payslips with ISARVA HRMS.',
    url: 'https://demoweb.isarva.in/hrms',
    siteName: 'ISARVA ERP',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/hrms/HRMS-dashboard-v3.png',
        secureUrl: 'https://demoweb.isarva.in/images/hrms/HRMS-dashboard-v3.png',
        width: 1200,
        height: 630,
        alt: 'ISARVA HRMS & Payroll Dashboard Interface',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISARVA HRMS & Payroll Software – Automated Workforce Platform',
    description: 'Automate payroll, track biometric attendance, ensure 100% statutory tax compliance, and empower staff on mobile & web.',
    images: ['/images/hrms/HRMS-dashboard-v3.png'],
  },
};

export default function HrmsPage() {
  return <HrmsPageContent />;
}
