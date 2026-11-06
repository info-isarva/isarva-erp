'use client';

import React from 'react';
import { ZoomIn, Printer, MessageCircle, WifiOff } from 'lucide-react';

export default function BillsoftMobile({ onOpenLightbox }) {
  return (
    <section id="mobile" className="section-padding bg-white border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        <div className="rounded-3xl bg-gradient-to-r from-blue-50/80 via-white to-sky-50/80 border border-gray-200/90 p-6 sm:p-8 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-[#2563eb] font-bold text-xs mb-4">
                BillSoft Mobile ERP &amp; Field Invoicing
              </div>

              <h2 className="mb-4">
                Manage Invoicing &amp; Collections{' '}
                <span className="bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0284c7] bg-clip-text text-transparent">
                  From Your Pocket
                </span>
              </h2>

              <p className="mb-6 max-w-xl">
                Equip sales reps, delivery drivers, and field agents with the BillSoft Mobile App for Android and iOS. Generate GST invoices on-site, print receipts via wireless Bluetooth thermal printers, check live customer ledger balances, and share invoices instantly over WhatsApp.
              </p>

              {/* 3 Quick Highlight Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mb-8 text-left">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-blue-200/60 shadow-2xs">
                  <Printer size={18} className="text-[#2563eb] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Bluetooth Printer Sync</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-blue-200/60 shadow-2xs">
                  <MessageCircle size={18} className="text-[#2563eb] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">WhatsApp 1-Tap Share</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-blue-200/60 shadow-2xs">
                  <WifiOff size={18} className="text-[#2563eb] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Offline Invoicing</span>
                </div>
              </div>

              {/* App Store Download Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
                {/* Google Play Store Badge */}
                <div className="inline-flex min-h-[56px] items-center gap-3.5 rounded-2xl border border-gray-200 bg-white px-5 py-2.5 shadow-2xs cursor-default hover:border-gray-300 transition-colors">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                    alt="Google Play"
                    className="w-6 h-6 shrink-0"
                  />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      GET IT ON
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-gray-900 mt-1">
                      Google Play
                    </span>
                  </div>
                </div>

                {/* Apple App Store Badge */}
                <div className="inline-flex min-h-[56px] items-center gap-3.5 rounded-2xl border border-gray-200 bg-white px-5 py-2.5 shadow-2xs cursor-default hover:border-gray-300 transition-colors">
                  <svg className="w-6 h-6 shrink-0 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.93.04-2.03.63-2.67 1.38-.56.65-1.05 1.71-.92 2.74 1.05.08 2.08-.5 2.67-1.25z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      DOWNLOAD ON THE
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-gray-900 mt-1">
                      App Store
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Graphic Column */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div
                className="relative cursor-pointer group w-full max-w-[480px]"
                onClick={() => onOpenLightbox('/images/billsoft/billsoft-mobile-mockup.jpg', 'BillSoft Mobile ERP Invoicing & Tablet Dashboard')}
              >
                <div className="absolute inset-4 bg-gradient-to-tr from-[#2563eb]/20 via-[#1d4ed8]/15 to-sky-200/20 blur-3xl rounded-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border border-blue-200/80 shadow-[0_20px_50px_rgba(37,99,235,0.2)] bg-slate-900">
                  <img
                    src="/images/billsoft/billsoft-mobile-mockup.jpg"
                    alt="BillSoft Mobile App Tablet and Smartphone Invoicing"
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                    <ZoomIn size={14} className="text-blue-400" />
                    <span>Click to Zoom</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
