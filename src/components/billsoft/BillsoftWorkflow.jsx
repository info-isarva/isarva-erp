'use client';

import React from 'react';
import { 
  FileText, 
  PackageCheck, 
  FileCheck2, 
  CreditCard, 
  PieChart 
} from 'lucide-react';

export default function BillsoftWorkflow() {
  const steps = [
    {
      step: '01',
      phase: 'Quotation & Estimation',
      title: 'Draft Proforma & Quotes',
      description: 'Generate professional price estimates, configure tiered volume discounts, set validity periods, and share instant PDF quotations via WhatsApp or email.',
      metric: 'Sub-Second Proforma',
      color: 'from-blue-400 to-[#2563eb]',
      hoverBorder: 'hover:border-blue-500 hover:shadow-blue-500/20',
      tagColor: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: <FileText className="w-6 h-6 text-white" />,
    },
    {
      step: '02',
      phase: 'Order & Dispatch',
      title: 'Sales Order & Challan',
      description: 'Confirm customer purchase orders, automatically reserve warehouse inventory, and print delivery challans with transporter logistics details.',
      metric: 'Automated Stock Hold',
      color: 'from-cyan-500 to-blue-600',
      hoverBorder: 'hover:border-cyan-500 hover:shadow-cyan-500/20',
      tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      icon: <PackageCheck className="w-6 h-6 text-white" />,
    },
    {
      step: '03',
      phase: 'Statutory Compliance',
      title: '1-Click Tax Invoice & IRN',
      description: 'Convert sales order into a compliant GST / ZATCA tax invoice, generate the official IRN, and generate the E-Way bill with vehicle number simultaneously.',
      metric: 'Simultaneous IRN & E-Way',
      color: 'from-emerald-500 to-teal-700',
      hoverBorder: 'hover:border-emerald-500 hover:shadow-emerald-500/20',
      tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: <FileCheck2 className="w-6 h-6 text-white" />,
    },
    {
      step: '04',
      phase: 'Collections & Banking',
      title: 'Payment In & Digital Link',
      description: 'Print dynamic payment QR codes directly on invoices, log partial/advance collections, record multi-tender receipts, and send automated WhatsApp payment reminders.',
      metric: 'Instant Reconciliation',
      color: 'from-amber-500 to-orange-600',
      hoverBorder: 'hover:border-amber-500 hover:shadow-amber-500/20',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: <CreditCard className="w-6 h-6 text-white" />,
    },
    {
      step: '05',
      phase: 'Financial Audit',
      title: 'Ledgers & Balance Sheet',
      description: 'Transactions auto-post to general ledgers, update customer aging accounts, and generate audit-ready Trial Balance, P&L, GSTR-1, and GSTR-3B tax reports.',
      metric: 'Zero-Error Tax Audit',
      color: 'from-indigo-500 to-purple-700',
      hoverBorder: 'hover:border-indigo-500 hover:shadow-indigo-500/20',
      tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      icon: <PieChart className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section id="workflow" className="section-padding bg-slate-50 border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
            <span className="section-eyebrow text-[#2563eb]">FINANCIAL SERVICE WORKFLOW</span>
          </div>
          <h2 className="mb-4">
            The 5-Step BillSoft Revenue &amp; Compliance Cycle
          </h2>
          <p>
            Eliminate manual duplicate entry: each transaction smoothly flows from estimate to warehouse dispatch, statutory IRN allocation, and general ledger posting.
          </p>
        </div>

        {/* 5-Step Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 relative ${item.hoverBorder}`}
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-xs shadow-xs">
                    {item.step}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${item.tagColor}`}>
                    {item.phase}
                  </span>
                </div>

                {/* Step Icon */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md mb-4`}>
                  {item.icon}
                </div>

                {/* Heading */}
                <h4 className="mb-2">
                  {item.title}
                </h4>

                {/* Description */}
                <p>
                  {item.description}
                </p>
              </div>

              {/* Metric Bottom Tag */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">
                  {item.metric}
                </span>
                <span className="text-xs text-[#2563eb] font-semibold">
                  Step {item.step}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
