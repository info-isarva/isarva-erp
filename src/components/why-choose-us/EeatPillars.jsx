'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  PiggyBank,
  Rocket,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const PILLARS = [
  {
    icon: ShieldCheck,
    index: '01',
    shortLabel: 'Assurance',
    tag: 'Institutional Assurance',
    title: 'Statutory Compliance Guarantee',
    description:
      'We stand behind our regulatory engine. Whenever Central Board of Indirect Taxes and Customs (CBIC) in India or Zakat, Tax and Customs Authority (ZATCA) in Saudi Arabia publishes gazetted amendments, your system updates automatically without expensive third-party consulting fees.',
    highlights: [
      '100% cryptographic QR & XML hash validation',
      'Automated reconciliation against portal returns',
      'Zero penalty record across all active clients',
    ],
    accentColor: '#007a55',
    accentBg: 'rgba(0, 122, 85, 0.08)',
    badgeClass: 'bg-emerald-50 text-[#007a55] border-emerald-200/80',
    shadowClass: 'card-shadow-emerald border-emerald-200/90',
  },
  {
    icon: Lock,
    index: '02',
    shortLabel: 'Security',
    tag: 'Cybersecurity & Governance',
    title: 'Bank-Grade Security & Data Sovereignty',
    description:
      'Your financial records and customer telemetry are shielded by state-of-the-art cryptographic safeguards. We enforce AES-256 encryption at rest, TLS 1.3 encryption in transit, strict role-based access control (RBAC), and localized sovereign data residency.',
    highlights: [
      'ISO 27001 certified data center infrastructure',
      'Multi-factor authentication (MFA) & IP whitelisting',
      'Immutable audit trails for every debit, credit & edit',
    ],
    accentColor: '#0284c7',
    accentBg: 'rgba(2, 132, 199, 0.08)',
    badgeClass: 'bg-sky-50 text-sky-700 border-sky-200/80',
    shadowClass: 'card-shadow-blue border-sky-200/90',
  },
  {
    icon: PiggyBank,
    index: '03',
    shortLabel: 'Pricing',
    tag: 'Financial Impact',
    title: 'Transparent Pricing & 60% Lower TCO',
    description:
      'Legacy ERP vendors lure you in with discounted upfront licenses, then drain your cash-flow through expensive implementation partners, mandatory customization retainers, and punishing per-user add-on licenses. ISARVA offers predictable, all-inclusive pricing with rapid payback.',
    highlights: [
      'Zero punitive per-seat user tax penalties',
      'Included quarterly product & regulatory updates',
      'Proven 60% lower 3-year Total Cost of Ownership',
    ],
    accentColor: '#7c3aed',
    accentBg: 'rgba(124, 58, 237, 0.08)',
    badgeClass: 'bg-purple-50 text-purple-700 border-purple-200/80',
    shadowClass: 'card-shadow-purple border-purple-200/90',
  },
  {
    icon: Rocket,
    index: '04',
    shortLabel: 'Rollout',
    tag: 'Implementation SLA',
    title: '4-Week Rapid Deployment Playbook',
    description:
      'While legacy ERP vendors measure implementation in quarters or years, our battle-tested implementation framework gets your core business operational in 2 to 4 weeks with parallel run verification, master data sanitization, and staff training.',
    highlights: [
      'Automated migration pipelines for Tally & Excel',
      'Phased department rollouts with zero revenue halt',
      'Certified staff training and post-go-live hypercare',
    ],
    accentColor: '#d97706',
    accentBg: 'rgba(217, 119, 6, 0.08)',
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-200/80',
    shadowClass: 'card-shadow-orange border-amber-200/90',
  },
];

