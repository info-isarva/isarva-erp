'use client';

import React, { useState } from 'react';
import {
  Check,
  X,
  AlertCircle,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
} from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'Implementation Timeline',
    category: 'Speed to Value',
    fragmented: '6–12 months of trial-and-error patchwork',
    legacy: '9–24 months with costly consulting firms',
    isarva: '2–4 weeks rapid turnkey cutover',
    isarvaHighlight: true,
  },
  {
    feature: 'Regional Statutory Compliance',
    category: 'Regulatory',
    fragmented: 'Manual CSV uploads, Excel macros & broken portal bridges',
    legacy: 'Expensive 3rd-party bolt-on plugins ($$$)',
    isarva: 'Native built-in GST & ZATCA Phase 2 clearance engine',
    isarvaHighlight: true,
  },
  {
    feature: 'Total Cost of Ownership (3-Yr)',
    category: 'Cost & ROI',
    fragmented: 'High hidden costs across 8+ recurring SaaS subscriptions',
    legacy: 'Exorbitant initial Capex + 20-22% annual maintenance fees',
    isarva: '60% lower TCO with predictable, transparent tiers',
    isarvaHighlight: true,
  },
  {
    feature: 'Staff Adoption & Learning Curve',
    category: 'Usability',
    fragmented: 'Fragmented across 5 separate incompatible apps',
    legacy: 'Steep; requires weeks of expensive employee certification',
    isarva: 'Clean, modern human UI mastered by staff in 2 days',
    isarvaHighlight: true,
  },
  {
    feature: 'Real-Time Inter-Branch Sync',
    category: 'Data Architecture',
    fragmented: 'Nightly batch syncs, stock clashes & manual reconciliation',
    legacy: 'Requires heavy server clustering and dedicated DBAs',
    isarva: 'Sub-second real-time event-driven inventory & accounting',
    isarvaHighlight: true,
  },
  {
    feature: 'User Headcount Scalability',
    category: 'Licensing',
    fragmented: 'Chaotic seat licensing across separate software vendors',
    legacy: 'Punitive per-seat monthly penalties that stifle business growth',
    isarva: 'Unlimited user expansion with zero seat penalties',
    isarvaHighlight: true,
  },
  {
    feature: 'Dedicated Support & Partnership',
    category: 'Support',
    fragmented: 'Vendors point fingers at each other when data breaks',
    legacy: 'Multi-tiered ticket queues with 48–72 hour response SLAs',
    isarva: 'Dedicated named implementation lead & < 15-min emergency SLA',
    isarvaHighlight: true,
  },
  {
    feature: 'Cloud & Mobile Accessibility',
    category: 'Infrastructure',
    fragmented: 'Requires clunky on-premise RDP or VPN tunnels',
    legacy: 'Complex gateway setup, separate expensive mobile modules',
    isarva: '100% cloud-native with secure tablet, mobile & desktop access',
    isarvaHighlight: true,
  },
];

