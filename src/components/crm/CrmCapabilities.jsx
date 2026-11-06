'use client';

import React from 'react';

export default function CrmCapabilities() {
  const capabilities = [
    {
      title: 'Lead Capture & Scoring',
      tag: 'Inbound Engine',
      tagColor: 'bg-sky-100 text-sky-700 border-sky-200',
      iconBg: 'bg-gradient-to-br from-sky-400 to-[#008CDB]',
      hoverBorder: 'hover:border-sky-400 hover:shadow-sky-500/15',
      description: 'Automatically funnel inbound inquiries from web forms, WhatsApp, and campaigns into an intelligent, categorized pipeline.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
    {
      title: 'Kanban Deal Pipeline',
      tag: 'Visual Sales',
      tagColor: 'bg-purple-100 text-purple-700 border-purple-200',
      iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      hoverBorder: 'hover:border-purple-400 hover:shadow-purple-500/15',
      description: 'Visual drag-and-drop opportunity board to monitor stage progression, expected closing dates, probability, and deal size.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: 'Instant Quotations & PDF',
      tag: 'Fast Turnaround',
      tagColor: 'bg-orange-100 text-orange-700 border-orange-200',
      iconBg: 'bg-gradient-to-br from-orange-400 to-amber-600',
      hoverBorder: 'hover:border-orange-400 hover:shadow-orange-500/15',
      description: 'Generate branded estimates, commercial proposals, and itemized quotations with dynamic tax rules in under 60 seconds.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Activity & Task Sync',
      tag: 'Productivity',
      tagColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600',
      hoverBorder: 'hover:border-emerald-400 hover:shadow-emerald-500/15',
      description: 'Eliminate missed follow-ups with scheduled reminders, unified calendar task views, and complete team activity logs.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Customer 360° Profile',
      tag: 'Deep Context',
      tagColor: 'bg-rose-100 text-rose-700 border-rose-200',
      iconBg: 'bg-gradient-to-br from-rose-400 to-pink-600',
      hoverBorder: 'hover:border-rose-400 hover:shadow-rose-500/15',
      description: 'Centralized dossier with multi-contact hierarchy, past interaction history, associated quotes, and contract files.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Sales Analytics & Reports',
      tag: 'Revenue BI',
      tagColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-600',
      hoverBorder: 'hover:border-indigo-400 hover:shadow-indigo-500/15',
      description: 'Actionable real-time intelligence on conversion velocity, sales rep performance, win-loss reasons, and revenue targets.',
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-orange-500/10 border border-sky-300/60 text-[#008CDB] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#008CDB] animate-pulse" />
            Core Capabilities
          </div>
          <h2 className="mb-4 capitalize tracking-tight">
            Everything Your Team Needs to{' '}
            <span className="bg-gradient-to-r from-[#008CDB] via-indigo-600 to-[#0284C7] bg-clip-text text-transparent">
              Win More Deals
            </span>
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed">
            From capturing inquiries to sending final quotations, Isarva CRM automates every step of your commercial workflow.
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
              className={`group relative p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/80 ${item.hoverBorder} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between shadow-xs w-full`}
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
                <h3 className="mb-2 group-hover:text-[#008CDB] transition-colors leading-snug text-center">
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
