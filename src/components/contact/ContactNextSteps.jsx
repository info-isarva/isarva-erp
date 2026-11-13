'use client';

import React from 'react';
import {
  Clock,
  MonitorPlay,
  Database,
  Rocket,
  ArrowRight,
  Phone,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import FlagIcon from '../FlagIcon';

const ONBOARDING_STEPS = [
  {
    step: '01',
    badge: '< 24 Hours',
    title: 'Discovery Call',
    description:
      'An ERP specialist reviews your inquiry and connects directly to map your branches, billing volumes, and tax workflow.',
    highlight: 'Direct Specialist • Zero Bots',
    icon: Clock,
    iconBg: 'from-emerald-400 to-[#007a55]',
    cardShadow: 'card-shadow-emerald',
    badgeClass: 'bg-emerald-50 text-[#007a55] border-emerald-200',
    accentText: 'text-[#007a55]',
  },
  {
    step: '02',
    badge: '30 Mins',
    title: 'Tailored Live Demo',
    description:
      'Walk through real GST/ZATCA billing, POS, inventory, CRM, or payroll flows configured for your industry—never static slides.',
    highlight: 'Live Sandbox Walkthrough',
    icon: MonitorPlay,
    iconBg: 'from-blue-500 to-[#0284c7]',
    cardShadow: 'card-shadow-blue',
    badgeClass: 'bg-blue-50 text-[#2563eb] border-blue-200',
    accentText: 'text-[#2563eb]',
  },
  {
    step: '03',
    badge: 'Free Audit',
    title: 'Migration & TCO Plan',
    description:
      'Receive a transparent module-wise quote alongside a zero-loss Tally, Excel, or legacy database migration checklist.',
    highlight: 'Transparent Custom Quote',
    icon: Database,
    iconBg: 'from-purple-500 to-[#7c3aed]',
    cardShadow: 'card-shadow-purple',
    badgeClass: 'bg-purple-50 text-[#7c3aed] border-purple-200',
    accentText: 'text-[#7c3aed]',
  },
  {
    step: '04',
    badge: '2–4 Weeks',
    title: 'Setup, Training & Launch',
    description:
      'We configure tax rules, run role-based team training, and stay on standby during official launch for zero disruption.',
    highlight: 'Dedicated Account Manager',
    icon: Rocket,
    iconBg: 'from-orange-400 to-[#ea580c]',
    cardShadow: 'card-shadow-orange',
    badgeClass: 'bg-orange-50 text-[#ea580c] border-orange-200',
    accentText: 'text-[#ea580c]',
  },
];

export default function ContactNextSteps({ onOpenDemoModal }) {
  return (
    <section
      id="what-happens-next"
      className="section-padding bg-gradient-to-b from-white via-[#f2fbf6] to-white relative overflow-hidden border-t border-emerald-100/80"
    >
      {/* Subtle architectural mesh */}
      <div className="absolute inset-0 bg-mesh-green opacity-20 pointer-events-none" />
      <div className="absolute -top-28 right-1/4 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="600" className="section-header items-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 mb-3 shadow-2xs w-fit mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#007a55] animate-pulse" />
            <span className="section-eyebrow">What Happens Next</span>
          </div>

          <h2 className="mb-4">
            From First Message to{' '}
            <span style={{ color: '#007a55' }}>Live Rollout</span>
          </h2>

          <p className="max-w-2xl mx-auto">
            No pushy sales scripts or week-long waits. Here is our clear 4-step journey from the moment you submit your inquiry to going live.
          </p>
        </div>

        {/* 4-Step Connected Cards with Floating Top-Border Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 pt-6">
          {ONBOARDING_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                data-aos="fade-up"
                data-aos-delay={idx * 90 + 80}
                data-aos-duration="600"
                className={`relative overflow-visible rounded-2xl pt-9 px-6 pb-6 bg-white border ${item.cardShadow} flex flex-col justify-between group text-left`}
              >
                {/* Floating Icon centered on top border */}
                <div
                  className={`absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-br ${item.iconBg} text-white flex items-center justify-center shadow-md ring-4 ring-white group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={22} strokeWidth={2.2} />
                </div>

                <div>
                  {/* Step Number & SLA Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xl font-black tabular-nums tracking-tight text-slate-300 group-hover:text-slate-500 transition-colors leading-none">
                      {item.step}
                    </span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${item.badgeClass}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mb-2">{item.title}</h3>

                  <p className="mb-5">{item.description}</p>
                </div>

                {/* Bottom Footer Highlight */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className={`shrink-0 ${item.accentText}`} />
                  <span className={`text-xs font-bold ${item.accentText}`}>
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Regional Support & SLA Bento Card */}
        <div data-aos="fade-up" data-aos-duration="700" className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-br from-[#062e23] via-[#093b2d] to-[#0b1a30] p-7 sm:p-10 lg:p-12 border card-shadow-dark-emerald relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Copy & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-400/30">
                <ShieldCheck size={15} className="text-emerald-300 shrink-0" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-200">
                  India &amp; GCC Dedicated Support Desk
                </span>
              </div>

              <h3>
                <span style={{ color: '#ffffff' }}>
                  Need an Immediate Walkthrough or Tally Migration Audit?
                </span>
              </h3>

              <p className="max-w-xl">
                <span style={{ color: '#cbd5e1' }}>
                  Our India (GST e-Invoicing &amp; E-Way Bill) and GCC / Saudi Arabia (ZATCA Phase-2 VAT) engineering teams can spin up a personalized sandbox environment tailored to your outlets.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto pt-1">
                <button
                  type="button"
                  id="contact-nextsteps-demo-btn"
                  onClick={() => onOpenDemoModal?.('demo', 'Contact Page Walkthrough')}
                  className="btn-brand-primary text-sm sm:text-base px-6 py-3.5 w-full sm:w-auto"
                >
                  <span>Book a Free 30-Min Demo</span>
                  <ArrowRight size={17} />
                </button>

                <a
                  href="tel:+919902863697"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all duration-200 w-full sm:w-auto"
                >
                  <Phone size={16} className="text-emerald-300 shrink-0" />
                  <span>+91 9902863697</span>
                </a>
              </div>
            </div>

            {/* Right 2x2 Live SLA & Coverage Bento Tiles */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4 w-full">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 sm:p-5 text-left">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-300 font-heading mb-1">
                  &lt; 24h
                </span>
                <span className="block text-xs sm:text-sm font-bold text-white">
                  Response SLA
                </span>
                <span className="block text-xs text-slate-300 mt-0.5">
                  Direct human specialist
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 sm:p-5 text-left">
                <span className="block text-2xl sm:text-3xl font-black text-sky-300 font-heading mb-1">
                  99.9%
                </span>
                <span className="block text-xs sm:text-sm font-bold text-white">
                  Cloud Uptime
                </span>
                <span className="block text-xs text-slate-300 mt-0.5">
                  Enterprise SLA backed
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 sm:p-5 text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <FlagIcon country="IN" className="w-6 h-4 rounded-xs shadow-xs" />
                  <FlagIcon country="SA" className="w-6 h-4 rounded-xs shadow-xs" />
                </div>
                <span className="block text-xs sm:text-sm font-bold text-white">
                  GST &amp; ZATCA Ready
                </span>
                <span className="block text-xs text-slate-300 mt-0.5">
                  India &amp; GCC compliant
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 sm:p-5 text-left">
                <span className="block text-2xl sm:text-3xl font-black text-amber-300 font-heading mb-1">
                  1,000+
                </span>
                <span className="block text-xs sm:text-sm font-bold text-white">
                  Active Businesses
                </span>
                <span className="block text-xs text-slate-300 mt-0.5">
                  Multi-branch rollouts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

