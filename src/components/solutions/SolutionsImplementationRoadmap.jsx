'use client';

import React from 'react';
import {
  Search,
  Server,
  GraduationCap,
  Rocket,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

const ROADMAP_STEPS = [
  {
    step: 'Phase 01',
    duration: 'Days 1 – 3',
    title: 'Discovery & Workflow Audit',
    description:
      'Our solutions consultants evaluate your current billing hardware, chart of accounts, branch structures, and tax requirements to configure your master instance.',
    icon: Search,
    color: '#007a55',
    deliverables: ['Custom module blueprint', 'Tax rate & statutory matrix', 'Hardware compatibility check'],
  },
  {
    step: 'Phase 02',
    duration: 'Days 4 – 8',
    title: 'Cloud Setup & Data Migration',
    description:
      'We migrate legacy customer databases, item catalogs, batch details, opening balances, and employee records with zero data loss or downtime.',
    icon: Server,
    color: '#2563eb',
    deliverables: ['Secure cloud provisioning', 'Catalog & balance import', 'Branch hierarchy setup'],
  },
  {
    step: 'Phase 03',
    duration: 'Days 9 – 14',
    title: 'Staff Training & Dry Runs',
    description:
      'Hands-on interactive training sessions for your cashiers, accountants, store managers, and HR team in a secure sandbox simulation environment.',
    icon: GraduationCap,
    color: '#7c3aed',
    deliverables: ['Role-based staff training', 'Simulated invoice & KOT runs', 'Manager approval workflows'],
  },
  {
    step: 'Phase 04',
    duration: 'Week 3 – 4',
    title: 'Go-Live & Dedicated Support',
    description:
      'Seamless official cutover to production with on-site/remote standby support and direct access to your dedicated technical account manager.',
    icon: Rocket,
    color: '#ea580c',
    deliverables: ['Live system cutover', 'Real-time billing monitoring', '24/7 SLA helpline access'],
  },
];

export default function SolutionsImplementationRoadmap() {
  return (
    <section className="section-padding bg-white relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="section-eyebrow">FAST ONBOARDING</div>
          <h2>
            <span>Rapid 2 to 4 Week Implementation Lifecycle</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Traditional monolithic ERPs take 9 to 18 months to deploy. ISARVA is pre-configured for modern commerce, getting your branches operational in weeks, not years.
          </p>
        </div>

        {/* 4 Phases Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="card-ecosystem rounded-2xl p-6 bg-white border border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.16),0_4px_14px_-2px_rgba(0,122,85,0.08)] hover:border-[#007a55]/60 hover:shadow-[0_24px_50px_-4px_rgba(0,122,85,0.28)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="text-xs font-mono font-bold px-2.5 py-1 rounded-md"
                      style={{ background: `${step.color}15`, color: step.color }}
                    >
                      {step.step}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-slate-500">
                      <Calendar size={12} />
                      {step.duration}
                    </span>
                  </div>

                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-inner"
                    style={{ background: `${step.color}15`, color: step.color }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="mb-2">
                    <span>{step.title}</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Key Outcomes:
                  </div>
                  {step.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 size={13} className="shrink-0 mt-0.5 text-[#007a55]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
