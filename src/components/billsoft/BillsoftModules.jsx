'use client';

import React from 'react';
import { ZoomIn, Check } from 'lucide-react';

export default function BillsoftModules({ onOpenLightbox }) {
  const modules = [
    {
      num: '01',
      tag: 'Logistics & Dispatch',
      title: 'Automated E-Way Bill Lifecycle — 1-Click Generation Directly From Invoices',
      description: 'Generate Part A and Part B E-Way bills simultaneously while drafting sales invoices. Update vehicle numbers, manage transporter IDs, and extend validity effortlessly without ever logging into government portals separately.',
      pills: ['Direct NIC Integration', 'Vehicle Number Update', 'Consolidated E-Way Bills', 'Transit Validity Extension'],
      bullets: [
        '1-Click conversion from tax invoice to official government E-Way Bill',
        'Real-time vehicle update and transporter handover tracking without data re-entry',
        'Instant cancellation within statutory 24-hour window if shipment is delayed',
        'Consolidated E-Way bill generation for multiple consignees in a single vehicle',
      ],
      image: '/images/billsoft/ewaybill.png',
      alt: 'BillSoft E-Way Bill Automation and Vehicle Update Screen',
      reverse: false,
    },
    {
      num: '02',
      tag: 'IRP Compliance',
      title: 'Statutory E-Invoicing — Sub-Second IRN Generation & Signed QR Codes',
      description: 'Full statutory compliance for GST in India and ZATCA Phase 2 in Saudi Arabia. Invoices are validated against standard JSON schemas and dispatched to IRP portals in milliseconds.',
      pills: ['IRN Generation', 'Signed QR Code', 'ZATCA Phase 2', 'JSON Schema Validation'],
      bullets: [
        'Real-time Invoice Reference Number (IRN) allocation from authorized government IRPs',
        'Digitally signed B2B and B2G QR codes embedded on PDF and print invoices',
        'Automated pre-dispatch validation of HSN/SAC codes, GSTINs, and tax rate slabs',
        'Auto-reconciliation with GSTR-1, GSTR-3B, and Saudi VAT tax declarations',
      ],
      image: '/images/billsoft/einvoice.png',
      alt: 'BillSoft Statutory E-Invoicing and IRN Allocation View',
      reverse: true,
    },
    {
      num: '03',
      tag: 'Multi-Location Scale',
      title: 'Multi-Branch Synchronization — Real-Time Stock & Inter-Branch Transfers',
      description: 'Manage corporate headquarters, regional warehouses, and retail outlets under a single unified database. Transfer inventory seamlessly and maintain localized profit & loss ledgers.',
      pills: ['Material Transfer Notes', 'Transit Stock Tracking', 'Branch-Wise P&L', 'Role-Based Access'],
      bullets: [
        'Real-time stock visibility across all physical warehouses and retail stores',
        'Formal Material Transfer Note (MTN) workflow with dispatch and receipt verification',
        'Branch-specific invoice prefixes, local bank accounts, and digital signatures',
        'Consolidated enterprise financial reporting alongside individual branch balance sheets',
      ],
      image: '/images/billsoft/multi-branch.png',
      alt: 'BillSoft Multi-Branch and Warehouse Stock Management Screen',
      reverse: false,
    },
    {
      num: '04',
      tag: 'Executive Intelligence',
      title: 'AI Neural Dashboard — Live Telemetry on Revenue, Margins & Cash Flow',
      description: 'Make data-backed decisions with interactive financial dashboards. Monitor receivables aging, examine expense trends, track highest-grossing products, and forecast cash requirements.',
      pills: ['Cash Flow Forecasting', 'Receivables Aging', 'Profit Margins', 'Auto Bank Reconciliation'],
      bullets: [
        'Real-time revenue, gross margin, and tax liability meters updated on every transaction',
        'Predictive aging buckets flagging overdue client balances with automated WhatsApp reminders',
        'One-click Trial Balance, Profit & Loss statement, and Balance Sheet generation',
        'Bank statement import with automatic match-and-reconcile intelligence',
      ],
      image: '/images/billsoft/dashboard.png',
      alt: 'BillSoft Executive AI Dashboard and Financial Telemetry',
      reverse: true,
    },
    {
      num: '05',
      tag: 'Personalization & Branding',
      title: '13+ Dynamic Themes & Dual Signatures — Invoices That Reflect Your Brand',
      description: 'Tailor your billing experience to match your company aesthetic. Choose between 13 modern invoice templates, adjust color palettes, and authenticate invoices with dual digital signatures.',
      pills: ['13 Invoice Layouts', 'Dual Signatures', 'Thermal & A4 Formats', 'Brand Color Palettes'],
      bullets: [
        'Professional print templates optimized for Laser A4, A5, and Thermal 80mm rolls',
        'Dual signature management: Authorized Signatory plus Customer Stamp and Acknowledgement',
        'Dynamic UPI & Mada payment QR codes printed directly on invoice footers',
        'Customizable headers, footers, terms and conditions, and declaration clauses',
      ],
      image: '/images/billsoft/theme-customization.png',
      alt: 'BillSoft Theme Customization and Invoice Template Designer',
      reverse: false,
    },
  ];

  return (
    <section id="modules" className="section-padding bg-slate-50 border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
            <span className="section-eyebrow text-[#2563eb]">MODULAR SOFTWARE ENGINE</span>
          </div>
          <h2 className="mb-4">
            Explore BillSoft's Flagship Modules
          </h2>
          <p>
            Dive into the mission-critical modules that power tax invoicing, statutory freight compliance, multi-warehouse logistics, and executive accounting.
          </p>
        </div>

        {/* Modules List */}
        <div className="space-y-16 sm:space-y-24">
          {modules.map((mod, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                mod.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Text Description Column */}
              <div className={`lg:col-span-6 ${mod.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                
                {/* Number Badge & Tag */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold text-sm shadow-md">
                    {mod.num}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider border border-blue-200">
                    {mod.tag}
                  </span>
                </div>

                {/* Module Heading */}
                <h3 className="mb-4">
                  {mod.title}
                </h3>

                {/* Module Description */}
                <p className="mb-6">
                  {mod.description}
                </p>

                {/* Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {mod.pills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-slate-700 text-xs font-medium shadow-2xs"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Checkmark Bullets */}
                <ul className="space-y-2.5 pt-4 border-t border-gray-200/90">
                  {mod.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-[#2563eb] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={13} strokeWidth={2.5} />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Screenshot Graphic Column */}
              <div className={`lg:col-span-6 ${mod.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                <div
                  className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-200/90 bg-white shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-300"
                  onClick={() => onOpenLightbox(mod.image, mod.alt)}
                >
                  <div className="relative aspect-video sm:aspect-auto overflow-hidden bg-slate-900">
                    <img
                      src={mod.image}
                      alt={mod.alt}
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    
                    {/* Hover Zoom Overlay */}
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="bg-white/95 text-slate-900 px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 shadow-xl">
                        <ZoomIn size={15} className="text-[#2563eb]" />
                        <span>Click to Expand</span>
                      </div>
                    </div>
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
