'use client';

import React from 'react';

export default function HrmsWhyUs() {
  const cards = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-purple-500/10 to-indigo-500/10 text-[#7c3aed]',
      tag: 'Statutory Peace of Mind',
      title: 'Always Compliant with Labor Laws',
      description: 'Built-in support for EPFO, ESIC, Professional Tax, TDS withholding, and GCC Wage Protection System (WPS) with auto-updates as tax rules change.',
      metric: 'Zero calculation errors or filing delays',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-emerald-600',
      tag: 'Guided Setup',
      title: 'Dedicated White-Glove Onboarding',
      description: 'We import your historical employee registers, leave balances, and salary CTC structures from legacy systems or Excel spreadsheets at zero extra cost.',
      metric: 'Go-live within 2 to 5 business days',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 text-amber-600',
      tag: 'Multi-Branch Ready',
      title: 'Multi-Entity & Location Hierarchy',
      description: 'Manage diverse business units, branch offices, and factory locations with individualized shift policies and unified corporate payroll reporting.',
      metric: 'Central consolidated reporting',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-indigo-600',
      tag: '99.9% Uptime SLA',
      title: 'High-Availability Cloud Architecture',
      description: 'Built on high-speed AWS cloud architecture with 99.9% uptime SLA, automated encrypted backups, and lightning-fast page loading speeds.',
      metric: 'Scales from 10 to 10,000+ employees',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-rose-500/10 to-pink-500/10 text-rose-600',
      tag: 'Bank-Grade Security',
      title: 'Confidential Compensation Security',
      description: 'Keep executive and employee compensation private with role-based access control, encrypted database storage, and complete audit trail logs.',
      metric: '256-Bit SSL encryption & access audit',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-cyan-500/10 to-sky-500/10 text-cyan-600',
      tag: 'High Adoption Rate',
      title: 'Effortless Worker Self-Service',
      description: 'Clean, intuitive web and mobile app interface requiring zero employee training. Reduces HR inbox inquiries and leave queries by over 80%.',
      metric: '98% employee satisfaction score',
    },
  ];

  const metrics = [
    {
      value: '100%',
      gradient: 'from-[#7c3aed] to-indigo-600',
      label: 'Statutory Accuracy',
      sub: 'PF, ESI, TDS & WPS compliance',
    },
    {
      value: '2–5 Days',
      gradient: 'from-[#7c3aed] to-emerald-600',
      label: 'Rapid Go-Live',
      sub: 'Guided setup & data migration',
    },
    {
      value: '99.9%',
      gradient: 'from-[#7c3aed] to-blue-600',
      label: 'Cloud Uptime',
      sub: 'High-speed AWS infrastructure',
    },
    {
      value: '1-Click',
      gradient: 'from-[#7c3aed] to-purple-600',
      label: 'Monthly Payslips',
      sub: 'Disbursed via WhatsApp & Email',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-white border-b border-gray-200 relative overflow-hidden scroll-mt-20">
      {/* Background ambient blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="600" className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-emerald-500/10 border border-purple-300/60 text-[#7c3aed] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
            Why HR Leaders Choose ISARVA
          </div>

          <h2 className="mb-4 capitalize">
            Engineered for{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] via-indigo-600 to-[#059669] bg-clip-text text-transparent">
              High-Trust
            </span>{' '}
            Workplaces
          </h2>

          <p className="max-w-2xl mx-auto">
            Unlike fragmented payroll spreadsheets and rigid legacy HR systems, ISARVA HRMS delivers enterprise accuracy with employee-first simplicity.
          </p>
        </div>

        {/* 6 Trust & Security Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-14">
          {cards.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 120 + 100}
              data-aos-duration="700"
              className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08),0_4px_10px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_35px_-5px_rgba(124,58,237,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between w-full"
            >
              <div className="flex flex-col items-center w-full">
                {/* Source Vector SVG Icon Box */}
                <div
                  className={`w-14 h-14 rounded-2xl ${item.iconStyle} flex items-center justify-center shadow-xs border border-gray-100 group-hover:scale-110 transition-transform duration-300 mb-4`}
                >
                  {item.icon}
                </div>

                {/* Eyebrow Tag */}
                <div className="mb-3">
                  <span className="text-xs font-bold text-gray-600 bg-gray-100 group-hover:bg-purple-100 group-hover:text-[#7c3aed] px-3 py-1 rounded-full uppercase tracking-wider transition-colors duration-200">
                    {item.tag}
                  </span>
                </div>

                {/* Clean Semantic Heading */}
                <h3 className="mb-2.5 group-hover:text-[#7c3aed] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Clean Semantic Description */}
                <p className="mb-5 text-center">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Metric Assurance */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-2 w-full">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-black shrink-0">
                  ✓
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 4 Metric Cards */}
        <div className="pt-10 border-t border-gray-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-6">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100 + 100}
                data-aos-duration="700"
                className="p-4 sm:p-5 rounded-2xl bg-purple-50/60 border border-purple-100 text-center shadow-[0_4px_16px_rgba(124,58,237,0.08)] hover:shadow-[0_8px_24px_rgba(124,58,237,0.16)] transition-all"
              >
                <div
                  className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${m.gradient} bg-clip-text text-transparent mb-1 font-heading`}
                >
                  {m.value}
                </div>
                <div className="text-xs font-bold text-gray-800 uppercase tracking-wider font-heading">
                  {m.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 font-normal">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
