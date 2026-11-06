'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, ArrowUp } from 'lucide-react';

export default function CrmFooter({ onOpenDemoModal, onOpenBrochureModal }) {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/isarva-infotech/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.39 9.74v-8.37H5.07v8.37h2.78z" />
        </svg>
      ),
      hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/isarvainfotech',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      hoverColor: 'hover:text-black hover:border-black/40',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/isarvainfotech/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      hoverColor: 'hover:text-[#dc2743] hover:border-[#dc2743]/40',
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@isarvainfotech',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      hoverColor: 'hover:text-[#FF0000] hover:border-[#FF0000]/40',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/isarvainfotech',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      hoverColor: 'hover:text-[#1877F2] hover:border-[#1877F2]/40',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-white via-slate-50 to-sky-50/40 border-t border-slate-200/90 pt-16 pb-12">
      <div className="site-container">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200">
          
          {/* Logo */}
          <Link href="/crm" className="flex items-center gap-2.5 group">
            <img
              src="/images/isarva-logo.svg"
              alt="ISARVA Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = '/images/isarva-logo.png';
              }}
            />
            <span className="px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 text-xs font-extrabold uppercase tracking-wide">
              CRM
            </span>
          </Link>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <button
              type="button"
              onClick={onOpenBrochureModal}
              className="crm-secondary-btn-white"
              style={{ height: '46px', minHeight: '46px', padding: '0 20px', fontSize: '0.875rem' }}
            >
              <FileText size={16} className="text-sky-600 shrink-0" />
              <span>Download Brochure</span>
            </button>
            <button
              type="button"
              onClick={onOpenDemoModal}
              className="crm-primary-btn-orange"
              style={{ height: '46px', minHeight: '46px', padding: '0 22px', fontSize: '0.875rem' }}
            >
              <span>Book a Free Demo</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className={`w-9 h-9 rounded-xl bg-white text-slate-600 flex items-center justify-center transition-all duration-300 border border-slate-200 shadow-2xs hover:shadow-sm hover:-translate-y-0.5 ${s.hoverColor}`}
              >
                {s.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Legal & Back to Top Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} ISARVA INFOTECH PRIVATE LIMITED. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Main ERP Platform
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-orange-600 transition-colors inline-flex items-center gap-1.5 font-semibold cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp size={13} className="text-orange-600" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
