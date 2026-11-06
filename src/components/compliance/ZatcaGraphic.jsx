'use client';

import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

export default function ZatcaGraphic() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] flex items-center justify-center select-none">
      {/* Soft Ambient Green Glow */}
      <div className="absolute -inset-3 bg-emerald-600/15 rounded-3xl blur-2xl pointer-events-none" />

      {/* Realistic ZATCA Fatoora Tax Invoice Card */}
      <div className="relative z-10 w-full bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xl shadow-slate-900/15 rotate-1 hover:rotate-0 transition-transform duration-300">
        
        {/* Top Header: Brand & ZATCA Badge */}
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[#007a55] text-white flex items-center justify-center text-[10px] font-black">
                ✦
              </div>
              <span className="font-heading font-black text-sm tracking-tight text-[#007a55]">
                ISARVA ERP
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-1">
              الرقم الضريبي VAT: <span className="font-semibold text-slate-800">300123456700003</span>
            </div>
          </div>

          {/* Official ZATCA Status Badge */}
          <div className="text-right flex flex-col items-end">
            <span className="text-[11px] font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
              فاتورة ضريبية مبسطة
            </span>
            <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-800 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>ZATCA Phase 2 Cleared</span>
            </div>
          </div>
        </div>

        {/* Invoice Metadata Grid */}
        <div className="grid grid-cols-2 gap-2 py-2.5 text-[11px] border-b border-dashed border-slate-200">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">تفاصيل الفاتورة / Invoice</span>
            <div className="font-mono text-slate-800 font-semibold">FAT-SA-2026-9042</div>
            <div className="text-slate-500 text-[10px]">12 Oct 2026 • 14:32 KSA</div>
          </div>
          <div className="text-right">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">العميل / Billed To</span>
            <div className="font-semibold text-slate-800">Al-Diwan Gourmet LLC</div>
            <div className="font-mono text-slate-500 text-[10px]">CR: 1010892341</div>
          </div>
        </div>

        {/* Centerpiece: Prominent Official ZATCA QR Code (Matching Reference Design) */}
        <div className="my-3 py-3 px-4 bg-gradient-to-b from-slate-50/70 to-emerald-50/30 rounded-xl border border-slate-200/80 flex flex-col items-center justify-center text-center">
          <div className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span>رمز الاستجابة السريع ZATCA</span>
            <span className="text-emerald-600 font-bold">• Phase 2</span>
          </div>

          {/* High-Resolution Vector QR Code */}
          <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
            <svg
              viewBox="0 0 100 100"
              className="w-24 h-24 sm:w-28 sm:h-28 text-slate-900"
              fill="currentColor"
            >
              {/* Top-Left Finder */}
              <rect x="5" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
              <rect x="13" y="13" width="12" height="12" fill="currentColor" rx="1" />
              
              {/* Top-Right Finder */}
              <rect x="67" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
              <rect x="75" y="13" width="12" height="12" fill="currentColor" rx="1" />
              
              {/* Bottom-Left Finder */}
              <rect x="5" y="67" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
              <rect x="13" y="75" width="12" height="12" fill="currentColor" rx="1" />
              
              {/* ZATCA Phase 2 Data Modules */}
              <rect x="38" y="8" width="6" height="6" />
              <rect x="48" y="8" width="6" height="6" />
              <rect x="38" y="18" width="6" height="6" />
              <rect x="54" y="24" width="6" height="6" />
              
              <rect x="8" y="38" width="6" height="6" />
              <rect x="18" y="44" width="6" height="6" />
              <rect x="8" y="54" width="6" height="6" />
              
              <rect x="38" y="38" width="8" height="8" rx="1" />
              <rect x="52" y="38" width="6" height="6" />
              <rect x="62" y="44" width="6" height="6" />
              <rect x="74" y="38" width="6" height="6" />
              <rect x="84" y="44" width="6" height="6" />
              
              <rect x="40" y="52" width="6" height="6" />
              <rect x="52" y="52" width="8" height="8" rx="1" />
              <rect x="66" y="56" width="6" height="6" />
              <rect x="78" y="52" width="6" height="6" />
              
              <rect x="38" y="68" width="6" height="6" />
              <rect x="48" y="74" width="6" height="6" />
              <rect x="58" y="68" width="6" height="6" />
              <rect x="68" y="74" width="8" height="8" rx="1" />
              <rect x="82" y="68" width="6" height="6" />
              
              <rect x="38" y="84" width="8" height="8" rx="1" />
              <rect x="52" y="84" width="6" height="6" />
              <rect x="64" y="86" width="6" height="6" />
              <rect x="76" y="84" width="8" height="8" rx="1" />
            </svg>
          </div>

          <div className="mt-2 text-[10px] text-emerald-800 font-semibold flex items-center gap-1">
            <Check size={12} strokeWidth={3} className="text-emerald-600" />
            <span>Cryptographically Verified (CSID Signed)</span>
          </div>
        </div>

        {/* Calculation Totals (Clean, Isolated LTR to Avoid Bidirectional Glitches) */}
        <div className="bg-slate-50/80 rounded-xl p-2.5 space-y-1 text-xs border border-slate-100">
          <div className="flex justify-between text-slate-500">
            <span>المجموع الفرعي (Subtotal):</span>
            <span className="font-mono font-medium text-slate-700">SAR 4,200.00</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>ضريبة القيمة المضافة 15% (VAT):</span>
            <span className="font-mono font-medium text-slate-700">SAR 630.00</span>
          </div>
          <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-slate-200/80 text-sm">
            <span className="font-heading">الإجمالي المستحق (Total):</span>
            <span className="font-mono font-black text-[#007a55]">SAR 4,830.00</span>
          </div>
        </div>

        {/* Footer Security Strip (No Wrapping, Clean & Professional) */}
        <div className="pt-2.5 mt-2.5 border-t border-dashed border-slate-200 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1.5 text-slate-500 font-mono">
            <span className="text-slate-400">UUID:</span>
            <span>e4b2-91fa-8021</span>
          </div>
          <span className="inline-flex items-center gap-1 font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full whitespace-nowrap">
            <ShieldCheck size={12} className="text-emerald-600" />
            <span>Fatoora Phase 2</span>
          </span>
        </div>
      </div>
    </div>
  );
}
