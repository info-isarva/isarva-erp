'use client';

import React from 'react';
import {
  ShieldCheck,
  Lock,
  PiggyBank,
  Rocket,
  CheckCircle2,
} from 'lucide-react';

const PILLARS = [
  {
    icon: ShieldCheck,
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
  },
  {
    icon: Lock,
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
  },
  {
    icon: PiggyBank,
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
  },
  {
    icon: Rocket,
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
  },
];

export default function EeatPillars() {
  return (
    <section className="section-padding bg-gradient-to-b from-[#edf7f2] via-[#f7fbf9] to-white border-b border-emerald-200/70 relative overflow-hidden">
      {/* Soft atmospheric glow */}
      <div className="absolute -top-32 left-1/3 w-[550px] h-[550px] bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Blueprint grid dots */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#007a55 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            const shadowClasses = [
              'card-shadow-emerald border-emerald-200/80',
              'card-shadow-blue border-blue-200/80',
              'card-shadow-purple border-purple-200/80',
              'card-shadow-orange border-amber-200/80',
            ][index % 4];

            return (
              <div
                key={index}
                className={`rounded-2xl bg-white border p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 group ${shadowClasses}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: pillar.accentBg, color: pillar.accentColor }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3>
                    {pillar.title}
                  </h3>

                  <p className="mt-3">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-2.5">
                  {pillar.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: pillar.accentColor }}
                      />
                      <span className="font-medium">{item}</span>
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
