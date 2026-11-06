'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Headphones, Sparkles } from 'lucide-react';

export default function WhyUsCta({ onOpenModal }) {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-[#f0f9f4] to-[#e6f5ee] relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#e8f8f1] via-[#d6f2e4] to-[#eaf7f0] p-8 sm:p-14 lg:p-16 border border-emerald-300/80 shadow-2xl relative overflow-hidden card-shadow-emerald">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-300/35 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-300/25 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-300/80 text-[#007a55] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#007a55]" />
              <span className="section-eyebrow text-[#007a55] tracking-wider">
                ACCELERATE YOUR OPERATIONS
              </span>
            </div>

            {/* Space Grotesk h2 */}
            <h2>
              Ready to Replace Disconnected Chaos with{' '}
              <span className="text-[#007a55]">
                Cohesive Intelligence?
              </span>
            </h2>

            {/* Standard Paragraph */}
            <p className="max-w-2xl mx-auto">
              Join more than 1,000 growing enterprises across India and the GCC. Eliminate manual double-entry,
              automate statutory tax filings, and gain real-time executive clarity today.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenModal?.('demo', 'Why Choose Us Bottom CTA')}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-[#007a55] hover:bg-[#006546] shadow-lg shadow-[#007a55]/25 hover:shadow-xl hover:shadow-[#007a55]/35 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base cursor-pointer"
              >
                <span>Book a Free 30-Minute Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-emerald-300 transition-all duration-200 text-sm sm:text-base shadow-xs backdrop-blur-md cursor-pointer"
              >
                <Headphones className="w-4 h-4 text-[#007a55]" />
                <span>Talk to an Architect</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-emerald-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-[#007a55] shrink-0" />
                <span>Zero Per-Seat Penalty</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 whitespace-nowrap">
                <ShieldCheck className="w-4 h-4 text-[#007a55] shrink-0" />
                <span>GST &amp; ZATCA Approved</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 whitespace-nowrap">
                <Lock className="w-4 h-4 text-[#007a55] shrink-0" />
                <span>ISO 27001 Redundancy</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 whitespace-nowrap">
                <Sparkles className="w-4 h-4 text-[#007a55] shrink-0" />
                <span>2-4 Weeks Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
