'use client';

import React from 'react';
import { ShieldCheck, RefreshCw, Headphones, ZoomIn } from 'lucide-react';

export default function HrmsHero({ onOpenDemoModal, onOpenBrochureModal, onOpenLightbox }) {
  return (
    <section id="overview" className="relative section-padding-sm overflow-hidden border-b border-gray-200 bg-gradient-to-b from-[#FAF5FF] via-[#FDFBFF] to-white scroll-mt-20">
      {/* Exact Radial Dot Grid Background with Purple Tint */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#7c3aed 0.75px, transparent 0.75px), radial-gradient(#7c3aed 0.75px, #FDFBFF 0.75px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
        }}
      />
      {/* Ambient Radial Lighting Accents */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[300px] bg-[#7c3aed]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[400px] h-[300px] bg-[#6d28d9]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">

          {/* Left Hero Column */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full">

            {/* Live Indicator Eyebrow Tag with AOS Fade-Down */}
            <div
              data-aos="fade-down"
              data-aos-duration="600"
              className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-emerald-500/10 border border-purple-300/60 text-[#7c3aed] font-bold text-xs sm:text-sm mb-6 shadow-2xs"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7c3aed] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7c3aed]" />
              </span>
              <span className="section-eyebrow text-[#7c3aed]">
                ⚡ Unified Workforce &amp; Automated Payroll Platform
              </span>
            </div>

            {/* Headline with Space Grotesk via @layer base and exact gradient */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
              className="mb-5 sm:mb-6 capitalize max-w-2xl w-full"
            >
              HRMS &amp; Payroll That Runs Your{' '}
              <span className="bg-gradient-to-r from-[#7c3aed] via-[#6366F1] to-[#059669] bg-clip-text text-transparent">
                People Operations Itself
              </span>
              .
            </h1>

            {/* Paragraph with Inter via @layer base */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
              className="mb-6 max-w-xl mx-auto lg:mx-0 w-full"
            >
              Manage your workforce from hiring to payroll, attendance, and leave. Automate statutory PF, ESI, TDS, and WPS calculations, biometric &amp; GPS attendance, and employee self-service—all in one unified cloud system.
            </p>

            {/* 4 Category Highlight Pills with AOS Stagger & Hover Micro-lift */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="700"
              className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 justify-center lg:justify-start max-w-xl w-full"
            >
              <span
                data-aos="zoom-in"
                data-aos-delay="350"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs sm:text-sm font-semibold shadow-2xs hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-[#7c3aed] shrink-0" />
                <span>Employee Directory</span>
              </span>
              <span
                data-aos="zoom-in"
                data-aos-delay="400"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs sm:text-sm font-semibold shadow-2xs hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-[#6366F1] shrink-0" />
                <span>Biometric &amp; GPS</span>
              </span>
              <span
                data-aos="zoom-in"
                data-aos-delay="450"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-semibold shadow-2xs hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-[#059669] shrink-0" />
                <span>1-Click Statutory Payroll</span>
              </span>
              <span
                data-aos="zoom-in"
                data-aos-delay="500"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs sm:text-sm font-semibold shadow-2xs hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-default"
              >
                <span className="w-2 h-2 rounded-full bg-[#D97706] shrink-0" />
                <span>Self-Service (ESS)</span>
              </span>
            </div>

            {/* Action Buttons with AOS Fade-Up */}
            <div
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="700"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-5 sm:mb-6 w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="hrms-primary-btn-purple w-full sm:w-auto hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Book a Free Demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2.5 w-4 shrink-0">
                  <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                type="button"
                onClick={onOpenBrochureModal}
                className="hrms-secondary-btn-white w-full sm:w-auto hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-5 h-5 text-[#7c3aed] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Brochure</span>
              </button>
            </div>

            {/* 3 Trust Cards with Individual Staggered AOS Fade-Up & Interactive Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full self-stretch">
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="600"
                className="w-full flex items-center text-left gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)] hover:border-purple-300 hover:shadow-[0_12px_28px_rgba(124,58,237,0.14)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100/80 text-[#7c3aed] group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck size={22} className="text-[#7c3aed]" />
                </div>
                <div className="leading-snug">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">256-Bit SSL</span>
                  <span className="block text-xs sm:text-sm text-gray-500 font-medium">Encrypted Payroll</span>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
                className="w-full flex items-center text-left gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)] hover:border-purple-300 hover:shadow-[0_12px_28px_rgba(124,58,237,0.14)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100/80 text-[#7c3aed] group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw size={20} className="text-[#7c3aed]" />
                </div>
                <div className="leading-snug">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">Statutory Ready</span>
                  <span className="block text-xs sm:text-sm text-gray-500 font-medium">PF, ESI &amp; WPS</span>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="600"
                className="w-full flex items-center text-left gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)] hover:border-purple-300 hover:shadow-[0_12px_28px_rgba(124,58,237,0.14)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100/80 text-[#7c3aed] group-hover:scale-110 transition-transform duration-300">
                  <Headphones size={22} className="text-[#7c3aed]" />
                </div>
                <div className="leading-snug">
                  <span className="block text-sm sm:text-base font-bold text-gray-900">24/7 Support</span>
                  <span className="block text-xs sm:text-sm text-gray-500 font-medium">Dedicated HR Team</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column Graphic with AOS Fade-Left, Ambient Glow & Hover */}
          <div
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            className="lg:col-span-6 xl:col-span-6 flex items-center justify-center w-full"
          >
            <div
              className="relative cursor-pointer group w-full max-w-[680px] xl:max-w-[760px] 2xl:max-w-[820px] animate-hrms-float"
              onClick={() => onOpenLightbox('/images/hrms/HRMS-dashboard-v3.png', 'ISARVA HRMS Live Workforce & Payroll Dashboard')}
            >
              <div className="absolute inset-4 bg-gradient-to-tr from-[#7c3aed]/25 via-[#6366F1]/20 to-purple-200/30 blur-3xl rounded-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity animate-hrms-pulse-glow" />
              <div className="relative">
                <img
                  src="/images/hrms/HRMS-dashboard-v3.png"
                  alt="ISARVA HRMS Live Workforce & Payroll Dashboard"
                  className="w-full h-auto object-contain drop-shadow-[0_24px_60px_rgba(124,58,237,0.22)] transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = '/images/hero-hrms.jpg';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="px-4 py-2 rounded-xl bg-white/95 text-[#7c3aed] text-xs font-bold shadow-lg border border-purple-100 inline-flex items-center gap-1.5">
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
