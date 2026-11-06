'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Sparkles,
  Activity,
} from 'lucide-react';
import FlagIcon from '../FlagIcon';

export default function WhyUsHero({ onOpenModal }) {
  const scrollToComparison = (e) => {
    e.preventDefault();
    const elem = document.getElementById('erp-comparison');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e8f6f0] via-[#f1faf5] to-white section-padding-sm border-b border-emerald-200/70">
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-teal-200/30 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #007a55 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#007a55]">
              <span className="w-2 h-2 rounded-full bg-[#007a55] animate-pulse" />
              <span className="section-eyebrow text-[#007a55] tracking-wider">
                WHY CHOOSE ISARVA ERP
              </span>
            </div>

            {/* Space Grotesk h1 - uses global base styling */}
            <h1>
              Engineered for Modern Enterprises That{' '}
              <span className="text-[#007a55]">
                Refuse to Settle
              </span>
            </h1>

            {/* Standard Paragraph */}
            <p className="max-w-2xl mx-auto lg:mx-0">
              Tired of fragmented SaaS tools, rigid legacy ERP architectures, and exorbitant per-user pricing?
              ISARVA ERP unites operational intelligence, real-time inventory, human capital, and statutory compliance
              across India and Saudi Arabia into a single, cohesive business core.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onOpenModal?.('demo', 'Why Choose ISARVA')}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-[#007a55] hover:bg-[#006546] shadow-lg shadow-[#007a55]/25 hover:shadow-xl hover:shadow-[#007a55]/35 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base cursor-pointer"
              >
                <span>Book a 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={scrollToComparison}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-emerald-300 transition-all duration-200 text-sm sm:text-base shadow-xs cursor-pointer"
              >
                <span>Compare with Legacy ERPs</span>
              </button>
            </div>

            {/* Value Checkpoints Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-emerald-100 w-full">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-700 whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-[#007a55] shrink-0" />
                <span>Zero Per-User Penalty</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-700 whitespace-nowrap">
                <ShieldCheck className="w-4 h-4 text-[#007a55] shrink-0" />
                <span>GST &amp; ZATCA Phase 2</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-700 whitespace-nowrap">
                <Zap className="w-4 h-4 text-[#007a55] shrink-0" />
                <span>2-4 Weeks Rapid Go-Live</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Isometric Visual & Floating Indicators */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-300/40 via-teal-200/30 to-transparent blur-xl opacity-75" />

              {/* Main Visual Card Container */}
              <div className="relative rounded-2xl bg-white border border-emerald-200/80 p-2 sm:p-3 shadow-2xl card-shadow-emerald overflow-hidden group">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/why-us/hero-core-hub.jpg"
                    alt="ISARVA ERP Unified Business Operations Core Hub"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Vignette Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badge: Dual Statutory Clearance */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-emerald-200/80 shadow-lg backdrop-blur-md">
                  <div className="flex items-center -space-x-1">
                    <FlagIcon country="IN" className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-xs shadow-xs" />
                    <FlagIcon country="SA" className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-xs shadow-xs" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800">
                    Dual Statutory Engine
                  </span>
                </div>

                {/* Floating Badge: Live Telemetry */}
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/95 border border-slate-200/80 shadow-lg backdrop-blur-md">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#007a55] flex items-center justify-center border border-emerald-200/60">
                    <Activity className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                      System Status
                    </div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      99.98% Cloud Uptime SLA
                    </div>
                  </div>
                </div>

                {/* Floating Pill: Unified Core */}
                <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-[#007a55]">
                  <Sparkles className="w-3.5 h-3.5 text-[#007a55]" />
                  <span>Real-Time Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
