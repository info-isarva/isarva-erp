'use client';

import React from 'react';

export default function CrmWhyUs() {
  const cards = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-sky-500/10 to-blue-500/10 text-[#008CDB]',
      tag: 'Vertical-Tailored',
      title: 'Industry-Specific Configurations',
      description: 'Pre-configured pipeline stages, quotation templates, and custom data fields tailored for IT Services, Manufacturing, Healthcare, Retail, and Real Estate.',
      metric: 'Zero complex custom coding needed',
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
      description: 'We don\'t leave you with a login link. Get direct data migration from Excel/CSV, personalized team walkthroughs, and responsive priority support.',
      metric: 'Go-live within 2 to 7 business days',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 text-amber-600',
      tag: 'Full Flexibility',
      title: '100% Adaptable Workflows',
      description: 'Adapt deal stages, custom dropdowns, lead sources, and quotation PDF formats to mirror your unique sales hierarchy without costly developer contracts.',
      metric: 'Dynamic custom field builder',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-indigo-600',
      tag: '99.9% Uptime SLA',
      title: 'High-Availability Cloud Infrastructure',
      description: 'Built on high-speed AWS cloud architecture with 99.9% uptime SLA, automated encrypted backups, and lightning-fast page loading speeds.',
      metric: 'Scales from 5 to 5,000+ sales reps',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-rose-500/10 to-pink-500/10 text-rose-600',
      tag: 'Bank-Grade Security',
      title: 'Granular Role-Based Access Control',
      description: 'Control exactly who sees lead contact info, quotation discounts, or revenue reports with multi-tier managerial permissions and audit trails.',
      metric: '256-Bit SSL encryption & logs',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-cyan-500/10 to-sky-500/10 text-[#008CDB]',
      tag: 'High Adoption Rate',
      title: 'Instant Sales Rep Adoption',
      description: 'An ultra-clean, intuitive interface designed specifically for high daily usage. Zero steep learning curve so your sales team stays productive from day one.',
      metric: '98% user satisfaction rating',
    },
  ];

  const metrics = [
    {
      value: '2–7 Days',
      gradient: 'from-[#008CDB] to-blue-600',
      label: 'Rapid Go-Live',
      sub: 'Guided setup & data migration',
    },
    {
      value: '99.9%',
      gradient: 'from-[#008CDB] to-indigo-600',
      label: 'Cloud Uptime',
      sub: 'High-speed AWS infrastructure',
    },
    {
      value: '256-Bit',
      gradient: 'from-[#008CDB] to-teal-600',
      label: 'SSL Security',
      sub: 'Encrypted daily backups',
    },
    {
      value: '24/7',
      gradient: 'from-[#008CDB] to-orange-600',
      label: 'Direct Support',
      sub: 'Dedicated WhatsApp & phone',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-white border-b border-gray-200 relative overflow-hidden scroll-mt-20">
      {/* Background ambient blurs matching source theme */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="600" className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-orange-500/10 border border-sky-300/60 text-[#008CDB] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs font-heading">
            <span className="w-2 h-2 rounded-full bg-[#008CDB] animate-pulse" />
            Why Sales Leaders Choose Isarva
          </div>

          <h2 className="mb-4 capitalize">
            Engineered for{' '}
            <span className="bg-gradient-to-r from-[#008CDB] via-indigo-600 to-[#0284C7] bg-clip-text text-transparent">
              High-Performing
            </span>{' '}
            Sales Teams
          </h2>

          <p className="max-w-2xl mx-auto">
            Unlike complex, overpriced legacy software, Isarva CRM delivers enterprise power with intuitive simplicity your sales reps will actually love using every day.
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
              className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/80 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between shadow-xs w-full"
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
                  <span className="text-xs font-bold text-gray-600 bg-gray-100 group-hover:bg-sky-100 group-hover:text-[#008CDB] px-3 py-1 rounded-full uppercase tracking-wider transition-colors duration-200 font-heading">
                    {item.tag}
                  </span>
                </div>

                {/* Clean Semantic Heading */}
                <h3 className="mb-2.5 group-hover:text-[#008CDB] transition-colors leading-snug">
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
                className="p-4 sm:p-5 rounded-2xl bg-sky-50/60 border border-sky-100 text-center"
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
