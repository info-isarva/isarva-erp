'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Users,
  FileCheck,
  ShieldCheck,
  Zap,
  Clock,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Smartphone,
  Check,
  Layers,
  UtensilsCrossed,
  Handshake,
  Store,
  ShoppingBag,
  ShoppingCart,
  Truck,
  Building,
  Package,
  Cpu
} from 'lucide-react';
import FlagIcon from './FlagIcon';

const ICON_MAP = {
  Layers,
  UtensilsCrossed,
  BarChart3,
  Users,
  Handshake,
  Store,
  ShoppingBag,
  ShoppingCart,
  Truck,
  Building,
  ShieldCheck,
  Zap,
  Clock,
  Smartphone,
  CheckCircle2,
  Package,
  Cpu
};

const SLIDE_GRADIENTS = {
  overview: 'linear-gradient(135deg, #007a55 0%, #059669 50%, #0d9488 100%)',
  'restaurant-pos': 'linear-gradient(135deg, #059669 0%, #10b981 50%, #14b8a6 100%)',
  billsoft: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0284c7 100%)',
  hrms: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #9333ea 100%)',
  crm: 'linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #d97706 100%)',
};

export default function Hero({ hero: heroProp, products = [], onOpenModal }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const tabButtonRefs = useRef([]);

  // Define the 5 high-fidelity hero slides
  const defaultSlides = [
    {
      id: 'overview',
      tabLabel: 'All Solutions',
      tabIcon: Layers,
      themeColor: '#007a55',
      lightBg: 'rgba(0, 122, 85, 0.08)',
      badge: heroProp?.badge || 'ONE CONNECTED BUSINESS PLATFORM',
      headlineMain: heroProp?.headlineMain || 'Every part of your business.',
      headlineHighlight: heroProp?.headlineHighlight || 'Working as one.',
      subheadline:
        heroProp?.subheadline ||
        'ISARVA ERP connects your finance, inventory, sales, HRMS, CRM and restaurant POS in a single, easy to use platform. Streamline operations, improve visibility and make smarter decisions — from anywhere.',
      primaryCtaText: heroProp?.primaryCtaText || 'Book a Live Demo',
      secondaryCtaText: heroProp?.secondaryCtaText || 'Explore the Platform',
      modalType: 'started',
      productName: '',
      image: '/images/hero-erp-overview.jpg',
      imageAlt: 'ISARVA Cloud ERP Multi-Device Workspace Dashboard and Touch POS',
      highlights: [
        'Multi-branch visibility',
        'Connected workflows',
        'Built for India & GCC business needs'
      ],
      floatingMetric1: {
        title: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? 'ZATCA Phase 2' : 'Operations Synced',
        subtitle: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? 'Saudi Fatoora Ready' : 'All modules are connected & up to date',
        flag: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? 'SA' : 'IN'
      },
      floatingMetric2: {
        title: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? '500+ GCC Businesses' : 'Multi-Branch Ready',
        subtitle: 'India & GCC Statutory Ready'
      },
      stats: [
        { label: 'Trusted by', value: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? '500+ GCC Businesses' : '1,000+ Businesses', icon: Users },
        { label: 'Compliance', value: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? 'ZATCA Phase 2' : 'GST & e-Way Bill', icon: FileCheck },
        { label: 'Security', value: 'Enterprise Ready', icon: ShieldCheck }
      ]

    },
    {
      id: 'restaurant-pos',
      tabLabel: 'Restaurant POS',
      tabIcon: UtensilsCrossed,
      themeColor: '#059669',
      lightBg: 'rgba(5, 150, 105, 0.08)',
      badge: 'RESTAURANT & FOOD SERVICE POS',
      headlineMain: 'Ultra-Fast Touch Billing &',
      headlineHighlight: 'Kitchen Display (KDS)',
      subheadline:
        'Accelerate dine-in, takeaway, quick counter, and multi-aggregator delivery orders. Manage table floor plans, recipe costing, kitchen order tickets (KOT), and split billing in real time.',
      primaryCtaText: 'Explore Restaurant POS',
      secondaryCtaText: 'Book POS Demo',
      modalType: 'demo',
      productName: 'Restaurant POS',
      image: '/images/hero-restaurant-pos.jpg',
      imageAlt: 'ISARVA Restaurant Touch POS Terminal, KDS and Thermal Receipt Printer',
      highlights: [
        'Interactive Table & Floor Layouts',
        'Kitchen Display System (KDS)',
        'Menu & Recipe Inventory Tracking'
      ],
      floatingMetric1: {
        title: '3-Sec Order Dispatch',
        subtitle: 'Instant Kitchen KOT Sync'
      },
      floatingMetric2: {
        title: 'Zero Order Leakage',
        subtitle: 'Table Turnover +35%'
      },
      stats: [
        { label: 'Speed', value: '3-Sec Billing', icon: Zap },
        { label: 'Floor Plan', value: 'Live Table Sync', icon: Clock },
        { label: 'Operations', value: 'Dine-In & Online', icon: UtensilsCrossed }
      ]
    },
    {
      id: 'billsoft',
      tabLabel: 'BillSoft Accounting',
      tabIcon: BarChart3,
      themeColor: '#2563eb',
      lightBg: 'rgba(37, 99, 235, 0.08)',
      badge: 'ACCOUNTING & GST COMPLIANCE',
      headlineMain: 'Automated GST e-Invoicing &',
      headlineHighlight: 'Financial Accounting',
      subheadline:
        'Generate IRN and QR code-ready tax invoices in a single click. Manage purchases, stock inventory, receivables, TDS/TCS returns, and balance sheets effortlessly with 100% statutory compliance.',
      primaryCtaText: 'Explore BillSoft',
      secondaryCtaText: 'Book Accounting Demo',
      modalType: 'demo',
      productName: 'BillSoft Accounting',
      image: '/images/hero-billsoft.jpg',
      imageAlt: 'BillSoft Financial Accounting and GST e-Invoicing Dashboard on Laptop',
      highlights: [
        'Direct GST Portal e-Invoice & IRN',
        'Live Stock Valuation & Reorder Alerts',
        'Multi-Branch Consolidated Ledgers'
      ],
      floatingMetric1: {
        title: '1-Click e-Invoicing',
        subtitle: 'Direct GST Portal Validated',
        flag: 'IN'
      },
      floatingMetric2: {
        title: 'Instant Financials',
        subtitle: 'Live P&L & Balance Sheet'
      },
      stats: [
        { label: 'Compliance', value: '100% GST & IRN', icon: FileCheck },
        { label: 'Speed', value: '1-Click Invoicing', icon: CheckCircle2 },
        { label: 'Financials', value: 'Live P&L Reports', icon: BarChart3 }
      ]
    },
    {
      id: 'hrms',
      tabLabel: 'HRMS',
      tabIcon: Users,
      themeColor: '#7c3aed',
      lightBg: 'rgba(124, 58, 237, 0.08)',
      badge: 'HUMAN RESOURCE & WORKFORCE',
      headlineMain: 'Streamlined Payroll, Leaves &',
      headlineHighlight: 'People Operations',
      subheadline:
        'Automate monthly payroll, PF/ESI/TDS tax deductions, biometric attendance clock-ins, geofencing, employee self-service mobile portal, and onboarding workflows across multiple offices.',
      primaryCtaText: 'Explore HRMS',
      secondaryCtaText: 'Book HRMS Demo',
      modalType: 'demo',
      productName: 'HRMS',
      image: '/images/hero-hrms.jpg',
      imageAlt: 'ISARVA HRMS and Employee Payroll Dashboard on Desktop & Mobile App',
      highlights: [
        'Automated PF, ESI & TDS Computations',
        'Biometric & Mobile GPS Attendance',
        'Employee Self-Service (ESS) Portal'
      ],
      floatingMetric1: {
        title: 'Auto Payroll Run',
        subtitle: '1-Click Payslip Generation'
      },
      floatingMetric2: {
        title: 'Mobile App Ready',
        subtitle: 'Leave & Attendance Tracking'
      },
      stats: [
        { label: 'Payroll', value: '1-Click Processing', icon: Clock },
        { label: 'Attendance', value: 'Biometric & GPS', icon: Users },
        { label: 'Portals', value: 'iOS & Android App', icon: Smartphone }
      ]
    },
    {
      id: 'crm',
      tabLabel: 'CRM',
      tabIcon: Handshake,
      themeColor: '#ea580c',
      lightBg: 'rgba(234, 88, 12, 0.08)',
      badge: 'SALES & CLIENT RELATIONSHIPS',
      headlineMain: 'Accelerate Sales Pipelines &',
      headlineHighlight: 'Customer Conversions',
      subheadline:
        'Track leads from initial inquiry to closed deal with interactive visual Kanban boards. Integrated WhatsApp and email messaging, automated follow-up reminders, and revenue forecasts.',
      primaryCtaText: 'Explore CRM',
      secondaryCtaText: 'Book CRM Demo',
      modalType: 'demo',
      productName: 'CRM',
      image: '/images/hero-crm.jpg',
      imageAlt: 'ISARVA CRM Kanban Sales Pipeline and Customer Management Dashboard',
      highlights: [
        'Multi-Stage Kanban Pipeline Boards',
        'Direct WhatsApp & Email Messaging',
        'Smart Automated Follow-Up Reminders'
      ],
      floatingMetric1: {
        title: '+38% Deal Velocity',
        subtitle: 'Automated Pipeline Tracking'
      },
      floatingMetric2: {
        title: 'Omnichannel Chat',
        subtitle: 'WhatsApp & Email Integrated'
      },
      stats: [
        { label: 'Win Rate', value: '+38% Conversions', icon: TrendingUp },
        { label: 'Channels', value: 'WhatsApp & Email', icon: Clock },
        { label: 'Pipeline', value: 'Visual Kanban', icon: Handshake }
      ]
    }
  ];

  const inputSlides = (heroProp?.slides && Array.isArray(heroProp.slides) && heroProp.slides.length > 0)
    ? heroProp.slides
    : defaultSlides;

  const slides = inputSlides.map((custom, idx) => {
    const def = defaultSlides[idx] || {
      id: custom.id || `slide-${idx + 1}`,
      tabLabel: custom.tabLabel || `Solution ${idx + 1}`,
      tabIcon: Layers,
      themeColor: custom.themeColor || '#007a55',
      lightBg: custom.lightBg || 'rgba(0, 122, 85, 0.08)',
      badge: custom.badge || 'BUSINESS MANAGEMENT SOFTWARE',
      headlineMain: custom.headlineMain || 'Accelerate Your Operations with',
      headlineHighlight: custom.headlineHighlight || 'ISARVA ERP',
      subheadline: custom.subheadline || 'Simplify business operations, connect workflows, and scale your organization efficiently.',
      primaryCtaText: custom.primaryCtaText || 'Explore Solution',
      secondaryCtaText: custom.secondaryCtaText || 'Book a Demo',
      modalType: 'demo',
      productName: custom.tabLabel || '',
      image: custom.image || '/images/hero-erp-overview.jpg',
      imageAlt: custom.imageAlt || 'ISARVA Business Solution Preview',
      highlights: custom.highlights || [
        'Real-Time Cloud Synchronization',
        'Multi-Branch & Mobile Ready',
        'Enterprise Security & Compliance'
      ],
      floatingMetric1: custom.floatingMetric1 || {
        title: 'High Performance',
        subtitle: '100% Cloud Reliable'
      },
      floatingMetric2: custom.floatingMetric2 || {
        title: '1,000+ Businesses',
        subtitle: '99.9% Cloud Uptime'
      },
      stats: [
        { label: 'Uptime', value: '99.9% Cloud', icon: ShieldCheck },
        { label: 'Speed', value: 'Instant Sync', icon: Zap },
        { label: 'Security', value: 'Enterprise Ready', icon: FileCheck }
      ]
    };

    let TabIcon = def.tabIcon || Layers;
    if (custom.iconName && ICON_MAP[custom.iconName]) {
      TabIcon = ICON_MAP[custom.iconName];
    }

    return {
      ...def,
      ...custom,
      tabIcon: TabIcon,
      themeColor: custom.themeColor || def.themeColor || '#007a55',
      lightBg: custom.lightBg || def.lightBg || 'rgba(0, 122, 85, 0.08)',
      highlights: Array.isArray(custom.highlights) && custom.highlights.length > 0 ? custom.highlights : (def.highlights || []),
      floatingMetric1: { ...(def.floatingMetric1 || {}), ...(custom.floatingMetric1 || {}) },
      floatingMetric2: { ...(def.floatingMetric2 || {}), ...(custom.floatingMetric2 || {}) },
      stats: (def.stats || []).map((s, sIdx) => ({
        ...s,
        ...(custom.stats?.[sIdx] || {}),
        icon: s.icon
      }))
    };
  });

  const safeActiveIndex = Math.min(activeSlideIndex, Math.max(0, slides.length - 1));
  const currentSlide = slides[safeActiveIndex] || slides[0] || defaultSlides[0];

  // Temporary pause auto-rotation when user interacts with tabs or controls
  const pauseAutoSlide = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 12000);
  };

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Auto-slide effect (changes every 5 seconds; resets cleanly on active slide change)
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    timerRef.current = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, safeActiveIndex, slides.length]);

  const [touchStartX, setTouchStartX] = useState(0);

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    pauseAutoSlide();
  };

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev + 1) % slides.length);
    pauseAutoSlide();
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
      pauseAutoSlide();
    } else if (diff < -45) {
      handlePrev();
      pauseAutoSlide();
    }
  };

  // Instant & reliable tab selection handler
  const handleTabClick = (index) => {
    setActiveSlideIndex(index);
    pauseAutoSlide();
  };

  // Automatically centralize the active tab button on mobile / responsive viewports
  useEffect(() => {
    const container = tabsContainerRef.current;
    const activeButton = tabButtonRefs.current[safeActiveIndex];
    if (!container || !activeButton) return;

    const centerTab = () => {
      const containerWidth = container.clientWidth;
      const buttonLeft = activeButton.offsetLeft;
      const buttonWidth = activeButton.offsetWidth;

      const targetScrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
      const currentScrollLeft = container.scrollLeft;

      if (Math.abs(targetScrollLeft - currentScrollLeft) > 8) {
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: 'smooth'
        });
      }
    };

    const rId = requestAnimationFrame(centerTab);
    return () => {
      cancelAnimationFrame(rId);
    };
  }, [safeActiveIndex]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eaf5f0] via-[#f2faf6] to-[#e4f4ed] section-padding-sm border-b border-[#d2ecdf]">
      {/* Subtle Ambient Radial Glows tailored to current theme color */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none transition-colors duration-1000 opacity-20 animate-hero-breathe"
        style={{ backgroundColor: currentSlide.themeColor }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#007a55]/10 rounded-full blur-3xl pointer-events-none animate-hero-breathe"
        style={{ animationDelay: '3.5s' }}
      />

      <div className="site-container relative z-10">

        {/* TOP INTERACTIVE PRODUCT SWITCHER TABS - FULL WIDTH ON RESPONSIVE */}
        <div data-aos="fade-down" data-aos-duration="600" className="mb-8 lg:mb-10 -mx-4 sm:-mx-6 lg:mx-0">
          <div
            ref={tabsContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={pauseAutoSlide}
            className="relative flex items-center justify-start lg:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 pb-2 pt-1 px-4 sm:px-6 lg:px-2 scroll-smooth"
          >
            {slides.map((slide, index) => {
              const isActive = index === safeActiveIndex;
              const IconComponent = slide.tabIcon;

              return (
                <button
                  key={slide.id}
                  type="button"
                  ref={(el) => {
                    tabButtonRefs.current[index] = el;
                  }}
                  onClick={() => handleTabClick(index)}
                  className={`group shrink-0 relative flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-md shadow-slate-900/10 scale-[1.02] border'
                      : 'bg-white/60 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/60'
                  }`}
                  style={{
                    borderColor: isActive ? slide.themeColor : undefined
                  }}
                >
                  {/* Color dot / icon */}
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors pointer-events-none ${
                      isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-900'
                    }`}
                    style={{
                      backgroundColor: isActive ? slide.themeColor : 'rgba(148, 163, 184, 0.15)'
                    }}
                  >
                    <IconComponent size={13} strokeWidth={2.5} />
                  </span>

                  <span className="pointer-events-none">{slide.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* HERO MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Expansive & Prominent Product Information, Highlights & CTAs */}
          <div
            className="lg:col-span-7 xl:col-span-7 relative z-10 w-full min-h-[460px] sm:min-h-[440px] lg:min-h-[480px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, index) => {
              const isActive = index === safeActiveIndex;
              return (
                <div
                  key={slide.id}
                  className={`w-full flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6 hero-slide-transition ${
                    isActive
                      ? 'opacity-100 translate-y-0 relative z-10 pointer-events-auto'
                      : 'opacity-0 translate-y-6 absolute top-0 left-0 right-0 z-0 pointer-events-none'
                  }`}
                >
                  {/* Category Eyebrow Tag */}
                  <div data-aos="fade-down" data-aos-delay="100" className="inline-block">
                    <span
                      className="section-eyebrow transition-colors duration-300"
                      style={{ color: slide.themeColor }}
                    >
                      {slide.badge}
                    </span>
                  </div>

                  {/* Main Headline */}
                  <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="700">
                    <h1>
                      {slide.headlineMain}{' '}
                      <span
                        className="bg-clip-text text-transparent inline-block"
                        style={{
                          backgroundImage: SLIDE_GRADIENTS[slide.id] || `linear-gradient(135deg, ${slide.themeColor} 0%, #059669 100%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {slide.headlineHighlight}
                      </span>
                    </h1>
                  </div>

                  {/* Subheadline Description */}
                  <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="700">
                    <p className="max-w-xl mx-auto lg:mx-0">
                      {slide.subheadline}
                    </p>
                  </div>

                  {/* Mini Feature Highlights Chips */}
                  <div data-aos="fade-up" data-aos-delay="350" data-aos-duration="700" className="w-fit max-w-full mx-auto lg:mx-0 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2 pt-1">
                    {slide.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="w-full sm:w-auto flex sm:inline-flex items-center gap-2 sm:gap-1.5 px-3.5 py-2 sm:py-1.5 rounded-xl sm:rounded-lg bg-white/90 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs hover:border-slate-300 transition-all text-left"
                      >
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center text-white shrink-0"
                          style={{ backgroundColor: slide.themeColor }}
                        >
                          <Check size={10} strokeWidth={3} />
                        </span>
                        <span className="leading-snug break-words">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div data-aos="fade-up" data-aos-delay="450" data-aos-duration="700" className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-3.5 sm:gap-4 w-full">
                    {slide.id === 'crm' ? (
                      <Link
                        href="/crm"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                        style={{
                          backgroundColor: slide.themeColor,
                          boxShadow: `0 10px 25px -5px ${slide.themeColor}40`
                        }}
                      >
                        <span>{slide.primaryCtaText}</span>
                        <ArrowRight size={18} />
                      </Link>
                    ) : slide.id === 'pos' || slide.id === 'restaurant-pos' ? (
                      <Link
                        href="/restaurant-pos"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                        style={{
                          backgroundColor: slide.themeColor,
                          boxShadow: `0 10px 25px -5px ${slide.themeColor}40`
                        }}
                      >
                        <span>{slide.primaryCtaText}</span>
                        <ArrowRight size={18} />
                      </Link>
                    ) : slide.id === 'billsoft' ? (
                      <Link
                        href="/billsoft"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                        style={{
                          backgroundColor: slide.themeColor,
                          boxShadow: `0 10px 25px -5px ${slide.themeColor}40`
                        }}
                      >
                        <span>{slide.primaryCtaText}</span>
                        <ArrowRight size={18} />
                      </Link>
                    ) : slide.id === 'hrms' ? (
                      <Link
                        href="/hrms"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                        style={{
                          backgroundColor: slide.themeColor,
                          boxShadow: `0 10px 25px -5px ${slide.themeColor}40`
                        }}
                      >
                        <span>{slide.primaryCtaText}</span>
                        <ArrowRight size={18} />
                      </Link>
                    ) : (
                      <button
                        onClick={() => onOpenModal(slide.modalType, slide.productName)}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                        style={{
                          backgroundColor: slide.themeColor,
                          boxShadow: `0 10px 25px -5px ${slide.themeColor}40`
                        }}
                      >
                        <span>{slide.primaryCtaText}</span>
                        <ArrowRight size={18} />
                      </button>
                    )}

                    <button
                      onClick={() => onOpenModal('demo', slide.productName)}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/90 hover:bg-white text-slate-900 font-bold text-base border border-slate-200 shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                    >
                      <span
                        className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs pl-0.5"
                        style={{ backgroundColor: slide.themeColor }}
                      >
                        ▶
                      </span>
                      <span>{slide.secondaryCtaText}</span>
                    </button>
                  </div>

                  {/* Product Stats / Trust Badges */}
                  <div data-aos="fade-up" data-aos-delay="550" data-aos-duration="700" className="pt-4 border-t border-slate-200/70 w-full">
                    <div className="w-fit max-w-full mx-auto lg:mx-0 flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center lg:justify-start gap-3.5 sm:gap-4 lg:gap-6">
                      {slide.stats.map((stat, idx) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2.5 w-full sm:w-auto">
                            <div
                              className="w-9 h-9 rounded-full flex items-center justify-center shadow-xs shrink-0 transition-colors duration-300"
                              style={{
                                backgroundColor: slide.lightBg,
                                color: slide.themeColor
                              }}
                            >
                              <StatIcon size={17} strokeWidth={2.4} />
                            </div>
                            <div className="text-left">
                              <div className="text-xs text-slate-500 font-medium leading-none">{stat.label}</div>
                              <div className="text-sm font-black text-slate-900 mt-1 whitespace-nowrap">{stat.value}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Interactive Slider Carousel with Floating Module Animation */}
          <div
            data-aos="fade-left"
            data-aos-delay="250"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            className="lg:col-span-5 xl:col-span-5 relative flex flex-col items-center justify-center w-full"
          >
            
            {/* Slider Image Card Container with ISARVA Floating Effect */}
            <div
              className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 group select-none floating-module"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Stacked Slides Container with Smooth Cross-Fade and Elevation */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-slate-100">
                {slides.map((slide, index) => {
                  const isActive = index === safeActiveIndex;
                  return (
                    <div
                      key={slide.id}
                      className={`w-full h-full hero-slide-transition ${
                        isActive
                          ? 'opacity-100 translate-y-0 scale-100 relative z-10 pointer-events-auto'
                          : 'opacity-0 translate-y-5 scale-95 absolute inset-0 z-0 pointer-events-none'
                      }`}
                    >
                      {/* Slide Image */}
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        className="w-full h-full object-cover block"
                        loading={index === 0 ? "eager" : "lazy"}
                      />

                      {/* Subtle bottom vignette gradient for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />

                      {/* Top-Left Metric Badge */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 pointer-events-none">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/10">
                          {slide.floatingMetric1.flag ? (
                            <FlagIcon country={slide.floatingMetric1.flag} className="w-4 h-3.5 rounded-xs shadow-2xs" />
                          ) : (
                            <span
                              className="w-2 h-2 rounded-full animate-pulse"
                              style={{ backgroundColor: slide.themeColor }}
                            />
                          )}
                          <div>
                            <div className="text-[11px] font-black text-slate-900 leading-none">
                              {slide.floatingMetric1.title}
                            </div>
                            <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-none">
                              {slide.floatingMetric1.subtitle}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Slide Info & Metric Badge 2 - Hidden on mobile to keep hero image clean and prevent overflow */}
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20 pointer-events-none hidden sm:flex items-end justify-between gap-2 min-w-0">
                        {/* Solution Capsule (Light Background matching other badges) */}
                        <div className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/95 text-slate-900 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/10 min-w-0 max-w-[50%]">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: slide.themeColor }}
                          />
                          <div className="min-w-0">
                            <div className="text-[11px] sm:text-xs font-bold leading-tight text-slate-900 truncate">
                              {slide.tabLabel}
                            </div>
                            <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-none truncate mt-0.5">
                              {slide.highlights[0]}
                            </div>
                          </div>
                        </div>

                        {/* Secondary Metric Badge */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-white/95 text-slate-900 backdrop-blur-md border border-slate-200/90 shadow-lg shrink-0 max-w-[50%]">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: slide.themeColor }}
                          />
                          <div className="text-left min-w-0">
                            <div className="text-[11px] font-black leading-tight text-slate-900 truncate">
                              {slide.floatingMetric2.title}
                            </div>
                            <div className="text-[9px] text-slate-500 font-medium leading-none mt-0.5 truncate">
                              {slide.floatingMetric2.subtitle}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  );
                })}

                {/* On-Card Navigation Arrows */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous product slide"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md border border-slate-200/80 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next product slide"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md border border-slate-200/80 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

            </div>

            {/* Slider Navigation Bar (Dots & Active Product Pill) */}
            <div className="flex items-center justify-between w-full mt-3.5 px-1.5">
              
              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => {
                      setActiveSlideIndex(idx);
                      pauseAutoSlide();
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeSlideIndex
                        ? 'w-7 shadow-xs'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    style={{
                      backgroundColor: idx === activeSlideIndex ? currentSlide.themeColor : undefined
                    }}
                  />
                ))}
              </div>

              {/* Active Slide Text Label - Changes and animates smoothly with the slide */}
              <div
                key={`slide-label-${activeSlideIndex}`}
                className="animate-hero-fade-up flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-800"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: currentSlide.themeColor }}
                />
                <span>{currentSlide.tabLabel}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}