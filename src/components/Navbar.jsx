'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Search,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  UtensilsCrossed,
  BarChart3,
  Users2,
  Handshake,
  ArrowRight,
  Check
} from 'lucide-react';
import FlagIcon from './FlagIcon';

export default function Navbar({ content, onOpenModal, selectedCountry: selectedCountryProp, onSelectCountry }) {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const selectedCountry = selectedCountryProp || content?.countries?.[0] || { code: 'IN', name: 'India' };
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const solutionsRef = useRef(null);
  const countryRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setIsSolutionsOpen(false);
      }
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open so menu can scroll freely
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Auto-close mobile menu if window resizes to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <img
              src="/images/isarva-logo.png"
              alt="ISARVA Logo"
              className="h-10 sm:h-12 lg:h-11 xl:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 text-xs xl:text-sm font-semibold text-slate-600 whitespace-nowrap shrink-0">
            <Link href="/" className="text-brand-500 hover:text-brand-600 transition-colors">
              Home
            </Link>

            <Link href="/about" className="hover:text-brand-500 transition-colors">
              About Us
            </Link>

            {/* Solutions Mega Dropdown Trigger */}
            <div className="relative" ref={solutionsRef} onMouseLeave={() => setIsSolutionsOpen(false)}>
              <button
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center gap-1 hover:text-brand-500 transition-colors py-2"
              >
                <span>Our Solutions</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180 text-brand-500' : ''}`} />
              </button>

              {/* Solutions Dropdown Menu */}
              {isSolutionsOpen && (
                <div 
                  className="absolute top-full -left-4 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 z-50 animate-fadeIn space-y-1"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                >
                  <Link
                    href="/restaurant-pos"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <UtensilsCrossed size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">Restaurant POS Software</div>
                      <div className="text-xs text-slate-500">Order, KOT &amp; table billing</div>
                    </div>
                  </Link>

                  <Link
                    href="/billsoft"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <BarChart3 size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700">BillSoft Accounting Software</div>
                      <div className="text-xs text-slate-500">GST, billing &amp; ledger</div>
                    </div>
                  </Link>

                  <Link
                    href="/hrms"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-purple-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                      <Users2 size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-purple-700">HRMS &amp; Payroll Software</div>
                      <div className="text-xs text-slate-500">Staff, biometric &amp; payroll</div>
                    </div>
                  </Link>

                  <Link
                    href="/crm"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-orange-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Handshake size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-orange-700">CRM &amp; Sales Management</div>
                      <div className="text-xs text-slate-500">Leads &amp; visual pipeline</div>
                    </div>
                  </Link>

                  <div className="pt-2 border-t border-slate-100 mt-1">
                    <Link
                      href="/solutions"
                      onClick={() => setIsSolutionsOpen(false)}
                      className="flex items-center justify-between p-2 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/70 text-[#007a55] font-semibold text-xs transition-colors"
                    >
                      <span>Explore All Solutions</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/erp-features" className="hover:text-brand-500 transition-colors">
              Features
            </Link>
            <Link href="/why-choose-us" className="hover:text-brand-500 transition-colors">
              Why Choose Us
            </Link>
            <Link href="/contact" className="hover:text-brand-500 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3.5 shrink-0">
            
            {/* Country & Language Selector Dropdown */}
            <div className="relative shrink-0" ref={countryRef}>
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-700 bg-slate-50/90 hover:bg-slate-100 transition-colors shadow-2xs whitespace-nowrap"
              >
                <FlagIcon code={selectedCountry.code} className="w-4 h-3 xl:w-5 xl:h-3.5 shrink-0" />
                <span>{selectedCountry.name}</span>
                <ChevronDown size={12} className={`text-slate-400 transition-transform duration-200 ${isCountryOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCountryOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn">
                  <div className="px-3.5 pb-2 mb-1 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Select Region & Language
                  </div>
                  {content?.countries?.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        onSelectCountry?.(country);
                        setIsCountryOpen(false);
                      }}

                      className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm transition-colors text-left group ${
                        selectedCountry.code === country.code ? 'bg-emerald-50/60 text-[#007a55]' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <FlagIcon code={country.code} className="w-6 h-4" />
                        <div>
                          <div className="font-semibold text-slate-900 text-xs group-hover:text-[#007a55] transition-colors">
                            {country.name}
                          </div>
                          {country.lang && (
                            <div className="text-xs text-slate-500 font-normal">{country.lang}</div>
                          )}
                        </div>
                      </div>
                      {selectedCountry.code === country.code && (
                        <Check size={16} className="text-[#007a55] font-bold" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button
              onClick={() => onOpenModal('demo')}
              className="p-1.5 xl:p-2 text-slate-500 hover:text-brand-500 hover:bg-slate-50 rounded-full transition-colors shrink-0"
              title="Search"
            >
              <Search size={16} />
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenModal('demo')}
              className="btn-brand-primary text-xs xl:text-sm px-3.5 xl:px-5 py-2 xl:py-2.5 whitespace-nowrap shrink-0"
            >
              <span>Book a Free Demo</span>
              <ArrowRight size={15} className="shrink-0" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 rounded-lg hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Smooth Scrolling */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-8 space-y-3 max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain shadow-2xl">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">
            About Us
          </Link>
          <div className="pt-1 pb-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Our Solutions
            </div>
            <Link href="/solutions" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-bold text-[#007a55] pl-2 border-l-2 border-[#007a55] mb-1">
              All Solutions Overview &rarr;
            </Link>
            <Link href="/restaurant-pos" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-emerald-600 pl-2 border-l-2 border-emerald-500 mb-1">
              Restaurant POS Software
            </Link>
            <Link href="/billsoft" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-blue-600 pl-2 border-l-2 border-blue-500 mb-1">
              BillSoft Accounting Software
            </Link>
            <Link href="/hrms" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-purple-600 pl-2 border-l-2 border-purple-500 mb-1">
              HRMS &amp; Payroll Software
            </Link>
            <Link href="/crm" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-orange-600 pl-2 border-l-2 border-orange-500">
              CRM &amp; Sales Management
            </Link>
          </div>

          <Link href="/erp-features" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">
            Features
          </Link>
          <Link href="/why-choose-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">
            Why Choose Us
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">
            Contact Us
          </Link>

          {/* Mobile Region Switcher */}
          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Region
            </div>
            <div className="grid grid-cols-2 gap-2">
              {content?.countries?.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    onSelectCountry?.(country);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    selectedCountry.code === country.code
                      ? 'border-[#007a55] bg-emerald-50 text-[#007a55]'
                      : 'border-slate-200 bg-slate-50 text-slate-700'
                  }`}
                >
                  <FlagIcon code={country.code} className="w-5 h-3.5" />
                  <span>{country.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal('demo');
              }}
              className="btn-brand-primary w-full"
            >
              Book a Free Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
