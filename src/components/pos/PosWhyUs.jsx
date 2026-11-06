'use client';

import React from 'react';

export default function PosWhyUs() {
  const cards = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-emerald-600',
      tag: 'Zero Lag',
      title: 'Peak Rush Performance',
      description: 'Tested and battle-proven during Friday night dinner rushes with 100+ concurrent orders without freeze or sluggish screen transitions.',
      metric: 'Sub-second screen responsiveness',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 4.243a9 9 0 01-1.414-1.414m-1.414-1.414a9 9 0 010-12.728m0 0l2.829 2.829m-2.829-2.829L3 3m5.657 5.657a5 5 0 017.07 0" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600',
      tag: 'Offline First',
      title: '100% Offline Resilience',
      description: 'Never halt your cashiers when the router disconnects. Orders queue locally on device and sync automatically once Wi-Fi restores.',
      metric: 'Continuous receipt printing without web connection',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-purple-500/10 to-indigo-500/10 text-purple-600',
      tag: 'Bilingual Compliance',
      title: 'ZATCA & GST Tax Invoicing',
      description: 'Built-in 15% VAT for Saudi Arabia (Phase 2 QR codes & audit trails) and CGST/SGST for India. Dual Arabic and English receipts for total clarity.',
      metric: 'Audit-ready finance tax export',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 text-amber-600',
      tag: 'Cost Control',
      title: 'Recipe BOM Margin Protection',
      description: 'Accurate recipe portioning cuts raw ingredient wastage. Automated ingredient depletion detects kitchen staff shrinkage and unaccounted variance.',
      metric: 'Reduces food costs by up to 18%',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-teal-500/10 to-emerald-500/10 text-teal-600',
      tag: 'Scale Freely',
      title: 'Multi-Branch Centralization',
      description: 'Manage 1 to 100+ outlets from one centralized cloud console. Push universal menu updates, sync branch inventory, and benchmark outlet sales.',
      metric: 'Single consolidated owner login',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconStyle: 'bg-gradient-to-br from-rose-500/10 to-pink-500/10 text-rose-600',
      tag: 'Open Hardware',
      title: 'Zero Hardware Lock-In',
      description: 'Freedom to use your preferred hardware: Android tablets, Apple iPads, Windows PCs, touch POS terminals, and standard ESC/POS thermal printers.',
      metric: 'Save thousands on proprietary hardware fees',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-slate-50/70 border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-amber-500/10 border border-emerald-300/60 text-[#059669] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            Why Choose ISARVA
          </div>
          <h2 className="mb-4 capitalize tracking-tight">
            Engineered for the Demands of{' '}
            <span className="bg-gradient-to-r from-[#059669] via-[#007a55] to-[#0d9488] bg-clip-text text-transparent">
              Busy Kitchens
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Traditional cash registers fail during dinner rush. ISARVA POS is built with modern cloud resilience to keep service swift and guests happy.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${c.iconStyle} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    {c.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200/80">
                    {c.tag}
                  </span>
                </div>

                <h3 className="mb-3">
                  {c.title}
                </h3>

                <p className="mb-6">
                  {c.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-bold text-[#059669] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                  {c.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
