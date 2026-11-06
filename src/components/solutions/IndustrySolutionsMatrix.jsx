'use client';

import React from 'react';
import Link from 'next/link';
import {
  UtensilsCrossed,
  ShoppingBag,
  Truck,
  Factory,
  Stethoscope,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const INDUSTRIES_DATA = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Hospitality',
    badge: 'F&B Specialized',
    description:
      'Manage dining tables, kitchen KOT displays, home delivery aggregation, and recipe costing in one ultra-fast interface.',
    accent: '#007a55',
    bullets: ['Table floor map & split billing', 'Swiggy & Zomato order sync', 'Automated recipe raw stock deduction'],
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Supermarkets',
    badge: 'High-Volume Billing',
    description:
      'High-speed barcode scanning, loyalty point redemptions, expiry tracking, and centralized multi-store price management.',
    accent: '#2563eb',
    bullets: ['POS barcode checkout in < 2 secs', 'Real-time multi-branch inventory', 'Promotional discounts & vouchers'],
  },
  {
    icon: Truck,
    title: 'Wholesale & Distribution',
    badge: 'B2B Logistics',
    description:
      'Manage bulk wholesale orders, route dispatch gate passes, batch tracking, automated GST E-Way bills, and credit limits.',
    accent: '#0d9488',
    bullets: ['Automated GST E-Way bill generation', 'Batch & expiry date tracking', 'Sales rep route & collection app'],
  },
  {
    icon: Factory,
    title: 'Manufacturing & Assembly',
    badge: 'Production Core',
    description:
      'Comprehensive Bill of Materials (BOM), multi-stage work orders, machine maintenance scheduling, and shift attendance.',
    accent: '#ea580c',
    bullets: ['Multi-level Bill of Materials (BOM)', 'Job work & vendor contractor ledgers', 'Raw material wastage analysis'],
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & Pharmacies',
    badge: 'Statutory Care',
    description:
      'Schedule patient consultations, automate prescription billing, monitor drug batch expiry, and manage staff shift rosters.',
    accent: '#7c3aed',
    bullets: ['Drug batch & expiry compliance', 'Doctor consultation scheduling', 'Departmental expense tracking'],
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    badge: 'Project Operations',
    description:
      'Milestone project invoicing, billable hour tracking, client CRM pipeline, and biometric statutory employee payroll.',
    accent: '#4f46e5',
    bullets: ['Project milestone billing', 'Sales pipeline & deal closing', 'Automated salary & TDS slips'],
  },
];

export default function IndustrySolutionsMatrix({ onOpenModal }) {
  return (
    <section className="section-padding bg-[#f8faf9] border-t border-slate-200/70 relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="section-eyebrow">BY INDUSTRY</div>
          <h2>
            <span>Engineered for Your Specific Industry Requirements</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Every business model has unique workflows. Discover pre-configured templates, statutory tax workflows, and specialized feature sets tailored to your sector.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {INDUSTRIES_DATA.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="card-ecosystem rounded-2xl p-6 bg-white border border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.16),0_4px_14px_-2px_rgba(0,122,85,0.08)] hover:border-[#007a55]/60 hover:shadow-[0_24px_50px_-4px_rgba(0,122,85,0.28)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-2xs"
                      style={{ background: `${ind.accent}15`, color: ind.accent }}
                    >
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="mb-2">
                    <span>{ind.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed mb-5 text-slate-600">
                    {ind.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 mb-5">
                    {ind.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={13} className="shrink-0 mt-0.5 text-[#007a55]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenModal?.('demo', ind.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007a55] hover:text-[#005a3e] group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>Request Industry Demo</span>
                    <ArrowRight size={13} />
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">
                    Pre-Configured
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
