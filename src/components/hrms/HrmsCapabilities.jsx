'use client';

import React from 'react';

export default function HrmsCapabilities() {
  const capabilities = [
    {
      title: 'Digital Onboarding & Directory',
      tag: 'People Ops',
      tagColor: 'bg-purple-100 text-purple-700 border-purple-200',
      iconBg: 'bg-gradient-to-br from-purple-500 to-[#7c3aed]',
      hoverBorder: 'hover:border-purple-400 hover:shadow-purple-500/15',
      description: 'Centralize employee profiles, official documents, departmental hierarchy, and asset allocations into a single source of truth.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Biometric & GPS Attendance',
      tag: 'Real-Time Sync',
      tagColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      hoverBorder: 'hover:border-indigo-400 hover:shadow-indigo-500/15',
      description: 'Capture clock-ins across physical biometric devices, facial recognition scanners, and mobile GPS check-ins with geofenced radius.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11m0 0c0 2.215.337 4.35.96 6.35" />
        </svg>
      ),
    },
    {
      title: '1-Click Statutory Payroll',
      tag: 'Zero Penalties',
      tagColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
      hoverBorder: 'hover:border-emerald-400 hover:shadow-emerald-500/15',
      description: 'Compute precise net pay with automatic PF, ESI, TDS, Professional Tax (PT), and GCC Wage Protection System (WPS) files.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Leave & Shift Rostering',
      tag: 'Automated Policies',
      tagColor: 'bg-amber-100 text-amber-700 border-amber-200',
      iconBg: 'bg-gradient-to-br from-amber-400 to-orange-600',
      hoverBorder: 'hover:border-amber-400 hover:shadow-amber-500/15',
      description: 'Manage multi-shift scheduling, rotational rosters, paid leaves, comp-offs, and multi-tier manager approvals effortlessly.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Employee Self-Service (ESS)',
      tag: 'Web & Mobile',
      tagColor: 'bg-rose-100 text-rose-700 border-rose-200',
      iconBg: 'bg-gradient-to-br from-rose-400 to-pink-600',
      hoverBorder: 'hover:border-rose-400 hover:shadow-rose-500/15',
      description: 'Empower employees to view digital salary slips, request time off, declare tax investments, and update personal profiles.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Workforce BI & Reports',
      tag: 'Executive Analytics',
      tagColor: 'bg-sky-100 text-sky-700 border-sky-200',
      iconBg: 'bg-gradient-to-br from-sky-500 to-blue-600',
      hoverBorder: 'hover:border-sky-400 hover:shadow-sky-500/15',
      description: 'Gain instant visibility into labor costs, overtime expenses, department-wise attrition rates, and statutory audit reports.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 border-b border-gray-200 scroll-mt-20">
      <div className="site-container">

        {/* Exact Section Header from Source Theme */}
        <div data-aos="fade-up" data-aos-duration="600" className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-emerald-500/10 border border-purple-300/60 text-[#7c3aed] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
            Core Capabilities
          </div>
          <h2 className="mb-4 capitalize tracking-tight">
            Everything Your Organization Needs to{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] via-indigo-600 to-[#059669] bg-clip-text text-transparent">
              Empower People
            </span>
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed">
            From seamless onboarding to precision salary disbursements, ISARVA HRMS automates every step of your workforce lifecycle.
          </p>
        </div>

        {/* 6 Exact Elevated Cards with Colored Glow Drop-Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 120 + 100}
              data-aos-duration="700"
              className={`group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 ${item.hoverBorder} shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08),0_4px_10px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_35px_-5px_rgba(124,58,237,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between w-full`}
            >
              <div className="flex flex-col items-center w-full">
                {/* Gradient Rounded-2xl Icon Box */}
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} shadow-md group-hover:scale-110 transition-transform duration-300 mb-4`}>
                  {item.svgIcon}
                </div>

                {/* Eyebrow Tag */}
                <div className="mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="mb-2 group-hover:text-[#7c3aed] transition-colors leading-snug text-center">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
