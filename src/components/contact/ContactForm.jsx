'use client';

import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, MessageCircle, RefreshCw } from 'lucide-react';

export default function ContactForm({ selectedCountry = 'IN' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number.');
      return;
    }
    if (!formData.subject.trim()) {
      setStatus('error');
      setErrorMessage('Please specify a subject for your inquiry.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your message.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim() || 'Direct Inquiry',
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        country: selectedCountry || 'IN',
        pageType: 'Contact Page',
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        const ref = data.inquiry?.id ? `INQ-${data.inquiry.id}` : `ISV-${Date.now().toString().slice(-6)}`;
        setReferenceId(ref);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit your message. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
    setReferenceId('');
  };

  if (status === 'success') {
    return (
      <div className="py-8 text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 text-[#007a55] flex items-center justify-center shadow-inner">
          <CheckCircle2 size={36} />
        </div>

        <div>
          <h3 className="mb-2">Thank You! Message Received</h3>
          <p className="max-w-md mx-auto text-sm text-slate-600">
            We have received your message and will respond within 24 hours.
          </p>
        </div>

        {referenceId && (
          <div className="inline-block px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
            Reference ID: <span className="font-bold text-[#007a55]">{referenceId}</span>
          </div>
        )}

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/919902863697?text=Hi%20ISARVA%20Team%2C%20I%20just%20submitted%20an%20inquiry%20on%20your%20contact%20page."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs shadow-md hover:bg-[#20ba59] transition-all duration-300 w-full sm:w-auto"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp Directly
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors w-full sm:w-auto cursor-pointer"
          >
            <RefreshCw size={14} />
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form id="main-enquiry-submit" onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
      {status === 'error' && errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-700 animate-shake">
          <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Full Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            aria-required="true"
            aria-label="Full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            aria-label="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
            placeholder="email@example.com"
          />
        </div>
      </div>

      {/* Row 2: Phone Number & Company Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            aria-required="true"
            aria-label="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            aria-label="Organization name"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
            placeholder="Your Company (Optional)"
          />
        </div>
      </div>

      {/* Row 3: Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          aria-required="true"
          aria-label="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
          placeholder="How can we help you?"
        />
      </div>

      {/* Row 4: Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          aria-required="true"
          aria-label="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none resize-none text-gray-900"
          placeholder="Tell us more about your project..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        aria-label="Send message"
        disabled={status === 'submitting'}
        className="press-illusion-btn-orange bg-orange-500 text-white md:mx-0 mx-auto font-bold px-8 w-fit py-4 text-lg items-center space-x-2 flex disabled:opacity-50 disabled:cursor-not-allowed justify-center"
      >
        <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
        {status === 'submitting' ? (
          <Loader2 size={16} className="animate-spin ml-2" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4" aria-hidden="true">
            <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </form>
  );
}