export default function ErpComparisonTable({ onOpenModal }) {
  const [mobileFilter, setMobileFilter] = useState('all');

  return (
    <section id="erp-comparison" className="section-padding bg-gradient-to-b from-white via-[#f0f9f4] to-[#edf7f2] border-b border-emerald-200/70 relative overflow-hidden">
      {/* Soft atmospheric glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-200/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-teal-200/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Blueprint grid dots */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#007a55 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 mb-3">
            <span className="section-eyebrow">
              ARCHITECTURAL COMPARISON
            </span>
          </div>

          <h2>
            How ISARVA Compares to the{' '}
            <span className="text-[#007a55]">Alternatives</span>
          </h2>

          <p className="mt-4">
            Compare the real operational realities of fragmented spreadsheets, monolithic legacy ERP suites,
            and ISARVA’s modern integrated architecture.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Full Side-by-Side Comparison Matrix (>= lg / 1024px)         */}
        {/* ========================================================================= */}
        <div className="hidden lg:block rounded-2xl bg-white border border-emerald-200/80 shadow-xl overflow-hidden card-shadow-emerald">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70">
                  <th scope="col" className="p-4 lg:p-5 xl:p-6 text-xs sm:text-sm font-bold text-slate-700 w-[24%]">
                    Operational Capability
                  </th>
                  <th scope="col" className="p-4 lg:p-5 xl:p-6 text-xs sm:text-sm font-semibold text-slate-500 w-[24%]">
                    Fragmented Apps &amp; Excel
                  </th>
                  <th scope="col" className="p-4 lg:p-5 xl:p-6 text-xs sm:text-sm font-semibold text-slate-500 w-[24%]">
                    Legacy Tier-1 ERPs (SAP/Oracle)
                  </th>
                  <th
                    scope="col"
                    className="p-4 lg:p-5 xl:p-6 text-xs sm:text-sm font-bold text-white bg-[#007a55] w-[28%] relative"
                  >
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-1.5">
                      <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <Sparkles className="w-4 h-4 text-emerald-300" />
                        ISARVA ERP
                      </span>
                      <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/20 text-white tracking-wider whitespace-nowrap self-start xl:self-auto">
                        Recommended
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    {/* Dimension / Capability */}
                    <td className="p-4 lg:p-5 xl:p-6 font-bold text-slate-900 bg-white">
                      <div>{row.feature}</div>
                      <div className="text-xs font-normal text-slate-400 mt-0.5">
                        {row.category}
                      </div>
                    </td>

                    {/* Fragmented Apps */}
                    <td className="p-4 lg:p-5 xl:p-6 text-slate-600 bg-slate-50/40">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.fragmented}</span>
                      </div>
                    </td>

                    {/* Legacy Monolithic ERPs */}
                    <td className="p-4 lg:p-5 xl:p-6 text-slate-600 bg-slate-50/40">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.legacy}</span>
                      </div>
                    </td>

                    {/* ISARVA ERP */}
                    <td className="p-4 lg:p-5 xl:p-6 font-semibold text-slate-900 bg-emerald-50/30 border-l border-r border-[#007a55]/20">
                      <div className="flex items-start gap-2 text-emerald-950">
                        <Check className="w-4 h-4 text-[#007a55] shrink-0 mt-0.5 font-bold" />
                        <span className="font-semibold leading-relaxed">{row.isarva}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Desktop Table Footnote CTA */}
          <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 text-center sm:text-left">
              Want a detailed TCO comparison modeled on your current software licenses and headcount?
            </div>
            <button
              type="button"
              onClick={() => onOpenModal?.('demo', 'Why Choose Us Comparison Table')}
              className="px-5 py-2.5 rounded-xl bg-[#007a55] hover:bg-[#006546] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#007a55]/25 hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Request Custom TCO Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE & MOBILE VIEW: Touch-Friendly Comparison Feed (< lg / 1024px)   */}
        {/* Zero horizontal overflow, adaptive 2-col on tablet, 1-col on mobile       */}
        {/* ========================================================================= */}
        <div className="block lg:hidden space-y-6">
          {/* Quick Perspective Filter Tabs */}
          <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm p-1.5 rounded-2xl border border-emerald-200/80 shadow-sm flex items-center gap-1">
            <button
              type="button"
              onClick={() => setMobileFilter('all')}
              className={`flex-1 py-2 px-1 text-center text-xs font-bold rounded-xl transition-all cursor-pointer ${
                mobileFilter === 'all'
                  ? 'bg-[#007a55] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Breakdown
            </button>
            <button
              type="button"
              onClick={() => setMobileFilter('fragmented')}
              className={`flex-1 py-2 px-1 text-center text-xs font-bold rounded-xl transition-all cursor-pointer ${
                mobileFilter === 'fragmented'
                  ? 'bg-[#007a55] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              vs. Spreadsheets
            </button>
            <button
              type="button"
              onClick={() => setMobileFilter('legacy')}
              className={`flex-1 py-2 px-1 text-center text-xs font-bold rounded-xl transition-all cursor-pointer ${
                mobileFilter === 'legacy'
                  ? 'bg-[#007a55] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              vs. Legacy ERPs
            </button>
          </div>

          {/* Cards Grid: 1 Column on Mobile (< md), 2 Columns on Tablet / Narrow Screen (md to lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-emerald-200/80 p-5 sm:p-6 shadow-sm card-shadow-emerald flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Header: Category & Step Index */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#007a55] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                      {row.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      0{idx + 1} / 0{COMPARISON_ROWS.length}
                    </span>
                  </div>

                  {/* Capability Name */}
                  <div className="mb-4">
                    <h3>{row.feature}</h3>
                  </div>

                  {/* ISARVA ERP Winner Block (Prominent Emerald Card) */}
                  <div className="rounded-xl bg-gradient-to-br from-emerald-50 via-[#f0f9f4] to-emerald-100/50 border border-[#007a55]/30 p-4 mb-3.5 relative overflow-hidden">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#007a55]">
                        <Sparkles className="w-3.5 h-3.5 text-[#007a55]" />
                        <span>ISARVA ERP</span>
                      </div>
                      <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#007a55] text-white tracking-wider">
                        Recommended
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#007a55] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-[#007a55]/30">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-900 leading-snug">
                        {row.isarva}
                      </span>
                    </div>
                  </div>

                  {/* Alternatives Comparison (Stacked for easy reading) */}
                  <div className="space-y-2.5 pt-0.5">
                    {/* Fragmented Apps & Excel */}
                    {(mobileFilter === 'all' || mobileFilter === 'fragmented') && (
                      <div className="rounded-xl bg-slate-50/90 border border-slate-200/80 p-3.5">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          Fragmented Apps &amp; Excel
                        </div>
                        <div className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="text-xs text-slate-600 leading-relaxed">
                            {row.fragmented}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Legacy Tier-1 ERPs */}
                    {(mobileFilter === 'all' || mobileFilter === 'legacy') && (
                      <div className="rounded-xl bg-slate-50/90 border border-slate-200/80 p-3.5">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          Legacy Tier-1 ERPs (SAP / Oracle)
                        </div>
                        <div className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                            <AlertCircle className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span className="text-xs text-slate-600 leading-relaxed">
                            {row.legacy}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Bottom Footnote CTA */}
          <div className="rounded-2xl bg-white border border-emerald-200/80 p-6 shadow-sm card-shadow-emerald text-center space-y-3 mt-6">
            <div className="text-xs text-slate-600">
              Want a detailed TCO comparison modeled on your current software licenses and headcount?
            </div>
            <button
              type="button"
              onClick={() => onOpenModal?.('demo', 'Why Choose Us Comparison Table Mobile')}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#007a55] hover:bg-[#006546] text-white font-bold text-sm shadow-md shadow-[#007a55]/25 hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Custom TCO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
