'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function BillsoftFaq({ onOpenDemoModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is BillSoft Accounting Software?',
      a: 'BillSoft is a modern, enterprise-ready cloud and hybrid accounting ERP built to simplify billing, GST statutory compliance, automated E-Way bills, inventory management, multi-branch bookkeeping, and executive financial intelligence for businesses in India and Saudi Arabia.',
    },
    {
      q: 'How does BillSoft handle statutory E-Invoicing and IRN generation?',
      a: 'BillSoft integrates directly with authorized government Invoice Registration Portals (IRP). When you create a B2B or export sales invoice, BillSoft validates the JSON schema and receives the unique Invoice Reference Number (IRN) and digitally signed QR code in sub-second speed, automatically printing it on the tax invoice.',
    },
    {
      q: 'Can I generate and update E-Way Bills directly from BillSoft?',
      a: 'Yes! You can generate Part A and Part B E-Way bills with a single click while saving an invoice. You can also update vehicle numbers during transit, assign transporter IDs, generate consolidated E-Way bills, and extend validity periods directly inside BillSoft without ever visiting the NIC portal separately.',
    },
    {
      q: 'Does BillSoft comply with ZATCA Phase 2 for Saudi Arabian enterprises?',
      a: 'Yes, 100% compliant. BillSoft adheres to ZATCA Phase 2 integration requirements, generating cryptographically stamped invoices, Phase 2 compliant QR codes, and tamper-evident audit trails with bilingual Arabic and English tax receipt formats.',
    },
    {
      q: 'How does multi-branch and multi-warehouse synchronization work?',
      a: 'You can manage headquarters, regional warehouses, and retail branches in a single dashboard. Real-time stock levels are synchronized instantly across locations. You can execute inter-branch Material Transfer Notes (MTN) with transit tracking and generate both branch-wise P&L statements and consolidated corporate balance sheets.',
    },
    {
      q: 'Can I customize invoice templates and print formats (Thermal & A4)?',
      a: 'Yes. BillSoft includes 13+ modern invoice themes. You can customize company logos, color schemes, bank account details, dynamic payment UPI/Mada QR codes, declaration clauses, and dual signature blocks. Print effortlessly on standard Laser/Inkjet A4, A5, and Thermal 80mm roll printers.',
    },
    {
      q: 'How does bank reconciliation and customer ledger tracking work?',
      a: 'BillSoft tracks complete debtor and creditor ledgers with automated 30/60/90-day aging buckets. You can upload Excel or CSV bank statements for automated rule-based match-and-reconcile, print instant Statement of Accounts (SOA), and send automated payment reminder alerts directly to customer WhatsApp numbers.',
    },
    {
      q: 'Can I migrate my existing data from Tally, Busy, or Excel spreadsheets?',
      a: 'Yes. BillSoft provides a 1-click Excel/CSV bulk import wizard for your chart of accounts, customer and vendor master lists, opening stock balances, item pricing, and historical transactions. Our dedicated migration specialists assist you during onboarding to ensure zero downtime.',
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section-padding bg-slate-50/70 border-b border-gray-200 scroll-mt-20">
      <div className="w-full max-w-4xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 border border-blue-300/60 text-[#2563eb] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
            Got Questions?
          </div>

          <h2 className="mb-4 capitalize">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0284c7] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="max-w-2xl mx-auto">
            Everything you need to know about BillSoft billing, statutory GST compliance, multi-branch scaling, and data migration.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-400 bg-white shadow-md'
                    : 'border-gray-200/90 bg-white hover:border-blue-200 shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 border-t border-gray-100 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-sky-50/70 border border-blue-200/80 text-center card-shadow-blue">
          <h3 className="mb-2">
            Have a Specific Accounting or GST Query?
          </h3>
          <p className="max-w-xl mx-auto mb-6">
            Our enterprise financial specialists and implementation team are ready to evaluate your business workflow and prepare a customized demo.
          </p>
          <button
            type="button"
            onClick={onOpenDemoModal}
            className="billsoft-primary-btn-blue"
          >
            <span>Talk to an Accounting Expert</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2.5 w-4 shrink-0">
              <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
