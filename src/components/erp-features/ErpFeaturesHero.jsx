'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ErpFeaturesHero({ onOpenModal }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #eef6ff 0%, #f8fafc 45%, #f0fbf7 100%)',
      }}
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle, #bfdbfe 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-16 w-[320px] h-[320px] rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, #d1fae5 0%, transparent 70%)',
        }}
      />

      <div className="site-container section-padding-sm relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-xl mx-auto lg:mx-0">
            {/* Eyebrow */}
            <span className="section-eyebrow">ERP Software Features</span>

            {/* Headline */}
            <h1>
              Everything Your Business Needs.{' '}
              <span style={{ color: '#0056d2' }}>All in One ERP.</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-md mx-auto lg:mx-0">
              Streamline your finance, sales, inventory, HR, projects and more
              with Isarva ERP. Get real-time insights, automate your operations
              and take complete control of your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <a href="#features" className="btn-brand-primary" id="erp-hero-explore-btn">
                Explore Features <ArrowRight size={16} />
              </a>
              <button
                id="erp-hero-demo-btn"
                className="btn-brand-outline"
                onClick={() => onOpenModal?.('demo', 'ERP')}
              >
                Book a Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start pt-1">
              {[
                'All-in-One Platform',
                'Scalable for Growth',
                'Trusted by Businesses',
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700"
                >
                  <CheckCircle2 size={16} className="text-[#007a55] flex-shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Dashboard Mockup ── */}
          <div className="relative flex items-center justify-center">
            {/* Floating "Manage Simplify Grow" badge */}
            <div
              className="absolute -top-4 right-2 z-10 hidden sm:flex flex-col items-center gap-1 bg-white rounded-xl px-3 py-2 text-center"
              style={{
                boxShadow: '0 4px 20px rgba(0,86,210,0.12)',
                border: '1px solid #e2e8f0',
              }}
            >
              <span className="text-xs font-bold text-[#0056d2] leading-tight">Manage</span>
              <span className="text-xs font-bold text-[#007a55] leading-tight">Simplify</span>
              <span className="text-xs font-bold text-slate-700 leading-tight">Grow</span>
            </div>

            {/* Dashboard image */}
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                boxShadow:
                  '0 20px 60px rgba(0,86,210,0.15), 0 4px 20px rgba(0,0,0,0.06)',
                transform: 'perspective(1200px) rotateY(-2deg) rotateX(1.5deg)',
              }}
            >
              <Image
                src="/images/erp-features/erp-dashboard-hero.jpg"
                alt="Isarva ERP Dashboard — real-time business overview with revenue, orders and inventory charts"
                width={820}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
