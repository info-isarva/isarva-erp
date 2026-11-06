'use client';

import React from 'react';
import { ShieldCheck, Zap, Building2, ZoomIn, FileText, CheckCircle2 } from 'lucide-react';

export default function BillsoftHero({ onOpenDemoModal, onOpenBrochureModal, onOpenLightbox }) {
  return (
    <section id="overview" className="relative section-padding-sm overflow-hidden border-b border-gray-200 bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-white scroll-mt-20">
      {/* Radial Dot Grid Background with Royal Blue Accent */}
      <div
        className="absolute inset-0 opacity-[0.30] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#2563eb 0.75px, transparent 0.75px), radial-gradient(#2563eb 0.75px, #F8FAFC 0.75px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
        }}
      />
      {/* Ambient Radial Lighting Accents */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[300px] bg-[#2563eb]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-[#0284c7]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            
            {/* Live Indicator Eyebrow Tag */}
            <div className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 border border-blue-300/60 mb-6 shadow-2xs">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb]" />
              </span>
              <span className="section-eyebrow text-[#2563eb]">
                ⚡ Next-Gen GST Invoicing &amp; Multi-Branch ERP Platform
              </span>
            </div>

            {/* Headline with Space Grotesk via @layer base and blue gradient */}
            <h1 className="mb-5 sm:mb-6 capitalize max-w-2xl w-full">
              Empower Your Business With{' '}
              <span className="bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0284c7] bg-clip-text text-transparent">
                BillSoft Accounting Software
              </span>
              .
            </h1>

            {/* Paragraph with Inter via @layer base */}
            <p className="mb-6 max-w-xl mx-auto lg:mx-0 w-full">
              Transform billing, statutory GST/E-Invoicing, automated E-Way bills, multi-branch inventory, and AI financial reporting with our intuitive, fast, and feature-rich accounting solution designed for modern enterprises in India and Saudi Arabia.
            </p>

            {/* 4 Category Highlight Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 justify-center lg:justify-start max-w-xl w-full">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2563eb] shrink-0" />
                <span>E-Invoicing &amp; E-Way Bill</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#059669] shrink-0" />
                <span>Multi-Branch &amp; Stock Sync</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#d97706] shrink-0" />
                <span>Sub-Second POS Billing</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#7c3aed] shrink-0" />
                <span>ZATCA Phase 2 &amp; GST Ready</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-5 sm:mb-6 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="billsoft-primary-btn-blue w-full sm:w-auto"
              >
                <span>Request Live Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2.5 w-4 shrink-0">
                  <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                type="button"
                onClick={onOpenBrochureModal}
                className="billsoft-secondary-btn-white w-full sm:w-auto"
              >
                <svg className="w-5 h-5 text-[#2563eb] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Brochure</span>
              </button>
            </div>

            {/* 3 Trust Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full self-stretch">
              <div className="w-full flex items-center text-left gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100/80 text-[#2563eb]">
                  <ShieldCheck size={22} className="text-[#2563eb]" />
                </div>
                <div className="leading-snug">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">100% Compliant</span>
                  <span className="block text-xs sm:text-sm text-gray-500 font-medium">GST, IRN &amp; ZATCA</span>
                </div>
              </div>

              <div className="w-full flex items-center text-left gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100/80 text-[#2563eb]">
                  <Zap size={20} className="text-[#2563eb]" />
                </div>
                <div className="leading-snug">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">Sub-Second</span>
                  <span className="block text-xs sm:text-sm text-gray-500 font-medium">10,000+ Invoices/Day</span>
                </div>
              </div>

              <div className="w-full flex items-center text-left gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100/80 text-[#2563eb]">
                  <Building2 size={22} className="text-[#2563eb]" />
                </div>
                <div className="leading-snug">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">Multi-Branch</span>
                  <span className="block text-xs sm:text-sm text-gray-500 font-medium">Consolidated Ledgers</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div
              className="relative cursor-pointer group w-full max-w-[560px]"
              onClick={() => onOpenLightbox('/images/billsoft/dashboard.png', 'BillSoft AI Business Dashboard & Financial Analytics')}
            >
              <div className="absolute inset-4 bg-gradient-to-tr from-[#2563eb]/25 via-[#1d4ed8]/20 to-sky-200/30 blur-3xl rounded-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-blue-200/80 shadow-[0_24px_60px_rgba(37,99,235,0.22)] bg-slate-900">
                <img
                  src="/images/billsoft/dashboard.png"
                  alt="BillSoft ERP Dashboard"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Overlay Zoom Pill */}
                <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                  <ZoomIn size={14} className="text-blue-400" />
                  <span>Click to Expand</span>
                </div>

                {/* Floating Real-Time Status Badges */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-blue-200 rounded-xl px-3 py-2 shadow-lg hidden sm:flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb]">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-slate-900">IRN Generated</span>
                    <span className="block text-xs text-emerald-600 font-semibold">QR Validated &bull; Signed</span>
                  </div>
                </div>

                <div className="absolute bottom-16 left-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl px-3 py-2 shadow-lg hidden sm:flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                    <FileText size={18} />
                  </div>
                  <div className="text-left">
                    <span className="block text-xs font-bold text-slate-900">E-Way Bill #29104</span>
                    <span className="block text-xs text-slate-500 font-medium">Valid Transit Active</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
