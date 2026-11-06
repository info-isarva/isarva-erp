'use client';

import React from 'react';
import { ZoomIn } from 'lucide-react';

export default function CrmModules({ onOpenLightbox }) {
  const modules = [
    {
      num: '01',
      tag: 'Inbound Pipeline',
      title: 'Centralize Every Inbound Lead & Automate Distribution',
      description: 'Capture inquiries across your marketing channels. Filter leads by status, assign to dedicated sales reps, and track source origin to optimize your marketing spend.',
      bullets: [
        'Custom status stages (New, Contacted, Qualified, Lost)',
        'Instant sales rep assignment & notification alerts',
        'Source tracking across Website, Ads, Referrals, and Events',
        'Detailed lead audit trail and communication history',
      ],
      image: '/images/crm/concepts/leads-3d.jpg',
      alt: 'Leads Management',
      reverse: false,
    },
    {
      num: '02',
      tag: 'Visual Sales Management',
      title: 'Visual Stage-by-Stage Sales Progression',
      description: 'Drag-and-drop Kanban pipeline designed to give sales leaders instant clarity over every active deal, expected closing revenue, and stalled opportunities.',
      bullets: [
        'Customizable multi-stage deal columns with milestone flags',
        'Deal probability weighting and weighted revenue forecasts',
        'Win / Loss analysis with automated reason logging',
        'Quick-action buttons to generate quotes directly from deals',
      ],
      image: '/images/crm/concepts/deals-3d.jpg',
      alt: 'Deals & Pipeline Management',
      reverse: true,
    },
    {
      num: '03',
      tag: 'Quotation Engine',
      title: 'Create Professional Quotes in Under 60 Seconds',
      description: 'Stop losing deals to slow proposals. Pull line items, calculate multi-tier tax and GST, apply discounts, and generate sleek PDF quotations on company letterheads instantly.',
      bullets: [
        '1-Click PDF generation with customizable branding & terms',
        'Multi-tax calculation engine (GST, VAT, custom state surcharges)',
        'Instant versioning and quotation revision tracking',
        'Direct WhatsApp and Email quotation dispatch',
      ],
      image: '/images/crm/concepts/quotations-3d.jpg',
      alt: 'Quotation Engine',
      reverse: false,
    },
    {
      num: '04',
      tag: 'Activity & Task Sync',
      title: 'Unified Calendar for Calls, Meetings & Deadlines',
      description: 'Never let a hot prospect go cold. Schedule calls, log client meetings, set follow-up tasks, and sync with your team’s daily agenda in a centralized interactive calendar.',
      bullets: [
        'Visual day, week, and month calendar views',
        'Automated notifications for overdue and upcoming activities',
        'Call summaries, meeting minutes, and voice note logging',
        'Shared team calendars with individual rep availability',
      ],
      image: '/images/crm/concepts/calendar-3d.jpg',
      alt: 'Tasks & Activities Calendar',
      reverse: true,
    },
    {
      num: '05',
      tag: 'Customer 360° Profile',
      title: 'Complete Relationship History in One Single Record',
      description: 'Bring together every company contact, past meeting, sent quotation, signed deal, and payment status into an exhaustive 360-degree timeline.',
      bullets: [
        'Parent company and multi-contact hierarchical associations',
        'Chronological activity timeline from initial inquiry onwards',
        'Document vault for storing RFPs, contracts, and proposals',
        'Seamless one-click conversion from prospect to active client',
      ],
      image: '/images/crm/concepts/customer-3d.jpg',
      alt: 'Customer 360 Profile',
      reverse: false,
    },
    {
      num: '06',
      tag: 'Revenue BI & Reports',
      title: 'Actionable Intelligence on Sales Velocity & Revenue',
      description: 'Empower executives and sales managers with live analytics dashboards, individual rep scorecards, pipeline bottlenecks, and accurate monthly revenue forecasts.',
      bullets: [
        'Real-time deal conversion and win-rate KPI gauges',
        'Sales rep activity scorecards and goal achievement metrics',
        'Marketing channel ROI tracking and customer acquisition cost',
        '1-Click CSV/Excel data export for executive reporting',
      ],
      image: '/images/crm/concepts/analytics-3d.jpg',
      alt: 'Reports & Analytics',
      reverse: true,
    },
  ];

  return (
    <section id="modules" className="section-padding bg-gray-50/70 relative overflow-hidden border-b border-gray-200 scroll-mt-20">
      <div className="site-container relative z-10">

        {/* Exact Section Header from Source Theme */}
        <div data-aos="fade-up" data-aos-duration="600" className="text-center mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-orange-500/10 border border-sky-300/60 text-[#008CDB] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#008CDB] animate-pulse" />
            Complete Sales Ecosystem
          </div>
          <h2 className="mb-4 capitalize tracking-tight">
            One Connected System:{' '}
            <span className="bg-gradient-to-r from-[#008CDB] via-indigo-600 to-[#0284C7] bg-clip-text text-transparent">
              From Lead to Revenue
            </span>
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed">
            Explore how each integrated module within Isarva CRM eliminates silos, automates repetitive administrative work, and accelerates your sales velocity.
          </p>
        </div>

        {/* 6 Alternating Deep-Dive Modules */}
        <div className="space-y-16 lg:space-y-24">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center"
            >
              {/* Content Column */}
              <div
                data-aos={mod.reverse ? 'fade-left' : 'fade-right'}
                data-aos-duration="700"
                className={`lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left ${mod.reverse ? 'lg:order-2' : 'lg:order-1'
                  }`}
              >
                <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-3">
                  <span className="text-xs font-bold text-[#008CDB] bg-[rgba(0,140,219,0.08)] border border-[rgba(0,140,219,0.2)] px-3 py-1 rounded-full uppercase tracking-wider">
                    {mod.tag}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    Module {mod.num}
                  </span>
                </div>

                <h3 className="mb-3.5 leading-tight">
                  {mod.title}
                </h3>

                <p className="mb-6 max-w-xl">
                  {mod.description}
                </p>

                {/* 4 Feature Checkbox Pods */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-2 w-full text-left">
                  {mod.bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-200/80 shadow-xs hover:border-[#008CDB] transition-all duration-200"
                    >
                      <div className="w-5 h-5 rounded-md bg-sky-100 text-[#008CDB] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm font-medium leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphic Column */}
              <div
                data-aos={mod.reverse ? 'fade-right' : 'fade-left'}
                data-aos-delay="150"
                data-aos-duration="700"
                className={`lg:col-span-6 flex justify-center ${mod.reverse ? 'lg:order-1' : 'lg:order-2'
                  }`}
              >
                <div
                  className="group relative rounded-2xl bg-white border border-gray-200/80 p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all duration-300 overflow-hidden cursor-zoom-in w-full max-w-lg"
                  onClick={() => onOpenLightbox(mod.image, mod.alt)}
                >
                  <div className="overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={mod.image}
                      alt={mod.alt}
                      className="w-full h-auto max-h-[440px] object-contain rounded-xl sm:rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/images/crm-card-preview.jpg';
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none rounded-2xl">
                    <span className="px-3.5 py-1.5 rounded-xl bg-white/95 text-[#008CDB] text-xs font-bold shadow-md border border-sky-100 inline-flex items-center gap-1.5">
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