export default function EeatPillars() {
  const [activePillar, setActivePillar] = useState(0);

  const current = PILLARS[activePillar];
  const CurrentIcon = current.icon;

  const handlePrev = () => {
    setActivePillar((prev) => (prev === 0 ? PILLARS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePillar((prev) => (prev === PILLARS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-padding bg-gradient-to-b from-[#edf7f2] via-[#f7fbf9] to-white border-b border-emerald-200/70 relative overflow-hidden">
      {/* Soft atmospheric ambient glow */}
      <div
        className="absolute -top-32 left-1/4 rounded-full blur-3xl pointer-events-none bg-emerald-200/30"
        style={{ width: 550, height: 550 }}
      />
      <div
        className="absolute bottom-10 right-10 rounded-full blur-3xl pointer-events-none bg-teal-200/25"
        style={{ width: 500, height: 500 }}
      />

      {/* Subtle blueprint grid dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage: 'radial-gradient(#007a55 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="600" className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 mb-3">
            <span className="section-eyebrow">
              TRUST, GOVERNANCE &amp; INTEGRITY
            </span>
          </div>

          <h2>
            Four Institutional Pillars You Can{' '}
            <span className="text-[#007a55]">Rely On</span>
          </h2>

          <p className="mt-4">
            Selecting an ERP is not just a software purchase; it is the operational nervous system of your company.
            Here is our foundational commitment to your data, your legal compliance, and your bottom line.
          </p>
        </div>

        {/* 1A. MOBILE COMPACT SEGMENTED BAR (Screens < 640px down to 320px) */}
        <div className="grid grid-cols-4 gap-1 p-1 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs sm:hidden mb-4">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePillar(idx)}
                aria-label={`Select Pillar ${pillar.index}`}
                className={`relative flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-200 text-center cursor-pointer ${isActive
                    ? 'bg-slate-50 text-slate-900 shadow-xs border border-slate-200/90'
                    : 'text-slate-500 hover:text-slate-800 border border-transparent'
                  }`}
              >
                {/* Active Top Bar Indicator */}
                {isActive && (
                  <div
                    className="absolute top-0 left-2 right-2 h-0.5 rounded-full"
                    style={{ backgroundColor: pillar.accentColor }}
                  />
                )}

                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center mb-1 transition-transform"
                  style={{
                    backgroundColor: isActive ? pillar.accentBg : 'transparent',
                    color: pillar.accentColor,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>

                <span className="text-xs font-mono font-bold leading-none">
                  {pillar.index}
                </span>
                <span className="text-xs text-slate-500 font-medium leading-tight mt-0.5 truncate w-full">
                  {pillar.shortLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* 1B. DESKTOP & TABLET MONOLITH DOCK (Screens >= 640px) */}
        <div data-aos="fade-up" data-aos-duration="700" className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-2 sm:p-2.5 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs mb-6 sm:mb-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePillar(idx)}
                className={`relative flex flex-col items-start p-4 sm:p-5 rounded-2xl transition-all duration-300 text-left group cursor-pointer ${isActive
                    ? 'bg-white shadow-md text-slate-900 border border-slate-200/90 -translate-y-0.5'
                    : 'hover:bg-slate-50/80 text-slate-600 hover:text-slate-900 border border-transparent'
                  }`}
              >
                {/* Active Top Accent Line */}
                {isActive && (
                  <div
                    className="absolute top-0 left-4 right-4 h-1 rounded-full"
                    style={{ backgroundColor: pillar.accentColor }}
                  />
                )}

                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${isActive
                        ? 'bg-slate-100 text-slate-900'
                        : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                  >
                    Pillar {pillar.index}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105 opacity-70'
                      }`}
                    style={{
                      backgroundColor: isActive ? pillar.accentBg : 'transparent',
                      color: pillar.accentColor,
                    }}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                </div>

                <div className="w-full">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold truncate mb-1">
                    {pillar.tag}
                  </div>
                  <div className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug">
                    {pillar.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. MAIN INSTITUTIONAL SHOWCASE (100% Light, Crisp Enterprise Architecture) */}
        <div
          className={`rounded-2xl sm:rounded-3xl bg-white border p-4 sm:p-8 lg:p-12 transition-all duration-300 relative overflow-hidden ${current.shadowClass}`}
        >
          {/* Subtle Ambient Background Tint */}
          <div
            className="absolute -right-20 -bottom-20 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{
              width: 380,
              height: 380,
              backgroundColor: current.accentColor,
            }}
          />

          <div className="relative z-10 flex flex-col space-y-4 sm:space-y-6">
            {/* Top Row: Tag Pill & Stylized Monolith Index Watermark */}
            <div className="flex items-center justify-between w-full border-b border-slate-100 pb-3.5 sm:pb-5 gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: current.accentBg,
                    color: current.accentColor,
                  }}
                >
                  <CurrentIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span
                  className={`inline-block px-2.5 sm:px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border truncate ${current.badgeClass}`}
                >
                  {current.tag}
                </span>
              </div>

              {/* Monolith Index Watermark: compact #01 on mobile, full on desktop */}
              <div className="font-mono text-base sm:text-3xl lg:text-4xl font-extrabold text-slate-300 select-none shrink-0">
                <span className="sm:hidden">#{current.index}</span>
                <span className="hidden sm:inline">Pillar {current.index}</span>
              </div>
            </div>

            {/* Native H3 Heading (Inherits Space Grotesk purely from @layer base) */}
            <div>
              <h3>
                {current.title}
              </h3>
            </div>

            {/* Native P Paragraph (Inherits Inter purely from @layer base) */}
            <p>
              {current.description}
            </p>

            {/* 3 Key Highlights Presented as a Clean Proof Row */}
            <div className="pt-1 sm:pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 sm:mb-3">
                Verified Commitments
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-4">
                {current.highlights.map((item, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-start gap-2.5 sm:gap-3"
                  >
                    <div
                      className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        backgroundColor: current.accentBg,
                        color: current.accentColor,
                      }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Interactive Navigation & Pillar Pagination Footer */}
            <div className="pt-4 sm:pt-6 border-t border-slate-100 flex items-center justify-between gap-2 w-full">
              <div className="text-xs text-slate-500 font-medium shrink-0">
                <span className="font-bold text-slate-900">{current.index}</span>
                <span className="text-slate-400"> / 04</span>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {PILLARS.map((p, pIdx) => (
                  <button
                    key={pIdx}
                    type="button"
                    onClick={() => setActivePillar(pIdx)}
                    aria-label={`Go to Pillar ${p.index}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activePillar === pIdx ? 'w-6 sm:w-8' : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                    style={{
                      backgroundColor: activePillar === pIdx ? current.accentColor : undefined,
                    }}
                  />
                ))}
              </div>

              {/* Previous / Next Pillar Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Pillar"
                  className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Pillar"
                  className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
