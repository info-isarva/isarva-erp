'use client';

import React from 'react';
import {
  Utensils,
  Store,
  ShoppingCart,
  ShoppingBag,
  Coffee,
  Boxes,
  Building2,
  Factory,
  Truck,
  Hotel,
  Scissors,
  Briefcase,
  Layers,
} from 'lucide-react';
import { renderTitleWithGradient } from '../lib/render-title';

const ICON_MAP = {
  Utensils,
  Store,
  ShoppingCart,
  ShoppingBag,
  Coffee,
  Boxes,
  Building2,
  Factory,
  Truck,
  Hotel,
  Scissors,
  Briefcase,
  Layers,
};

const INDUSTRY_PALETTE = [
  {
    icon: Utensils,
    accentColor: '#059669',
    accentBg: 'rgba(5, 150, 105, 0.08)',
    borderColor: 'rgba(5, 150, 105, 0.3)',
    glowColor: 'rgba(5, 150, 105, 0.12)',
    hoverBg: 'rgba(5, 150, 105, 0.06)',
    tagBg: 'rgba(5, 150, 105, 0.1)',
    defaultTag: 'F&B',
  },
  {
    icon: Store,
    accentColor: '#ea580c',
    accentBg: 'rgba(234, 88, 12, 0.08)',
    borderColor: 'rgba(234, 88, 12, 0.3)',
    glowColor: 'rgba(234, 88, 12, 0.12)',
    hoverBg: 'rgba(234, 88, 12, 0.06)',
    tagBg: 'rgba(234, 88, 12, 0.1)',
    defaultTag: 'Retail',
  },
  {
    icon: ShoppingCart,
    accentColor: '#2563eb',
    accentBg: 'rgba(37, 99, 235, 0.08)',
    borderColor: 'rgba(37, 99, 235, 0.3)',
    glowColor: 'rgba(37, 99, 235, 0.12)',
    hoverBg: 'rgba(37, 99, 235, 0.06)',
    tagBg: 'rgba(37, 99, 235, 0.1)',
    defaultTag: 'FMCG',
  },
  {
    icon: Coffee,
    accentColor: '#db2777',
    accentBg: 'rgba(219, 39, 119, 0.08)',
    borderColor: 'rgba(219, 39, 119, 0.3)',
    glowColor: 'rgba(219, 39, 119, 0.12)',
    hoverBg: 'rgba(219, 39, 119, 0.06)',
    tagBg: 'rgba(219, 39, 119, 0.1)',
    defaultTag: 'Chains',
  },
  {
    icon: Boxes,
    accentColor: '#9333ea',
    accentBg: 'rgba(147, 51, 234, 0.08)',
    borderColor: 'rgba(147, 51, 234, 0.3)',
    glowColor: 'rgba(147, 51, 234, 0.12)',
    hoverBg: 'rgba(147, 51, 234, 0.06)',
    tagBg: 'rgba(147, 51, 234, 0.1)',
    defaultTag: 'B2B',
  },
  {
    icon: Building2,
    accentColor: '#0d9488',
    accentBg: 'rgba(13, 148, 136, 0.08)',
    borderColor: 'rgba(13, 148, 136, 0.3)',
    glowColor: 'rgba(13, 148, 136, 0.12)',
    hoverBg: 'rgba(13, 148, 136, 0.06)',
    tagBg: 'rgba(13, 148, 136, 0.1)',
    defaultTag: 'Enterprise',
  },
];

function getItemColClass(count, idx) {
  if (count === 5) {
    if (idx < 3) {
      return 'lg:col-span-2 xl:col-span-1';
    }
    if (idx === 3) {
      return 'lg:col-span-2 lg:col-start-2 xl:col-span-1 xl:col-start-auto';
    }
    // 5th item (idx === 4):
    // - On sm (640-1023px): spans both columns and centers nicely
    // - On lg (1024-1279px): spans columns 4-5 in the 6-col grid (paired centered with item 3)
    // - On xl (1280px+): standard 1 column in the 5-col grid
    return 'sm:col-span-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-2 xl:col-span-1';
  }
  if (count === 3 && idx === 2) {
    return 'sm:col-span-2 sm:max-w-md sm:mx-auto md:max-w-none md:mx-0 md:col-span-1';
  }
  return '';
}

