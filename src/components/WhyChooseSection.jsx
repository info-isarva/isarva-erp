'use client';

import React, { useState } from 'react';
import {
  Layers,
  ShieldCheck,
  Store,
  BarChart3,
  TrendingUp,
  Cloud,
  Lock,
  Zap,
  CheckCircle2,
  Users,
  Smartphone,
  Sparkles,
  Cpu,
  Clock,
  Database,
  Headphones,
  Activity,
} from 'lucide-react';
import { renderTitleWithGradient } from '../lib/render-title';

const ICON_MAP = {
  Layers,
  ShieldCheck,
  Store,
  BarChart3,
  TrendingUp,
  Cloud,
  Lock,
  Zap,
  CheckCircle2,
  Users,
  Smartphone,
  Sparkles,
  Cpu,
  Clock,
  Database,
  Headphones,
};

const MODULE_NODES = [
  { name: 'POS', label: 'Restaurant POS', dot: 'bg-emerald-500', border: 'border-emerald-200', bg: 'bg-emerald-50/90', text: 'text-emerald-800' },
  { name: 'BillSoft', label: 'Accounting', dot: 'bg-blue-500', border: 'border-blue-200', bg: 'bg-blue-50/90', text: 'text-blue-800' },
  { name: 'HRMS', label: 'Payroll & HR', dot: 'bg-purple-500', border: 'border-purple-200', bg: 'bg-purple-50/90', text: 'text-purple-800' },
  { name: 'CRM', label: 'Sales & Leads', dot: 'bg-amber-500', border: 'border-amber-200', bg: 'bg-amber-50/90', text: 'text-amber-800' },
];

