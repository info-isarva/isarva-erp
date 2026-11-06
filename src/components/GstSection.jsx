'use client';

import React from 'react';
import { Check, ShieldCheck, Zap, FileText } from 'lucide-react';
import TaxInvoiceGraphic from './TaxInvoiceGraphic';
import { renderTitleWithGradient } from '../lib/render-title';

export default function GstSection({ gstData }) {
  return (
    <section
      id="compliance"
      className="w-full relative overflow-hidden bg-[#fef7ee] bg-gradient-to-b from-[#fef7ee] via-[#faf3e8] to-[#f6ecdf] border-y border-[#fed7aa]/50 section-padding"
    >
      {/* Simple, Clean Architectural India Monuments Line-Art — Edge-to-Edge Across Full Width */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img
          src="/images/gst-india-minimal-skyline.jpg"
          alt="Clean India Monuments Line Art Silhouette - India Gate, Taj Mahal, Gateway of India, Rashtrapati Bhavan"
          className="w-full h-full object-cover object-bottom opacity-70 sm:opacity-80 mix-blend-multiply transition-opacity duration-500"
          loading="eager"
        />

        {/* Delicate top gradient fade to blend open sky seamlessly */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#fef7ee] via-[#fef7ee]/80 to-transparent pointer-events-none" />
      </div>

      <div className="site-container relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT ZONE: Section Eyebrow, Title, Subtitle, Checklist & Trust Badges */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Category Eyebrow with Pulsing Live Sync Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="section-eyebrow">
                {gstData?.badge || 'GST & STATUTORY COMPLIANCE'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-[10px] font-bold text-emerald-800 tracking-wide uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Live GSTN Sync
              </span>
            </div>

            {/* Main Section Heading */}
            <div>
              <h2>
                {renderTitleWithGradient(gstData?.title || 'Built for Indian Businesses')}
              </h2>
              <p className="mt-2 max-w-xl mx-auto lg:mx-0">
                {gstData?.subtitle ||
                  'ISARVA ERP is fully compliant with Indian GST regulations, including e-invoicing, e-way bill and all statutory requirements.'}
              </p>
            </div>

            {/* 2-Column Enhanced Glassmorphic Statutory Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 text-left w-full max-w-xl">
              {gstData?.checklist?.map((item, idx) => (
                <div
                  key={idx}
                  className="card-compliance-checklist flex items-center gap-3 p-3.5 rounded-xl bg-white border border-emerald-500/30 hover:border-[#007a55] hover:-translate-y-1 transition-all duration-300 group cursor-default shadow-[0_10px_25px_-4px_rgba(0,122,85,0.22),0_4px_10px_-2px_rgba(0,122,85,0.12)] hover:shadow-[0_20px_40px_-4px_rgba(0,122,85,0.32),0_8px_16px_-2px_rgba(0,122,85,0.18)]"
                  style={{
                    boxShadow: '0 10px 25px -4px rgba(0, 122, 85, 0.22), 0 4px 10px -2px rgba(0, 122, 85, 0.12)',
                  }}
                >
                  <div className="w-6 h-6 rounded-lg bg-[#007a55] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-[#006546] transition-all">
                    <Check size={13} strokeWidth={3.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Compliance Trust Feature Pills */}
            <div className="pt-4 border-t border-emerald-950/8 w-full">
              <div className="w-fit max-w-full mx-auto lg:mx-0 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                <div className="w-full sm:w-auto flex sm:inline-flex items-center justify-start gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700 hover:border-[#007a55]/30 hover:shadow-xs transition-all text-left">
                  <ShieldCheck size={15} className="text-[#007a55] shrink-0" />
                  <span className="whitespace-nowrap">100% Statutory Compliant</span>
                </div>
                <div className="w-full sm:w-auto flex sm:inline-flex items-center justify-start gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700 hover:border-[#007a55]/30 hover:shadow-xs transition-all text-left">
                  <Zap size={15} className="text-[#007a55] shrink-0" />
                  <span className="whitespace-nowrap">1-Click IRN & QR Code</span>
                </div>
                <div className="w-full sm:w-auto flex sm:inline-flex items-center justify-start gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700 hover:border-[#007a55]/30 hover:shadow-xs transition-all text-left">
                  <FileText size={15} className="text-[#007a55] shrink-0" />
                  <span className="whitespace-nowrap">Direct GSTN Validated</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT ZONE: 3D Photorealistic Tax Invoice Card with Radar Backing */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full">
            {/* Concentric Decorative Compliance Radar Rings */}
            <div className="absolute -inset-6 sm:-inset-10 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full border border-dashed border-[#007a55]/20 animate-[spin_100s_linear_infinite]" />
              <div className="w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full border border-amber-500/15" />
            </div>

            <TaxInvoiceGraphic />
          </div>

        </div>
      </div>
    </section>
  );
}
