'use client';

import React, { useState, useRef } from 'react';
import { useSyncedFaqHeights } from '../../hooks/useSyncedFaqHeights';

export default function HrmsFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const gridRef = useRef(null);

  const faqs = [
    {
      q: 'What is ISARVA HRMS and how does it automate monthly payroll?',
      a: 'ISARVA HRMS is a cloud-based human resource management and payroll system. It automatically pulls attendance logs, leave balances, and overtime hours, computes gross-to-net salaries, deducts statutory taxes (PF, ESI, TDS, PT), and generates payslips and bank NEFT payment files in a single click.',
    },
    {
      q: 'How does ISARVA HRMS handle statutory compliance in India and Saudi Arabia?',
      a: 'In India, the software calculates PF (generating EPFO-ready ECR text files), ESI returns, Professional Tax (PT) across Indian states, and monthly TDS under both Old and New Tax Regimes. In Saudi Arabia and GCC, it fully supports GOSI social insurance and generates Wage Protection System (WPS) compliant salary files.',
    },
    {
      q: 'Can employees mark attendance from remote field locations or job sites?',
      a: 'Yes. In addition to physical biometric and face-recognition hardware synchronization, employees can check in and check out using the mobile app with GPS location geofencing, ensuring punches are only registered within authorized client sites or office boundaries.',
    },
    {
      q: 'How are salary slips and tax sheets delivered to employees?',
      a: 'Employees can view and download encrypted PDF payslips anytime through the Employee Self-Service (ESS) mobile app and web portal. The system also supports 1-click automated bulk dispatch directly to employee email inboxes and WhatsApp.',
    },
    {
      q: 'How long does implementation and data migration take?',
      a: 'Most organizations transition within 2 to 5 business days. Our dedicated onboarding team migrates your existing employee master directory, historical pay components, and leave balances directly from your Excel spreadsheets or legacy HR software.',
    },
    {
      q: 'How can I schedule a live demo or get a customized pricing quote?',
      a: 'You can click "Book a Free Demo" anywhere on this page to schedule a live, personalized walkthrough with an HR solutions specialist, or click "Download Brochure" to review complete feature specifications and technical architecture.',
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  useSyncedFaqHeights(gridRef, faqs.length);

  const mid = Math.ceil(faqs.length / 2);
  const columns = [
    faqs.slice(0, mid).map((faq, i) => ({ faq, idx: i })),
    faqs.slice(mid).map((faq, i) => ({ faq, idx: mid + i })),
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50 border-b border-gray-200 scroll-mt-20">
      <div className="site-container">

        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="600" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-emerald-500/10 border border-purple-300/60 text-[#7c3aed] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
            Got Questions?
          </div>

          <h2 className="mb-4 capitalize">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] via-indigo-600 to-[#059669] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="max-w-2xl mx-auto">
            Everything you need to know about ISARVA HRMS &amp; Payroll setup, statutory compliance, and pricing.
          </p>
        </div>

        {/* 2-Column Independent Accordion Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
          {columns.map((colItems, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4 sm:gap-5 min-w-0">
              {colItems.map(({ faq, idx }) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${isOpen
                      ? 'card-shadow-purple border-[#7c3aed] ring-1 ring-[#7c3aed]/20'
                      : 'border-purple-200/80 shadow-[0_6px_20px_rgba(124,58,237,0.09)] hover:card-shadow-purple hover:border-purple-300'
                      }`}
                  >
                    <button
                      type="button"
                      data-faq-btn
                      onClick={() => toggleFaq(idx)}
                      className="w-full min-h-20 md:min-h-24 py-3.5 lg:py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base lg:text-lg font-bold text-gray-900 leading-snug">
                        {faq.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${isOpen
                          ? 'rotate-180 bg-[#7c3aed] text-white'
                          : 'bg-gray-100 text-gray-500'
                          }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    <div
                      aria-hidden={!isOpen}
                      className={`faq-accordion ${isOpen ? 'is-open' : ''}`}
                    >
                      <div className="faq-accordion-inner">
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
