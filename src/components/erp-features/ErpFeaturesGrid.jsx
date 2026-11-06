'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

const ERP_MODULES = [
  {
    id: 'accounting',
    tabTitle: 'Accounting and Finance',
    badge: 'BillSoft Financial Engine',
    headline: 'Automate GST e-invoicing and real-time financial accounting',
    image: '/images/erp-features/erp-accounting-finance.jpg',
    imageAlt: 'ISARVA ERP Financial Ledgers and Corporate Accounting Audit',
    statBadge: 'BillSoft Financial Engine',
    statHighlight: 'Real-Time P&L & Balance Sheet Audit',
    statSub: '100% Tax ITC Reconciliation • Direct GST & ZATCA Portal Sync',
    description:
      'Eliminate manual accounting errors with instant GST e-invoicing, IRN generation, and automated financial ledgers. ISARVA BillSoft provides real-time P&L, balance sheets, accounts payable, accounts receivable, and cash flow telemetry across all branches.',
    checklist: [
      {
        title: 'Direct GST & ZATCA e-invoicing',
        desc: 'Generate IRN and QR code-compliant tax invoices in a single click with automated E-Way bills.',
      },
      {
        title: 'Real-time P&L & Balance Sheet',
        desc: 'Track gross margins, operating expenses, and net profit dynamically updated with every sales or purchase entry.',
      },
      {
        title: 'Multi-branch ledger consolidation',
        desc: 'Consolidate branch ledgers, inter-company transfers, and audit-ready tax reports seamlessly.',
      },
    ],
    screenshotNote: 'ISARVA ERP — Executive Finance & General Ledger Operations',
  },
  {
    id: 'inventory',
    tabTitle: 'Inventory and Warehouse Management',
    badge: 'Multi-Warehouse & Godown Control',
    headline: 'Control multi-location stock with automated replenishment',
    image: '/images/erp-features/erp-inventory-warehouse.jpg',
    imageAlt: 'ISARVA ERP Multi-Warehouse and High-Bay Logistics Facility',
    statBadge: 'Multi-Godown Stock Matrix',
    statHighlight: '18,420 SKUs Synchronized Across Godowns',
    statSub: 'Automated Safety Reorder Triggers • FIFO / LIFO Batch Tracking',
    description:
      'Gain total real-time visibility over inventory across central godowns, regional warehouses, and retail counters. Track batches, expiry dates, serial numbers, and barcode scans with automatic reorder triggers and FIFO allocation.',
    checklist: [
      {
        title: 'Multi-godown stock matrix',
        desc: 'Prevent stockouts and overstocking with centralized multi-location visibility and transfers.',
      },
      {
        title: 'Automated reorder triggers',
        desc: 'Automatically generate purchase orders when stock levels hit defined minimum safety thresholds.',
      },
      {
        title: 'Batch, serial & barcode tracking',
        desc: 'Ensure full traceability from vendor receipt to end-customer delivery with FIFO/LIFO rules.',
      },
    ],
    screenshotNote: 'ISARVA ERP — High-Bay Warehouse & Barcode Stock Operations',
  },
  {
    id: 'manufacturing',
    tabTitle: 'Production and Manufacturing',
    badge: 'Shop Floor & Quality Control',
    headline: 'Streamline your production and manufacturing',
    image: '/images/erp-features/erp-production-manufacturing.jpg',
    imageAlt: 'ISARVA ERP Precision Manufacturing and Shop Floor Quality Control',
    statBadge: 'Shop Floor & QC Station',
    statHighlight: 'Multi-Level BOM & 99.6% First-Pass Yield',
    statSub: 'ISO-9001 Stage-Wise Digital Inspection • Zero Scrap Leakage',
    description:
      'Plan multi-level Bill of Materials (BOM), schedule job orders, allocate raw materials, and track shop floor progress in real time. Maintain stringent quality inspection checkpoints from raw material receipt to finished goods.',
    checklist: [
      {
        title: 'Production planning & BOM',
        desc: 'Schedule work orders and allocate raw materials with multi-level Bill of Materials and zero scrap leakage.',
      },
      {
        title: 'Quality control checkpoints',
        desc: 'Execute rigorous stage-wise inspection at raw material receiving, in-process assembly, and final delivery.',
      },
      {
        title: 'Cost & machine efficiency',
        desc: 'Minimize machine downtime, track production line bottlenecks, and control unit manufacturing costs.',
      },
    ],
    screenshotNote: 'ISARVA ERP — Precision Shop Floor & Quality Inspection Station',
  },
  {
    id: 'sales',
    tabTitle: 'Sales and Marketing',
    badge: 'CRM & Pipeline Velocity',
    headline: 'Accelerate sales velocity and omnichannel client engagement',
    image: '/images/erp-features/erp-sales-marketing.jpg',
    imageAlt: 'ISARVA ERP B2B Deal Closing and CRM Sales Pipeline Meeting',
    statBadge: 'CRM & Deal Pipeline',
    statHighlight: '₹ 84,50,000 Active Deal Pipeline Volume',
    statSub: 'WhatsApp & Email Automated Follow-ups • 1-Click Quotation Conversion',
    description:
      'Convert leads, manage accounts, and grow your revenue pipeline with an interactive visual Kanban board. Communicate directly via integrated WhatsApp and email, track deal velocity, and generate instant tax-compliant quotations.',
    checklist: [
      {
        title: 'Interactive Kanban deal pipeline',
        desc: 'Track leads across New, Qualified, Proposal, and Won stages with real-time conversion metrics.',
      },
      {
        title: 'WhatsApp & email automation',
        desc: 'Send quotations, payment reminders, and order tracking directly to customer smartphones.',
      },
      {
        title: '1-Click quotation-to-order',
        desc: 'Convert approved quotations into verified sales orders and GST tax invoices in a single click.',
      },
    ],
    screenshotNote: 'ISARVA ERP — Executive B2B Sales & CRM Deal Closure',
  },
  {
    id: 'hr',
    tabTitle: 'Human Resources and Payroll',
    badge: 'Workforce Operations & Statutory Payroll',
    headline: 'Automate workforce management and 100% compliant payroll',
    image: '/images/erp-features/erp-hr-payroll.jpg',
    imageAlt: 'ISARVA ERP Human Resources and Collaborative Enterprise Team',
    statBadge: 'People Operations & Payroll',
    statHighlight: '482 Staff Enrolled • 100% Onboarded',
    statSub: '1-Click Monthly Payroll • Biometric & GPS Mobile Attendance',
    description:
      'Manage your workforce from onboarding to exit. Automate salary calculations, biometric and mobile GPS attendance, leave approvals, and 100% compliant statutory deductions (PF, ESI, TDS, and professional tax).',
    checklist: [
      {
        title: '1-Click automated payroll',
        desc: 'Compute gross pay, overtime, deductions, and net salaries with instant digital payslips.',
      },
      {
        title: 'Statutory compliance (PF, ESI, TDS)',
        desc: 'Automatically calculate PF, ESI, and TDS deductions with ready-to-file statutory reports.',
      },
      {
        title: 'Biometric & mobile GPS attendance',
        desc: 'Seamless integration with biometric hardware and geo-fenced mobile attendance for remote teams.',
      },
    ],
    screenshotNote: 'ISARVA ERP — Enterprise Workforce & HR Operations Hub',
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   MODULE IMAGE SHOWCASE COMPONENT (Photorealistic Real Operations Visual)
   ───────────────────────────────────────────────────────────────────────────── */
function ModuleImageVisual({ module }) {
  return (
    <div className="space-y-3 sm:space-y-3.5">
      {/* 100% Unobstructed Photorealistic Image Frame */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl card-shadow-emerald group bg-slate-100">
        <Image
          src={module.image}
          alt={module.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority
        />

        {/* Minimal Non-Intrusive Status Pill in Top-Left Corner (Bright White Style) */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md text-slate-800 px-3 py-1.5 rounded-full border border-slate-200/90 shadow-md flex items-center gap-2 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="text-[11px] font-bold tracking-wide uppercase text-[#007a55]">
            {module.statBadge}
          </span>
        </div>
      </div>

      {/* Telemetry Information Card Placed BELOW the Image (Leaving Image Completely Visible) */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-sm">
        <div className="space-y-1">
          <span className="text-xs sm:text-sm font-bold text-slate-900 block leading-snug">
            {module.statHighlight}
          </span>
          <span className="text-[11px] sm:text-xs text-slate-500 font-medium block">
            {module.statSub}
          </span>
        </div>

        <div className="shrink-0 flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
          <span>Active</span>
          <span>✓</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT: ErpFeaturesGrid (ISARVA ERP Interactive Vertical Tabset)
   ───────────────────────────────────────────────────────────────────────────── */
export default function ErpFeaturesGrid() {
  const [activeTab, setActiveTab] = useState('manufacturing'); // Default to Production and Manufacturing

  const activeModule = ERP_MODULES.find((m) => m.id === activeTab) || ERP_MODULES[2];

  return (
    <section id="features" className="bg-white section-padding overflow-hidden">
      <div className="site-container">

        {/* ── Section Header (Isarva Real Content) ── */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <span className="section-eyebrow">ISARVA ERP Modules</span>
          <h2 className="mt-3 mb-6">
            Key Modules and Features of an ERP System
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <p>
              ISARVA ERP brings every operational department—accounting, inventory, manufacturing, sales CRM, and HRMS payroll—together into a single connected platform. Designed for high-growth businesses in India and the GCC, it replaces disjointed spreadsheets and isolated software with real-time synchronized data.
            </p>
            <p>
              With modular architecture, native statutory compliance (GST e-Invoicing, E-Way bills & ZATCA Phase-2), and automated multi-branch consolidation, ISARVA ERP empowers leadership with clear operational control and the digital telemetry needed for rapid scaling.
            </p>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            💻 DESKTOP LAYOUT (>= lg): Vertical Tabs on Left + Content & Visual
            ═════════════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12 items-start">

          {/* Left Column: Vertical Tabset */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col border-l-2 border-slate-200">
            {ERP_MODULES.map((m) => {
              const isActive = m.id === activeTab;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveTab(m.id)}
                  className={`group relative text-left py-4 px-5 transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-100/90 rounded-r-xl'
                      : 'hover:bg-slate-50 rounded-r-xl'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                >
                  {/* Active Indicator Bar on Left */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-[-2px] top-0 bottom-0 w-1.5 bg-[#007a55] rounded-r"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <span
                    className={`block text-base transition-colors leading-snug ${
                      isActive
                        ? 'font-bold text-slate-900'
                        : 'font-medium text-slate-600 group-hover:text-slate-900'
                    }`}
                  >
                    {m.tabTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Tab Content (Text + Operational Visual Image) */}
          <div className="lg:col-span-8 xl:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center"
              >
                {/* Text Content */}
                <div className="xl:col-span-5 space-y-5">
                  <div className="space-y-3">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#007a55] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      {activeModule.badge}
                    </span>
                    <h3>
                      {activeModule.headline}
                    </h3>
                    <p>
                      {activeModule.description}
                    </p>
                  </div>

                  {/* Checklist with Green Checkmarks */}
                  <ul className="space-y-3.5 pt-2 border-t border-slate-100">
                    {activeModule.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-none w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mt-0.5">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        <div className="text-sm text-slate-700 leading-snug">
                          <strong className="text-slate-900 font-semibold">{item.title}: </strong>
                          {item.desc}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <span className="block text-xs text-slate-400 italic pt-1">
                    {activeModule.screenshotNote}
                  </span>
                </div>

                {/* Photorealistic Operations Visual */}
                <div className="xl:col-span-7">
                  <ModuleImageVisual module={activeModule} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ═════════════════════════════════════════════════════════════════════
            📱 MOBILE & TABLET LAYOUT (< lg): Interactive Collapsible Accordion
            ═════════════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden space-y-4">
          {ERP_MODULES.map((m) => {
            const isOpen = m.id === activeTab;
            return (
              <div
                key={m.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-300 shadow-lg bg-white ring-2 ring-emerald-500/10'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-50'
                }`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => setActiveTab(isOpen ? '' : m.id)}
                  className="w-full py-4 px-5 flex items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base leading-snug ${isOpen ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>
                    {m.tabTitle}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-slate-500 transition-transform duration-300 shrink-0 ml-2 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {/* Accordion Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 border-t border-slate-100 space-y-5">
                        <div className="space-y-3 pt-4">
                          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#007a55] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                            {m.badge}
                          </span>
                          <h3>{m.headline}</h3>
                          <p>
                            {m.description}
                          </p>
                        </div>

                        {/* Checklist */}
                        <ul className="space-y-3">
                          {m.checklist.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="flex-none w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mt-0.5">
                                <Check size={13} strokeWidth={3} />
                              </span>
                              <div className="text-sm text-slate-700 leading-snug">
                                <strong className="text-slate-900 font-semibold">{item.title}: </strong>
                                {item.desc}
                              </div>
                            </li>
                          ))}
                        </ul>

                        {/* Photorealistic Operations Visual */}
                        <div className="pt-2">
                          <ModuleImageVisual module={m} />
                        </div>

                        <span className="block text-xs text-slate-400 italic text-center pt-2">
                          {m.screenshotNote}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
