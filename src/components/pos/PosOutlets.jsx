'use client';

import React from 'react';

export default function PosOutlets() {
  const outlets = [
    { title: 'Food Courts & Canteens', image: '/images/pos/outlets/outlet-food-court.jpg' },
    { title: 'Café & Coffee Shops', image: '/images/pos/outlets/outlet-cafe.jpg' },
    { title: 'Fine Dining', image: '/images/pos/outlets/outlet-fine-dine.jpg' },
    { title: 'Bar & Lounges', image: '/images/pos/outlets/outlet-bar.jpg' },
    { title: 'Pizzerias', image: '/images/pos/outlets/outlet-pizza.jpg' },
    { title: 'QSR & Fast Food', image: '/images/pos/outlets/outlet-qsr.jpg' },
    { title: 'Desserts & Sweets', image: '/images/pos/outlets/outlet-desserts.jpg' },
    { title: 'Large Multi-Chains', image: '/images/pos/outlets/outlet-chains.jpg' },
    { title: 'Bakery & Pastry', image: '/images/pos/outlets/outlet-bakery.jpg' },
    { title: 'Cloud Kitchens', image: '/images/pos/outlets/outlet-cloud-kitchen.jpg' },
  ];

  return (
    <section id="outlets" className="section-padding bg-slate-50/70 border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-amber-500/10 border border-emerald-300/60 text-[#059669] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            Tailored Formats
          </div>
          <h2 className="mb-4 capitalize tracking-tight">
            Built for Every Type of{' '}
            <span className="bg-gradient-to-r from-[#059669] via-[#007a55] to-[#0d9488] bg-clip-text text-transparent">
              Food Business
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Whether you operate a single boutique café counter or a 50-branch restaurant franchise, ISARVA Restaurant POS adapts to your floor structure, menu, and service workflow.
          </p>
        </div>

        {/* 10 Outlets Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {outlets.map((outlet, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-emerald-100 shadow-md mb-4 bg-emerald-50 shrink-0">
                <img
                  src={outlet.image}
                  alt={outlet.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 block"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/images/pos-card-preview.jpg';
                  }}
                />
              </div>
              <h4 className="line-clamp-2">
                {outlet.title}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
