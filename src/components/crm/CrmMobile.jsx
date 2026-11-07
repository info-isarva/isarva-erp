'use client';

import React from 'react';

export default function CrmMobile({ onOpenLightbox }) {
  return (
    <section id="mobile-crm" className="section-padding bg-white border-b border-gray-200 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50/80 via-white to-sky-50/80 border border-gray-200/90 p-6 sm:p-8 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div
              data-aos="fade-right"
              data-aos-duration="700"
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-[#008CDB] font-bold text-xs mb-4 font-heading">
                Mobile Companion
              </div>

              <h2 className="mb-4">
                Run Your Sales Pipeline{' '}
                <span className="bg-gradient-to-r from-[#008CDB] via-indigo-600 to-[#0284C7] bg-clip-text text-transparent">
                  on the Go
                </span>
              </h2>

              <p className="mb-8 max-w-xl">
                Empower field reps to log client visits, update deal milestones, access customer contact history, and receive instant push notifications for new leads anywhere.
              </p>

            </div>

            {/* Right Graphic Mockup */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="800"
              className="lg:col-span-5 flex justify-center"
            >
              <div
                className="relative cursor-zoom-in group max-w-[380px]"
                onClick={() => onOpenLightbox?.('/images/crm/mockups/CRM-mobile-mockup.png', 'Isarva CRM Mobile App')}
                title="Click to enlarge"
              >
                <img
                  src="/images/crm/mockups/CRM-mobile-mockup.png"
                  alt="Isarva CRM Mobile App"
                  className="w-full h-auto drop-shadow-xl transition-transform duration-300 group-hover:scale-105 object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
