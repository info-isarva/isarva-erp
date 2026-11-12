'use client';

import React, { useState, useRef } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { renderTitleWithGradient } from '../lib/render-title';
import { useSyncedFaqHeights } from '../hooks/useSyncedFaqHeights';

const FAQ_THEMES = [
  {
    // 0: Emerald (ISARVA Brand / Core ERP)
    accent: '#007a55',
    pillBg: 'rgba(0, 122, 85, 0.08)',
    pillBorder: 'rgba(0, 122, 85, 0.22)',
    cardBorder: 'rgba(0, 122, 85, 0.2)',
    cardBorderHover: '#007a55',
    cardBg: 'linear-gradient(135deg, rgba(236, 253, 245, 0.75) 0%, rgba(255, 255, 255, 0.95) 60%)',
    cardBgHover: 'linear-gradient(135deg, rgba(209, 250, 229, 0.7) 0%, rgba(255, 255, 255, 0.98) 60%)',
    cardBgOpen: 'linear-gradient(135deg, rgba(209, 250, 229, 0.85) 0%, rgba(255, 255, 255, 0.98) 60%)',
    glow: 'rgba(0, 122, 85, 0.26)',
  },
  {
    // 1: Royal Blue (Multi-Industry & Versatility)
    accent: '#2563eb',
    pillBg: 'rgba(37, 99, 235, 0.08)',
    pillBorder: 'rgba(37, 99, 235, 0.22)',
    cardBorder: 'rgba(37, 99, 235, 0.2)',
    cardBorderHover: '#2563eb',
    cardBg: 'linear-gradient(135deg, rgba(239, 246, 255, 0.75) 0%, rgba(255, 255, 255, 0.95) 60%)',
    cardBgHover: 'linear-gradient(135deg, rgba(219, 234, 254, 0.7) 0%, rgba(255, 255, 255, 0.98) 60%)',
    cardBgOpen: 'linear-gradient(135deg, rgba(219, 234, 254, 0.85) 0%, rgba(255, 255, 255, 0.98) 60%)',
    glow: 'rgba(37, 99, 235, 0.26)',
  },
  {
    // 2: Warm Amber / Orange (GST / E-Invoicing / Taxes)
    accent: '#ea580c',
    pillBg: 'rgba(234, 88, 12, 0.08)',
    pillBorder: 'rgba(234, 88, 12, 0.22)',
    cardBorder: 'rgba(234, 88, 12, 0.2)',
    cardBorderHover: '#ea580c',
    cardBg: 'linear-gradient(135deg, rgba(255, 247, 237, 0.75) 0%, rgba(255, 255, 255, 0.95) 60%)',
    cardBgHover: 'linear-gradient(135deg, rgba(254, 215, 170, 0.65) 0%, rgba(255, 255, 255, 0.98) 60%)',
    cardBgOpen: 'linear-gradient(135deg, rgba(254, 215, 170, 0.8) 0%, rgba(255, 255, 255, 0.98) 60%)',
    glow: 'rgba(234, 88, 12, 0.26)',
  },
  {
    // 3: Royal Violet / Purple (Multi-Branch Operations)
    accent: '#7c3aed',
    pillBg: 'rgba(124, 58, 237, 0.08)',
    pillBorder: 'rgba(124, 58, 237, 0.22)',
    cardBorder: 'rgba(124, 58, 237, 0.2)',
    cardBorderHover: '#7c3aed',
    cardBg: 'linear-gradient(135deg, rgba(245, 243, 255, 0.75) 0%, rgba(255, 255, 255, 0.95) 60%)',
    cardBgHover: 'linear-gradient(135deg, rgba(237, 233, 254, 0.7) 0%, rgba(255, 255, 255, 0.98) 60%)',
    cardBgOpen: 'linear-gradient(135deg, rgba(237, 233, 254, 0.85) 0%, rgba(255, 255, 255, 0.98) 60%)',
    glow: 'rgba(124, 58, 237, 0.26)',
  },
  {
    // 4: Indigo (Payroll & HRMS)
    accent: '#4f46e5',
    pillBg: 'rgba(79, 70, 229, 0.08)',
    pillBorder: 'rgba(79, 70, 229, 0.22)',
    cardBorder: 'rgba(79, 70, 229, 0.2)',
    cardBorderHover: '#4f46e5',
    cardBg: 'linear-gradient(135deg, rgba(238, 242, 255, 0.75) 0%, rgba(255, 255, 255, 0.95) 60%)',
    cardBgHover: 'linear-gradient(135deg, rgba(224, 231, 255, 0.7) 0%, rgba(255, 255, 255, 0.98) 60%)',
    cardBgOpen: 'linear-gradient(135deg, rgba(224, 231, 255, 0.85) 0%, rgba(255, 255, 255, 0.98) 60%)',
    glow: 'rgba(79, 70, 229, 0.26)',
  },
  {
    // 5: Teal (Modular Choice & Flexibility)
    accent: '#0d9488',
    pillBg: 'rgba(13, 148, 136, 0.08)',
    pillBorder: 'rgba(13, 148, 136, 0.22)',
    cardBorder: 'rgba(13, 148, 136, 0.2)',
    cardBorderHover: '#0d9488',
    cardBg: 'linear-gradient(135deg, rgba(240, 253, 250, 0.75) 0%, rgba(255, 255, 255, 0.95) 60%)',
    cardBgHover: 'linear-gradient(135deg, rgba(204, 251, 241, 0.7) 0%, rgba(255, 255, 255, 0.98) 60%)',
    cardBgOpen: 'linear-gradient(135deg, rgba(204, 251, 241, 0.85) 0%, rgba(255, 255, 255, 0.98) 60%)',
    glow: 'rgba(13, 148, 136, 0.26)',
  },
  {
    // 6: Rose Pink (Demo & Consultations)
    accent: '#db2777',
    pillBg: 'rgba(219, 39, 119, 0.08)',
    pillBorder: 'rgba(219, 39, 119, 0.22)',
    cardBorder: 'rgba(219, 39, 119, 0.2)',
    cardBorderHover: '#db2777',
    cardBg: 'linear-gradient(135deg, rgba(253, 242, 248, 0.75) 0%, rgba(255, 255, 255, 0.95) 60%)',
    cardBgHover: 'linear-gradient(135deg, rgba(252, 231, 243, 0.7) 0%, rgba(255, 255, 255, 0.98) 60%)',
    cardBgOpen: 'linear-gradient(135deg, rgba(252, 231, 243, 0.85) 0%, rgba(255, 255, 255, 0.98) 60%)',
    glow: 'rgba(219, 39, 119, 0.26)',
  },
  {
    // 7: Forest Mint (International / Multi-Region)
    accent: '#059669',
    pillBg: 'rgba(5, 150, 105, 0.08)',
    pillBorder: 'rgba(5, 150, 105, 0.22)',
    cardBorder: 'rgba(5, 150, 105, 0.2)',
    cardBorderHover: '#059669',
    cardBg: 'linear-gradient(135deg, rgba(236, 253, 245, 0.75) 0%, rgba(255, 255, 255, 0.95) 60%)',
    cardBgHover: 'linear-gradient(135deg, rgba(167, 243, 208, 0.6) 0%, rgba(255, 255, 255, 0.98) 60%)',
    cardBgOpen: 'linear-gradient(135deg, rgba(167, 243, 208, 0.75) 0%, rgba(255, 255, 255, 0.98) 60%)',
    glow: 'rgba(5, 150, 105, 0.26)',
  },
];

