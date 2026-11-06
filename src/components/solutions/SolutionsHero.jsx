'use client';

import React from 'react';
import { Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { renderTitleWithGradient } from '../../lib/render-title';

const SOLUTION_TABS = [
  { id: 'all', label: 'All Solutions' },
  { id: 'pos', label: 'Restaurant POS' },
  { id: 'billsoft', label: 'BillSoft Accounting' },
  { id: 'hrms', label: 'HRMS & Payroll' },
  { id: 'crm', label: 'CRM & Sales' },
];

export default function SolutionsHero({ activeTab, onTabChange }) {
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
        <div className="section-header text-center max-w-4xl mx-auto">
          <div className="section-eyebrow">
            COMPLETE BUSINESS SUITE
          </div>

          <h1 className="mb-4">
            {renderTitleWithGradient('Unified Enterprise Solutions for Modern Commerce')}
          </h1>

          <p className="max-w-2xl mx-auto">
            From point-of-sale and GST-compliant accounting to multi-branch HRMS and automated customer pipelines — discover how ISARVA ERP connects every corner of your business with zero duplicate entries.
          </p>

          {/* Value Badges */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-2xs text-slate-700 font-medium">
              <Layers size={14} className="text-[#007a55]" />
              Modular &amp; Interconnected
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-2xs text-slate-700 font-medium">
              <ShieldCheck size={14} className="text-[#007a55]" />
              Native GST &amp; ZATCA Compliance
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-2xs text-slate-700 font-medium">
              <Zap size={14} className="text-[#007a55]" />
              Real-Time Cloud Synchronization
            </span>
          </div>

          {/* Interactive Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {SOLUTION_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onTabChange(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${isActive
                    ? 'bg-[#007a55] text-white shadow-md shadow-emerald-800/20 scale-105'
                    : 'bg-white/90 text-slate-700 hover:bg-emerald-50 hover:text-[#007a55] border border-slate-200/80 shadow-2xs'
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