export default function WhyChooseSection({ whyChoose }) {
  const items = whyChoose?.items || [];
  const [activeIdx, setActiveIdx] = useState(null);

  const getIcon = (iconName) => {
    const Component = ICON_MAP[iconName] || ShieldCheck;
    return <Component size={22} strokeWidth={2.2} />;
  };

  // Split 6 items into Left (0, 1, 2) and Right (3, 4, 5) for desktop constellation
  const leftItems = items.slice(0, 3);
  const rightItems = items.slice(3, 6);

  const activeItem = activeIdx !== null ? items[activeIdx] : null;

  return (
    <section
      id="why-choose"
      className="relative section-padding bg-gradient-to-b from-[#f0f8f4] via-[#e7f4ee] to-[#f2f9f5] border-y border-[#d3eade]/70 overflow-hidden scroll-mt-20 section-ecosystem"
    >
      <span id="features" className="absolute -top-24" />

      {/* Atmospheric Soft Brand Glow Orbs */}
      <div className="absolute -top-36 left-1/4 w-[600px] h-[600px] bg-emerald-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 right-1/4 w-[600px] h-[600px] bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Blueprint Mesh */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#007a55 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="600" className="section-header">
          <div className="section-eyebrow">
            {whyChoose?.badge || 'A FULLY CONNECTED ECOSYSTEM'}
          </div>

          <h2>
            {renderTitleWithGradient(whyChoose?.title || 'A Fully Connected Ecosystem')}
          </h2>

          <p className="max-w-2xl mx-auto">
            {whyChoose?.subtitle ||
              'All your modules work together, giving you real-time data and complete control across your business.'}
          </p>
        </div>

        {/* =========================================================================
            DESKTOP CONSTELLATION LAYOUT (lg & above)
            ========================================================================= */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 xl:gap-8 items-center mt-10 xl:mt-14 relative">

          {/* LEFT COLUMN: Nodes 0, 1, 2 */}
          <div className="lg:col-span-4 flex flex-col gap-5 xl:gap-6 z-20">
            {leftItems.map((item, idx) => {
              const realIdx = idx;
              const isHovered = activeIdx === realIdx;

              return (
                <div
                  key={item.id || realIdx}
                  onMouseEnter={() => setActiveIdx(realIdx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  className={`card-ecosystem relative rounded-2xl p-5 xl:p-6 transition-all duration-300 cursor-pointer bg-white border ${
                    isHovered
                      ? 'border-[#007a55]/70 shadow-[0_24px_50px_-4px_rgba(0,122,85,0.35),0_8px_20px_-2px_rgba(0,122,85,0.18)] -translate-x-1'
                      : 'border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.22),0_4px_14px_-2px_rgba(0,122,85,0.12)] hover:border-[#007a55]/60 hover:shadow-[0_24px_50px_-4px_rgba(0,122,85,0.35)]'
                  } group`}
                >
                  {/* Connection Indicator Stub towards Center Hub */}
                  <div
                    className={`hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-[2px] transition-all duration-300 ${
                      isHovered ? 'bg-[#007a55] shadow-xs' : 'bg-emerald-300/60'
                    }`}
                  />

                  {/* Header Row: Icon + Node Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#007a55] text-white scale-105 shadow-md shadow-emerald-500/25'
                          : 'bg-[#dcf5e9] text-[#007a55] group-hover:bg-[#007a55] group-hover:text-white'
                      }`}
                    >
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-emerald-800">
                      0{realIdx + 1}
                    </span>
                  </div>

                  {/* Semantic Heading & Paragraph */}
                  <h3 className="mb-2">
                    <span>{item.title}</span>
                  </h3>
                  <p>
                    {item.description}
                  </p>

                  {/* Micro Synced Status Footer */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-mono font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-emerald-500 animate-ping' : 'bg-emerald-500'}`} />
                      Live Sync
                    </span>
                    <span className="text-slate-400 font-mono text-xs">
                      Zero Duplication
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER COLUMN: Central ISARVA Core Engine Hub */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-6 z-10">
            {/* Concentric Animated Pulse Wave Rings */}
            <div className="absolute w-[360px] xl:w-[420px] aspect-square rounded-full border border-emerald-400/30 pointer-events-none animate-ecosystem-pulse-1" />
            <div className="absolute w-[360px] xl:w-[420px] aspect-square rounded-full border border-teal-400/25 pointer-events-none animate-ecosystem-pulse-2" />

            {/* Slow Spinning Radar Trace Ring */}
            <div className="absolute w-[320px] xl:w-[370px] aspect-square rounded-full border border-dashed border-[#007a55]/25 pointer-events-none animate-ecosystem-spin" />

            {/* 4 Connected Satellite Module Badges */}
            <div className="grid grid-cols-2 gap-2 w-max mx-auto mb-4 relative z-20">
              {MODULE_NODES.map((mod, i) => (
                <div
                  key={i}
                  className={`inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-lg ${mod.bg} border ${mod.border} shadow-2xs backdrop-blur-sm text-xs font-semibold ${mod.text} transition-all duration-300 hover:scale-105 whitespace-nowrap min-w-[88px]`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${mod.dot} shrink-0 animate-pulse`} />
                  <span>{mod.name}</span>
                </div>
              ))}
            </div>

            {/* Central Brand Core with ISARVA Emblem */}
            <div
              className={`relative w-44 xl:w-52 aspect-square rounded-3xl bg-gradient-to-br from-[#007a55] via-[#006949] to-[#034d36] text-white border-2 ${
                activeIdx !== null
                  ? 'border-emerald-300 shadow-[0_12px_45px_rgba(0,122,85,0.35)] scale-105'
                  : 'border-emerald-400/50 shadow-[0_10px_35px_rgba(0,122,85,0.22)]'
              } flex flex-col items-center justify-center p-5 text-center transition-all duration-300 group select-none`}
            >
              {/* ISARVA Brand Emblem */}
              <div className="w-14 h-14 xl:w-16 xl:h-16 rounded-2xl bg-white/15 border border-white/20 p-2.5 flex items-center justify-center mb-2.5 shadow-inner group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/favicon.png"
                  alt="ISARVA Logo"
                  className="w-full h-full object-contain brightness-0 invert drop-shadow"
                />
              </div>

              <div className="text-sm font-bold text-white tracking-wide">
                ISARVA ERP
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-200 mt-0.5">
                Central Platform
              </div>
            </div>

            {/* Live Readout Telemetry Box */}
            <div className="mt-5 w-full max-w-[340px] px-4 py-3 rounded-xl bg-white/95 border border-emerald-200/90 shadow-md backdrop-blur-md text-center transition-all duration-300">
              <div className="text-xs font-mono font-semibold text-[#007a55] flex items-center justify-center gap-1.5 mb-0.5">
                <Activity size={13} className="animate-pulse" />
                {activeItem ? `Focused: Node 0${activeIdx + 1}` : 'Unified Data Mesh'}
              </div>
              <div className="text-xs font-medium text-slate-700 truncate">
                {activeItem ? activeItem.title : 'All 6 Business Modules Linked in Real-Time'}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Nodes 3, 4, 5 */}
          <div className="lg:col-span-4 flex flex-col gap-5 xl:gap-6 z-20">
            {rightItems.map((item, idx) => {
              const realIdx = idx + 3;
              const isHovered = activeIdx === realIdx;

              return (
                <div
                  key={item.id || realIdx}
                  onMouseEnter={() => setActiveIdx(realIdx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  className={`card-ecosystem relative rounded-2xl p-5 xl:p-6 transition-all duration-300 cursor-pointer bg-white border ${
                    isHovered
                      ? 'border-[#007a55]/70 shadow-[0_24px_50px_-4px_rgba(0,122,85,0.35),0_8px_20px_-2px_rgba(0,122,85,0.18)] translate-x-1'
                      : 'border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.22),0_4px_14px_-2px_rgba(0,122,85,0.12)] hover:border-[#007a55]/60 hover:shadow-[0_24px_50px_-4px_rgba(0,122,85,0.35)]'
                  } group`}
                >
                  {/* Connection Indicator Stub towards Center Hub */}
                  <div
                    className={`hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-[2px] transition-all duration-300 ${
                      isHovered ? 'bg-[#007a55] shadow-xs' : 'bg-emerald-300/60'
                    }`}
                  />

                  {/* Header Row: Icon + Node Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#007a55] text-white scale-105 shadow-md shadow-emerald-500/25'
                          : 'bg-[#dcf5e9] text-[#007a55] group-hover:bg-[#007a55] group-hover:text-white'
                      }`}
                    >
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-emerald-800">
                      0{realIdx + 1}
                    </span>
                  </div>

                  {/* Semantic Heading & Paragraph */}
                  <h3 className="mb-2">
                    <span>{item.title}</span>
                  </h3>
                  <p>
                    {item.description}
                  </p>

                  {/* Micro Synced Status Footer */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-mono font-medium">
                      <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-emerald-500 animate-ping' : 'bg-emerald-500'}`} />
                      Live Sync
                    </span>
                    <span className="text-slate-400 font-mono text-xs">
                      100% Real-Time
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* =========================================================================
            TABLET & MOBILE RESPONSIVE LAYOUT (< 1024px)
            ========================================================================= */}
        <div className="lg:hidden mt-8 space-y-6">

          {/* Responsive Hub Banner at Top */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-[#007a55] via-[#006949] to-[#034d36] text-white border border-emerald-300/40 shadow-xl flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 p-2.5 flex items-center justify-center shrink-0 shadow-inner">
              <img
                src="/favicon.png"
                alt="ISARVA Logo"
                className="w-full h-full object-contain brightness-0 invert drop-shadow"
              />
            </div>
            <div className="flex-1">
              <div className="text-xs font-mono text-emerald-200 uppercase tracking-widest">
                ISARVA ERP
              </div>
              <div className="text-base font-bold text-white mt-0.5">
                Central Platform Architecture
              </div>
              <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                {MODULE_NODES.map((mod, i) => (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${mod.bg} border ${mod.border} text-xs font-semibold ${mod.text}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${mod.dot}`} />
                    {mod.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Responsive Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {items.map((item, idx) => (
              <div
                key={item.id || idx}
                className="card-ecosystem rounded-2xl p-5 bg-white border border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.22),0_4px_14px_-2px_rgba(0,122,85,0.12)] hover:border-[#007a55]/70 hover:shadow-[0_24px_50px_-4px_rgba(0,122,85,0.35),0_8px_20px_-2px_rgba(0,122,85,0.18)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#dcf5e9] text-[#007a55] flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mb-2">
                  <span>{item.title}</span>
                </h3>

                <p>
                  {item.description}
                </p>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-mono font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Synced
                  </span>
                  <span className="text-slate-400 font-mono text-xs">
                    Real-Time
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


