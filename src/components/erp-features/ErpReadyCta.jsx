'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const trustBadges = [
  'Free Consultation',
  'Personalized Demo',
  'No Obligation',
];

export default function ErpReadyCta({ onOpenModal }) {
  return (
    <section
      id="ready-cta"
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #e8f4ff 0%, #f8fafc 50%, #f0fbf7 100%)',
      }}
    >
      {/* Decorative blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, #bfdbfe 0%, transparent 70%)',
        }}
      />

      <div className="site-container section-padding relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: CTA Content ── */}
          <div className="flex flex-col gap-6 max-w-xl">
            <span className="section-eyebrow">Experience All Features</span>

            <h2>
              Ready to Get <span style={{ color: '#007a55' }}>Started?</span>
            </h2>

            <p>
              Join growing businesses that trust Isarva ERP to manage their
              operations, improve efficiency and drive growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              <button
                id="erp-cta-request-demo-btn"
                className="btn-brand-primary"
                onClick={() => onOpenModal?.('demo', 'ERP')}
              >
                Request a Demo <ArrowRight size={16} />
              </button>
              <button
                id="erp-cta-contact-btn"
                className="btn-brand-outline"
                onClick={() => onOpenModal?.('contact', 'ERP')}
              >
                Contact Our Team
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 items-center">
              {trustBadges.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700"
                >
                  <CheckCircle2 size={15} className="text-[#007a55] flex-shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Team Photo ── */}
          <div className="relative">
            {/* Floating label */}
            <div
              className="absolute -top-5 right-4 z-10 hidden sm:block bg-white rounded-xl px-4 py-2.5"
              style={{
                boxShadow: '0 4px 20px rgba(0,122,85,0.12)',
                border: '1px solid #d1fae5',
              }}
            >
              <p className="text-xs font-bold text-[#007a55] leading-snug text-right">
                Let's Build a Smarter<br />Business Together
              </p>
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
              }}
            >
              <Image
                src="/images/erp-features/erp-team-cta.jpg"
                alt="Isarva ERP team — South Asian professionals collaborating on business solutions"
                width={720}
                height={540}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