function FaqCard({ item, index, isOpen, onToggle }) {
  const theme = FAQ_THEMES[index % FAQ_THEMES.length];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl transition-all duration-300 overflow-hidden min-w-0 w-full"
      style={{
        background: isOpen ? theme.cardBgOpen : (isHovered ? theme.cardBgHover : theme.cardBg),
        border: `1.5px solid ${isOpen || isHovered ? theme.cardBorderHover : theme.cardBorder}`,
        boxShadow: isOpen
          ? `0 16px 40px -4px ${theme.glow}, 0 4px 14px -2px ${theme.glow}`
          : isHovered
          ? `0 14px 32px -4px ${theme.glow}, 0 4px 10px -2px ${theme.glow}`
          : `0 8px 24px -4px ${theme.glow}, 0 2px 6px -1px rgba(0,0,0,0.03)`,
        transform: isHovered && !isOpen ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      {/* Left Accent Color Indicator Bar */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 transition-all duration-300 pointer-events-none"
        style={{
          width: isOpen ? '4px' : isHovered ? '3px' : '0px',
          background: theme.accent,
        }}
      />

      <button
        type="button"
        data-faq-btn
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-btn-${index}`}
        className="w-full min-h-20 sm:min-h-24 flex items-center justify-between gap-3 sm:gap-4 py-3.5 sm:py-4 px-4 sm:px-6 text-left cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
          {/* Number Badge with Theme Color */}
          <span
            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold transition-all duration-300"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              background: isOpen ? theme.accent : theme.pillBg,
              color: isOpen ? '#ffffff' : theme.accent,
              border: `1px solid ${isOpen ? theme.accent : theme.pillBorder}`,
              boxShadow: isOpen ? `0 2px 8px ${theme.glow}` : 'none',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Question Text */}
          <span
            className="font-space font-bold text-base lg:text-lg pr-1 leading-snug transition-colors"
            style={{
              color: isOpen ? theme.accent : '#0f172a',
            }}
          >
            {item.q}
          </span>
        </div>

        {/* Action / Chevron Circle with Matching Tint */}
        <div
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            background: isOpen ? theme.accent : theme.pillBg,
            color: isOpen ? '#ffffff' : theme.accent,
            border: `1px solid ${isOpen ? theme.accent : theme.pillBorder}`,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            boxShadow: isOpen ? `0 4px 12px ${theme.glow}` : 'none',
          }}
        >
          <ChevronDown size={18} strokeWidth={2.5} />
        </div>
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        aria-hidden={!isOpen}
        className={`faq-accordion ${isOpen ? 'is-open' : ''}`}
      >
        <div className="faq-accordion-inner">
          <div
            className="px-5 sm:px-6 pb-6 pt-3"
            style={{
              borderTop: `1px solid ${theme.pillBorder}`,
            }}
          >
            <p className="leading-relaxed">
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  const gridRef = useRef(null);
  useSyncedFaqHeights(gridRef, faqs?.items?.length || 0);

  if (!faqs || !faqs.items || faqs.items.length === 0) {
    return null;
  }

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const total = faqs.items.length;
  const midPoint = Math.ceil(total / 2);
  const columns = [
    faqs.items.slice(0, midPoint).map((item, idx) => ({ item, idx })),
    faqs.items.slice(midPoint).map((item, idx) => ({ item, idx: midPoint + idx })),
  ];

  // Structured Data Schema for Google FAQ rich snippet
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.items.map((item) => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  };

  return (
    <section
      id="faqs"
      className="section-padding relative overflow-hidden scroll-mt-20 border-t border-slate-200/60"
      style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #f0fdf8 45%, #f8fafc 100%)',
      }}
    >
      {/* Soft Ambient Colorful Glow Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle 650px at 5% 15%, rgba(0,122,85,0.06) 0%, transparent 70%), radial-gradient(circle 650px at 95% 85%, rgba(37,99,235,0.06) 0%, transparent 70%), radial-gradient(circle 500px at 50% 50%, rgba(234,88,12,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="600" className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#007a55] mx-auto shadow-2xs">
            <Sparkles size={14} className="text-[#007a55]" />
            <span className="section-eyebrow">
              {faqs.badge || 'FREQUENTLY ASKED QUESTIONS'}
            </span>
          </div>
          <h2>
            {renderTitleWithGradient(faqs.title || 'Frequently Asked Questions')}
          </h2>
          {faqs.subtitle && (
            <p className="max-w-2xl mx-auto">
              {faqs.subtitle}
            </p>
          )}
        </div>

        {/* 2 Independent Columns (prevents open cards from stretching opposite column rows) */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
          {columns.map((colItems, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4 sm:gap-5 min-w-0">
              {colItems.map(({ item, idx }) => (
                <FaqCard
                  key={idx}
                  item={item}
                  index={idx}
                  isOpen={openIndex === idx}
                  onToggle={() => toggleAccordion(idx)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
