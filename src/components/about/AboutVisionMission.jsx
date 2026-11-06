'use client';

import React from 'react';
import { TrendingUp, Cpu } from 'lucide-react';

export default function AboutVisionMission() {
  return (
    <section className="section-padding bg-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">

          {/* Our Vision */}
          <div className="bg-[#1a1f24] text-white p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden section-animate">
            <div className="absolute top-0 right-0 p-10 opacity-10 text-[#10b981] pointer-events-none">
              <TrendingUp className="w-48 h-48 md:w-64 md:h-64" />
            </div>
            <div className="relative z-10">
              <span className="text-[#10b981] font-black tracking-[0.2em] capitalize text-xs sm:text-sm mb-2 lg:mb-6 block">
                Future Outlook
              </span>
              <h2 className="text-white mb-6 md:mb-8 capitalize">
                Our Vision
              </h2>
              <p className="text-lg sm:text-xl text-[#FDF8F2]/80 leading-relaxed font-light">
                To empower global enterprises through transformative technology — driving progress, enriching experiences, and enabling smarter, sustainable growth.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div
            className="bg-[#10b981] text-white p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden section-animate"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="absolute top-0 right-0 p-10 opacity-20 pointer-events-none">
              <Cpu className="w-48 h-48 md:w-64 md:h-64" />
            </div>
            <div className="relative z-10">
              <span className="text-[#1a1f24] font-black tracking-[0.2em] capitalize text-xs sm:text-sm mb-2 lg:mb-6 block">
                Day-to-day Execution
              </span>
              <h2 className="text-white mb-6 md:mb-8 capitalize">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
                We deliver scalable, innovative tech solutions that help enterprises and startups achieve growth, efficiency, and impact—driven by expertise and a commitment to client success.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
