'use client';

import React from 'react';
import { Check, ShieldCheck, QrCode } from 'lucide-react';

export default function TaxInvoiceGraphic() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[410px] lg:max-w-[440px] flex items-center justify-center select-none">
      
      {/* Soft Ambient Glow */}
      <div className="absolute -inset-3 bg-emerald-500/15 rounded-3xl blur-3xl pointer-events-none" />

      {/* Realistic GST Tax Invoice Card */}
      <div className="relative z-10 w-full bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xl shadow-slate-900/10 rotate-1 hover:rotate-0 transition-transform duration-300">
        
        {/* Top Header: Brand & Invoice Badge */}
        <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
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
              GSTIN: <span className="font-semibold text-slate-700">29AAPCA1234F1Z9</span>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block text-[11px] font-heading font-extrabold uppercase tracking-wider text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
              Tax Invoice
            </span>
            <div className="mt-1 flex items-center justify-end gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              e-Invoice Ready
            </div>
          </div>
        </div>

        {/* Invoice Meta Grid */}
        <div className="grid grid-cols-2 gap-2 py-2.5 text-[11px] border-b border-dashed border-slate-200">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Invoice Details</span>
            <div className="font-mono text-slate-800 font-semibold">INV-2026-08412</div>
            <div className="text-slate-500">Date: 12 Oct 2026</div>
          </div>
          <div className="text-right sm:text-left">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Billed To (Client)</span>
            <div className="font-semibold text-slate-800">Spice Garden Pvt Ltd</div>
            <div className="font-mono text-slate-500 text-[10px]">27AABCS1234D1Z5</div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="py-2.5">
          <div className="grid grid-cols-12 gap-1 text-[10px] font-bold uppercase text-slate-400 pb-1.5 border-b border-slate-100">
            <div className="col-span-5">Item Description</div>
            <div className="col-span-2 text-center">HSN</div>
            <div className="col-span-2 text-center">Qty</div>
            <div className="col-span-3 text-right">Amount</div>
          </div>

          <div className="divide-y divide-slate-50 text-[11px]">
            <div className="grid grid-cols-12 gap-1 py-1.5 items-center">
              <div className="col-span-5 font-medium text-slate-800">Restaurant POS</div>
              <div className="col-span-2 text-center text-slate-500 font-mono text-[10px]">9983</div>
              <div className="col-span-2 text-center text-slate-600">1</div>
              <div className="col-span-3 text-right font-mono text-slate-800 font-medium">₹8,000.00</div>
            </div>
            <div className="grid grid-cols-12 gap-1 py-1.5 items-center">
              <div className="col-span-5 font-medium text-slate-800">HRMS Module</div>
              <div className="col-span-2 text-center text-slate-500 font-mono text-[10px]">9983</div>
              <div className="col-span-2 text-center text-slate-600">1</div>
              <div className="col-span-3 text-right font-mono text-slate-800 font-medium">₹5,000.00</div>
            </div>
          </div>
        </div>

        {/* GST Calculation Breakdown */}
        <div className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100 text-[11px] space-y-1">
          <div className="flex justify-between text-slate-600">
            <span>Taxable Amount</span>
            <span className="font-mono">₹13,000.00</span>
          </div>
          <div className="flex justify-between text-slate-500 text-[10px]">
            <span>CGST @ 9.0%</span>
            <span className="font-mono">₹1,170.00</span>
          </div>
          <div className="flex justify-between text-slate-500 text-[10px]">
            <span>SGST @ 9.0%</span>
            <span className="font-mono">₹1,170.00</span>
          </div>
          <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-slate-200 text-xs">
            <span>Total Invoice Value (INR)</span>
            <span className="font-mono text-[#007a55]">₹15,340.00</span>
          </div>
        </div>

        {/* Statutory IRN, QR Code & Validation Bar */}
        <div className="mt-3 pt-3 border-t border-dashed border-slate-200 flex items-center justify-between gap-3">
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-tight">
              IRN Reference Hash
            </div>
            <div className="font-mono text-[10px] text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200/80 break-all">
              7a9bc3f28d1045a19ce12d8a4
            </div>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <Check size={10} strokeWidth={3} /> IRN Generated
              </span>
              <span className="inline-flex items-center gap-1 text-[9px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                <ShieldCheck size={10} strokeWidth={2.5} /> GSTN Validated
              </span>
            </div>
          </div>

          {/* QR Code */}
          <div className="shrink-0 p-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
            <svg
              viewBox="0 0 100 100"
              className="w-14 h-14 sm:w-16 sm:h-16 text-slate-900"
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
              
              {/* Data matrix modules */}
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
        </div>

      </div>

    </div>
  );
}
