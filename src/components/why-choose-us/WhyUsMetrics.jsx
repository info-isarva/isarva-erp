'use client';

import React from 'react';
import { Clock, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const METRICS = [
  {
    icon: Zap,
    value: '4.2x',
    title: 'Faster Month-End Financial Close',
    description: 'Automated journal entries and bank reconciliations eliminate days of manual spreadsheet tallying.',
  },
  {
    icon: CheckCircle2,
    value: '85%',
    title: 'Reduction in Manual Billing Errors',
    description: 'Barcode POS scanning and master catalog validation prevent costly price discrepancies and mismatches.',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    title: 'Statutory Clearance Track Record',
    description: 'Zero non-compliance notices across active enterprises under both Indian GST and Saudi ZATCA frameworks.',
  },
  {
    icon: Clock,
    value: '< 15m',
    title: 'Emergency Solution SLA',
    description: 'Direct priority escalation to a named implementation lead who knows your operational architecture.',
  },
];

export default function WhyUsMetrics() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-[#f0f9f4] to-[#e8f6f0] border-b border-emerald-200/60 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-teal-200/25 rounded-full blur-[120px]" />
        {/* Subtle dot matrix */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#007a55 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-emerald-200/80 hover:border-emerald-400 card-shadow-emerald transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#007a55] flex items-center justify-center group-hover:scale-110 transition-transform border border-emerald-100">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#007a55]">
                      Proven Impact
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-[#007a55] font-heading tracking-tight mb-2">
                    {metric.value}
                  </div>

                  <h3 className="mb-2">
                    <span>{metric.title}</span>
                  </h3>
                </div>

                <p className="mt-2 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