function getGridClass(count) {
  if (count <= 2) return 'grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-4 sm:gap-6';
  if (count === 3) return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-4 sm:gap-6';
  if (count === 4) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-4 sm:gap-5';
  if (count === 5) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5 gap-4 sm:gap-5';
  if (count === 6) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5';
  if (count <= 8) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-4 sm:gap-5';
  return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 max-w-7xl mx-auto';
}

export default function IndustriesSection({ industries }) {
  const items = industries?.items || [];
  const count = items.length;
  const gridLayoutClass = getGridClass(count);

  return (
    <section
      id="industries"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #f0fdf8 0%, #f8fafc 50%, #eff6ff 100%)',
      }}
    >
      {/* Subtle decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 40% at 5% 10%, rgba(0,122,85,0.06) 0%, transparent 70%), radial-gradient(ellipse 45% 40% at 95% 90%, rgba(37,99,235,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="600" className="section-header">
          <div className="section-eyebrow">
            {industries?.badge || 'INDUSTRIES WE SERVE'}
          </div>
          <h2>
            {renderTitleWithGradient(industries?.title || 'Trusted by Businesses Across Multiple Industries')}
          </h2>
          <p>
            {industries?.subtitle || 'From restaurants to retail, ISARVA ERP helps businesses of all sizes succeed.'}
          </p>
        </div>

        {/* Dynamic Glassmorphism Grid */}
        <div className={gridLayoutClass}>
          {items.map((ind, idx) => {
            const cfg = INDUSTRY_PALETTE[idx % INDUSTRY_PALETTE.length];
            const IconComponent = (ind.iconName && ICON_MAP[ind.iconName]) || cfg.icon;
            const tagLabel = ind.tag || cfg.defaultTag;
            const colClass = getItemColClass(count, idx);
            const cardDelay = (idx % 3) * 120 + 100;

            return (
              <div
                key={ind.id || idx}
                data-aos="fade-up"
                data-aos-delay={cardDelay}
                data-aos-duration="700"
                className={`group relative flex flex-col items-center text-center rounded-2xl p-5 sm:p-6 cursor-pointer min-w-0 w-full ${colClass}`}
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: `1.5px solid ${cfg.borderColor}`,
                  boxShadow: `0 4px 20px ${cfg.glowColor}, 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)`,
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 16px 40px ${cfg.glowColor}, 0 4px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)`;
                  e.currentTarget.style.borderColor = cfg.accentColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.75)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 20px ${cfg.glowColor}, 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)`;
                  e.currentTarget.style.borderColor = cfg.borderColor;
                }}
              >
                {/* Accent top line */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
                  style={{
                    width: '45%',
                    height: '2.5px',
                    background: `linear-gradient(90deg, transparent, ${cfg.accentColor}, transparent)`,
                  }}
                />

                {/* Icon badge */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: cfg.accentBg,
                    border: `1px solid ${cfg.borderColor}`,
                    color: cfg.accentColor,
                  }}
                >
                  <IconComponent size={26} strokeWidth={2.2} />
                </div>

                {/* Industry name */}
                <h3 className="mb-2 text-center w-full break-words">
                  {ind.name}
                </h3>

                {/* Industry description */}
                {ind.description && (
                  <p className="mb-4 text-center">
                    {ind.description}
                  </p>
                )}

                {/* Sector tag pill */}
                <span
                  className="text-xs font-semibold rounded-full px-2.5 py-0.5 mt-auto"
                  style={{
                    background: cfg.tagBg,
                    color: cfg.accentColor,
                    border: `1px solid ${cfg.borderColor}`,
                    letterSpacing: '0.04em',
                  }}
                >
                  {tagLabel}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom stat strip */}
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="700" className="mt-12 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { value: `${count > 0 ? count : 6}+`, label: 'Industries Served' },
              { value: '1,000+', label: 'Businesses Trust ISARVA' },
              { value: '15+', label: 'Years of Experience' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center px-2 sm:px-4"
              >
                <span className="font-space text-2xl sm:text-3xl font-extrabold text-[#007a55] tracking-tight leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-500 tracking-wide leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

