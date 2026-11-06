'use client';

import React from 'react';
import { WifiOff, RefreshCw, Headphones, ZoomIn } from 'lucide-react';

export default function PosHero({ onOpenDemoModal, onOpenBrochureModal, onOpenLightbox }) {
  return (
    <section id="overview" className="relative section-padding-sm overflow-hidden border-b border-gray-200 bg-gradient-to-b from-[#ECFDF5] via-[#F7FEFA] to-white scroll-mt-20">
      {/* Exact Radial Dot Grid Background with Emerald Accent */}
      <div
        className="absolute inset-0 opacity-[0.32] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#059669 0.75px, transparent 0.75px), radial-gradient(#059669 0.75px, #F7FEFA 0.75px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
        }}
      />
      {/* Ambient Radial Lighting Accents */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[300px] bg-[#059669]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-[#007a55]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">

          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">

            {/* Live Indicator Eyebrow Tag */}
            <div className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-amber-500/10 border border-emerald-300/60 mb-6 shadow-2xs">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]" />
              </span>
              <span className="section-eyebrow text-[#059669]">
                ⚡ All-in-One Restaurant Floor &amp; Cloud POS Platform
              </span>
            </div>

            {/* Headline with Space Grotesk via @layer base and emerald gradient */}
            <h1 className="mb-5 sm:mb-6 capitalize max-w-2xl w-full">
              Restaurant POS That Runs Your{' '}
              <span className="bg-gradient-to-r from-[#059669] via-[#007a55] to-[#0d9488] bg-clip-text text-transparent">
                Floor &amp; Billing Itself
              </span>
              .
            </h1>

            {/* Paragraph with Inter via @layer base */}
            <p className="mb-6 max-w-xl mx-auto lg:mx-0 w-full">
              One connected system for modern food businesses: interactive dining table layouts, paperless kitchen display tickets, split counter billing, online aggregator sync, and ZATCA / GST-ready invoicing.
            </p>

            {/* 4 Category Highlight Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 justify-center lg:justify-start max-w-xl w-full">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#059669] shrink-0" />
                <span>Live Floor Plan</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2563eb] shrink-0" />
                <span>Touch Billing &amp; Split</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#d97706] shrink-0" />
                <span>Kitchen Display (KDS)</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed] shrink-0" />
                <span>ZATCA &amp; GST Ready</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-5 sm:mb-6 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="pos-primary-btn-emerald w-full sm:w-auto"
              >
                <span>Book a Free Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2.5 w-4 shrink-0">
                  <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                type="button"
                onClick={onOpenBrochureModal}
                className="pos-secondary-btn-white w-full sm:w-auto"
              >
                <svg className="w-5 h-5 text-[#059669] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Brochure</span>
              </button>
            </div>

            {/* 3 Trust Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full self-stretch">
              <div className="w-full flex items-center text-left gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-md transition-all">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100/80 text-[#059669]">
                  <WifiOff size={22} className="text-[#059669]" />
                </div>
                <div className="leading-snug">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">Offline-First</span>
                  <span className="block text-xs sm:text-sm text-gray-500 font-medium">Zero-Drop Billing</span>
                </div>
              </div>

              <div className="w-full flex items-center text-left gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-md transition-all">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100/80 text-[#059669]">
                  <RefreshCw size={20} className="text-[#059669]" />
                </div>
                <div className="leading-snug">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">Real-Time</span>
                  <span className="block text-xs sm:text-sm text-gray-500 font-medium">Floor &amp; KDS Sync</span>
                </div>
              </div>

              <div className="w-full flex items-center text-left gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-md transition-all">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100/80 text-[#059669]">
                  <Headphones size={22} className="text-[#059669]" />
                </div>
                <div className="leading-snug">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">24/7 Support</span>
                  <span className="block text-xs sm:text-sm text-gray-500 font-medium">Peak Hour SLA</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div
              className="relative cursor-pointer group w-full max-w-[540px]"
              onClick={() => onOpenLightbox('/images/pos/feature-floor-tables.png', 'ISARVA Restaurant POS Live Floor Plan')}
            >
              <div className="absolute inset-4 bg-gradient-to-tr from-[#059669]/25 via-[#007a55]/20 to-teal-200/30 blur-3xl rounded-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-emerald-200/80 shadow-[0_24px_60px_rgba(5,150,105,0.22)] bg-slate-900">
                <img
                  src="/images/pos/feature-floor-tables.png"
                  alt="ISARVA Restaurant POS Live Floor Plan"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02] block"
                  onError={(e) => {
                    e.currentTarget.src = '/images/pos-card-preview.jpg';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/20">
                  <span className="px-4 py-2 rounded-xl bg-white/95 text-[#059669] text-xs font-bold shadow-lg border border-emerald-100 inline-flex items-center gap-1.5">
                    <ZoomIn size={14} />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
