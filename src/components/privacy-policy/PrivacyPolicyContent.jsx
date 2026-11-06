'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Shield,
  Eye,
  Lock,
  UserCheck,
  ShieldOff,
  Globe2,
  FileText,
  BarChart3,
  Share2,
  Cookie,
  ShieldCheck,
  Scale,
  ExternalLink,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Check,
  Download,
  Edit3,
  Trash2,
  BellOff,
  ShieldAlert,
  Clock,
  AlertTriangle,
  HelpCircle,
  MessageSquare,
  ArrowUp,
} from 'lucide-react';
import { renderTitleWithGradient } from '../../lib/render-title';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LeadModal from '../LeadModal';
import { getDefaultContentForCountry } from '../../lib/content';

/* ========================================================================
   PRIVACY POLICY DATA
   ======================================================================== */

const CORE_PRINCIPLES = [
  {
    icon: Shield,
    title: 'Data Minimization',
    description: 'We only collect personal information that is necessary for the stated purpose, and nothing more.',
    color: '#007a55',
    bg: 'rgba(0, 122, 85, 0.08)',
    border: 'rgba(0, 122, 85, 0.18)',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We are open about what data we collect, why we collect it, and how we use it.',
    color: '#2563eb',
    bg: 'rgba(37, 99, 235, 0.08)',
    border: 'rgba(37, 99, 235, 0.18)',
  },
  {
    icon: Lock,
    title: 'Security First',
    description: 'Your data is protected with enterprise-grade security measures at every layer.',
    color: '#7c3aed',
    bg: 'rgba(124, 58, 237, 0.08)',
    border: 'rgba(124, 58, 237, 0.18)',
  },
  {
    icon: UserCheck,
    title: 'Your Control',
    description: 'You have the right to access, correct, or delete your personal information at any time.',
    color: '#ea580c',
    bg: 'rgba(234, 88, 12, 0.08)',
    border: 'rgba(234, 88, 12, 0.18)',
  },
  {
    icon: ShieldOff,
    title: 'No Data Selling',
    description: 'We never sell, rent, or trade your personal data to third parties for commercial gain.',
    color: '#db2777',
    bg: 'rgba(219, 39, 119, 0.08)',
    border: 'rgba(219, 39, 119, 0.18)',
  },
  {
    icon: Globe2,
    title: 'Global Standards',
    description: 'We adhere to internationally recognized privacy standards including GDPR best practices.',
    color: '#0d9488',
    bg: 'rgba(13, 148, 136, 0.08)',
    border: 'rgba(13, 148, 136, 0.18)',
  },
];

const TABLE_OF_CONTENTS = [
  { id: 'information-we-collect', label: 'Information We Collect', icon: FileText },
  { id: 'how-we-use', label: 'How We Use Your Information', icon: BarChart3 },
  { id: 'data-sharing', label: 'Information Sharing & Disclosure', icon: Share2 },
  { id: 'cookies', label: 'Cookies & Tracking Technologies', icon: Cookie },
  { id: 'data-security', label: 'Data Security', icon: ShieldCheck },
  { id: 'your-rights', label: 'Your Privacy Rights', icon: Scale },
  { id: 'third-party-links', label: 'Third-Party Links', icon: ExternalLink },
  { id: 'changes', label: 'Changes to This Policy', icon: RefreshCw },
];

