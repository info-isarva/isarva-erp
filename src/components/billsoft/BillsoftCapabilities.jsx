'use client';

import React from 'react';
import { 
  FileCheck2, 
  Truck, 
  Network, 
  Users2, 
  BarChart3, 
  Palette 
} from 'lucide-react';

export default function BillsoftCapabilities() {
  const capabilities = [
    {
      title: 'Statutory GST & E-Invoicing',
      tag: '100% Compliant',
      tagColor: 'bg-blue-100 text-blue-800 border-blue-200',
      iconBg: 'bg-gradient-to-br from-blue-500 to-[#1d4ed8]',
      hoverBorder: 'hover:border-blue-400 hover:shadow-blue-500/15',
      description: 'Seamless IRP portal integration for sub-second IRN allocation, digitally signed QR codes embedded on every tax invoice, and ZATCA Phase 2 readiness for Saudi enterprises.',
      icon: <FileCheck2 className="w-6 h-6 text-white" />,
    },
    {
      title: 'Automated E-Way Bill Lifecycle',
      tag: '1-Click Transit',
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-700',
      hoverBorder: 'hover:border-emerald-400 hover:shadow-emerald-500/15',
      description: 'Generate Part A & Part B E-Way bills instantly from invoices. Update vehicle numbers on the go, generate consolidated bills, and extend transit validity before expiry.',
      icon: <Truck className="w-6 h-6 text-white" />,
    },
    {
      title: 'Multi-Branch & Multi-Warehouse',
      tag: 'Enterprise Scale',
      tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-700',
      hoverBorder: 'hover:border-indigo-400 hover:shadow-indigo-500/15',
      description: 'Centralized control across all company branches and warehouses. Track real-time inventory levels, execute inter-branch material transfers, and view consolidated balance sheets.',
      icon: <Network className="w-6 h-6 text-white" />,
    },
    {
      title: 'Customer & Vendor Ledgers',
      tag: 'Automated SOA',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
      hoverBorder: 'hover:border-amber-400 hover:shadow-amber-500/15',
      description: 'Maintain pristine party ledgers with automated aging buckets (30/60/90 days), automated WhatsApp payment reminders, debit/credit notes, and 1-click statement downloads.',
      icon: <Users2 className="w-6 h-6 text-white" />,
    },
    {
      title: 'AI Financial Analytics & BI',
      tag: 'Predictive Insights',
      tagColor: 'bg-sky-100 text-sky-800 border-sky-200',
      iconBg: 'bg-gradient-to-br from-sky-500 to-blue-600',
      hoverBorder: 'hover:border-sky-400 hover:shadow-sky-500/15',
      description: 'Executive dashboards tracking gross profit margins, revenue trajectories, top-selling SKUs, and working capital ratios. AI-driven cash flow forecasting prevents liquidity crunches.',
      icon: <BarChart3 className="w-6 h-6 text-white" />,
    },
    {
      title: '13+ Themes & Dual Signatures',
      tag: 'Brand Identity',
      tagColor: 'bg-rose-100 text-rose-800 border-rose-200',
      iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600',
      hoverBorder: 'hover:border-rose-400 hover:shadow-rose-500/15',
      description: 'Choose from 13 modern invoice templates designed for A4, A5, and thermal printers. Embed digital signatures, company seal stamps, bank QR codes, and custom payment terms.',
      icon: <Palette className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section id="capabilities" className="section-padding bg-white border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
            <span className="section-eyebrow text-[#2563eb]">CORE ERP CAPABILITIES</span>
          </div>
          <h2 className="mb-4">
            Engineered for High-Velocity Billing and Total Financial Control
          </h2>
          <p>
            From daily retail barcode transactions to complex multi-state corporate supply chains, BillSoft combines statutory precision with unmatched operational speed.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 ${item.hoverBorder}`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="mb-2.5">
                  {item.title}
                </h3>
                
                <p>
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#2563eb] opacity-90 group-hover:opacity-100">
                <span>Explore capability details</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
