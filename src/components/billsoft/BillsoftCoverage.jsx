'use client';

import React from 'react';
import { ZoomIn, Layers, ShoppingBag, Store, Factory, Truck, Briefcase } from 'lucide-react';

export default function BillsoftCoverage({ onOpenLightbox }) {
  const sectors = [
    {
      title: 'Wholesale & Distribution',
      icon: <Layers className="w-5 h-5 text-blue-600" />,
      features: 'Batch pricing tiers, credit periods, transporter LR tracking, and bulk volume discounts.',
    },
    {
      title: 'Retail & Supermarkets',
      icon: <Store className="w-5 h-5 text-emerald-600" />,
      features: 'High-speed barcode checkout, thermal 80mm receipts, customer loyalty points, and cash registers.',
    },
    {
      title: 'Manufacturing & Assembly',
      icon: <Factory className="w-5 h-5 text-indigo-600" />,
      features: 'Multi-level Bill of Materials (BOM), production work orders, scrap tracking, and finished goods costing.',
    },
    {
      title: 'Logistics & Fleet',
      icon: <Truck className="w-5 h-5 text-amber-600" />,
      features: 'E-Way bill automation, vehicle number updates, consolidated consignments, and multi-state transit.',
    },
    {
      title: 'IT & Professional Services',
      icon: <Briefcase className="w-5 h-5 text-purple-600" />,
      features: 'AMC contracts, milestone billing, digital signed tax invoices, and automated WhatsApp reminders.',
    },
  ];

  return (
    <section id="coverage" className="section-padding bg-white border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
            <span className="section-eyebrow text-[#2563eb]">360° ENTERPRISE COVERAGE</span>
          </div>
          <h2 className="mb-4">
            What BillSoft Covers Across Your Organization
          </h2>
          <p>
            An interconnected operational matrix bringing procurement, warehouse storage, POS billing, tax compliance, and executive accounting into one seamless system.
          </p>
        </div>

        {/* Interactive Architecture Graphic Showcase */}
        <div className="max-w-5xl mx-auto mb-14">
          <div
            className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-200/90 bg-white shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-300 p-2 sm:p-4"
            onClick={() => onOpenLightbox('/images/billsoft/what-billsoft-covers.png', 'BillSoft Complete Operational and ERP Coverage Matrix')}
          >
            {/* Desktop View Image */}
            <div className="hidden md:block">
              <img
                src="/images/billsoft/what-billsoft-covers.png"
                alt="What BillSoft Covers ERP Matrix"
                className="w-full h-auto rounded-xl object-contain group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Mobile-Optimized View Image */}
            <div className="block md:hidden">
              <img
                src="/images/billsoft/what-covers-mobile.png"
                alt="What BillSoft Covers Mobile Diagram"
                className="w-full h-auto rounded-xl object-contain group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Hover Zoom Pill */}
            <div className="absolute bottom-6 right-6 bg-slate-950/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
              <ZoomIn size={14} className="text-blue-400" />
              <span>Click to Enlarge Diagram</span>
            </div>
          </div>
        </div>

        {/* 5 Industry Sector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-gray-200/90 shadow-2xs hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-3.5 shadow-2xs">
                {sec.icon}
              </div>
              <h4 className="mb-2">
                {sec.title}
              </h4>
              <p>
                {sec.features}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
