'use client';

import Image from 'next/image';
import { FileText, RefreshCw, BarChart3, ShieldCheck, BrainCircuit } from 'lucide-react';

const controlFeatures = [
  {
    id: 'no-duplicate',
    icon: <FileText size={18} />,
    iconBg: '#3b82f6',
    title: 'Less Duplicate Data Entry',
    desc: 'One integrated system keeps all your data in sync.',
  },
  {
    id: 'realtime-stock',
    icon: <RefreshCw size={18} />,
    iconBg: '#10b981',
    title: 'Real-Time Stock Visibility',
    desc: "Know what's in stock, what's running low and what to reorder.",
  },
  {
    id: 'financial-reporting',
    icon: <BarChart3 size={18} />,
    iconBg: '#f59e0b',
    title: 'Clearer Financial Reporting',
    desc: 'Get accurate, up-to-date financial insights.',
  },
  {
    id: 'approvals',
    icon: <ShieldCheck size={18} />,
    iconBg: '#ef4444',
    title: 'Controlled Approvals & Workflows',
    desc: 'Keep your business processes organised and secure.',
  },
  {
    id: 'decision-making',
    icon: <BrainCircuit size={18} />,
    iconBg: '#8b5cf6',
    title: 'Better Decision-Making',
    desc: 'Turn your data into actionable insights.',
  },
];

const bottomStats = [
  { icon: '⚙️', label: 'Unified Business Operations', sub: 'Connect all departments' },
  { icon: '⚡', label: 'Greater Efficiency', sub: 'Automate everyday tasks' },
  { icon: '👁️', label: 'Improved Visibility', sub: 'Get real-time insights' },
  { icon: '🛡️', label: 'Stronger Business Control', sub: 'Make confident decisions' },
];

export default function ErpBusinessControl() {
  return (
    <section
      id="business-control"
      className="relative overflow-hidden"
      style={{ background: '#0b1a30' }}
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 30%, rgba(0,86,210,0.18) 0%, transparent 55%)',
        }}
      />

      <div className="site-container section-padding relative">
        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* Left: Text + Feature List */}
          <div className="flex flex-col gap-6">
            <span className="section-eyebrow">Why These Features Matter</span>
            <h2 className="text-white">
              Built for Better{' '}
              <span style={{ color: '#38bdf8' }}>Business Control</span>
            </h2>
            <p style={{ color: '#94a3b8' }}>
              Our integrated features work together to give you real-time
              visibility, reduce manual work and help you make faster, smarter
              decisions.
            </p>

            {/* Feature rows */}
            <ul className="flex flex-col gap-5 mt-1">
              {controlFeatures.map((f) => (
                <li key={f.id} id={`erp-control-${f.id}`} className="flex items-start gap-4">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white mt-0.5"
                    style={{ background: f.iconBg }}
                    aria-hidden="true"
                  >
                    {f.icon}
                  </span>
                  <div>
                    <h4 className="text-white">{f.title}</h4>
                    <p className="text-sm mt-0.5" style={{ color: '#94a3b8' }}>
                      {f.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Office Monitor Image */}
          <div className="relative">
            {/* "Turn Data into Growth" label */}
            <div
              className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col items-center gap-0.5"
              style={{ writingMode: 'vertical-rl' }}
            >
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: '#38bdf8', letterSpacing: '0.12em' }}
              >
                Turn Data into Growth
              </span>
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(56,189,248,0.15), 0 20px 60px rgba(0,0,0,0.4)',
              }}
            >
              <Image
                src="/images/erp-features/erp-office-monitor.jpg"
                alt="ERP dashboard displayed on a large monitor in a modern dark office — real-time business data at a glance"
                width={720}
                height={540}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip at bottom of dark section ── */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}
      >
        <div className="site-container py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {bottomStats.map((s, i) => (
              <div
                key={i}
                id={`erp-stat-${i}`}
                className="flex items-center gap-3 px-2"
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">{s.icon}</span>
                <div>
                  <h4 className="text-sm text-white leading-tight">{s.label}</h4>
                  <p className="text-xs mt-0.5" style={{ color: '#64748b' }}>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
