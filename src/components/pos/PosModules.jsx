'use client';

import React from 'react';
import { ZoomIn, Check } from 'lucide-react';

export default function PosModules({ onOpenLightbox }) {
  const modules = [
    {
      num: '01',
      tag: 'Floor Management',
      title: 'Live Floor Plan — Know Which Tables Are Free, Dining, or Billing',
      description: 'Step 1 of every dine-in service: open the visual floor view. Tables are grouped by dining area with live color status so hosts and floor managers never guess what is happening in the room.',
      pills: ['Main Hall', 'Family Section', 'Outdoor Patio', 'VIP Rooms'],
      bullets: [
        'Custom layout zones to match your exact restaurant floor architecture',
        'Live color indicators: Green (Free), Amber (Occupied), Rose (Billing)',
        'Table locking prevents two staff members from firing orders on the same ticket',
        'Guest count tracking for accurate cover turnover and average spend statistics',
      ],
      image: '/images/pos/feature-floor-tables.png',
      alt: 'Restaurant Floor Plan and Table Status View',
      reverse: false,
    },
    {
      num: '02',
      tag: 'Counter & Cashier',
      title: 'Counter Billing — Split Checks, Multi-Tender, VAT & GST Compliant',
      description: 'When guests are ready to settle, cashiers handle everything from the same unified order screen: split by guest or item, apply promotional coupons, and print tax receipts instantly.',
      pills: ['Split By Item', 'Multi-Tender Cash/Card', 'ZATCA & GST Ready', 'Digital QR Menu'],
      bullets: [
        'Rapid item search with category filters and modifier customizations',
        'Flexible bill splitting by individual diner, specific items, or equal shares',
        'Integrated receipt printing with 15% VAT / GST QR codes and audit trail',
        'Cash drawer opening tracking and shift-end cashier float reconciliation',
      ],
      image: '/images/pos/smart-billing-counter.jpg',
      alt: 'Cashier Counter Billing Screen and Receipt Printer',
      reverse: true,
    },
    {
      num: '03',
      tag: 'Raw Materials & Stock',
      title: 'Real-Time Inventory — Catch Low Stock Before Service Runs Out',
      description: 'Kitchen and back-office teams monitor ingredient levels in real time. Dynamic alerts flag low stock before you run out during a busy Friday dinner rush.',
      pills: ['Ingredient BOM', 'Low Stock Alerts', 'Vendor Reordering', 'Wastage Logging'],
      bullets: [
        'Automatic ingredient-level deduction driven by menu item recipe BOMs',
        'Configurable minimum thresholds with visual low-stock warning banners',
        'Closing shift variance audits to prevent food shrinkage and unexplained losses',
        'Direct purchase order generation and vendor supplier contact records',
      ],
      image: '/images/pos/smart-inventory-counter.jpg',
      alt: 'Restaurant Inventory and Stock Control Management',
      reverse: false,
    },
    {
      num: '04',
      tag: 'Executive Reporting',
      title: 'Sales & Shift BI — Real-Time Figures Before You Close the Till',
      description: 'Owners and managers see the exact numbers cashiers collect: hourly sales volume, cover turnover speed, bestselling menu dishes, and gross margin trends.',
      pills: ['Shift Day-Close', 'Hourly Footfall', 'Bestseller Velocity', 'Gross Margin Trends'],
      bullets: [
        'Automated X-Reports and Z-Reports generated at shift close with one tap',
        'Interactive charts showing sales distribution across dine-in, takeaway, and delivery',
        'Dish profitability analysis highlighting top performers versus deadweight menu items',
        'Multi-terminal consolidation so owners monitor total revenue across registers',
      ],
      image: '/images/pos/smart-reports.png',
      alt: 'Sales Analytics Dashboard and Shift Performance Reports',
      reverse: true,
    },
    {
      num: '05',
      tag: 'Delivery Aggregators',
      title: 'Online Orders — HungerStation, Jahez, Keeta on One Kanban',
      description: 'Stop juggling 4 different delivery tablets. Incoming delivery orders arrive on a single interactive Kanban board with direct kitchen routing and courier dispatch coordination.',
      pills: ['HungerStation', 'Jahez', 'Keeta', 'Swiggy & Zomato', 'Direct Web Store'],
      bullets: [
        'Accept or reject third-party delivery orders with a single touch',
        'Visual status tracking: New → Kitchen Prep → Ready for Courier → Dispatched',
        'Prepaid delivery totals sync automatically into cashier day-close accounting',
        'Unified menu pricing and item 86ing (marking out-of-stock) across all apps at once',
      ],
      image: '/images/pos/smart-online-orders.jpg',
      alt: 'Online Delivery Aggregator Kanban Board',
      reverse: false,
    },
  ];

  return (
    <section id="modules" className="section-padding bg-white border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-amber-500/10 border border-emerald-300/60 text-[#059669] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            Module Deep-Dive
          </div>
          <h2 className="mb-4 capitalize tracking-tight">
            One Connected System for Your Entire{' '}
            <span className="bg-gradient-to-r from-[#059669] via-[#007a55] to-[#0d9488] bg-clip-text text-transparent">
              Service Flow
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            From the visual floor plan to the printed receipt and backend inventory ledger—no duplicate data entry between screens.
          </p>
        </div>

        {/* Alternating Deep-Dive Modules */}
        <div className="space-y-16 lg:space-y-24">
          {modules.map((m, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                m.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Information Column */}
              <div className={`lg:col-span-6 flex flex-col items-start ${m.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 mb-4">
                  <span>{m.num}</span>
                  <span>·</span>
                  <span>{m.tag}</span>
                </div>

                <h3 className="mb-3.5 leading-snug">
                  {m.title}
                </h3>

                <p className="mb-6">
                  {m.description}
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {m.pills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Checkmarked Bullets */}
                <ul className="space-y-2.5 w-full">
                  {m.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-left">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold text-slate-800 leading-snug">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphic / Screenshot Column */}
              <div className={`lg:col-span-6 flex justify-center ${m.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                <div
                  className="relative cursor-pointer group w-full rounded-2xl overflow-hidden border border-gray-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-900"
                  onClick={() => onOpenLightbox(m.image, m.alt)}
                  title="Click to enlarge"
                >
                  <img
                    src={m.image}
                    alt={m.alt}
                    className="w-full h-auto aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500 block"
                    onError={(e) => {
                      e.currentTarget.src = '/images/pos-card-preview.jpg';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25">
                    <span className="px-4 py-2 rounded-xl bg-white/95 text-[#059669] text-xs font-bold shadow-lg border border-emerald-100 inline-flex items-center gap-1.5">
                      <ZoomIn size={14} />
                      <span>Click to Enlarge</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
