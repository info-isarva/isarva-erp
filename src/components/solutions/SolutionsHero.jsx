'use client';

import React from 'react';
import { Layers, ShieldCheck, Zap } from 'lucide-react';
import { renderTitleWithGradient } from '../../lib/render-title';

export default function SolutionsHero() {
  return (
    <section className="relative section-padding-sm bg-gradient-to-b from-[#f0f8f4] via-[#e7f4ee] to-[#f4faf6] border-b border-[#d3eade]/70 overflow-hidden">
      {/* Soft atmospheric glow orbs */}
      <div className="absolute -top-32 left-1/4 w-[550px] h-[550px] bg-emerald-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Blueprint grid dots */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#007a55 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="section-header text-center max-w-4xl mx-auto !mb-0">
          <div data-aos="fade-down" data-aos-duration="600" className="section-eyebrow">
            COMPLETE BUSINESS SUITE
          </div>

          <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="700" className="mb-4">
            {renderTitleWithGradient('Unified Enterprise Solutions for Modern Commerce')}
          </h1>

          <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="700" className="max-w-2xl mx-auto">
            From point-of-sale and GST-compliant accounting to multi-branch HRMS and automated customer pipelines — discover how ISARVA ERP connects every corner of your business with zero duplicate entries.
          </p>

          {/* Value Badges */}
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="700" className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span data-aos="zoom-in" data-aos-delay="350" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-2xs text-slate-700 font-medium">
              <Layers size={14} className="text-[#007a55]" />
              Modular &amp; Interconnected
            </span>
            <span data-aos="zoom-in" data-aos-delay="420" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-2xs text-slate-700 font-medium">
              <ShieldCheck size={14} className="text-[#007a55]" />
              Native GST &amp; ZATCA Compliance
            </span>
            <span data-aos="zoom-in" data-aos-delay="490" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-2xs text-slate-700 font-medium">
              <Zap size={14} className="text-[#007a55]" />
              Real-Time Cloud Synchronization
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