const POLICY_SECTIONS = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    icon: FileText,
    color: '#007a55',
    items: [
      {
        subtitle: 'Information You Provide',
        text: 'We collect information you voluntarily share with us, including your name, email address, phone number, company name, and any messages or project details you submit through our contact forms, quote requests, or when engaging our services.',
      },
      {
        subtitle: 'Information Collected Automatically',
        text: 'When you visit our website, we automatically collect certain technical data such as your IP address, browser type, device information, pages visited, time spent on pages, and referring URLs. This data is collected via cookies and analytics tools to help us improve our website experience.',
      },
      {
        subtitle: 'Information from Third Parties',
        text: 'We may receive information about you from third-party platforms such as LinkedIn, Google, or referral partners when you engage with us through those channels.',
      },
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    icon: BarChart3,
    color: '#2563eb',
    items: [
      {
        subtitle: 'Service Delivery',
        text: 'We use your information to respond to inquiries, provide project quotes, deliver our web design, development, and software services, and communicate about ongoing projects.',
      },
      {
        subtitle: 'Improving Our Services',
        text: 'Analytics data helps us understand how visitors interact with our website, identify areas for improvement, and enhance the overall user experience.',
      },
      {
        subtitle: 'Marketing Communications',
        text: 'With your consent, we may send you updates about our services, industry insights, case studies, and promotional offers. You may opt out at any time using the unsubscribe link in any email.',
      },
      {
        subtitle: 'Legal Compliance',
        text: 'We process your data as required to comply with applicable laws, respond to legal requests, and enforce our terms of service.',
      },
    ],
  },
  {
    id: 'data-sharing',
    title: 'Information Sharing & Disclosure',
    icon: Share2,
    color: '#7c3aed',
    items: [
      {
        subtitle: 'We Do Not Sell Your Data',
        text: 'Isarva Infotech does not sell, rent, or trade your personal information to third parties for their marketing purposes.',
      },
      {
        subtitle: 'Service Providers',
        text: 'We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, sending emails, or analyzing data. These providers are contractually obligated to protect your information.',
      },
      {
        subtitle: 'Business Transfers',
        text: 'In the event of a merger, acquisition, or sale of company assets, your information may be transferred as part of that transaction. We will notify you before your data is subject to a different privacy policy.',
      },
      {
        subtitle: 'Legal Requirements',
        text: 'We may disclose your information when required by law, court order, or government authority, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.',
      },
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies & Tracking Technologies',
    icon: Cookie,
    color: '#ea580c',
    items: [
      {
        subtitle: 'What Are Cookies',
        text: 'Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, analyze site traffic, and improve your browsing experience.',
      },
      {
        subtitle: 'Types of Cookies We Use',
        text: 'We use essential cookies (required for website functionality), analytics cookies (Google Analytics, Google Tag Manager, Facebook Pixel), and preference cookies to remember your settings. We do not use advertising cookies for ad targeting on third-party platforms.',
      },
      {
        subtitle: 'Managing Cookies',
        text: 'You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of some parts of our website.',
      },
    ],
  },
  {
    id: 'data-security',
    title: 'Data Security',
    icon: ShieldCheck,
    color: '#059669',
    items: [
      {
        subtitle: 'Security Measures',
        text: 'We implement industry-standard security measures including SSL/TLS encryption, secure server infrastructure, access controls, and regular security audits to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
      },
      {
        subtitle: 'Data Retention',
        text: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer required, it is securely deleted.',
      },
      {
        subtitle: 'Breach Notification',
        text: 'In the unlikely event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law, in a timely manner.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Privacy Rights',
    icon: Scale,
    color: '#4f46e5',
    items: [
      {
        subtitle: 'Access & Portability',
        text: 'You have the right to request a copy of the personal information we hold about you, in a structured and commonly used format.',
        rightIcon: Download,
      },
      {
        subtitle: 'Correction',
        text: 'If you believe any information we hold about you is inaccurate or incomplete, you may request that we correct or update it.',
        rightIcon: Edit3,
      },
      {
        subtitle: 'Deletion',
        text: 'You may request that we delete your personal information, subject to certain legal exceptions such as compliance obligations or legitimate business interests.',
        rightIcon: Trash2,
      },
      {
        subtitle: 'Opt-Out',
        text: 'You may opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly. This will not affect communications related to services you have requested.',
        rightIcon: BellOff,
      },
      {
        subtitle: 'GDPR Rights (EU Residents)',
        text: 'If you are located in the European Economic Area, you have additional rights under GDPR, including the right to restrict processing, object to processing, and lodge a complaint with a supervisory authority.',
        rightIcon: ShieldAlert,
      },
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    icon: ExternalLink,
    color: '#0d9488',
    items: [
      {
        subtitle: 'External Websites',
        text: 'Our website may contain links to third-party websites, social media platforms, or partner sites. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.',
      },
      {
        subtitle: 'Embedded Content',
        text: 'Our website may include embedded content such as videos, maps, or social media widgets from third parties (e.g., YouTube, Google Maps). These services may collect data about you when you interact with them, subject to their own privacy policies.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    icon: RefreshCw,
    color: '#db2777',
    items: [
      {
        subtitle: 'Policy Updates',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. We will notify you of significant changes by posting the updated policy on this page with a revised effective date.',
      },
      {
        subtitle: 'Continued Use',
        text: 'Your continued use of our website after any changes to this policy constitutes your acceptance of the updated terms. We encourage you to review this policy periodically.',
      },
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: 'What personal data does Isarva Infotech collect and why?',
    a: 'We collect only the information necessary to deliver our services — such as your name, email, phone number, and company details submitted via contact or demo forms. We also collect technical data like IP address, browser type, and pages visited through cookies and analytics tools to improve website performance. We never collect sensitive data like financial or health records unless explicitly required for a service you request.',
  },
  {
    q: 'Does Isarva Infotech sell or share my personal data with third parties?',
    a: 'No. We never sell, rent, or trade your personal information to third parties for marketing or commercial purposes. We only share data with trusted service providers (payment processors, email services, analytics tools) who are contractually obligated to protect it and use it solely for the services we engage them for.',
  },
  {
    q: 'How can I access, update, or delete my personal information?',
    a: 'You have full control over your data. You can request access to, correction of, or deletion of your personal information at any time by emailing us at marketing@isarvait.com or calling +91 99028 63697. We will respond within 30 days as required by applicable data protection laws including GDPR.',
  },
  {
    q: 'How does Isarva Infotech protect my data?',
    a: 'We implement industry-standard security measures including SSL/TLS encryption for all data in transit, secure server infrastructure, role-based access controls, regular security audits, and encrypted backups. Our infrastructure follows enterprise-grade security protocols to prevent unauthorized access, alteration, or disclosure of your information.',
  },
  {
    q: 'Does Isarva Infotech comply with GDPR and Indian data protection regulations?',
    a: 'Yes. We adhere to internationally recognized privacy standards including GDPR best practices for EU residents and the Digital Personal Data Protection Act (DPDPA) 2023 framework in India. We ensure lawful processing, data minimization, transparent practices, and respect for individual rights regardless of your location.',
  },
  {
    q: 'How can I opt out of marketing communications?',
    a: 'You can opt out of marketing emails at any time by clicking the "Unsubscribe" link at the bottom of any email we send, or by contacting us directly at marketing@isarvait.com. Opting out of marketing will not affect service-related communications for products or services you have subscribed to.',
  },
];

/* ========================================================================
   SUBCOMPONENTS
   ======================================================================== */

function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden border-b border-slate-200/60"
      style={{
        background: 'linear-gradient(135deg, #f0fdf8 0%, #ecfdf5 25%, #f8fafc 50%, #eff6ff 75%, #f5f3ff 100%)',
      }}
    >
      {/* Decorative Ambient Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-400/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-400/4 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#007a55_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.025] pointer-events-none" />

      <div className="site-container relative z-10 section-padding-sm">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Legal & Compliance Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-emerald-200/70 shadow-2xs mb-5">
            <Shield size={14} className="text-[#007a55]" />
            <span className="section-eyebrow">LEGAL &amp; COMPLIANCE</span>
          </div>

          <h1>Privacy Policy</h1>

          <div className="mt-4">
            <p className="max-w-2xl mx-auto">
              At Isarva Infotech, we are committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data. This policy explains our practices and your rights in plain, clear language.
            </p>
          </div>

          {/* Meta Info Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-xs font-semibold text-slate-600 shadow-2xs">
              <Clock size={13} className="text-slate-400" />
              Last updated: January 1, 2025
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-xs font-semibold text-[#007a55] shadow-2xs">
              <ShieldCheck size={13} />
              Data protection
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-xs font-semibold text-blue-600 shadow-2xs">
              <Eye size={13} />
              Transparent practices
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-xs font-semibold text-purple-600 shadow-2xs">
              <UserCheck size={13} />
              Your rights matter
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="section-padding bg-white relative border-b border-slate-100">
      <div className="site-container">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#007a55] mx-auto shadow-2xs">
            <Sparkles size={14} className="text-[#007a55]" />
            <span className="section-eyebrow">OUR COMMITMENT</span>
          </div>
          <h2>{renderTitleWithGradient('Core Privacy Principles')}</h2>
          <p className="max-w-2xl mx-auto">
            Six guiding principles that underpin how we handle every piece of information you share with us.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_PRINCIPLES.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: principle.bg,
                  border: `1.5px solid ${principle.border}`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${principle.color}15`, color: principle.color }}
                >
                  <Icon size={22} />
                </div>
                <h3>{principle.title}</h3>
                <p className="mt-2">{principle.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TableOfContents() {
  const [activeId, setActiveId] = useState('information-we-collect');

  useEffect(() => {
    const handleScroll = () => {
      // Offset taking sticky header (80px) + spacing into account
      const scrollPosition = window.scrollY + 160;

      for (let i = TABLE_OF_CONTENTS.length - 1; i >= 0; i--) {
        const item = TABLE_OF_CONTENTS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <div className="sticky top-24 w-full">
      <div className="rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-slate-900/5 p-5 space-y-3 max-h-[calc(100vh-7rem)] overflow-y-auto">
        <h4>On This Page</h4>
        <nav className="space-y-1">
          {TABLE_OF_CONTENTS.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all group border-l-2 ${
                  isActive
                    ? 'bg-emerald-50/90 text-[#007a55] font-bold border-[#007a55] shadow-2xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-transparent'
                }`}
              >
                <Icon
                  size={14}
                  className={`shrink-0 transition-colors ${
                    isActive ? 'text-[#007a55]' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                />
                <span className="truncate">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Contact Quick Card */}
        <div className="pt-3 border-t border-slate-100 space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Questions?</div>
          <a
            href="mailto:marketing@isarvait.com"
            className="flex items-center gap-2 text-xs font-semibold text-[#007a55] hover:underline"
          >
            <Mail size={13} />
            marketing@isarvait.com
          </a>
        </div>
      </div>
    </div>
  );
}

function PolicySection({ section }) {
  const Icon = section.icon;
  return (
    <div id={section.id} className="scroll-mt-28 space-y-5">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${section.color}12`, color: section.color }}
        >
          <Icon size={20} />
        </div>
        <h2 className="!text-xl sm:!text-2xl lg:!text-[1.75rem]">{section.title}</h2>
      </div>

      {/* Content Items */}
      <div className="space-y-4 pl-0 sm:pl-13">
        {section.items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-slate-50/80 border border-slate-200/60 p-5 hover:border-slate-300/80 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <h4 className="mb-2">{item.subtitle}</h4>
                <p>{item.text}</p>
              </div>
              {item.rightIcon && (
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-1"
                  style={{ background: `${section.color}10`, color: section.color }}
                >
                  <item.rightIcon size={16} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="privacy-faqs" className="section-padding relative overflow-hidden border-t border-slate-200/60 scroll-mt-20"
      style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #f0fdf8 45%, #f8fafc 100%)',
      }}
    >
      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(circle 650px at 5% 15%, rgba(0,122,85,0.06) 0%, transparent 70%), radial-gradient(circle 650px at 95% 85%, rgba(37,99,235,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="site-container relative z-10">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#007a55] mx-auto shadow-2xs">
            <HelpCircle size={14} className="text-[#007a55]" />
            <span className="section-eyebrow">YOUR QUESTIONS, ANSWERED</span>
          </div>
          <h2>{renderTitleWithGradient('Privacy Policy FAQ')}</h2>
          <p className="max-w-2xl mx-auto">
            Common questions about how we protect your privacy and handle your personal information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const colors = [
              { accent: '#007a55', bg: 'rgba(0, 122, 85, 0.06)', border: 'rgba(0, 122, 85, 0.18)' },
              { accent: '#2563eb', bg: 'rgba(37, 99, 235, 0.06)', border: 'rgba(37, 99, 235, 0.18)' },
              { accent: '#7c3aed', bg: 'rgba(124, 58, 237, 0.06)', border: 'rgba(124, 58, 237, 0.18)' },
              { accent: '#ea580c', bg: 'rgba(234, 88, 12, 0.06)', border: 'rgba(234, 88, 12, 0.18)' },
              { accent: '#0d9488', bg: 'rgba(13, 148, 136, 0.06)', border: 'rgba(13, 148, 136, 0.18)' },
              { accent: '#db2777', bg: 'rgba(219, 39, 119, 0.06)', border: 'rgba(219, 39, 119, 0.18)' },
            ];
            const theme = colors[idx % colors.length];

            return (
              <div
                key={idx}
                className="relative rounded-2xl transition-all duration-300 overflow-hidden"
                style={{
                  background: isOpen ? theme.bg : 'rgba(255,255,255,0.9)',
                  border: `1.5px solid ${isOpen ? theme.accent : theme.border}`,
                  boxShadow: isOpen ? `0 8px 24px ${theme.border}` : '0 1px 4px rgba(0,0,0,0.03)',
                }}
              >
                {/* Left Accent Bar */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 transition-all duration-300 pointer-events-none"
                  style={{
                    width: isOpen ? '4px' : '0px',
                    background: theme.accent,
                  }}
                />

                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 py-4 px-5 sm:px-6 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-all duration-300"
                      style={{
                        fontFamily: 'var(--font-space-grotesk)',
                        background: isOpen ? theme.accent : `${theme.accent}12`,
                        color: isOpen ? '#ffffff' : theme.accent,
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="font-space font-bold text-sm sm:text-base leading-snug transition-colors"
                      style={{ color: isOpen ? theme.accent : '#0f172a' }}
                    >
                      {item.q}
                    </span>
                  </div>

                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen ? theme.accent : `${theme.accent}10`,
                      color: isOpen ? '#ffffff' : theme.accent,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown size={16} strokeWidth={2.5} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className="px-5 sm:px-6 pb-5 pt-2"
                    style={{ borderTop: `1px solid ${theme.border}` }}
                  >
                    <p className="leading-relaxed">{item.a}</p>
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

function ContactBanner() {
  return (
    <section className="section-padding relative overflow-hidden bg-white border-t border-slate-200/60">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Get In Touch */}
          <div className="rounded-2xl bg-gradient-to-br from-[#002617] via-[#003d27] to-[#002214] border border-emerald-500/30 p-6 sm:p-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            <div className="relative z-10 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30">
                <MessageSquare size={13} className="text-emerald-300" />
                <span className="section-eyebrow !text-emerald-300">GET IN TOUCH</span>
              </div>

              <h3 className="!text-white">Privacy Questions?</h3>

              <p className="!text-emerald-100/80 max-w-md">
                If you have any questions about this Privacy Policy, want to exercise your data rights, or have concerns about how we handle your information, our team is here to help.
              </p>

              <div className="space-y-3 pt-2">
                <a href="mailto:marketing@isarvait.com" className="flex items-center gap-3 text-sm font-semibold text-white hover:text-emerald-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Mail size={15} />
                  </div>
                  marketing@isarvait.com
                </a>
                <a href="tel:+919902863697" className="flex items-center gap-3 text-sm font-semibold text-white hover:text-emerald-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <Phone size={15} />
                  </div>
                  +91 99028 63697
                </a>
                <div className="flex items-center gap-3 text-sm font-medium text-emerald-200/90">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <MapPin size={15} />
                  </div>
                  Isarva Infotech, Mangalore, Karnataka, India
                </div>
              </div>
            </div>
          </div>

          {/* Right: Data Control CTA */}
          <div className="rounded-2xl bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 border border-slate-200/80 p-6 sm:p-8 shadow-lg shadow-slate-900/5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#007a55] flex items-center justify-center shrink-0">
                <UserCheck size={20} />
              </div>
              <h3>Your data, your control.</h3>
            </div>

            <p>
              Want to update, access, or delete your personal information? Contact us and we will respond within 30 days as required by applicable law.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="https://www.isarvait.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand-primary text-sm"
              >
                Contact Us
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-slate-200/70">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 text-xs font-semibold text-slate-600 shadow-2xs">
                <Check size={12} className="text-[#007a55]" />
                30-day response
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 text-xs font-semibold text-slate-600 shadow-2xs">
                <Check size={12} className="text-[#007a55]" />
                GDPR compliant
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 text-xs font-semibold text-slate-600 shadow-2xs">
                <Check size={12} className="text-[#007a55]" />
                No data selling
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkWithUsBanner() {
  return (
    <section className="section-padding-sm relative overflow-hidden bg-gradient-to-r from-emerald-50/80 via-white to-blue-50/50 border-t border-slate-200/60">
      <div className="site-container text-center space-y-4">
        <span className="section-eyebrow">WORK WITH US</span>
        <h2>{renderTitleWithGradient('Ready to build something secure and scalable?')}</h2>
        <p className="max-w-2xl mx-auto">
          Partner with Isarva Infotech for solutions built with privacy, security, and performance at their core.
        </p>
        <div className="pt-2">
          <Link
            href="https://www.isarvait.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand-primary text-sm"
          >
            Get In Touch
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#007a55] text-white shadow-lg shadow-emerald-900/30 hover:bg-[#006546] hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}

/* ========================================================================
   MAIN PRIVACY POLICY CONTENT
   ======================================================================== */

export default function PrivacyPolicyContent() {
  const [countryCode, setCountryCode] = useState('IN');
  const [content, setContent] = useState(() => getDefaultContentForCountry('IN'));
  const [modalState, setModalState] = useState({ isOpen: false, type: 'demo', product: null });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('isarva_country');
      if (stored && (stored === 'IN' || stored === 'SA')) {
        setCountryCode(stored);
        setContent(getDefaultContentForCountry(stored));
      }
    }
  }, []);

  const handleCountryChange = (countryObj) => {
    const code = countryObj?.code || 'IN';
    setCountryCode(code);
    setContent(getDefaultContentForCountry(code));
    if (typeof window !== 'undefined') {
      localStorage.setItem('isarva_country', code);
    }
  };

  const currentCountry = content?.countries?.find((c) => c.code === countryCode) || {
    code: countryCode,
    name: countryCode === 'SA' ? 'Saudi Arabia' : 'India',
  };

  const handleOpenModal = (type = 'demo', product = null) => {
    setModalState({ isOpen: true, type, product });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, type: 'demo', product: null });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      <main className="flex-1">
        {/* Hero */}
        <HeroBanner />

        {/* Core Principles */}
        <PrinciplesSection />

        {/* Policy Sections with Sidebar TOC */}
        <section className="section-padding bg-white relative">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Sidebar Table of Contents (Desktop) */}
              <aside className="hidden lg:block lg:col-span-3">
                <TableOfContents />
              </aside>

              {/* Main Policy Content */}
              <div className="lg:col-span-9 space-y-12">
                {POLICY_SECTIONS.map((section) => (
                  <PolicySection key={section.id} section={section} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqAccordion items={FAQ_ITEMS} />

        {/* Contact & Data Control */}
        <ContactBanner />

        {/* Work With Us CTA */}
        <WorkWithUsBanner />
      </main>

      {/* Global Footer */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Global Lead & Demo Modal */}
      <LeadModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        product={modalState.product}
        countryCode={countryCode}
      />

      {/* Back to Top */}
      <BackToTopButton />
    </div>
  );
}
