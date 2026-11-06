'use client';

import React from 'react';

export default function CrmWorkflow() {
  const steps = [
    {
      step: '01',
      phase: 'Inbound Intake',
      title: 'Capture Leads',
      description: 'Collect and auto-organize leads from websites, WhatsApp, email, and ad campaigns seamlessly.',
      metric: 'Instant Auto-Routing',
      color: 'from-sky-400 to-[#008CDB]',
      hoverBorder: 'hover:border-sky-500 hover:shadow-sky-500/20',
      tagColor: 'bg-sky-100 text-sky-700 border-sky-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      step: '02',
      phase: 'Pipeline Stages',
      title: 'Qualify Deals',
      description: 'Progress opportunities across customized stages with automated probability and revenue forecasts.',
      metric: 'Visual Kanban Board',
      color: 'from-purple-500 to-indigo-600',
      hoverBorder: 'hover:border-purple-500 hover:shadow-purple-500/20',
      tagColor: 'bg-purple-100 text-purple-700 border-purple-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      step: '03',
      phase: 'Task Follow-ups',
      title: 'Manage Activities',
      description: 'Coordinate follow-ups, calls, tasks, and meetings in one calendar view with automated alerts.',
      metric: 'Zero Missed Calls',
      color: 'from-emerald-400 to-teal-600',
      hoverBorder: 'hover:border-emerald-500 hover:shadow-emerald-500/20',
      tagColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: '04',
      phase: '1-Click Quotes',
      title: 'Create Quotations',
      description: 'Generate professional, GST-compliant PDF quotes and share instantly with clients via email or WhatsApp.',
      metric: '60-Second GST PDF',
      color: 'from-orange-400 to-amber-600',
      hoverBorder: 'hover:border-orange-500 hover:shadow-orange-500/20',
      tagColor: 'bg-orange-100 text-orange-700 border-orange-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: '05',
      phase: 'Customer 360°',
      title: 'Build Relationships',
      description: 'Access full 360° customer history across web and mobile to retain, upsell, and maximize customer LTV.',
      metric: 'Full Account Dossier',
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
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-200/30 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-200/30 blur-3xl pointer-events-none rounded-full" />

      <div className="site-container relative z-10">
        
        {/* Exact Section Header from Source Theme */}
        <div data-aos="fade-up" data-aos-duration="600" className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-orange-500/10 border border-sky-300/60 text-[#008CDB] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#008CDB] animate-pulse" />
            End-to-End Sales Acceleration
          </div>
          <h2 className="mb-4 capitalize tracking-tight">
            How{' '}
            <span className="bg-gradient-to-r from-[#008CDB] via-indigo-600 to-[#0284C7] bg-clip-text text-transparent">
              Isarva CRM
            </span>{' '}
            Accelerates Deals
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed">
            A proven 5-stage automated sales cycle designed to shorten sales velocity, prevent lead leakage, and maximize customer lifetime value.
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
                className={`group relative flex-1 p-5 sm:p-6 lg:p-4.5 xl:p-5 2xl:p-6 rounded-2xl bg-white border border-gray-200/90 ${item.hoverBorder} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between overflow-hidden shadow-xs h-full min-w-0`}
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
                  <h3 className="mb-1.5 group-hover:text-[#008CDB] transition-colors text-center break-words">
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
