'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText, Menu, X, ArrowLeft } from 'lucide-react';

export default function BillsoftNavbar({ onOpenDemoModal, onOpenBrochureModal }) {
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
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Modules', href: '#modules' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Mobile App', href: '#mobile' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
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
            <Link href="/" className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              <span className="hidden sm:inline">Main Platform</span>
            </Link>

            <div className="h-4 w-px bg-slate-200 hidden sm:block" />

            <Link href="/billsoft" className="flex items-center gap-2.5">
              <img
                src="/images/isarva-logo.svg"
                alt="ISARVA BillSoft Accounting Software"
                className="h-8 sm:h-9 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/images/isarva-logo.png';
                }}
              />
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-100 text-[#2563eb] text-xs font-extrabold uppercase tracking-wider">
                BillSoft ERP
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs font-bold text-slate-600 hover:text-[#2563eb] transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenBrochureModal}
              className="billsoft-secondary-btn-white text-xs h-10 px-4"
            >
              <FileText size={15} className="text-[#2563eb]" />
              <span>Brochure</span>
            </button>
            <button
              type="button"
              onClick={onOpenDemoModal}
              className="billsoft-primary-btn-blue text-xs h-10 px-4"
            >
              <span>Book Demo</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={onOpenDemoModal}
              className="billsoft-primary-btn-blue text-xs h-9 px-3"
            >
              <span>Demo</span>
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden pt-4 pb-6 border-t border-slate-200 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-[#2563eb] rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    handleLinkClick();
                    onOpenBrochureModal();
                  }}
                  className="billsoft-secondary-btn-white w-full justify-center"
                >
                  <FileText size={16} className="text-[#2563eb]" />
                  <span>Download Brochure</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleLinkClick();
                    onOpenDemoModal();
                  }}
                  className="billsoft-primary-btn-blue w-full justify-center"
                >
                  <span>Request Live Demo</span>
                </button>
              </div>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
