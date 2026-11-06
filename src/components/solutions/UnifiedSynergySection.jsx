'use client';

import React from 'react';
import {
  RefreshCw,
  Database,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Activity,
  Layers,
} from 'lucide-react';

const SYNERGY_FLOWS = [
  {
    step: '01',
    event: 'A Sale Occurs at POS Terminal',
    description: 'Cashier bills an order or waiter enters a table KOT on mobile.',
    impact: 'Recorded in < 0.2s',
  },
  {
    step: '02',
    event: 'BillSoft Auto-Generates Ledger',
    description: 'Statutory GST/ZATCA invoice generated, tax booked, and ledger debited.',
    impact: 'Zero Manual Entry',
  },
  {
    step: '03',
    event: 'Inventory Stock Decremented',
    description: 'BOM recipe components subtracted instantly across the central warehouse.',
    impact: 'Real-Time Stock Audit',
  },
  {
    step: '04',
    event: 'CRM & HRMS Updated',
    description: 'Customer loyalty points credited, and server sales commission logged.',
    impact: '100% Team Synergy',
  },
];

export default function UnifiedSynergySection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="section-eyebrow">DATA SYNCHRONIZATION</div>
          <h2>
            <span>The Power of a Unified ERP vs. Fragmented Software</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Stop stitching together five separate software applications with CSV exports and broken third-party integrations. ISARVA operates on one unified cloud database.
          </p>
        </div>

        {/* Comparison Matrix (Fragmented vs Unified) - Full width of site-container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full mb-16">
          {/* Left: Fragmented Legacy Approach */}
          <div className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold font-mono mb-4">
                <XCircle size={14} />
                <span>FRAGMENTED APPS</span>
              </div>
              <h3 className="mb-2">
                <span>Separate Point Solutions</span>
              </h3>
              <p className="mb-6">
                Using one tool for billing, another for accounting, a spreadsheet for payroll, and standalone CRM.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <XCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                  <span>Manual re-entry of daily sales data into accounting ledgers</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <XCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                  <span>Stock mismatch between store counters and central warehouse</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <XCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                  <span>Multiple subscription fees that multiply every time you add users</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <XCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                  <span>Brittle third-party API webhooks that break during internet cuts</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 font-mono">
              Outcome: High data errors &amp; hours wasted reconciling numbers
            </div>
          </div>

          {/* Right: Unified ISARVA ERP Architecture */}
          <div className="card-ecosystem rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#007a55] via-[#006949] to-[#034d36] text-white border border-emerald-400/40 card-shadow-dark-emerald flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-bold font-mono mb-4 border border-emerald-300/30">
                <CheckCircle2 size={14} />
                <span>ISARVA UNIFIED CORE</span>
              </div>
              <h3 className="mb-2 text-white">
                <span>One Central Platform</span>
              </h3>
              <p className="mb-6 text-emerald-100">
                POS, BillSoft, HRMS, CRM, and Inventory all share the exact same real-time Postgres database.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-emerald-100">
                  <CheckCircle2 size={15} className="text-emerald-300 shrink-0 mt-0.5" />
                  <span>Zero manual ledger entry: orders post straight to financial P&amp;L</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-emerald-100">
                  <CheckCircle2 size={15} className="text-emerald-300 shrink-0 mt-0.5" />
                  <span>100% stock fidelity: inventory decrements automatically across outlets</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-emerald-100">
                  <CheckCircle2 size={15} className="text-emerald-300 shrink-0 mt-0.5" />
                  <span>Transparent single subscription with no per-user penalty pricing</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-emerald-100">
                  <CheckCircle2 size={15} className="text-emerald-300 shrink-0 mt-0.5" />
                  <span>Built-in statutory compliance: native GST &amp; Saudi ZATCA e-invoicing</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-400/30 text-xs text-emerald-200 font-mono">
              Outcome: 40% operational time saved &amp; instant executive reporting
            </div>
          </div>
        </div>

        {/* 4-Step Synchronized Real-Time Event Sequence - Full width of site-container */}
        <div className="w-full">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-[#007a55] uppercase tracking-wider">
              HOW ONE EVENT PROPAGATES INSTANTLY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SYNERGY_FLOWS.map((flow, fIdx) => (
              <div
                key={fIdx}
                className="card-ecosystem rounded-2xl p-5 bg-white border card-shadow-emerald relative"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#007a55] font-mono font-bold text-xs flex items-center justify-center mb-3 border border-emerald-200">
                  {flow.step}
                </div>
                <h4 className="mb-1.5">
                  <span>{flow.event}</span>
                </h4>
                <p className="mb-3">
                  {flow.description}
                </p>
                <div className="inline-block px-2 py-0.5 rounded bg-emerald-50 text-xs font-mono font-semibold text-[#007a55]">
                  {flow.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
