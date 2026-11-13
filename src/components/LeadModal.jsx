'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Building2,
  LayoutGrid,
  MessageSquare,
  Calendar,
  Zap,
  BarChart2,
  ShieldCheck,
  Lock,
  Headphones,
  ArrowRight,
  Search,
  ChevronDown,
  Check
} from 'lucide-react';

/** Map site product labels to CRM category ids when names differ. */
const PRODUCT_CATEGORY_ALIASES = {
  'billsoft application': 77,
  'billsoft accounting': 77,
  'billsoft accounting software': 77,
  'restaurant pos': 73,
  'hrms & payroll': 1,
  'crm & sales': 2
};

function findCategoryMatch(categories, selectedProduct) {
  if (!Array.isArray(categories) || categories.length === 0) return null;
  if (!selectedProduct) return null;

  const needle = String(selectedProduct).trim().toLowerCase();
  const exact = categories.find((c) => String(c.category_name || '').toLowerCase() === needle);
  if (exact) return exact;

  const aliasId = PRODUCT_CATEGORY_ALIASES[needle];
  if (aliasId) {
    const byAlias = categories.find((c) => Number(c.id) === aliasId);
    if (byAlias) return byAlias;
  }

  return (
    categories.find((c) => {
      const name = String(c.category_name || '').toLowerCase();
      return name.includes(needle) || needle.includes(name);
    }) || null
  );
}

function emptyForm(match) {
  return {
    name: '',
    email: '',
    phone: '',
    company: '',
    product: match?.category_name || '',
    categoryId: match?.id ? String(match.id) : '',
    message: ''
  };
}

/** Accepts +country codes and common separators; requires 10–15 digits. */
function isValidPhoneNumber(value) {
  const raw = String(value || '').trim();
  if (!raw) return false;
  if (!/^[+\d][\d\s\-().]*$/.test(raw)) return false;

  const digits = raw.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return false;

  // Reject obviously fake / repeated numbers like 0000000000
  if (/^(\d)\1+$/.test(digits)) return false;

  return true;
}

function getPhoneValidationError(value) {
  const raw = String(value || '').trim();
  if (!raw) return 'Phone number is required.';
  if (/[a-zA-Z]/.test(raw)) return 'Please enter a valid phone number (digits only).';
  if (!isValidPhoneNumber(raw)) {
    return 'Enter a valid phone number with 10–15 digits (e.g. +91 98765 43210).';
  }
  return '';
}

