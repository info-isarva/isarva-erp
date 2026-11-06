'use client';

import React from 'react';

export default function HrmsWorkflow() {
  const steps = [
    {
      step: '01',
      phase: 'Digital Onboard',
      title: 'Onboard & Profile',
      description: 'Capture employee records, upload statutory KYC documents, and provision role permissions in minutes.',
      metric: 'Instant Roster Sync',
      color: 'from-purple-500 to-[#7c3aed]',
      hoverBorder: 'hover:border-purple-500 hover:shadow-purple-500/20',
      tagColor: 'bg-purple-100 text-purple-700 border-purple-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
    {
      step: '02',
      phase: 'Time Tracking',
      title: 'Track Attendance',
      description: 'Capture real-time biometric and mobile GPS geofenced punches across multiple branches and work sites.',
      metric: 'Biometric & GPS Sync',
      color: 'from-indigo-500 to-blue-600',
      hoverBorder: 'hover:border-indigo-500 hover:shadow-indigo-500/20',
      tagColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      step: '03',
      phase: 'Policy Approvals',
      title: 'Manage Leaves',
      description: 'Review leave applications, manage shift rotations, and automate comp-off approvals via self-service.',
      metric: 'Zero Shift Conflicts',
      color: 'from-amber-400 to-orange-600',
      hoverBorder: 'hover:border-amber-500 hover:shadow-amber-500/20',
      tagColor: 'bg-amber-100 text-amber-700 border-amber-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: '04',
      phase: '1-Click Calculation',
      title: 'Run Payroll',
      description: 'Compute precise gross-to-net pay with automatic PF, ESI, TDS, PT deductions and generate payslips in seconds.',
      metric: '100% Statutory Compliant',
      color: 'from-emerald-400 to-teal-600',
      hoverBorder: 'hover:border-emerald-500 hover:shadow-emerald-500/20',
      tagColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: '05',
      phase: 'Direct Payouts',
      title: 'Disburse & Retain',
      description: 'Export multi-bank salary batch files, auto-dispatch encrypted slips via WhatsApp/Email, and track team growth.',
      metric: 'Full Employee Trust',
      color: 'from-rose-400 to-pink-600',
      hoverBorder: 'hover:border-rose-500 hover:shadow-rose-500/20',
      tagColor: 'bg-rose-100 text-rose-700 border-rose-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="workflow" className="section-padding bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 border-b border-gray-200 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-200/30 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-200/30 blur-3xl pointer-events-none rounded-full" />

      <div className="site-container relative z-10">
        
        {/* Exact Section Header from Source Theme */}
        <div data-aos="fade-up" data-aos-duration="600" className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-emerald-500/10 border border-purple-300/60 text-[#7c3aed] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
            End-to-End Workforce Cycle
          </div>
          <h2 className="mb-4 capitalize tracking-tight">
            How{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] via-indigo-600 to-[#059669] bg-clip-text text-transparent">
              ISARVA HRMS
            </span>{' '}
            Accelerates Operations
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed">
            A proven 5-stage automated workforce lifecycle designed to eliminate payroll delays, prevent compliance penalties, and empower employees.
          </p>
        </div>

        {/* 5-Step Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-3.5 xl:gap-4.5 items-stretch">
          {steps.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100 + 100}
              data-aos-duration="700"
              className={`relative flex flex-col min-w-0 w-full ${
                idx === 4 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 xl:col-span-1' : ''
              }`}
            >
              <div
                className={`group relative flex-1 p-5 sm:p-6 lg:p-4.5 xl:p-5 2xl:p-6 rounded-2xl bg-white border border-slate-200/90 ${item.hoverBorder} shadow-[0_8px_20px_-4px_rgba(15,23,42,0.06),0_3px_8px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_32px_-4px_rgba(124,58,237,0.18)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between overflow-hidden h-full min-w-0`}
              >
                {/* Top Accent Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-br ${item.color}`} />

                <div className="flex flex-col items-center w-full min-w-0">
                  {/* Step Gradient Icon */}
                  <div className={`flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-md group-hover:scale-110 transition-transform duration-300 mb-3.5`}>
                    {item.svgIcon}
                  </div>

                  {/* Step Pill */}
                  <div className="flex items-center justify-center mb-3">
                    <span className={`inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11.5px] font-bold px-3 py-1 rounded-full border ${item.tagColor} shadow-2xs whitespace-nowrap`}>
                      <span className="font-extrabold uppercase tracking-wider">
                        STEP {item.step}
                      </span>
                      <span className="opacity-35">•</span>
                      <span>{item.phase}</span>
                    </span>
                  </div>

                  {/* Semantic Heading */}
                  <h3 className="mb-1.5 group-hover:text-[#7c3aed] transition-colors text-center break-words">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Value Metric */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-center w-full min-w-0">
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-gray-800 flex items-center justify-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="truncate">{item.metric}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
