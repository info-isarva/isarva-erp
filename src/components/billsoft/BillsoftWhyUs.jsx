'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Building2, 
  KeyRound, 
  Palette, 
  MessageSquare 
} from 'lucide-react';

export default function BillsoftWhyUs() {
  const cards = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      iconStyle: 'bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-[#2563eb]',
      tag: '100% Compliant',
      title: 'Statutory GST & ZATCA Precision',
      description: 'Fully certified for India GST (E-Invoicing IRN & E-Way Bills) and Saudi Arabia ZATCA Phase 2 (Cryptographic Stamp & QR code). Never face filing penalties or rejected audits.',
      metric: 'Zero-error tax portal reconciliation',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      iconStyle: 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 text-amber-600',
      tag: 'Sub-Second Speed',
      title: 'High-Volume Billing Velocity',
      description: 'Engineered for high-traffic wholesale counters and retail checkouts. Keyboard shortcut navigation, instant barcode lookups, and sub-second receipt printing keep lines moving.',
      metric: '10,000+ daily transactions per terminal',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      iconStyle: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-emerald-600',
      tag: 'Infinite Scale',
      title: 'Multi-Branch & Warehouse Network',
      description: 'Seamlessly scale from a single distribution depot to hundreds of regional branches. Inter-branch material transfer notes (MTN) and live transit stock visibility prevent stockouts.',
      metric: 'Consolidated balance sheets in 1-click',
    },
    {
      icon: <KeyRound className="w-6 h-6" />,
      iconStyle: 'bg-gradient-to-br from-purple-500/10 to-indigo-500/10 text-purple-600',
      tag: 'Enterprise Security',
      title: 'Dual Signature & Ledger Audit Trails',
      description: 'Protect company finances with tamper-evident audit logs, granular role-based permissions per staff member, and dual signature authentication (Authorized Signatory + Official Seal).',
      metric: 'Immutable financial ledger history',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      iconStyle: 'bg-gradient-to-br from-rose-500/10 to-pink-500/10 text-rose-600',
      tag: 'Brand Identity',
      title: '13+ Dynamic Themes & Formats',
      description: 'Differentiate your business with professionally designed invoice layouts. Choose from 13 modern themes, adapt color schemes to your brand, and toggle between Laser A4, A5, and Thermal 80mm.',
      metric: 'Custom headers, footers & UPI QR codes',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      iconStyle: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-600',
      tag: 'Automated Outreach',
      title: 'Instant WhatsApp & Email Dispatch',
      description: 'Eliminate paper mail delays. Deliver PDF tax invoices, delivery challans, and statement of accounts (SOA) directly to customer WhatsApp numbers and emails in seconds.',
      metric: 'Collect receivables 35% faster',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-white border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
            <span className="section-eyebrow text-[#2563eb]">ENTERPRISE VALUE PILLARS</span>
          </div>
          <h2 className="mb-4">
            Why Finance Leaders &amp; Business Owners Choose BillSoft
          </h2>
          <p>
            Purpose-built to replace outdated legacy desktop software with a lightning-fast, cloud-synchronized, multi-branch ERP powerhouse.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconStyle}`}>
                    {card.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    {card.tag}
                  </span>
                </div>

                <h3 className="mb-2.5">
                  {card.title}
                </h3>

                <p>
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
                <span className="text-xs font-semibold text-slate-800">
                  {card.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