export default function LeadModal({ isOpen, onClose, modalType = 'demo', selectedProduct, countryCode = 'IN' }) {
  const [formData, setFormData] = useState(emptyForm(null));
  const [categories, setCategories] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [productSearch, setProductSearch] = useState('');
  const productDropdownRef = useRef(null);
  const productSearchRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    async function loadCategories() {
      setCategoriesLoading(true);
      try {
        const res = await fetch('/api/product-categories?scope=erp');
        const data = await res.json().catch(() => null);
        if (!cancelled && Array.isArray(data?.categories)) {
          setCategories(data.categories);
        }
      } catch (err) {
        console.error('Failed to load product categories:', err);
      } finally {
        if (!cancelled) setCategoriesLoading(false);
      }
    }

    loadCategories();
    return () => {
      cancelled = true;
    };
  }, []);

  // Reset form fields whenever popup modal opens / categories resolve
  useEffect(() => {
    if (!isOpen) return;

    const match = findCategoryMatch(categories, selectedProduct);
    setFormData(emptyForm(match));
    setIsSubmitted(false);
    setErrorMsg('');
    setPhoneError('');
    setProductMenuOpen(false);
    setProductSearch('');
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('isarva_saved_lead_data');
      } catch (e) { }
    }
  }, [isOpen, selectedProduct, categories]);

  useEffect(() => {
    if (!productMenuOpen) return;

    const handleOutsideClick = (event) => {
      if (productDropdownRef.current && !productDropdownRef.current.contains(event.target)) {
        setProductMenuOpen(false);
        setProductSearch('');
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    const focusTimer = window.setTimeout(() => productSearchRef.current?.focus(), 0);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.clearTimeout(focusTimer);
    };
  }, [productMenuOpen]);

  if (!isOpen) return null;

  const selectedCategory = categories.find((c) => String(c.id) === String(formData.categoryId));
  const searchNeedle = productSearch.trim().toLowerCase();
  const filteredCategories = searchNeedle
    ? categories.filter((c) => String(c.category_name || '').toLowerCase().includes(searchNeedle))
    : categories;

  const handleClose = () => {
    const match = findCategoryMatch(categories, selectedProduct);
    setFormData(emptyForm(match));
    setIsSubmitted(false);
    setErrorMsg('');
    setPhoneError('');
    setProductMenuOpen(false);
    setProductSearch('');
    onClose();
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    setFormData({ ...formData, phone });
    if (phoneError) setPhoneError(getPhoneValidationError(phone));
  };

  const handlePhoneBlur = () => {
    setPhoneError(getPhoneValidationError(formData.phone));
  };

  const selectCategory = (category) => {
    setFormData({
      ...formData,
      categoryId: category ? String(category.id) : '',
      product: category?.category_name || ''
    });
    setProductMenuOpen(false);
    setProductSearch('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextPhoneError = getPhoneValidationError(formData.phone);
    if (nextPhoneError) {
      setPhoneError(nextPhoneError);
      setErrorMsg(nextPhoneError);
      return;
    }

    if (!formData.categoryId) {
      setErrorMsg('Please select a product you are interested in.');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setPhoneError('');
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone.trim(),
          categoryId: Number(formData.categoryId),
          inquiryType: modalType,
          country: countryCode
        })
      });

      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data?.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Unable to connect to the server. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const modalTitle = modalType === 'brochure' ? 'Download Brochure' : 'Request a Demo';
  const modalSubtext = modalType === 'brochure'
    ? 'Fill in your details to receive our comprehensive product brochures.'
    : 'Fill in your details and our team will get in touch with you shortly.';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl max-w-lg md:max-w-4xl lg:max-w-5xl w-full overflow-hidden flex flex-col md:flex-row border border-slate-100 my-auto z-10 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-3.5 right-3.5 md:top-4 md:right-4 z-30 w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100/90 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            {/* Left Column (Desktop / Tablet): Value Proposition & Guarantee */}
            <div className="hidden md:flex md:w-[41%] lg:w-[37%] xl:w-[36%] flex-col justify-between p-5 md:p-6 lg:p-8 xl:p-9 relative overflow-hidden bg-[#eaf8f1] border-b md:border-b-0 md:border-r border-emerald-100/60 md:rounded-l-2xl">
              {/* Background Image from Isarva Live */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
                <img
                  src="/images/modal-left-bg.png"
                  alt=""
                  className="object-cover object-left-top w-full h-full absolute inset-0"
                />
              </div>

              <div className="relative z-10">
                <span className="text-[#009b55] text-xs sm:text-[13px] font-black tracking-wider uppercase block mb-1.5">
                  GET STARTED TODAY
                </span>
                <div className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-black text-slate-900 leading-[1.08] mb-3 tracking-tight font-heading">
                  {modalType === 'brochure' ? (
                    <>
                      Download<br />
                      <span className="text-[#009b55]">Brochure</span>
                    </>
                  ) : (
                    <>
                      Request<br />
                      <span className="text-[#009b55]">a Demo</span>
                    </>
                  )}
                </div>
                <div className="text-slate-700 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed mb-5 lg:mb-7 font-medium">
                  Discover how our solutions can help you streamline operations and grow your business.
                </div>

                {/* 3 Core Value Props */}
                <div className="space-y-3.5 sm:space-y-4 lg:space-y-5">
                  {/* Item 1: Personalized Demo */}
                  <div className="flex items-start gap-3 sm:gap-3.5 lg:gap-4">
                    <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs border border-emerald-200/60">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm lg:text-[16px] font-extrabold text-slate-900 leading-tight font-heading">
                        Personalized Demo
                      </div>
                      <div className="text-xs lg:text-[13px] text-slate-600 mt-0.5 leading-snug font-medium">
                        Get a demo tailored to your business needs.
                      </div>
                    </div>
                  </div>

                  {/* Item 2: Expert Consultation */}
                  <div className="flex items-start gap-3 sm:gap-3.5 lg:gap-4">
                    <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-xs border border-blue-200/60">
                      <Zap className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="text-sm lg:text-[16px] font-extrabold text-slate-900 leading-tight font-heading">
                        Expert Consultation
                      </div>
                      <div className="text-xs lg:text-[13px] text-slate-600 mt-0.5 leading-snug font-medium">
                        Talk to our product experts and get the right solution.
                      </div>
                    </div>
                  </div>

                  {/* Item 3: No Obligation */}
                  <div className="flex items-start gap-3 sm:gap-3.5 lg:gap-4">
                    <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-xs border border-purple-200/60">
                      <BarChart2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm lg:text-[16px] font-extrabold text-slate-900 leading-tight font-heading">
                        No Obligation
                      </div>
                      <div className="text-xs lg:text-[13px] text-slate-600 mt-0.5 leading-snug font-medium">
                        Free demo with no commitment.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Trust Badge */}
              <div className="relative z-10 mt-5 pt-1">
                <div className="p-2 sm:p-2.5 lg:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/70 shadow-xs flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 lg:w-4.5 lg:h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-[11.5px] lg:text-[13px] font-extrabold text-slate-900 leading-tight">
                      Your information is safe with us.
                    </div>
                    <div className="text-[10px] sm:text-[10.5px] lg:text-[11.5px] text-slate-600 leading-tight mt-0.5 font-medium">
                      We never share your details with third parties.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form Container */}
            <div className="w-full md:w-[59%] lg:w-[63%] xl:w-[64%] p-5 sm:p-6 lg:p-8 xl:p-9 flex flex-col justify-between bg-[#eaf8f1] md:bg-white relative overflow-hidden md:rounded-r-2xl rounded-xl">
              {/* Background Image on Mobile */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 md:hidden opacity-95">
                <img
                  src="/images/modal-left-bg.png"
                  alt=""
                  className="object-cover object-top w-full h-full absolute inset-0"
                />
              </div>

              <div className={`relative ${productMenuOpen ? 'z-30' : 'z-10'}`}>
                <div className="mb-5 pr-8">
                  <div className="text-2xl sm:text-[28px] font-black text-slate-900 tracking-tight leading-tight font-heading">
                    {modalTitle}
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm mt-1">
                    {modalSubtext}
                  </div>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off" className="space-y-3.5 sm:space-y-4">
                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                          <User size={16} />
                        </span>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                          <Mail size={16} />
                        </span>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                          <Phone size={16} />
                        </span>
                        <input
                          required
                          type="tel"
                          name="phone"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          onBlur={handlePhoneBlur}
                          aria-invalid={Boolean(phoneError)}
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:outline-none transition-all ${phoneError
                              ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/15'
                              : 'border-slate-200 focus:border-[#009b55] focus:ring-[#009b55]/15'
                            }`}
                        />
                      </div>
                      {phoneError && (
                        <p className="mt-1.5 text-[11px] font-medium text-rose-600 leading-snug">
                          {phoneError}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                          <Building2 size={16} />
                        </span>
                        <input
                          required
                          type="text"
                          name="company"
                          placeholder="Company Name *"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Interested In (Product) — searchable CRM categories */}
                  <div ref={productDropdownRef} className="relative z-40">
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Interested In (Product) <span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      disabled={categoriesLoading || categories.length === 0}
                      aria-haspopup="listbox"
                      aria-expanded={productMenuOpen}
                      onClick={() => setProductMenuOpen((open) => !open)}
                      className={`relative w-full pl-10 pr-10 py-2.5 rounded-xl border text-left text-sm transition-all flex items-center focus:outline-none disabled:opacity-60 disabled:cursor-wait ${productMenuOpen
                          ? 'bg-white border-[#009b55] ring-2 ring-[#009b55]/15'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15'
                        }`}
                    >
                      <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                        <LayoutGrid size={16} />
                      </span>
                      <span className={`truncate ${selectedCategory ? 'text-slate-900' : 'text-slate-400'}`}>
                        {categoriesLoading
                          ? 'Loading products...'
                          : selectedCategory?.category_name || 'Select a product *'}
                      </span>
                      <span className={`absolute right-3.5 text-slate-400 pointer-events-none transition-transform ${productMenuOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown size={16} />
                      </span>
                    </button>

                    {/* Hidden required field for native form validation */}
                    <input type="hidden" name="selectedItem" value={formData.categoryId} required />

                    {productMenuOpen && (
                      <div className="absolute left-0 right-0 top-full mt-1.5 rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden z-50">
                        <div className="p-2 border-b border-slate-100">
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                              <Search size={14} />
                            </span>
                            <input
                              ref={productSearchRef}
                              type="text"
                              value={productSearch}
                              onChange={(e) => setProductSearch(e.target.value)}
                              placeholder="Search products..."
                              className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none"
                            />
                          </div>
                        </div>
                        <ul role="listbox" className="max-h-48 overflow-y-auto py-1">
                          {filteredCategories.length === 0 ? (
                            <li className="px-3.5 py-3 text-sm text-slate-500">No products match your search.</li>
                          ) : (
                            filteredCategories.map((category) => {
                              const isActive = String(category.id) === String(formData.categoryId);
                              return (
                                <li key={category.id}>
                                  <button
                                    type="button"
                                    role="option"
                                    aria-selected={isActive}
                                    onClick={() => selectCategory(category)}
                                    className={`w-full px-3.5 py-2.5 text-left text-sm flex items-center justify-between gap-2 transition-colors ${isActive
                                        ? 'bg-emerald-50 text-[#009b55] font-semibold'
                                        : 'text-slate-800 hover:bg-slate-50'
                                      }`}
                                  >
                                    <span className="truncate">{category.category_name}</span>
                                    {isActive && <Check size={15} className="shrink-0 text-[#009b55]" />}
                                  </button>
                                </li>
                              );
                            })
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Row 4: Message (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Message (Optional)
                    </label>
                    <div className="relative flex">
                      <span className="absolute left-3.5 top-3 text-slate-400 pointer-events-none">
                        <MessageSquare size={16} />
                      </span>
                      <textarea
                        name="message"
                        rows={2}
                        placeholder="Message (Optional)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-brand-primary w-full py-3.5 px-6 text-sm sm:text-base disabled:opacity-60"
                  >
                    <span>{loading ? 'Submitting...' : 'Submit Request'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Bottom 3 Micro-Trust Badges */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 mt-4 text-center sm:text-left relative z-0">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={14} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800 leading-tight">
                      100% Secure
                    </div>
                    <div className="text-[10px] text-slate-400 leading-tight hidden sm:block">
                      Your data is protected
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Lock size={14} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800 leading-tight">
                      Privacy Assured
                    </div>
                    <div className="text-[10px] text-slate-400 leading-tight hidden sm:block">
                      We never share details
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Headphones size={14} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800 leading-tight">
                      Quick Response
                    </div>
                    <div className="text-[10px] text-slate-400 leading-tight hidden sm:block">
                      Our team contacts soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Submission Success State */
          <div className="w-full text-center py-12 px-6 sm:px-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#009b55] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 size={36} />
            </div>
            <div className="text-2xl font-black text-slate-900 tracking-tight font-heading">
              Request Received Successfully!
            </div>
            <div className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our enterprise specialist will get in touch with you shortly.
            </div>
            <button
              onClick={handleClose}
              type="button"
              className="btn-brand-primary py-3 px-8 text-sm mt-4"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
