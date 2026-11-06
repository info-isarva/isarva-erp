'use client';

import React from 'react';
import { ZoomIn } from 'lucide-react';

export default function HrmsModules({ onOpenLightbox }) {
  const modules = [
    {
      num: '01',
      tag: 'People Directory',
      title: 'Digital Employee Dossier & Document Onboarding',
      description: 'Streamline the complete employee lifecycle from offer letter acceptance to digital KYC verification, corporate hierarchy structure, and company asset tracking.',
      bullets: [
        'Centralized digital employee repository with role hierarchies',
        'KYC document vault for Aadhaar, PAN, Passport, and Visa/Iqama',
        'Hardware and software asset tracking with assignment logs',
        'Multi-entity & multi-branch organization structuring',
      ],
      image: '/images/hrms/concepts/onboarding-3d.jpg',
      alt: 'Digital Employee Onboarding & Directory',
      reverse: false,
    },
    {
      num: '02',
      tag: 'Time & Attendance',
      title: 'Biometric Hardware Sync & Mobile GPS Geofencing',
      description: 'Capture real-time daily punches with zero manual intervention. Connect physical fingerprint and facial terminals across offices, or enable GPS check-ins for field teams.',
      bullets: [
        'Direct API integration with biometric & facial recognition devices',
        'Mobile GPS check-in with custom geofenced perimeter boundaries',
        'Automatic late-in, early-out, and half-day deduction rules',
        'Live manager dashboard for real-time team presence tracking',
      ],
      image: '/images/hrms/concepts/attendance-3d.jpg',
      alt: 'Biometric & GPS Attendance',
      reverse: true,
    },
    {
      num: '03',
      tag: 'Payroll & Statutory',
      title: '1-Click Precision Payroll & Tax Compliance Engine',
      description: 'Eliminate calculation errors and manual payroll spreadsheets. Process monthly salaries with automated tax calculations, statutory deductions, and one-click bank batch files.',
      bullets: [
        'Automated PF (EPFO ECR format), ESI returns, and PT calculations',
        'Section 80C/80D tax investment declarations & monthly TDS',
        'Custom salary structures with basic, allowances, and bonuses',
        'Multi-bank NEFT/RTGS salary disbursement file generation',
      ],
      image: '/images/hrms/concepts/payroll-3d.jpg',
      alt: 'Precision Payroll & Statutory Compliance Engine',
      reverse: false,
    },
    {
      num: '04',
      tag: 'Leaves & Shifts',
      title: 'Flexible Shift Scheduling & Leave Approval Workflows',
      description: 'Configure custom leave types, accrual rules, and carry-forward limits. Handle complex rotating 24/7 shifts, night allowances, and multi-level manager sign-offs.',
      bullets: [
        'Multi-tier leave approval hierarchy (Manager, HR, Admin)',
        'Flexible shift rotation roster with automated holiday sync',
        'Compensatory off (Comp-Off) and overtime multiplier policies',
        'Visual team leave calendar to avoid project understaffing',
      ],
      image: '/images/hrms/concepts/shifts-leaves-3d.jpg',
      alt: 'Shift Scheduling & Leave Approval',
      reverse: true,
    },
    {
      num: '05',
      tag: 'Self-Service (ESS)',
      title: 'Empower Workers with Web & Mobile Self-Service',
      description: 'Free your HR department from repetitive requests. Staff can instantly view and download encrypted salary slips, apply for leave, submit expense claims, and track attendance.',
      bullets: [
        'Instant payslip PDF download with encrypted password protection',
        'Mobile leave applications with real-time status notifications',
        'Expense reimbursement submission with receipt photo uploads',
        'Direct WhatsApp & Email payslip dispatch automation',
      ],
      image: '/images/hrms/concepts/ess-portal-3d.jpg',
      alt: 'Employee Self-Service (ESS) Portal',
      reverse: false,
    },
    {
      num: '06',
      tag: 'Workforce BI',
      title: 'Actionable Intelligence on Labor Costs & Retention',
      description: 'Equip leadership with real-time workforce analytics. Track labor cost trends, monitor department-wise overtime expenditure, and analyze employee turnover metrics.',
      bullets: [
        'Department-wise payroll cost distribution and budget tracking',
        'Real-time employee retention, turnover, and tenure dashboards',
        'Overtime and absenteeism cost impact indicators',
        '1-Click CSV and Excel export for statutory and executive audits',
      ],
      image: '/images/hrms/concepts/analytics-3d.jpg',
      alt: 'Workforce BI & Payroll Analytics',
      reverse: true,
    },
  ];

  return (
    <section id="modules" className="section-padding bg-gray-50/70 relative overflow-hidden border-b border-gray-200 scroll-mt-20">
      <div className="site-container relative z-10">
        
        {/* Exact Section Header from Source Theme */}
        <div data-aos="fade-up" data-aos-duration="600" className="text-center mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-emerald-500/10 border border-purple-300/60 text-[#7c3aed] font-bold text-xs uppercase tracking-widest mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
            Complete Workforce Ecosystem
          </div>
          <h2 className="mb-4 capitalize tracking-tight">
            One Connected System:{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] via-indigo-600 to-[#059669] bg-clip-text text-transparent">
              From Hiring to Payroll
            </span>
          </h2>
          <p className="max-w-2xl mx-auto leading-relaxed">
            Explore how each integrated module within ISARVA HRMS eliminates administrative overhead, ensures 100% statutory compliance, and elevates employee satisfaction.
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
                className={`lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left ${
                  mod.reverse ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-3">
                  <span className="text-xs font-bold text-[#7c3aed] bg-[rgba(124,58,237,0.08)] border border-[rgba(124,58,237,0.2)] px-3 py-1 rounded-full uppercase tracking-wider">
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
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-[#7c3aed] transition-all duration-200"
                    >
                      <div className="w-5 h-5 rounded-md bg-purple-100 text-[#7c3aed] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
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
                className={`lg:col-span-6 flex justify-center ${
                  mod.reverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div
                  className="group relative rounded-2xl bg-white border border-gray-200/80 p-2 sm:p-2.5 shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-300 overflow-hidden cursor-zoom-in w-full max-w-lg"
                  onClick={() => onOpenLightbox(mod.image, mod.alt)}
                >
                  <div className="overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={mod.image}
                      alt={mod.alt}
                      className="w-full h-auto max-h-[440px] object-contain rounded-xl sm:rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/images/hrms-card-preview.jpg';
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none rounded-2xl">
                    <span className="px-3.5 py-1.5 rounded-xl bg-white/95 text-[#7c3aed] text-xs font-bold shadow-md border border-purple-100 inline-flex items-center gap-1.5">
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
