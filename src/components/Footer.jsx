'use client';

import React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Sparkles
} from 'lucide-react';
import { renderTitleWithGradient } from '../lib/render-title';

export default function Footer({
  content,
  selectedCountry: selectedCountryProp,
  onSelectCountry,
  onOpenModal
}) {
  const countries = content?.countries || [
    { code: 'IN', name: 'India', currency: 'INR (₹)', phoneCode: '+91', lang: 'English' },
    { code: 'SA', name: 'Saudi Arabia', currency: 'SAR (ر.س)', phoneCode: '+966', lang: 'العربية / English' }
  ];

  const selectedCountry = selectedCountryProp || countries[0];

  const metaPhone = content?.meta?.phone || '+91 9902863697';
  const metaEmail = content?.meta?.email || 'marketing@isarvait.com';
  const isSaudi = selectedCountry?.code === 'SA';

  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#f8faf9] via-white to-[#f1f6f3] border-t border-[#d8eae1] pt-14 pb-10">
      {/* Subtle Ambient Radial Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#007a55]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">

        {/* 1. REGION-AWARE PRE-FOOTER CONVERSION BANNER */}
        {isSaudi ? (
          /* SAUDI ARABIA: HIGH-IMPACT DEEP ENTERPRISE EMERALD BANNER */
          <div className="pre-footer-cta-dark relative rounded-3xl bg-gradient-to-br from-[#002617] via-[#003d27] to-[#002214] border border-emerald-500/30 shadow-2xl shadow-emerald-950/25 p-4 sm:p-8 lg:p-12 mb-14 overflow-hidden">
            {/* Subtle Ambient Radial Lighting Orbs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl pointer-events-none" />
            {/* Subtle Ambient Micro-Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
              {/* Left Copy & Value Anchors (7 cols) */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 shadow-inner">
                  <Sparkles size={14} className="text-emerald-300" />
                  <span className="section-eyebrow">
                    READY TO BRING YOUR BUSINESS INTO SYNC?
                  </span>
                </div>

                {/* High-Impact Native Heading */}
                <div>
                  <h2>
                    {renderTitleWithGradient('Ready to bring your business into sync?', 'into sync?', true)}
                  </h2>
                </div>

                {/* Native Paragraph */}
                <div>
                  <p className="max-w-2xl">
                    Book a free demo and see how ISARVA ERP can work for you. Discover connected operations across billing, ZATCA e-invoicing, inventory, and multi-branch management.
                  </p>
                </div>

                {/* Badges & Direct Assistance Contact Chips */}
                <div className="w-fit max-w-full mx-auto lg:mx-0 flex flex-col items-stretch gap-2.5 sm:gap-3 pt-1">
                  {/* Enterprise Feature Trust Badges */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                    <div className="w-full sm:w-auto flex sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-emerald-400/20 text-xs font-semibold text-emerald-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0 shadow-2xs">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Personalized Demo</span>
                    </div>
                    <div className="w-full sm:w-auto flex sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-emerald-400/20 text-xs font-semibold text-emerald-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0 shadow-2xs">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>No Obligation</span>
                    </div>
                    <div className="w-full sm:w-auto flex sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/5 border border-emerald-400/20 text-xs font-semibold text-emerald-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0 shadow-2xs">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Expert Consultation</span>
                    </div>
                  </div>

                  {/* Direct Assistance Contact Chips */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                    <a
                      href={`tel:${metaPhone.replace(/\s+/g, '')}`}
                      className="w-full sm:w-auto flex sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                        <Phone size={11} />
                      </div>
                      <span>Call Us: {metaPhone}</span>
                    </a>
                    <a
                      href={`mailto:${metaEmail}`}
                      className="w-full sm:w-auto flex sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                        <Mail size={11} />
                      </div>
                      <span>Email: {metaEmail}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Action Conversion Pod (5 cols) */}
              <div className="lg:col-span-5 w-full flex justify-center">
                <div className="relative w-full max-w-md mx-auto lg:mx-0 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 lg:p-7 shadow-2xl flex flex-col items-stretch gap-3.5 sm:gap-4">
                  {/* Live Availability Badge */}
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1.5 pb-2 border-b border-white/10 text-center sm:text-left">
                    <div className="flex items-center justify-center gap-2 shrink-0">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      <span className="text-xs font-bold text-white tracking-wide whitespace-nowrap">
                        Sales Team Available
                      </span>
                    </div>
                    <span className="text-xs font-medium text-emerald-300/90 whitespace-nowrap">
                      Avg. response &lt; 15 mins
                    </span>
                  </div>

                  {/* Subtext description inside pod */}
                  <div className="text-xs text-emerald-100/90 font-normal leading-relaxed text-center sm:text-left">
                    Get a personalized demo tailored for your business industry with customized pricing and dedicated onboarding support.
                  </div>

                  {/* Primary Action Button with Gradient Light & Specular Sheen */}
                  <button
                    type="button"
                    onClick={() => onOpenModal ? onOpenModal('demo') : null}
                    className="relative overflow-hidden w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-full bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 hover:from-emerald-200 hover:via-emerald-300 hover:to-teal-200 text-slate-950 font-bold text-xs sm:text-sm border-t border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_8px_24px_-4px_rgba(52,211,153,0.45)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_12px_28px_-4px_rgba(52,211,153,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
                  >
                    {/* Dynamic Light Sweep Shimmer Effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                    <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                      <span>Book a Free Demo</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
                    </span>
                  </button>

                  {/* Secondary Action Link */}
                  <Link
                    href="/contact"
                    className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/25 hover:border-white/40 shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span>Talk to Our Team</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* INDIA & DEFAULT: HIGH-IMPACT CLEAN LIGHT ISARVA BANNER */
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-[#f4faf7] to-[#e8f6ef] border border-emerald-200/90 shadow-xl shadow-slate-900/5 p-4 sm:p-8 lg:p-12 mb-14 overflow-hidden">
            {/* Subtle Ambient Radial Lighting Orbs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#007a55]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
            {/* Subtle Ambient Micro-Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#007a55_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
              {/* Left Copy & Value Anchors (7 cols) */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 shadow-2xs">
                  <Sparkles size={14} className="text-[#007a55]" />
                  <span className="section-eyebrow">
                    READY TO BRING YOUR BUSINESS INTO SYNC?
                  </span>
                </div>

                {/* High-Impact Native Heading (Space Grotesk slate-900, purely inherited) */}
                <div>
                  <h2>
                    {renderTitleWithGradient('Ready to bring your business into sync?', 'into sync?', false)}
                  </h2>
                </div>

                {/* Native Paragraph (Inter slate-600, purely inherited) */}
                <div>
                  <p className="max-w-2xl">
                    Book a free demo and see how ISARVA ERP can work for you. Discover connected operations across billing, GST e-invoicing, inventory, and multi-branch management.
                  </p>
                </div>

                {/* Badges & Direct Assistance Contact Chips */}
                <div className="w-fit max-w-full mx-auto lg:mx-0 flex flex-col items-stretch gap-2.5 sm:gap-3 pt-1">
                  {/* Enterprise Feature Trust Badges */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                    <div className="w-full sm:w-auto flex sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/95 border border-emerald-200/80 text-xs font-semibold text-slate-800 shadow-2xs">
                      <div className="w-5 h-5 rounded-full bg-[#007a55] text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Personalized Demo</span>
                    </div>
                    <div className="w-full sm:w-auto flex sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/95 border border-emerald-200/80 text-xs font-semibold text-slate-800 shadow-2xs">
                      <div className="w-5 h-5 rounded-full bg-[#007a55] text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>No Obligation</span>
                    </div>
                    <div className="w-full sm:w-auto flex sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/95 border border-emerald-200/80 text-xs font-semibold text-slate-800 shadow-2xs">
                      <div className="w-5 h-5 rounded-full bg-[#007a55] text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span>Expert Consultation</span>
                    </div>
                  </div>

                  {/* Direct Assistance Contact Chips */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
                    <a
                      href={`tel:${metaPhone.replace(/\s+/g, '')}`}
                      className="w-full sm:w-auto flex sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-emerald-50/80 border border-slate-200/90 text-xs font-semibold text-slate-700 hover:text-[#007a55] transition-all hover:scale-105 active:scale-95 shadow-2xs"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#007a55] flex items-center justify-center shrink-0">
                        <Phone size={11} />
                      </div>
                      <span>Call Us: {metaPhone}</span>
                    </a>
                    <a
                      href={`mailto:${metaEmail}`}
                      className="w-full sm:w-auto flex sm:inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-emerald-50/80 border border-slate-200/90 text-xs font-semibold text-slate-700 hover:text-[#007a55] transition-all hover:scale-105 active:scale-95 shadow-2xs"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#007a55] flex items-center justify-center shrink-0">
                        <Mail size={11} />
                      </div>
                      <span>Email: {metaEmail}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Action Conversion Pod (5 cols) */}
              <div className="lg:col-span-5 w-full flex justify-center">
                <div className="relative w-full max-w-md mx-auto lg:mx-0 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 p-4 sm:p-6 lg:p-7 shadow-xl shadow-slate-900/5 flex flex-col items-stretch gap-3.5 sm:gap-4">
                  {/* Live Availability Badge */}
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1.5 pb-2.5 border-b border-slate-100 text-center sm:text-left">
                    <div className="flex items-center justify-center gap-2 shrink-0">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#007a55]" />
                      </span>
                      <span className="text-xs font-bold text-slate-900 tracking-wide whitespace-nowrap">
                        Sales Team Available
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-500 whitespace-nowrap">
                      Avg. response &lt; 15 mins
                    </span>
                  </div>

                  {/* Subtext description inside pod */}
                  <div className="text-xs text-slate-600 font-normal leading-relaxed text-center sm:text-left">
                    Get a personalized demo tailored for your business industry with customized pricing and dedicated onboarding support.
                  </div>

                  {/* Primary Action Button with Gradient Light & Specular Sheen */}
                  <button
                    type="button"
                    onClick={() => onOpenModal ? onOpenModal('demo') : null}
                    className="relative overflow-hidden w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-full bg-gradient-to-r from-[#009c6c] via-[#007a55] to-[#005f42] hover:from-[#00b07a] hover:via-[#008960] hover:to-[#006e4d] text-white font-bold text-xs sm:text-sm border-t border-white/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_-4px_rgba(0,122,85,0.45)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_12px_28px_-4px_rgba(0,122,85,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
                  >
                    {/* Dynamic Light Sweep Shimmer Effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                    <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                      <span>Book a Free Demo</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
                    </span>
                  </button>

                  {/* Secondary Action Link */}
                  <Link
                    href="/contact"
                    className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-full bg-slate-100/90 hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span>Talk to Our Team</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. MAIN 5-COLUMN EXPANDED NAVIGATION GRID */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 border-b border-slate-200/80">
          
          {/* Column 1: Brand Info, Regional Hubs & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Link href="/" className="inline-block">
              <img
                src="/images/isarva-logo.png"
                alt="ISARVA Logo"
                className="h-11 sm:h-12 w-auto object-contain mx-auto lg:mx-0"
              />
            </Link>

            <div>
              <p className="max-w-sm mx-auto lg:mx-0">
                A complete business management platform for growing businesses. Connected workflows across finance, operations, HRMS and CRM.
              </p>
            </div>

            {/* Circular Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 pt-1">
              <a
                href="https://www.linkedin.com/company/isarva-infotech-private-limited"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#007a55] hover:text-white hover:border-[#007a55] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://twitter.com/isarva"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#007a55] hover:text-white hover:border-[#007a55] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://www.youtube.com/@isarvainfotech"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#007a55] hover:text-white hover:border-[#007a55] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://www.instagram.com/isarvainfotech/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#007a55] hover:text-white hover:border-[#007a55] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.facebook.com/IsarvaInfotech"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#007a55] hover:text-white hover:border-[#007a55] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: ERP Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-center lg:text-left">
            <h4>
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 font-medium">
              <li><Link href="/billsoft" className="hover:text-[#007a55] transition-colors">Accounting (BillSoft)</Link></li>
              <li><Link href="/restaurant-pos" className="hover:text-[#007a55] transition-colors">Restaurant POS</Link></li>
              <li><Link href="/hrms" className="hover:text-[#007a55] transition-colors">HRMS &amp; Payroll</Link></li>
              <li><Link href="/crm" className="hover:text-[#007a55] transition-colors">CRM &amp; Sales</Link></li>
              <li><Link href="#products" className="hover:text-[#007a55] transition-colors">Inventory &amp; Operations</Link></li>
              <li><Link href="#why-choose" className="hover:text-[#007a55] transition-colors">Reporting &amp; Analytics</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions by Industry (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-center lg:text-left">
            <h4>
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 font-medium">
              <li><Link href="#industries" className="hover:text-[#007a55] transition-colors">Restaurants &amp; Retail</Link></li>
              <li><Link href="#industries" className="hover:text-[#007a55] transition-colors">Trading &amp; Distribution</Link></li>
              <li><Link href="#industries" className="hover:text-[#007a55] transition-colors">Manufacturing</Link></li>
              <li><Link href="#industries" className="hover:text-[#007a55] transition-colors">Multi-Location Businesses</Link></li>
              <li><Link href="#industries" className="hover:text-[#007a55] transition-colors">Professional Services</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-center lg:text-left">
            <h4>
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 font-medium">
              <li><Link href="/about" className="hover:text-[#007a55] transition-colors">About Us</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-[#007a55] transition-colors">Why Choose Us</Link></li>
              <li><Link href="/#faqs" className="hover:text-[#007a55] transition-colors">Help Center &amp; FAQs</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#007a55] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/#compliance" className="hover:text-[#007a55] transition-colors">GST e-Invoicing &amp; IRN</Link></li>
              <li><Link href="/#compliance" className="hover:text-[#007a55] transition-colors">Saudi ZATCA Phase 2</Link></li>
              <li><Link href="/contact" className="hover:text-[#007a55] transition-colors">Contact Us &amp; Support</Link></li>
            </ul>
          </div>
        </div>

        {/* 4. SUB-FOOTER BOTTOM BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center md:text-left w-full md:w-auto">
            <span>© 2026 ISARVA IT Solutions Pvt. Ltd. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <Link href="/privacy-policy" className="hover:text-[#007a55] transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-slate-300">•</span>
            <Link href="/why-choose-us" className="hover:text-[#007a55] transition-colors">
              Why Choose Us
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

