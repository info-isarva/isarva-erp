'use client';

import React, { useState } from 'react';

export default function CrmFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is Isarva CRM and how does it help sales teams?',
      a: 'Isarva CRM is an all-in-one cloud platform engineered to streamline lead management, deal tracking, quotations, and customer communications. It eliminates spreadsheets, automates repetitive follow-ups, and gives business leaders full visibility into their sales pipeline.',
    },
    {
      q: 'Can I customize the sales stages and quotation templates?',
      a: 'Yes, absolutely. You can fully customize Kanban pipeline deal stages, win/loss criteria, custom fields, company branding, itemized tax configurations (including GST), and terms & conditions templates to match your exact business workflow.',
    },
    {
      q: 'Does Isarva CRM support mobile access on Android and iOS?',
      a: 'Yes, Isarva CRM provides responsive mobile access as well as dedicated companion app capabilities, enabling field sales reps to log client meetings, update deal milestones, access contact history, and receive instant lead alerts from anywhere.',
    },
    {
      q: 'How secure is our customer and sales data?',
      a: 'Your data is safeguarded with enterprise-grade 256-bit SSL encryption in transit and at rest. We implement strict role-based access control (RBAC), automated regular backups, and multi-tenant security architecture to keep your customer records private and secure.',
    },
    {
      q: 'How long does implementation and team onboarding take?',
      a: 'Most teams get up and running within 24 to 48 hours. Our intuitive interface requires minimal training, and we provide step-by-step onboarding, CSV data import tools from your existing spreadsheets, and dedicated customer support.',
    },
    {
      q: 'How can I get a customized demo or pricing quote?',
      a: 'You can click the "Book a Free Demo" button anywhere on this page to schedule a live, personalized walkthrough with one of our CRM specialists, or click "Download Brochure" for full technical and commercial specifications.',
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50 border-b border-gray-200 scroll-mt-20">
      <div className="w-full max-w-4xl mx-auto px-5 sm:px-6">

        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="600" className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-orange-500/10 border border-sky-300/60 text-[#008CDB] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs font-heading">
            <span className="w-2 h-2 rounded-full bg-[#008CDB] animate-pulse" />
            Got Questions?
          </div>

          <h2 className="mb-4 capitalize">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#008CDB] via-indigo-600 to-[#0284C7] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="max-w-2xl mx-auto">
            Everything you need to know about Isarva CRM setup, security, and pricing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100 + 100}
                data-aos-duration="600"
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${isOpen
                    ? 'border-[#008CDB] shadow-md shadow-sky-500/10'
                    : 'border-gray-200/90 hover:border-gray-300'
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 leading-snug font-heading">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${isOpen
                        ? 'rotate-180 bg-[#008CDB] text-white'
                        : 'bg-gray-100 text-gray-500'
                      }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
