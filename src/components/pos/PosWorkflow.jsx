'use client';

import React from 'react';

export default function PosWorkflow() {
  const steps = [
    {
      step: '01',
      phase: 'Floor Seating',
      title: 'Map & Seat Guests',
      description: 'Host checks live table availability by dining area, seats guests, and assigns party cover count with one tap.',
      metric: 'Instant Layout Status',
      color: 'from-emerald-400 to-[#059669]',
      hoverBorder: 'hover:border-emerald-500 hover:shadow-emerald-500/20',
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="5" width="7" height="6" rx="1.5" strokeWidth="2.2" />
          <rect x="14" y="5" width="7" height="6" rx="1.5" strokeWidth="2.2" />
          <rect x="3" y="14" width="7" height="5" rx="1.5" strokeWidth="2.2" />
          <rect x="14" y="14" width="7" height="5" rx="1.5" strokeWidth="2.2" />
        </svg>
      ),
    },
    {
      step: '02',
      phase: 'Order Entry',
      title: 'Take Order & Fire',
      description: 'Waiter punches dishes with modifiers (spice levels, no onions) on a handheld tablet or stationary terminal.',
      metric: 'Sub-Second Entry',
      color: 'from-blue-500 to-indigo-600',
      hoverBorder: 'hover:border-blue-500 hover:shadow-blue-500/20',
      tagColor: 'bg-blue-100 text-blue-700 border-blue-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      step: '03',
      phase: 'Kitchen Dispatch',
      title: 'Paperless KDS Routing',
      description: 'Order automatically separates into station tickets (Grill, Bar, Pantry) with priority queues and visual countdowns.',
      metric: 'Zero Lost Tickets',
      color: 'from-amber-400 to-orange-600',
      hoverBorder: 'hover:border-amber-500 hover:shadow-amber-500/20',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      step: '04',
      phase: 'Split & Settle',
      title: 'Split Bill & Payment',
      description: 'Cashier splits check by individual or equal shares, collects cash/card/UPI, and prints a VAT 15% / GST receipt.',
      metric: '10-Second Checkout',
      color: 'from-purple-500 to-violet-600',
      hoverBorder: 'hover:border-purple-500 hover:shadow-purple-500/20',
      tagColor: 'bg-purple-100 text-purple-700 border-purple-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      step: '05',
      phase: 'Table Reset & BI',
      title: 'Free Table & Day Close',
      description: 'Table immediately turns green for the next waiting party while revenue and ingredient stock sync to cloud reporting.',
      metric: 'Instant Table Turn',
      color: 'from-teal-400 to-emerald-600',
      hoverBorder: 'hover:border-teal-500 hover:shadow-teal-500/20',
      tagColor: 'bg-teal-100 text-teal-800 border-teal-200',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="workflow" className="section-padding bg-white border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-amber-500/10 border border-emerald-300/60 text-[#059669] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            Service Lifecycle
          </div>
          <h2 className="mb-4 capitalize tracking-tight">
            Your Daily Service Flow in{' '}
            <span className="bg-gradient-to-r from-[#059669] via-[#007a55] to-[#0d9488] bg-clip-text text-transparent">
              5 Simple Steps
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            The exact operational rhythm your front-of-house, kitchen, and cashier run on every shift—engineered for speed during peak dining rushes.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-slate-50/70 border border-gray-200/90 shadow-2xs ${s.hoverBorder} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative`}
            >
              <div>
                {/* Step Pill Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 group-hover:text-emerald-600 transition-colors">
                    {s.step}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${s.tagColor}`}>
                    {s.phase}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {s.svgIcon}
                </div>

                <h3 className="mb-2">
                  {s.title}
                </h3>

                <p className="mb-4 text-xs sm:text-sm">
                  {s.description}
                </p>
              </div>

              {/* Metric Badge */}
              <div className="pt-3 border-t border-gray-200/80">
                <span className="text-xs font-extrabold text-[#059669]">
                  {s.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
