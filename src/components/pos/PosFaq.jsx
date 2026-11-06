'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function PosFaq({ onOpenDemoModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is ISARVA Restaurant POS Software?',
      a: 'ISARVA Restaurant POS is a modern, unified cloud-based restaurant management platform engineered for dining outlets of all sizes. It connects live table floor plans, paperless kitchen display systems (KDS), counter cashier billing, inventory recipe tracking, and delivery aggregator orders on one screen.',
    },
    {
      q: 'Does it support ZATCA VAT (Saudi Arabia) and GST (India) invoicing?',
      a: 'Yes, fully compliant in both regions. For Saudi Arabia, receipts feature 15% VAT, Phase 2 compliant QR codes, and tamper-proof audit trails with bilingual Arabic/English receipts. For India, it generates full GST-compliant invoices with CGST, SGST, and IGST breakdowns.',
    },
    {
      q: 'Can I customize dining areas and table floor plans?',
      a: 'Yes. You can design visual layouts for Main Hall, Family, Outdoor Patio, and VIP rooms matching your physical restaurant architecture. Tables display real-time color indicators (Free, Occupied, Billing) so hosts seat guests without walking the floor.',
    },
    {
      q: 'Does it integrate with HungerStation, Jahez, and Keeta?',
      a: 'Yes. Online and delivery orders from food aggregators (HungerStation, Jahez, Keeta, Swiggy, Zomato) land on a single Kanban board. You can accept, fire to kitchen, and track courier handoff with zero manual re-entry.',
    },
    {
      q: 'What happens if the internet or Wi-Fi drops during a busy service?',
      a: 'ISARVA POS operates offline-first. If internet drops mid-shift, your cashiers can continue taking orders, splitting bills, and printing receipts locally. Once connectivity restores, all shift data automatically syncs to cloud reports.',
    },
    {
      q: 'Is the interface available in Arabic and English?',
      a: 'Yes. Every screen—from the cashier billing register and kitchen tickets to manager analytics and customer receipts—offers full bilingual Arabic and English support.',
    },
    {
      q: 'Can I run multiple restaurant branches and cloud kitchens?',
      a: 'Yes. Each branch maintains its own floor layout, menu pricing, and daily register reports, while owners manage all outlets under a single unified dashboard with centralized ingredient supply and benchmarking.',
    },
    {
      q: 'What hardware and receipt printers are supported?',
      a: 'ISARVA POS works without proprietary lock-in. You can run it on Android tablets, Apple iPads, Windows touch PCs, and standard thermal receipt printers (ESC/POS via USB, LAN, Bluetooth, or Wi-Fi) and cash drawers.',
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-amber-500/10 border border-emerald-300/60 text-[#059669] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            Got Questions?
          </div>

          <h2 className="mb-4 capitalize">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#059669] via-[#007a55] to-[#0d9488] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="max-w-2xl mx-auto">
            Clear answers regarding restaurant floor setup, offline reliability, ZATCA / GST compliance, and hardware compatibility.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'card-shadow-emerald border-[#007a55] ring-1 ring-[#007a55]/20'
                    : 'border-slate-200/90 hover:border-emerald-300 hover:shadow-[0_8px_24px_rgba(0,122,85,0.14)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-slate-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base border-t border-gray-100 animate-in fade-in duration-200">
                    <p className="leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            type="button"
            onClick={onOpenDemoModal}
            className="pos-primary-btn-emerald"
          >
            <span>Still have questions? Book a live demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2.5 w-4 shrink-0">
              <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
