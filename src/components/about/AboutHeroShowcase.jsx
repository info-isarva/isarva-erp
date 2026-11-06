'use client';

import React from 'react';
import AboutHeroSlider from './AboutHeroSlider';

export default function AboutHeroShowcase() {
  return (
    <section className="relative section-padding-sm overflow-hidden bg-gradient-to-b from-[#F0F7F4] to-[#FDF8F2]">
      {/* Radiant ambient glow orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10b981] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-[#84cc16] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="hero-noise-overlay" />

      <div className="site-container relative z-10 text-center">
        {/* Eyebrow & Main Headings */}
        <div className="inline-flex flex-col items-center mb-6 md:mb-10 section-animate">
          <span className="text-[#10b981] font-black tracking-[0.2em] capitalize text-xs sm:text-sm mb-4">
            Isarva Infotech
          </span>
          <h1 className="max-w-5xl mb-6">
            Precision in <span className="italic text-[#10b981] font-bold">Technology.</span>
            <br />
            Purpose in <span className="italic text-[#10b981] font-bold">Impact.</span>
          </h1>
          <p className="mt-2 text-base lg:text-xl text-[#53606b] max-w-3xl mx-auto leading-relaxed font-medium">
            At Isarva Infotech, we are more than an IT consulting firm — we are a strategic technology partner and a catalyst for progress in an ever-evolving digital world.
          </p>
        </div>

        {/* Cloned Hero Slider */}
        <AboutHeroSlider />
      </div>
    </section>
  );
}
