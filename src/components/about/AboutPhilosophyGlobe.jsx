'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPhilosophyGlobe() {
  return (
    <section className="section-padding bg-[#FDF8F2] overflow-hidden">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="w-full lg:w-1/2 section-animate lg:text-left text-center">
            <h2 className="text-[#1a1f24] mb-8 capitalize">
              Technology should create opportunity —{' '}
              <span className="italic text-[#10b981]">not just efficiency.</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>
                As a people-first, innovation-led company, we turn complexity into clarity. Whether it’s building bespoke enterprise platforms, driving cloud adoption, or advancing intelligent automation, every solution is crafted by aligning deep technical expertise with a sharp understanding of strategic business goals.
              </p>
              <p>
                We’ve built a culture where innovation fuels impact: nurturing talent from underserved regions, enabling meaningful careers, and opening doors for women and young professionals ready to shape the digital future.
              </p>
              <p className="font-bold text-[#1a1f24]">
                Global in reach. Grounded in values. Driven by purpose.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
              <Link
                href="/contact"
                prefetch={false}
                className="press-illusion-btn-orange bg-orange-500 text-white w-fit font-bold px-6 py-2 text-base flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 9"
                  className="h-2 w-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="/solutions"
                prefetch={false}
                className="press-illusion-btn-orange bg-orange-500 text-white w-fit font-bold px-6 py-2 text-base flex items-center space-x-2"
              >
                <span>Our Solutions</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 9"
                  className="h-2 w-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Globe Visual */}
          <div className="w-full lg:w-1/2 relative section-animate" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-[#10b981]/10">
              <div className="pb-[100%] lg:pb-[95%]" />
              <div className="absolute inset-0">
                <Image
                  src="/globe-final-hd.png"
                  alt="Digital Impact"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
