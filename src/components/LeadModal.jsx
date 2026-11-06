'use client';

import React, { useState, useEffect } from 'react';
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
  ArrowRight
} from 'lucide-react';

export default function LeadModal({ isOpen, onClose, modalType = 'demo', selectedProduct, countryCode = 'IN' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: selectedProduct || 'All-in-One ERP Platform',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Reset form fields to completely blank whenever popup modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: selectedProduct || 'All-in-One ERP Platform',
        message: ''
      });
      setIsSubmitted(false);
      setErrorMsg('');
      if (typeof window !== 'undefined') {
        try {
          localStorage.removeItem('isarva_saved_lead_data');
        } catch (e) { }
      }
    }
  }, [isOpen, selectedProduct]);

  if (!isOpen) return null;

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: selectedProduct || 'All-in-One ERP Platform',
      message: ''
    });
    setIsSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, inquiryType: modalType, country: countryCode })
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
            <div className="hidden md:flex md:w-[41%] lg:w-[37%] xl:w-[36%] flex-col justify-between p-5 md:p-6 lg:p-8 xl:p-9 relative overflow-hidden bg-[#eaf8f1] border-b md:border-b-0 md:border-r border-emerald-100/60">
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
            <div className="w-full md:w-[59%] lg:w-[63%] xl:w-[64%] p-5 sm:p-6 lg:p-8 xl:p-9 flex flex-col justify-between bg-[#eaf8f1] md:bg-white relative overflow-hidden">
              {/* Background Image on Mobile */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 md:hidden opacity-95">
                <img
                  src="/images/modal-left-bg.png"
                  alt=""
                  className="object-cover object-top w-full h-full absolute inset-0"
                />
              </div>

              <div className="relative z-10">
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
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all"
                        />
                      </div>
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

                  {/* Row 3: Interested In (Product) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Interested In (Product) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                        <LayoutGrid size={16} />
                      </span>
                      <select
                        name="selectedItem"
                        required
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="All-in-One ERP Platform">All-in-One ERP Platform</option>
                        <option value="Restaurant POS Software">Restaurant POS Software</option>
                        <option value="BillSoft Application">BillSoft Application</option>
                        <option value="HRMS Software">HRMS Software</option>
                        <option value="CRM Software">CRM Software</option>
                        <option value="Inventory & Multi-Branch Core">Inventory & Multi-Branch Core</option>
                        <option value="ZATCA Phase-2 Compliance">ZATCA Phase-2 Compliance</option>
                        <option value="GST & E-Way Clearance">GST & E-Way Clearance</option>
                      </select>
                      <span className="absolute right-3.5 text-slate-400 pointer-events-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
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
                    className="w-full bg-gradient-to-r from-[#00b05b] via-[#009b55] to-[#008048] hover:from-[#009e51] hover:to-[#00703e] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-700/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base disabled:opacity-60"
                  >
                    <span>{loading ? 'Submitting...' : 'Submit Request'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Bottom 3 Micro-Trust Badges */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 mt-4 text-center sm:text-left relative z-10">
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
              className="py-3 px-8 rounded-xl bg-[#009b55] hover:bg-[#008048] text-white font-bold text-sm transition-all mt-4 cursor-pointer shadow-md shadow-emerald-700/20"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
