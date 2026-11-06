'use client';

import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { renderTitleWithGradient } from '../lib/render-title';

export default function TestimonialsSection({ testimonials }) {
  const baseItems = testimonials?.items || [];
  const [isPaused, setIsPaused] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const mobileScrollRef = useRef(null);

  // Repeat items for seamless continuous looping on desktop
  const loopedItems = [...baseItems, ...baseItems, ...baseItems];

  // Helper for image path
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http')) return imagePath;
    return imagePath.startsWith('/') ? imagePath : '/' + imagePath;
  };

  // Sync active dot indicator on mobile hand swiping
  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    if (clientWidth === 0) return;
    const firstCard = mobileScrollRef.current.children[0];
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : clientWidth * 0.88;
    const newIdx = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(Math.max(newIdx, 0), baseItems.length - 1));
  };

  const scrollToSlide = (idx) => {
    if (!mobileScrollRef.current) return;
    const cards = mobileScrollRef.current.children;
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveSlide(idx);
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(activeSlide - 1, 0);
    scrollToSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(activeSlide + 1, baseItems.length - 1);
    scrollToSlide(nextIdx);
  };

  return (
    <section id="testimonials" className="relative section-padding bg-gradient-to-b from-[#f0f8f4] via-[#e7f4ee] to-[#f2f9f5] border-y border-[#d3eade]/70 overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            {testimonials?.badge || 'WHAT OUR CUSTOMERS SAY'}
          </div>
          <h2>
            {renderTitleWithGradient(testimonials?.title || 'Trusted by Growing Businesses')}
          </h2>
          <p>
            {testimonials?.subtitle || 'Join hundreds of satisfied businesses using ISARVA ERP.'}
          </p>
        </div>
      </div>

      {/* 1. MOBILE VIEW: Touch-Swipeable Hand Slider with Snap-Scroll */}
      <div className="md:hidden relative w-full">
        {/* Horizontal Swipeable Track */}
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 py-2 overscroll-x-contain no-scrollbar touch-auto"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {baseItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[86vw] max-w-[340px] shrink-0 snap-center"
            >
              <div className="bg-white rounded-2xl border border-emerald-950/8 p-5 sm:p-6 flex flex-col items-center text-center shadow-xs h-full">
                {/* Circular Store / Restaurant Photo Avatar - Centered at Top */}
                <div className="w-14 h-14 min-w-[56px] min-h-[56px] max-w-[56px] max-h-[56px] rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-xs bg-slate-100 relative mb-3 mx-auto">
                  {item.avatarImage ? (
                    <img
                      src={getImageUrl(item.avatarImage)}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover rounded-full block"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextSibling) {
                          e.currentTarget.nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}
                  <div
                    className="w-full h-full bg-gradient-to-tr from-[#007a55] to-emerald-500 text-white font-bold items-center justify-center text-sm"
                    style={{ display: item.avatarImage ? 'none' : 'flex' }}
                  >
                    {item.initials || 'IS'}
                  </div>
                </div>

                {/* Testimonial Content - Centered */}
                <div className="w-full flex flex-col items-center text-center">
                  <h3 className="text-center">
                    {item.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5 text-center">
                    {item.location}
                  </div>

                  {/* 5 Rating Stars - Centered */}
                  <div className="flex items-center justify-center gap-1 my-2">
                    {[...Array(item.rating || 5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        size={14}
                        className="fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="italic text-center">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Pagination Dots & Touch Arrows */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeSlide === 0}
            aria-label="Previous testimonial"
            className="w-8 h-8 rounded-full bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {baseItems.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => scrollToSlide(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === dotIdx
                    ? 'w-6 bg-[#007a55]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={activeSlide === baseItems.length - 1}
            aria-label="Next testimonial"
            className="w-8 h-8 rounded-full bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-slate-600 disabled:opacity-30 disabled:pointer-events-none active:scale-95 transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* 2. DESKTOP VIEW: Continuous Infinite Marquee Loop Viewport */}
      <div
        className="hidden md:block relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 lg:w-28 bg-gradient-to-r from-[#eff7f3] via-[#eff7f3]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 lg:w-28 bg-gradient-to-l from-[#eff7f3] via-[#eff7f3]/80 to-transparent z-10" />

        {/* Continuous Looping Track */}
        <div
          className="animate-continuous-loop py-3 px-4 flex gap-6"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {loopedItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[340px] lg:w-[420px] shrink-0"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-emerald-950/8 p-6 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#007a55]/30 hover:-translate-y-1.5 transition-all duration-300 h-full">
                
                {/* Circular Store / Restaurant Photo Avatar - Centered at Top */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 min-w-[56px] min-h-[56px] sm:min-w-[64px] sm:min-h-[64px] max-w-[56px] max-h-[56px] sm:max-w-[64px] sm:max-h-[64px] rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-xs bg-slate-100 relative mb-3.5 mx-auto">
                  {item.avatarImage ? (
                    <img
                      src={getImageUrl(item.avatarImage)}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover rounded-full block"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextSibling) {
                          e.currentTarget.nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}
                  <div
                    className="w-full h-full bg-gradient-to-tr from-[#007a55] to-emerald-500 text-white font-bold items-center justify-center text-sm"
                    style={{ display: item.avatarImage ? 'none' : 'flex' }}
                  >
                    {item.initials || 'IS'}
                  </div>
                </div>

                {/* Testimonial Content - Centered */}
                <div className="w-full flex flex-col items-center text-center">
                  <h3 className="text-center">
                    {item.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5 text-center">
                    {item.location}
                  </div>

                  {/* 5 Rating Stars - Centered */}
                  <div className="flex items-center justify-center gap-1 my-2">
                    {[...Array(item.rating || 5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        size={15}
                        className="fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="italic text-center">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
