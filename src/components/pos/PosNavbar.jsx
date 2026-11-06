'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Menu, X, ArrowLeft } from 'lucide-react';

export default function PosNavbar({ onOpenDemoModal, onOpenBrochureModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Capabilities', href: '#features' },
    { label: 'Modules', href: '#modules' },
    { label: 'Outlets', href: '#outlets' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Mobile App', href: '#mobile-pos' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e, href) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-4'
      }`}
    >
      <div className="site-container">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Platform Backlink */}
          <div className="flex items-center gap-4 lg:gap-6">
            <Link href="/" className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-brand-500 transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Main Platform</span>
            </Link>

            <div className="h-4 w-px bg-slate-200 hidden sm:block" />

            <Link href="/restaurant-pos" className="flex items-center gap-2.5">
              <img
                src="/images/isarva-logo.svg"
                alt="ISARVA Restaurant POS"
                className="h-8 sm:h-9 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/images/isarva-logo.png';
                }}
              />
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wide">
                Restaurant POS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenBrochureModal}
              className="pos-secondary-btn-white"
              style={{ height: '42px', minHeight: '42px', padding: '0 16px', fontSize: '0.875rem' }}
            >
              <FileText size={16} className="text-emerald-600" />
              <span>Brochure</span>
            </button>
            <button
              type="button"
              onClick={onOpenDemoModal}
              className="pos-primary-btn-emerald"
              style={{ height: '42px', minHeight: '42px', padding: '0 20px', fontSize: '0.875rem' }}
            >
              <span>Book Demo</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-xl text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <img
                src="/images/isarva-logo.svg"
                alt="ISARVA Restaurant POS"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/images/isarva-logo.png';
                }}
              />
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase">
                Restaurant POS
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 py-6 my-auto">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="flex items-center justify-between text-base font-bold text-slate-800 hover:text-emerald-600 py-3 px-4 rounded-xl hover:bg-emerald-50/50 transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs text-slate-400 font-semibold">&rarr;</span>
              </a>
            ))}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-bold text-slate-600 py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors border-t border-slate-100 mt-2"
            >
              <span>Back to Main ERP Platform</span>
              <span className="text-xs text-slate-400 font-semibold">&larr;</span>
            </Link>
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="pos-primary-btn-emerald w-full justify-center"
            >
              <span>Book a Free Demo</span>
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBrochureModal();
              }}
              className="pos-secondary-btn-white w-full justify-center"
            >
              <FileText size={16} className="text-emerald-600" />
              <span>Download PDF Brochure</span>
            </button>
            <div className="text-center text-xs font-semibold text-slate-500 pt-1">
              Offline Resilience • Real-Time KDS Sync • 24/7 Peak Support
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
