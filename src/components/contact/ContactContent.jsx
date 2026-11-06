'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LeadModal from '../LeadModal';
import { getDefaultContentForCountry } from '../../lib/content';
import ContactForm from './ContactForm';
import GlobalOfficesGrid from './GlobalOfficesGrid';

export default function ContactContent() {
  const [countryCode, setCountryCode] = useState('IN');
  const [content, setContent] = useState(() => getDefaultContentForCountry('IN'));
  const [modalState, setModalState] = useState({ isOpen: false, type: 'demo', product: null });
  const [translateY, setTranslateY] = useState(0);
  const stickyRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('isarva_country');
      if (stored && (stored === 'IN' || stored === 'SA')) {
        setCountryCode(stored);
        setContent(getDefaultContentForCountry(stored));
      }
    }
  }, []);

  // Parallax sticky effect on desktop (matching isarvait.com)
  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current) return;
      if (window.innerWidth < 1024) {
        setTranslateY(0);
        return;
      }
      const parentRect = stickyRef.current.parentElement.getBoundingClientRect();
      const currentHeight = stickyRef.current.offsetHeight;
      const maxTranslate = Math.max(
        0,
        stickyRef.current.parentElement.offsetHeight - currentHeight - stickyRef.current.offsetTop
      );
      if (maxTranslate > 0) {
        setTranslateY(Math.min(Math.max(0, -parentRect.top), maxTranslate));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCountryChange = (c) => {
    const code = typeof c === 'string' ? c : c?.code;
    if (code && (code === 'IN' || code === 'SA')) {
      setCountryCode(code);
      setContent(getDefaultContentForCountry(code));
      if (typeof window !== 'undefined') {
        localStorage.setItem('isarva_country', code);
      }
    }
  };

  const handleOpenModal = (type = 'demo', product = null) => {
    setModalState({ isOpen: true, type, product });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, type: 'demo', product: null });
  };

  const currentCountry = (content?.countries || []).find((c) => c.code === countryCode) || {
    code: 'IN',
    name: 'India',
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Global Navbar */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      <main>
        <div className="bg-white overflow-hidden">
          {/* SECTION 1: HERO, CONTACT FORM & DIRECT CHANNELS */}
          <section className="relative section-padding-sm bg-gradient-to-b from-[#d4f4dd] via-[#defae4] to-white">
            {/* Ambient Background Blur & Noise (Exact clone from isarvait.com) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ contain: 'layout style paint' }}>
              <div className="absolute inset-0 bg-mesh-green opacity-40" />
              <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-emerald-200/40 blur-[80px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-200/30 blur-[80px] rounded-full" />
              <div className="hero-noise-overlay opacity-[0.12]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                {/* Left Column: Form Card (order-2 lg:order-1) */}
                <div className="relative order-2 lg:order-1 h-full">
                  <div className="h-full rounded-3xl p-8 lg:p-10 bg-white/80 backdrop-blur-sm border-2 border-emerald-100 shadow-2xl card-shadow-emerald transition-all duration-300 relative overflow-hidden flex flex-col">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex-grow">
                        <ContactForm selectedCountry={countryCode} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Sticky Contact Info & Socials (order-1 lg:order-2) */}
                <div className="relative order-1 lg:order-2">
                  <div
                    ref={stickyRef}
                    style={{ transform: `translateY(${translateY}px)` }}
                    className="sticky-contact-info"
                  >
                    <div className="space-y-8 transition-transform duration-100 ease-out" style={{ transform: 'translateY(0px)' }}>
                      <div className="mb-6 lg:text-left text-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md text-emerald-800 font-semibold text-sm mb-6 border border-white/60 shadow-lg">
                          <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                          Let&#39;s Connect
                        </div>
                        <h1 className="mb-4">Get in Touch</h1>
                        <p className="leading-relaxed">
                          Have a project in mind? We&#39;d love to hear about it. Send us a message and we&#39;ll respond within 24 hours.
                        </p>
                      </div>

                      <div className="rounded-3xl lg:text-left text-center p-8 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100 card-shadow-emerald">
                        <h3 className="mb-4">Follow Us</h3>
                        <p className="mb-6">
                          Stay connected with us on social media for updates, insights, and more.
                        </p>

                        <div className="flex gap-4 lg:justify-start justify-center">
                          <a
                            href="https://www.linkedin.com/company/isarva-infotech-private-limited"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-xl bg-white hover:bg-emerald-500 border-2 border-emerald-100 hover:border-emerald-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-110"
                            aria-label="LinkedIn"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                          <a
                            href="https://www.facebook.com/IsarvaInfotech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-xl bg-white hover:bg-emerald-500 border-2 border-emerald-100 hover:border-emerald-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-110"
                            aria-label="Facebook"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </a>
                          <a
                            href="https://www.instagram.com/isarvainfotech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-xl bg-white hover:bg-emerald-500 border-2 border-emerald-100 hover:border-emerald-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-110"
                            aria-label="Instagram"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                            </svg>
                          </a>
                          <a
                            href="https://www.youtube.com/@isarvainfotech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-xl bg-white hover:bg-emerald-500 border-2 border-emerald-100 hover:border-emerald-500 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-110"
                            aria-label="YouTube"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom 3 Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-20">
                {/* Email Us */}
                <div className="relative rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl card-shadow-emerald transition-all duration-300 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative lg:text-left text-center">
                    <div className="w-14 h-14 rounded-2xl lg:mx-0 mx-auto bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="mb-2">Email Us</h3>
                    <a href="mailto:marketing@isarvait.com" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors block mb-2">
                      marketing@isarvait.com
                    </a>
                    <p className="text-sm text-gray-600">Send us an email anytime!</p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="relative rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl card-shadow-emerald transition-all duration-300 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative lg:text-left text-center">
                    <div className="w-14 h-14 rounded-2xl lg:mx-0 mx-auto bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="mb-2">Call Us</h3>
                    <a href="tel:+919902863697" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors block mb-2">
                      +91 9902863697
                    </a>
                    <p className="text-sm text-gray-600">Mon-Fri from 9.30am to 6.30pm</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="relative rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl card-shadow-emerald transition-all duration-300 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative lg:text-left text-center">
                    <div className="w-14 h-14 rounded-2xl lg:mx-0 mx-auto bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="mb-2">Working Hours</h3>
                    <p className="font-semibold mb-2 text-gray-900">Monday - Friday: 9.30AM - 6.30PM</p>
                    <p className="text-sm text-gray-600">Weekend appointments available</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: OUR OFFICES (Mangalore, Bangalore, Dubai, UK) */}
          <GlobalOfficesGrid />
        </div>
      </main>

      {/* Global Footer */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Global Lead / Demo Modal */}
      <LeadModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        product={modalState.product}
        countryCode={countryCode}
      />
    </div>
  );
}
