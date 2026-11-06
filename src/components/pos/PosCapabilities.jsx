'use client';

import React from 'react';

export default function PosCapabilities() {
  const capabilities = [
    {
      title: 'Dynamic Floor & Table Layouts',
      tag: 'Floor View',
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      iconBg: 'bg-gradient-to-br from-emerald-400 to-[#059669]',
      hoverBorder: 'hover:border-emerald-400 hover:shadow-emerald-500/15',
      description: 'Color-coded tables by dining area (Main Hall, Family, Outdoor, VIP) show free, occupied, or billing status so hosts seat guests without walking the floor.',
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
      title: 'Fast Counter & Split Billing',
      tag: 'Speed Service',
      tagColor: 'bg-blue-100 text-blue-700 border-blue-200',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
      hoverBorder: 'hover:border-blue-400 hover:shadow-blue-500/15',
      description: 'Settle checks in seconds: split bills by guest or item, apply discounts, support multi-tender payments, and print compliant VAT receipts.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Paperless Kitchen Display (KDS)',
      tag: 'Zero Lag KOT',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
      iconBg: 'bg-gradient-to-br from-amber-400 to-orange-600',
      hoverBorder: 'hover:border-amber-400 hover:shadow-amber-500/15',
      description: 'Fire orders directly to preparation stations (grill, bar, dessert) with live countdown timers, modifier alerts, and ticket recall.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Recipe BOM & Stock Depletion',
      tag: 'Cost Control',
      tagColor: 'bg-teal-100 text-teal-800 border-teal-200',
      iconBg: 'bg-gradient-to-br from-teal-400 to-emerald-600',
      hoverBorder: 'hover:border-teal-400 hover:shadow-teal-500/15',
      description: 'Automatically deduct raw ingredients as dishes sell. Get instant alerts before running out of essential items during peak service.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Delivery Aggregators on 1 Board',
      tag: 'Omni-Channel',
      tagColor: 'bg-purple-100 text-purple-700 border-purple-200',
      iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      hoverBorder: 'hover:border-purple-400 hover:shadow-purple-500/15',
      description: 'Incoming orders from HungerStation, Jahez, Keeta, and online channels land directly in a unified dispatch Kanban with zero re-typing.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Shift Analytics & Day-Close BI',
      tag: 'Finance Ready',
      tagColor: 'bg-rose-100 text-rose-700 border-rose-200',
      iconBg: 'bg-gradient-to-br from-rose-400 to-pink-600',
      hoverBorder: 'hover:border-rose-400 hover:shadow-rose-500/15',
      description: 'Real-time sales totals, cover turnover, top dishes, hourly trends, and cash drawer reconciliations ready for finance at shift close.',
      svgIcon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        
        {/* Exact Section Header from Source Theme */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-amber-500/10 border border-emerald-300/60 text-[#059669] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            Core Capabilities
          </div>
          <h2 className="mb-4 capitalize tracking-tight">
            Everything Your Restaurant Needs to{' '}
            <span className="bg-gradient-to-r from-[#059669] via-[#007a55] to-[#0d9488] bg-clip-text text-transparent">
              Run Smooth Shifts
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            From seating walk-in guests and firing kitchen tickets to splitting checks and closing the till—all synchronized across your dining floor.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/90 shadow-2xs ${cap.hoverBorder} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${cap.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {cap.svgIcon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${cap.tagColor}`}>
                    {cap.tag}
                  </span>
                </div>
                <h3 className="mb-2.5">
                  {cap.title}
                </h3>
                <p>
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
