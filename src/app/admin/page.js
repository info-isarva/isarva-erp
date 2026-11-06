'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  FileText,
  Package,
  CheckCircle2,
  Users,
  Settings,
  Save,
  Eye,
  EyeOff,
  LogOut,
  Mail,
  Phone,
  Building,
  Clock,
  Sparkles,
  Lock,
  KeyRound,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Plus,
  Trash2,
  Star,
  HelpCircle,
  Layers,
  UtensilsCrossed,
  BarChart3,
  Handshake
} from 'lucide-react';
import { defaultContent } from '../../lib/content-store';
import { getDefaultContentForCountry } from '../../lib/content';
import ImageUploadField from '../../components/ImageUploadField';
import FlagIcon from '../../components/FlagIcon';


const WHY_CHOOSE_ICON_OPTIONS = [

  { value: 'Layers', label: '📑 Layers (All-in-One)' },
  { value: 'ShieldCheck', label: '🛡️ Shield Check (Compliance & Security)' },
  { value: 'Store', label: '🏪 Store (Multi-Branch)' },
  { value: 'TrendingUp', label: '📈 Trending Up (Growth / Analytics)' },
  { value: 'BarChart3', label: '📊 Bar Chart (Reports)' },
  { value: 'Cloud', label: '☁️ Cloud (Cloud-based)' },
  { value: 'Lock', label: '🔒 Lock (Security / Privacy)' },
  { value: 'Zap', label: '⚡ Zap (Speed & Performance)' },
  { value: 'CheckCircle2', label: '✅ Check Circle (Quality)' },
  { value: 'Users', label: '👥 Users (Collaboration)' },
  { value: 'Smartphone', label: '📱 Smartphone (Mobile POS)' },
  { value: 'Sparkles', label: '✨ Sparkles (AI / Modern)' },
  { value: 'Cpu', label: '💻 CPU (Automated Tech)' },
  { value: 'Clock', label: '⏱️ Clock (24/7 Availability)' },
  { value: 'Database', label: '🗄️ Database (Unified Storage)' },
  { value: 'Headphones', label: '🎧 Headphones (Customer Support)' },
];

const INDUSTRY_ICON_OPTIONS = [

  { value: 'Utensils', label: '🍴 Utensils (F&B / Restaurants)' },
  { value: 'Store', label: '🏪 Store (Retail / Shops)' },
  { value: 'ShoppingBag', label: '🛍️ Shopping Bag (Apparel / Fashion)' },
  { value: 'ShoppingCart', label: '🛒 Shopping Cart (Supermarkets / FMCG)' },
  { value: 'Coffee', label: '☕ Coffee (Cafés & Chains)' },
  { value: 'Boxes', label: '📦 Boxes (Wholesale / Warehousing)' },
  { value: 'Building2', label: '🏢 Building (Enterprise / Corporate)' },
  { value: 'Factory', label: '🏭 Factory (Manufacturing / Industry)' },
  { value: 'Truck', label: '🚚 Truck (Logistics & Supply Chain)' },
  { value: 'Hotel', label: '🏨 Hotel (Hospitality)' },
  { value: 'Scissors', label: '✂️ Scissors (Salons & Services)' },
  { value: 'Briefcase', label: '💼 Briefcase (Professional Services)' },
  { value: 'Layers', label: '📑 Layers (Multi-Branch / Other)' },
];

const THEME_COLORS = [
  { label: 'Emerald', hex: '#007a55' },
  { label: 'Forest', hex: '#059669' },
  { label: 'Royal Blue', hex: '#2563eb' },
  { label: 'Violet', hex: '#7c3aed' },
  { label: 'Amber', hex: '#ea580c' },
  { label: 'Cyan', hex: '#0891b2' },
  { label: 'Rose', hex: '#e11d48' },
  { label: 'Indigo', hex: '#4f46e5' },
  { label: 'Gold', hex: '#d97706' },
  { label: 'Slate', hex: '#475569' }
];

const HERO_TAB_ICON_OPTIONS = [
  { value: 'Layers', label: '📑 Layers (All Solutions / Platform)' },
  { value: 'UtensilsCrossed', label: '🍴 Utensils (Restaurant POS)' },
  { value: 'BarChart3', label: '📊 Bar Chart (Accounting & Finance)' },
  { value: 'Users', label: '👥 Users (HRMS / Workforce)' },
  { value: 'Handshake', label: '🤝 Handshake (CRM / Sales)' },
  { value: 'Store', label: '🏪 Store (Retail / Shops)' },
  { value: 'ShoppingBag', label: '🛍️ Shopping Bag (Apparel / Fashion)' },
  { value: 'ShoppingCart', label: '🛒 Shopping Cart (Supermarket / Grocery)' },
  { value: 'Truck', label: '🚚 Truck (Supply Chain / Logistics)' },
  { value: 'Building', label: '🏢 Building (Real Estate / Corporate)' },
  { value: 'ShieldCheck', label: '🛡️ Shield Check (Security / Compliance)' },
  { value: 'Zap', label: '⚡ Zap (Speed / Real-time)' },
  { value: 'Sparkles', label: '✨ Sparkles (AI / Innovation)' },
  { value: 'Smartphone', label: '📱 Smartphone (Mobile POS / App)' },
  { value: 'Database', label: '🗄️ Database (Cloud Storage / ERP)' },
  { value: 'Package', label: '📦 Package (Inventory / Warehouse)' },
  { value: 'Cpu', label: '💻 CPU (Automation / Tech)' },
  { value: 'Clock', label: '⏱️ Clock (Time Tracking / Attendance)' },
];

export default function AdminCMS() {

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // CMS Regional & Content State
  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [activeTab, setActiveTab] = useState('hero');
  const [selectedHeroSlideIdx, setSelectedHeroSlideIdx] = useState(0);
  const [content, setContent] = useState(() => getDefaultContentForCountry('IN'));
  const [inquiries, setInquiries] = useState([]);
  const [savedStatus, setSavedStatus] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Check saved session on load
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('isarva_admin_session');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'isarva2026';

    if (passwordInput === validPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('isarva_admin_session', 'true');
      sessionStorage.setItem('isarva_admin_token', passwordInput);
      setLoginError('');
      loadData(passwordInput);
    } else {
      setLoginError('Invalid Administrator Passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isarva_admin_session');
    sessionStorage.removeItem('isarva_admin_token');
    setPasswordInput('');
  };

  const loadData = async (tokenOverride, countryOverride) => {
    const token = tokenOverride || sessionStorage.getItem('isarva_admin_token') || 'isarva2026';
    const targetCountry = countryOverride || selectedCountry || 'IN';
    try {
      const res = await fetch(`/api/content?country=${targetCountry}`);
      if (res.ok) {
        const data = await res.json();
        if (data?.content) {
          const defaultForCountry = getDefaultContentForCountry(targetCountry);
          const merged = {
            ...defaultForCountry,
            ...data.content,
            hero: {
              ...defaultForCountry.hero,
              ...data.content.hero,
              slides: (data.content.hero?.slides && data.content.hero.slides.length > 0)
                ? data.content.hero.slides
                : defaultForCountry.hero?.slides
            }
          };
          setContent(merged);
        }
      } else {
        setContent(getDefaultContentForCountry(targetCountry));
      }
      const inqRes = await fetch('/api/inquiries', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      if (inqRes.ok) {
        const inqData = await inqRes.json();
        if (inqData?.inquiries) setInquiries(inqData.inquiries);
      }
    } catch (err) {
      console.warn('Using local fallback data');
      setContent(getDefaultContentForCountry(targetCountry));
    }
  };

  const handleCountrySwitch = (newCountry) => {
    setSelectedCountry(newCountry);
    setSelectedHeroSlideIdx(0);
    setContent(getDefaultContentForCountry(newCountry));
    loadData(undefined, newCountry);
  };

  const handleAddHeroSlide = () => {
    const defaultMasterHero = getDefaultContentForCountry(selectedCountry).hero;
    const currentSlides = (content.hero?.slides && content.hero.slides.length > 0)
      ? [...content.hero.slides]
      : [...(defaultMasterHero?.slides || [])];

    const newIdx = currentSlides.length + 1;
    const newSlide = {
      id: `custom-slide-${Date.now()}`,
      tabLabel: `New Tab ${newIdx}`,
      themeColor: '#0891b2',
      badge: 'ENTERPRISE SOLUTION',
      headlineMain: 'Streamline Your Business &',
      headlineHighlight: 'Scale Faster',
      subheadline: 'Organize operations, connect workflows, and boost productivity with ISARVA integrated business software modules.',
      primaryCtaText: 'Explore Solution',
      secondaryCtaText: 'Book a Demo',
      image: '/images/hero-erp-overview.jpg',
      imageAlt: `ISARVA Solution ${newIdx}`,
      iconName: 'Layers',
      highlights: [
        'Single Unified Cloud Database',
        'Real-Time Multi-Device Sync',
        'Enterprise Security & Compliance'
      ],
      floatingMetric1: {
        title: 'High Performance',
        subtitle: '100% Cloud Reliable'
      },
      floatingMetric2: {
        title: 'Instant Setup',
        subtitle: '24/7 Priority Support'
      }
    };

    const updatedSlides = [...currentSlides, newSlide];
    setContent({
      ...content,
      hero: {
        ...content.hero,
        slides: updatedSlides
      }
    });
    setSelectedHeroSlideIdx(currentSlides.length);
  };

  const handleRemoveHeroSlide = (removeIdx) => {
    const defaultMasterHero = getDefaultContentForCountry(selectedCountry).hero;
    const currentSlides = (content.hero?.slides && content.hero.slides.length > 0)
      ? [...content.hero.slides]
      : [...(defaultMasterHero?.slides || [])];

    if (currentSlides.length <= 1) {
      alert('You must keep at least 1 hero banner slide.');
      return;
    }

    const slideName = currentSlides[removeIdx]?.tabLabel || `Slide ${removeIdx + 1}`;
    if (!confirm(`Are you sure you want to delete tab "${slideName}"?`)) {
      return;
    }

    const updatedSlides = currentSlides.filter((_, idx) => idx !== removeIdx);
    setContent({
      ...content,
      hero: {
        ...content.hero,
        slides: updatedSlides
      }
    });
    setSelectedHeroSlideIdx((prev) => Math.min(prev, Math.max(0, updatedSlides.length - 1)));
  };

  const handleUpdateHeroSlide = (slideIdx, field, value) => {
    const defaultMasterHero = getDefaultContentForCountry(selectedCountry).hero;
    const currentSlides = (content.hero?.slides && content.hero.slides.length > 0)
      ? [...content.hero.slides]
      : [...(defaultMasterHero?.slides || [])];

    const updatedSlide = { ...currentSlides[slideIdx], [field]: value };
    currentSlides[slideIdx] = updatedSlide;

    const newHero = {
      ...content.hero,
      slides: currentSlides
    };

    if (slideIdx === 0) {
      if (field === 'badge') newHero.badge = value;
      if (field === 'headlineMain') newHero.headlineMain = value;
      if (field === 'headlineHighlight') newHero.headlineHighlight = value;
      if (field === 'subheadline') newHero.subheadline = value;
      if (field === 'primaryCtaText') newHero.primaryCtaText = value;
      if (field === 'secondaryCtaText') newHero.secondaryCtaText = value;
    }

    setContent({
      ...content,
      hero: newHero
    });
  };

  const handleUpdateHeroSlideNested = (slideIdx, parentKey, childKey, value) => {
    const defaultMasterHero = getDefaultContentForCountry(selectedCountry).hero;
    const currentSlides = (content.hero?.slides && content.hero.slides.length > 0)
      ? [...content.hero.slides]
      : [...(defaultMasterHero?.slides || [])];

    const updatedSlide = {
      ...currentSlides[slideIdx],
      [parentKey]: {
        ...(currentSlides[slideIdx]?.[parentKey] || {}),
        [childKey]: value
      }
    };
    currentSlides[slideIdx] = updatedSlide;

    setContent({
      ...content,
      hero: {
        ...content.hero,
        slides: currentSlides
      }
    });
  };

  const handleUpdateHeroSlideHighlight = (slideIdx, highlightIdx, value) => {
    const defaultMasterHero = getDefaultContentForCountry(selectedCountry).hero;
    const currentSlides = (content.hero?.slides && content.hero.slides.length > 0)
      ? [...content.hero.slides]
      : [...(defaultMasterHero?.slides || [])];

    const currentHighlights = Array.isArray(currentSlides[slideIdx]?.highlights)
      ? [...currentSlides[slideIdx].highlights]
      : ['', '', ''];
    currentHighlights[highlightIdx] = value;

    currentSlides[slideIdx] = {
      ...currentSlides[slideIdx],
      highlights: currentHighlights
    };

    setContent({
      ...content,
      hero: {
        ...content.hero,
        slides: currentSlides
      }
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSavedStatus('Saving changes...');
    const token = sessionStorage.getItem('isarva_admin_token') || 'isarva2026';
    try {
      const res = await fetch(`/api/content?country=${selectedCountry}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ ...content, countryCode: selectedCountry })
      });
      if (res.ok) {
        setSavedStatus(`✓ Saved ${selectedCountry === 'SA' ? 'Saudi Arabia' : 'India'} edition! Live site updated.`);
      } else {
        const errData = await res.json();
        setSavedStatus(errData.error || 'Failed to save changes.');
      }
    } catch (err) {
      setSavedStatus('Changes applied to session.');
    } finally {
      setIsSaving(false);
      setTimeout(() => setSavedStatus(''), 4000);
    }
  };

  const handleSyncMaster = async () => {
    if (!confirm(`Are you sure you want to re-sync ${selectedCountry === 'SA' ? 'Saudi Arabia' : 'India'} content with master defaults? This will update the database to match the master files.`)) {
      return;
    }
    setIsSaving(true);
    setSavedStatus('Syncing master content...');
    const token = sessionStorage.getItem('isarva_admin_token') || 'isarva2026';
    try {
      const res = await fetch(`/api/content?country=${selectedCountry}&action=sync`, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.content) setContent(data.content);
        setSavedStatus(`✓ Synced ${selectedCountry === 'SA' ? 'Saudi Arabia' : 'India'} with master defaults!`);
      } else {
        setSavedStatus('Sync failed.');
      }
    } catch (err) {
      setSavedStatus('Sync failed.');
    } finally {
      setIsSaving(false);
      setTimeout(() => setSavedStatus(''), 4000);
    }
  };

  const handleAddProduct = () => {
    const currentProducts = content.products || [];
    const newIdx = currentProducts.length + 1;
    const newProd = {
      id: `product-${Date.now()}`,
      title: `Product Module ${newIdx}`,
      subtitle: `Enterprise Module\nManagement`,
      color: '#0891b2',
      themeClass: 'brand',
      buttonText: `Explore Solution`,
      buttonLink: `#demo`,
      iconName: 'Package',
      image: '/images/hero-erp-overview.jpg',
      features: [
        'Cloud-Based Platform',
        'Real-Time Visibility',
        'Integrated Workflows',
        'Multi-Branch Ready'
      ]
    };
    setContent({
      ...content,
      products: [...currentProducts, newProd]
    });
  };

  const handleRemoveProduct = (removeIdx) => {
    const currentProducts = content.products || [];
    if (currentProducts.length <= 1) {
      alert('You must keep at least 1 product module.');
      return;
    }
    const prodName = currentProducts[removeIdx]?.title || `Product ${removeIdx + 1}`;
    if (!confirm(`Are you sure you want to remove product module "${prodName}"?`)) {
      return;
    }
    setContent({
      ...content,
      products: currentProducts.filter((_, idx) => idx !== removeIdx)
    });
  };

  const handleAddIndustry = () => {
    const currentItems = content.industries?.items || [];
    const newItem = {
      name: 'New Industry',
      iconName: 'Building2',
      tag: 'Sector'
    };
    setContent({
      ...content,
      industries: {
        ...content.industries,
        items: [...currentItems, newItem]
      }
    });
  };

  const handleRemoveIndustry = (removeIdx) => {
    const currentItems = content.industries?.items || [];
    if (currentItems.length <= 1) {
      alert('You must keep at least 1 industry category.');
      return;
    }
    const filtered = currentItems.filter((_, idx) => idx !== removeIdx);
    setContent({
      ...content,
      industries: {
        ...content.industries,
        items: filtered
      }
    });
  };

  const handleAddWhyChoose = () => {
    const currentItems = content.whyChoose?.items || [];
    const newItem = {
      id: `wc${Date.now()}`,
      title: 'New Feature',
      description: 'Feature description explaining the business value.',
      iconName: 'ShieldCheck'
    };
    setContent({
      ...content,
      whyChoose: {
        ...content.whyChoose,
        items: [...currentItems, newItem]
      }
    });
  };

  const handleRemoveWhyChoose = (removeIdx) => {
    const currentItems = content.whyChoose?.items || [];
    if (currentItems.length <= 1) {
      alert('You must keep at least 1 feature card.');
      return;
    }
    const filtered = currentItems.filter((_, idx) => idx !== removeIdx);
    setContent({
      ...content,
      whyChoose: {
        ...content.whyChoose,
        items: filtered
      }
    });
  };

  const handleAddTestimonial = () => {
    const currentItems = content.testimonials?.items || [];
    const newItem = {
      id: `tst${Date.now()}`,
      name: 'Client Business Name',
      location: 'City, State',
      rating: 5,
      quote: 'ISARVA ERP has completely streamlined our business operations.',
      initials: 'CB',
      avatarImage: ''
    };
    setContent({
      ...content,
      testimonials: {
        ...content.testimonials,
        items: [...currentItems, newItem]
      }
    });
  };

  const handleRemoveTestimonial = (removeIdx) => {
    const currentItems = content.testimonials?.items || [];
    if (currentItems.length <= 1) {
      alert('You must keep at least 1 testimonial.');
      return;
    }
    const filtered = currentItems.filter((_, idx) => idx !== removeIdx);
    setContent({
      ...content,
      testimonials: {
        ...content.testimonials,
        items: filtered
      }
    });
  };

  const handleAddFaq = () => {
    const currentItems = content.faqs?.items || [];
    const newItem = {
      q: 'New Question Here?',
      a: 'Detailed answer explaining the solution, feature, or workflow.'
    };
    setContent({
      ...content,
      faqs: {
        ...content.faqs,
        items: [...currentItems, newItem]
      }
    });
  };

  const handleRemoveFaq = (removeIdx) => {
    const currentItems = content.faqs?.items || [];
    if (currentItems.length <= 1) {
      alert('You must keep at least 1 FAQ item.');
      return;
    }
    const filtered = currentItems.filter((_, idx) => idx !== removeIdx);
    setContent({
      ...content,
      faqs: {
        ...content.faqs,
        items: filtered
      }
    });
  };

  // --- 1. LIGHT THEME LOGIN SECURITY GATE SCREEN ---


  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Subtle Decorative Background Gradients */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-md w-full shadow-xl relative z-10 space-y-6 animate-fadeIn">
          
          {/* Logo & Header */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#007a55] to-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-[#007a55]/20">
              <Lock size={26} />
            </div>
            <h2 className="pt-2">
              ISARVA ERP Admin CMS
            </h2>
            <p>
              Enter the administrator passcode to access website content and leads.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Administrator Passcode
              </label>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter administrator passcode..."
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 p-2.5 rounded-lg text-center animate-fadeIn">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="btn-brand-primary w-full py-3 text-sm mt-2 flex items-center justify-center gap-2 shadow-md shadow-brand-600/20"
            >
              <span>Unlock Admin Panel</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Return link */}
          <div className="text-center pt-2 border-t border-slate-100">
            <Link href="/" className="text-xs font-medium text-slate-500 hover:text-brand-600 transition-colors">
              ? Return to Public Website
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // --- 2. LIGHT THEME CMS DASHBOARD SCREEN ---
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Admin Topbar */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-50 shadow-xs">
        <div className="flex items-center gap-3">
          <img
            src="/images/isarva-logo.png"
            alt="ISARVA Logo"
            className="h-8 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/images/isarva-logo.png';
            }}
          />
          <span className="text-xs text-brand-700 font-bold px-2 py-0.5 rounded bg-brand-50 border border-brand-200 hidden sm:inline-block">
            Admin CMS
          </span>

          {/* Regional Country Segmented Toggle */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 ml-2">
            <button
              type="button"
              onClick={() => handleCountrySwitch('IN')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedCountry === 'IN'
                  ? 'bg-white text-emerald-800 shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FlagIcon code="IN" className="w-4 h-3" />
              <span>India (GST)</span>
            </button>

            <button
              type="button"
              onClick={() => handleCountrySwitch('SA')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedCountry === 'SA'
                  ? 'bg-white text-emerald-800 shadow-xs border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FlagIcon code="SA" className="w-4 h-3" />
              <span>Saudi Arabia (ZATCA)</span>
            </button>
          </div>
        </div>


        <div className="flex items-center gap-3">
          {savedStatus && (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 animate-fadeIn">
              {savedStatus}
            </span>
          )}

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="btn-brand-primary text-xs py-2 px-4 shadow-sm cursor-pointer"
          >
            <Save size={15} />
            <span>{isSaving ? 'Saving...' : 'Save All Changes'}</span>
          </button>

          <button
            type="button"
            onClick={handleSyncMaster}
            disabled={isSaving}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold text-emerald-800 border border-emerald-200 transition-colors cursor-pointer"
            title="Reset/sync database with master files"
          >
            <Sparkles size={14} />
            <span>Sync Master</span>
          </button>

          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 border border-slate-200 transition-colors"
          >
            <Eye size={14} />
            <span>View Live Site</span>
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-xs font-bold text-red-600 border border-red-200 transition-colors"
            title="Lock & Log Out"
          >
            <LogOut size={14} />
            <span>Lock</span>
          </button>
        </div>
      </header>

      {/* Main Admin Workspace Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white border-r border-slate-200 p-4 space-y-1.5 shrink-0 hidden md:block">
          <div className="text-xs font-bold text-slate-400 uppercase px-3 py-2 tracking-wider">
            Content Sections
          </div>

          <button
            onClick={() => setActiveTab('hero')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'hero' ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <LayoutDashboard size={16} />
            <span>Hero & Headings</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'products' ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Package size={16} />
            <span>4 ERP Products</span>
          </button>

          <button
            onClick={() => setActiveTab('gst')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'gst' ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 size={16} />
            <span>{selectedCountry === 'SA' ? 'ZATCA & Why Choose' : 'GST & Why Choose'}</span>
          </button>


          <button
            onClick={() => setActiveTab('testimonials')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'testimonials' ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Users size={16} />
            <span>Customer Testimonials</span>
          </button>

          <button
            onClick={() => setActiveTab('industries')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'industries' ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Building size={16} />
            <span>Industries We Serve</span>
          </button>

          <button
            onClick={() => setActiveTab('faqs')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'faqs' ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <HelpCircle size={16} />
            <span>FAQs & Answers</span>
          </button>

          <div className="pt-4 mt-4 border-t border-slate-200">
            <div className="text-xs font-bold text-slate-400 uppercase px-3 py-2 tracking-wider">
              Customer Leads
            </div>
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'inquiries' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Mail size={16} />
                <span>Demo Inquiries</span>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                {inquiries.length}
              </span>
            </button>
          </div>
        </aside>

        {/* Content Editor Area */}
        <main className="flex-1 p-8 overflow-y-auto max-w-4xl space-y-6">
          
          {/* TAB 1: HERO SECTION (DYNAMIC SLIDE CAROUSEL & STATS) */}
          {activeTab === 'hero' && (() => {
            const defaultMasterHero = getDefaultContentForCountry(selectedCountry).hero;
            const heroSlides = (content.hero?.slides && content.hero.slides.length > 0)
              ? content.hero.slides
              : defaultMasterHero?.slides || [];
            const safeIdx = Math.min(selectedHeroSlideIdx, Math.max(0, heroSlides.length - 1));
            const activeSlide = heroSlides[safeIdx] || heroSlides[0];

            return (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2>Hero Banner Slider & Tabs</h2>
                    <p>Add, customize, or delete interactive slide tabs displayed on the hero banner.</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddHeroSlide}
                    className="btn-brand-primary px-4 py-2.5 text-xs font-bold flex items-center gap-1.5 shadow-sm shrink-0 self-start sm:self-auto cursor-pointer"
                  >
                    <Plus size={16} />
                    <span>Add New Tab</span>
                  </button>
                </div>

                {/* Slide Switcher Navigation Pills */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2 overflow-x-auto no-scrollbar">
                  {heroSlides.map((slide, sIdx) => {
                    const isSelected = safeIdx === sIdx;
                    const tabColor = slide.themeColor || '#007a55';
                    return (
                      <div key={slide.id || sIdx} className="flex items-center shrink-0">
                        <button
                          type="button"
                          onClick={() => setSelectedHeroSlideIdx(sIdx)}
                          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                            isSelected
                              ? 'text-white shadow-sm'
                              : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                          }`}
                          style={{
                            backgroundColor: isSelected ? tabColor : undefined
                          }}
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: isSelected ? '#ffffff' : tabColor }}
                          />
                          <span>{slide.tabLabel || `Slide ${sIdx + 1}`}</span>
                        </button>
                      </div>
                    );
                  })}

                  <button
                    type="button"
                    onClick={handleAddHeroSlide}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-dashed border-emerald-300 transition-all cursor-pointer whitespace-nowrap shrink-0 ml-1"
                  >
                    <Plus size={14} />
                    <span>Add Tab</span>
                  </button>
                </div>

                {/* Active Slide Form Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-3.5 h-3.5 rounded-full shadow-2xs"
                        style={{ backgroundColor: activeSlide.themeColor || '#007a55' }}
                      />
                      <span className="text-sm font-bold text-slate-900">
                        Editing: {activeSlide.tabLabel || `Slide ${safeIdx + 1}`} ({activeSlide.id})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium">
                        Tab {safeIdx + 1} of {heroSlides.length}
                      </span>
                      {heroSlides.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveHeroSlide(safeIdx)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 text-xs font-semibold transition cursor-pointer border border-red-200/70"
                          title="Delete this slide tab"
                        >
                          <Trash2 size={13} />
                          <span>Delete Tab</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Icon & Theme Color Settings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2 border-b border-slate-100">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Tab Icon</label>
                      <select
                        value={activeSlide.iconName || 'Layers'}
                        onChange={(e) => handleUpdateHeroSlide(safeIdx, 'iconName', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                      >
                        {HERO_TAB_ICON_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Theme Accent Color</label>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                          {THEME_COLORS.map((c) => (
                            <button
                              key={c.hex}
                              type="button"
                              onClick={() => handleUpdateHeroSlide(safeIdx, 'themeColor', c.hex)}
                              className={`w-6 h-6 rounded-full shrink-0 border-2 transition-transform cursor-pointer ${
                                (activeSlide.themeColor || '#007a55').toLowerCase() === c.hex.toLowerCase()
                                  ? 'scale-110 border-slate-900 shadow-xs'
                                  : 'border-white hover:scale-105'
                              }`}
                              style={{ backgroundColor: c.hex }}
                              title={c.label}
                            />
                          ))}
                        </div>
                        <input
                          type="text"
                          value={activeSlide.themeColor || '#007a55'}
                          onChange={(e) => handleUpdateHeroSlide(safeIdx, 'themeColor', e.target.value)}
                          placeholder="#007a55"
                          className="w-24 px-2 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Tab Button Label</label>
                      <input
                        type="text"
                        value={activeSlide.tabLabel || ''}
                        onChange={(e) => handleUpdateHeroSlide(safeIdx, 'tabLabel', e.target.value)}
                        placeholder="e.g. Restaurant POS"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Category Eyebrow / Badge</label>
                      <input
                        type="text"
                        value={activeSlide.badge || ''}
                        onChange={(e) => handleUpdateHeroSlide(safeIdx, 'badge', e.target.value)}
                        placeholder="e.g. RESTAURANT & FOOD SERVICE POS"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Headline Line 1 (Dark Text)</label>
                      <input
                        type="text"
                        value={activeSlide.headlineMain || ''}
                        onChange={(e) => handleUpdateHeroSlide(safeIdx, 'headlineMain', e.target.value)}
                        placeholder="e.g. Ultra-Fast Touch Billing &"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Headline Line 2 (Colored Accent)</label>
                      <input
                        type="text"
                        value={activeSlide.headlineHighlight || ''}
                        onChange={(e) => handleUpdateHeroSlide(safeIdx, 'headlineHighlight', e.target.value)}
                        placeholder="e.g. Kitchen Display (KDS)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Subheadline Description</label>
                    <textarea
                      rows="3"
                      value={activeSlide.subheadline || ''}
                      onChange={(e) => handleUpdateHeroSlide(safeIdx, 'subheadline', e.target.value)}
                      placeholder="Enter slide paragraph description..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 leading-relaxed"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Primary CTA Button</label>
                      <input
                        type="text"
                        value={activeSlide.primaryCtaText || ''}
                        onChange={(e) => handleUpdateHeroSlide(safeIdx, 'primaryCtaText', e.target.value)}
                        placeholder="e.g. Explore Restaurant POS"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Secondary CTA Button</label>
                      <input
                        type="text"
                        value={activeSlide.secondaryCtaText || ''}
                        onChange={(e) => handleUpdateHeroSlide(safeIdx, 'secondaryCtaText', e.target.value)}
                        placeholder="e.g. Book POS Demo"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700">Slide Showcase Image</label>
                    <ImageUploadField
                      label="Slide Mockup Image"
                      value={activeSlide.image || ''}
                      placeholder="/images/hero-erp-overview.jpg"
                      onChange={(url) => handleUpdateHeroSlide(safeIdx, 'image', url)}
                    />
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Image Alt Text (SEO)</label>
                      <input
                        type="text"
                        value={activeSlide.imageAlt || ''}
                        onChange={(e) => handleUpdateHeroSlide(safeIdx, 'imageAlt', e.target.value)}
                        placeholder="Description of slide image for search engines..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                      />
                    </div>
                  </div>

                  {/* Bullet Highlights Chips */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700">
                      Feature Highlight Chips (3 Bullets)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[0, 1, 2].map((hIdx) => (
                        <div key={hIdx}>
                          <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                            Bullet {hIdx + 1}
                          </label>
                          <input
                            type="text"
                            value={activeSlide.highlights?.[hIdx] || ''}
                            onChange={(e) => handleUpdateHeroSlideHighlight(safeIdx, hIdx, e.target.value)}
                            placeholder={`Highlight ${hIdx + 1}`}
                            className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Metric Badges */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700">
                      Floating Glassmorphic Metric Cards
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Metric 1 */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                        <span className="text-xs font-bold text-slate-800">Top-Left Floating Badge</span>
                        <input
                          type="text"
                          value={activeSlide.floatingMetric1?.title || ''}
                          onChange={(e) => handleUpdateHeroSlideNested(safeIdx, 'floatingMetric1', 'title', e.target.value)}
                          placeholder="Title (e.g. 3-Sec Order Dispatch)"
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500"
                        />
                        <input
                          type="text"
                          value={activeSlide.floatingMetric1?.subtitle || ''}
                          onChange={(e) => handleUpdateHeroSlideNested(safeIdx, 'floatingMetric1', 'subtitle', e.target.value)}
                          placeholder="Subtitle (e.g. Instant Kitchen KOT Sync)"
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500"
                        />
                      </div>

                      {/* Metric 2 */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                        <span className="text-xs font-bold text-slate-800">Bottom-Right Floating Badge</span>
                        <input
                          type="text"
                          value={activeSlide.floatingMetric2?.title || ''}
                          onChange={(e) => handleUpdateHeroSlideNested(safeIdx, 'floatingMetric2', 'title', e.target.value)}
                          placeholder="Title (e.g. Zero Order Leakage)"
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500"
                        />
                        <input
                          type="text"
                          value={activeSlide.floatingMetric2?.subtitle || ''}
                          onChange={(e) => handleUpdateHeroSlideNested(safeIdx, 'floatingMetric2', 'subtitle', e.target.value)}
                          placeholder="Subtitle (e.g. Table Turnover +35%)"
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Global Hero Statutory Pill & Stats */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <h3>Global Hero Stats & Compliance Pill</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Total Sales Pill</label>
                      <input
                        type="text"
                        value={content.hero?.mockupStats?.totalSales || ''}
                        onChange={(e) => setContent({
                          ...content,
                          hero: {
                            ...content.hero,
                            mockupStats: {
                              ...(content.hero?.mockupStats || {}),
                              totalSales: e.target.value
                            }
                          }
                        })}
                        placeholder="₹ 2,48,320"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Total Customers Pill</label>
                      <input
                        type="text"
                        value={content.hero?.mockupStats?.totalCustomers || ''}
                        onChange={(e) => setContent({
                          ...content,
                          hero: {
                            ...content.hero,
                            mockupStats: {
                              ...(content.hero?.mockupStats || {}),
                              totalCustomers: e.target.value
                            }
                          }
                        })}
                        placeholder="1,268"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Statutory Compliance Tag</label>
                      <input
                        type="text"
                        value={content.hero?.mockupStats?.gstTag || ''}
                        onChange={(e) => setContent({
                          ...content,
                          hero: {
                            ...content.hero,
                            mockupStats: {
                              ...(content.hero?.mockupStats || {}),
                              gstTag: e.target.value
                            }
                          }
                        })}
                        placeholder="GST e-Invoice Compliant India"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>
                </div>

              </div>
            );
          })()}

          {/* TAB 2: PRODUCTS SECTION */}
          {activeTab === 'products' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2>Products & Solutions Modules ({content.products?.length || 4})</h2>
                  <p>Edit section title, subtitle, and individual business management modules.</p>
                </div>
                <button
                  type="button"
                  onClick={handleAddProduct}
                  className="btn-brand-primary px-4 py-2.5 text-xs font-bold flex items-center gap-1.5 shadow-sm shrink-0 self-start sm:self-auto cursor-pointer"
                >
                  <Plus size={16} />
                  <span>Add Product Module</span>
                </button>
              </div>

              {/* Section Header Controls */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-emerald-700">Section Header</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge / Eyebrow</label>
                    <input
                      type="text"
                      value={content.productsHeader?.badge || ''}
                      placeholder="PRODUCTS & SOLUTIONS"
                      onChange={(e) => setContent({
                        ...content,
                        productsHeader: { ...content.productsHeader, badge: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Section Title</label>
                    <input
                      type="text"
                      value={content.productsHeader?.title || ''}
                      placeholder="Complete Business Management Solutions for Every Stage of Growth"
                      onChange={(e) => setContent({
                        ...content,
                        productsHeader: { ...content.productsHeader, title: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Section Subtitle / Description</label>
                  <textarea
                    rows="2"
                    value={content.productsHeader?.subtitle || ''}
                    placeholder="Manage essential business activities with connected solutions..."
                    onChange={(e) => setContent({
                      ...content,
                      productsHeader: { ...content.productsHeader, subtitle: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                  />
                </div>
              </div>

              <div className="space-y-6">
                {content.products?.map((prod, pIdx) => (
                  <div key={prod.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: prod.color || '#007a55' }} />
                        <span className="font-bold text-base text-slate-900">{prod.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-400">{prod.themeClass}</span>
                        {content.products?.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveProduct(pIdx)}
                            className="p-1 rounded-md text-slate-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                            title="Delete module"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Title</label>
                        <input
                          type="text"
                          value={prod.title}
                          onChange={(e) => {
                            const newProds = [...content.products];
                            newProds[pIdx].title = e.target.value;
                            setContent({ ...content, products: newProds });
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                        <input
                          type="text"
                          value={prod.subtitle}
                          onChange={(e) => {
                            const newProds = [...content.products];
                            newProds[pIdx].subtitle = e.target.value;
                            setContent({ ...content, products: newProds });
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                        />
                      </div>
                    </div>

                    <ImageUploadField
                      label="Product Preview Image"
                      value={prod.image || ''}
                      placeholder="/images/pos-card-preview.jpg"
                      onChange={(url) => {
                        const newProds = [...content.products];
                        newProds[pIdx].image = url;
                        setContent({ ...content, products: newProds });
                      }}
                    />


                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Feature Checklist (Line separated)</label>
                      <textarea
                        rows="5"
                        value={prod.features?.join('\n')}
                        onChange={(e) => {
                          const newProds = [...content.products];
                          newProds[pIdx].features = e.target.value.split('\n').filter(Boolean);
                          setContent({ ...content, products: newProds });
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 leading-relaxed font-mono text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: REGIONAL COMPLIANCE & WHY CHOOSE */}
          {activeTab === 'gst' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2>{selectedCountry === 'SA' ? 'ZATCA Fatoora & Why Choose' : 'GST Compliance & Why Choose'}</h2>
                <p>
                  {selectedCountry === 'SA'
                    ? 'Configure Saudi Arabia statutory Fatoora Phase 2 requirements and value proposition cards.'
                    : 'Configure Indian statutory requirements and value proposition cards.'}
                </p>
              </div>

              {/* Statutory Compliance Section Details */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-emerald-700">
                  {selectedCountry === 'SA' ? 'ZATCA Fatoora Compliance Details (Saudi Arabia)' : 'GST Compliance Details (India)'}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                    <input
                      type="text"
                      value={content.gstSection?.badge || ''}
                      onChange={(e) => setContent({
                        ...content,
                        gstSection: { ...content.gstSection, badge: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Main Heading</label>
                    <input
                      type="text"
                      value={content.gstSection?.title || ''}
                      onChange={(e) => setContent({
                        ...content,
                        gstSection: { ...content.gstSection, title: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={content.gstSection?.subtitle || ''}
                    onChange={(e) => setContent({
                      ...content,
                      gstSection: { ...content.gstSection, subtitle: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Checklist Items (Line separated)</label>
                  <textarea
                    rows="4"
                    value={content.gstSection?.checklist?.join('\n') || ''}
                    onChange={(e) => setContent({
                      ...content,
                      gstSection: {
                        ...content.gstSection,
                        checklist: e.target.value.split('\n').filter(Boolean)
                      }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 font-mono text-xs"
                  />
                </div>

                {selectedCountry === 'SA' ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Pill Badge Text</label>
                      <input
                        type="text"
                        value={content.gstSection?.badgeText || ''}
                        placeholder="ZATCA"
                        onChange={(e) => setContent({
                          ...content,
                          gstSection: { ...content.gstSection, badgeText: e.target.value }
                        })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Pill Badge Subtext</label>
                      <input
                        type="text"
                        value={content.gstSection?.badgeSubtext || ''}
                        placeholder="Compliant"
                        onChange={(e) => setContent({
                          ...content,
                          gstSection: { ...content.gstSection, badgeSubtext: e.target.value }
                        })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Trust Badges (Line separated)</label>
                    <textarea
                      rows="3"
                      value={content.gstSection?.trustPills?.map(p => p.label).join('\n') || ''}
                      placeholder={"GST-Ready Invoicing\nIRN & QR Code Support\nAudit Trail & Tax Summaries"}
                      onChange={(e) => {
                        const lines = e.target.value.split('\n').filter(Boolean);
                        const defaultIcons = ['ShieldCheck', 'Zap', 'FileText'];
                        const pills = lines.map((label, i) => ({
                          label,
                          iconName: content.gstSection?.trustPills?.[i]?.iconName || defaultIcons[i % defaultIcons.length]
                        }));
                        setContent({
                          ...content,
                          gstSection: { ...content.gstSection, trustPills: pills }
                        });
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 font-mono text-xs"
                    />
                  </div>
                )}
              </div>

              {/* Why Choose Section Header */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-emerald-700">Why Choose Section Header</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                    <input
                      type="text"
                      value={content.whyChoose?.badge || ''}
                      onChange={(e) => setContent({
                        ...content,
                        whyChoose: { ...content.whyChoose, badge: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Main Heading</label>
                    <input
                      type="text"
                      value={content.whyChoose?.title || ''}
                      onChange={(e) => setContent({
                        ...content,
                        whyChoose: { ...content.whyChoose, title: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={content.whyChoose?.subtitle || ''}
                    onChange={(e) => setContent({
                      ...content,
                      whyChoose: { ...content.whyChoose, subtitle: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                  />
                </div>
              </div>

              {/* Dynamic Why Choose Cards Grid */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
                  <div>
                    <h3 className="text-emerald-700">Why Choose Cards ({content.whyChoose?.items?.length || 0})</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Add, edit, or remove feature cards. The frontend grid reconfigures dynamically.</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddWhyChoose}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <Plus size={15} /> Add Feature Card
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {content.whyChoose?.items?.map((item, idx) => (
                    <div
                      key={item.id || idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          Card #{idx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveWhyChoose(idx)}
                          title="Remove this feature card"
                          className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-2 py-1 rounded-lg border border-rose-200 flex items-center gap-1 transition cursor-pointer"
                        >
                          <Trash2 size={13} />
                          <span>Remove</span>
                        </button>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Title</label>
                        <input
                          type="text"
                          value={item.title || ''}
                          onChange={(e) => {
                            const newItems = [...(content.whyChoose?.items || [])];
                            newItems[idx] = { ...newItems[idx], title: e.target.value };
                            setContent({
                              ...content,
                              whyChoose: { ...content.whyChoose, items: newItems }
                            });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 font-semibold"
                          placeholder="e.g. Real-Time Reports"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Icon</label>
                        <select
                          value={item.iconName || 'ShieldCheck'}
                          onChange={(e) => {
                            const newItems = [...(content.whyChoose?.items || [])];
                            newItems[idx] = { ...newItems[idx], iconName: e.target.value };
                            setContent({
                              ...content,
                              whyChoose: { ...content.whyChoose, items: newItems }
                            });
                          }}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 cursor-pointer"
                        >
                          {WHY_CHOOSE_ICON_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                        <textarea
                          rows="2"
                          value={item.description || ''}
                          onChange={(e) => {
                            const newItems = [...(content.whyChoose?.items || [])];
                            newItems[idx] = { ...newItems[idx], description: e.target.value };
                            setContent({
                              ...content,
                              whyChoose: { ...content.whyChoose, items: newItems }
                            });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                          placeholder="Short description..."
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-start">
                  <button
                    type="button"
                    onClick={handleAddWhyChoose}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-emerald-300 text-emerald-700 hover:bg-emerald-50 text-xs font-bold transition w-full justify-center cursor-pointer"
                  >
                    <Plus size={16} /> Add Another Feature Card
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2>Customer Testimonials</h2>
                <p>Manage client reviews, business names, star ratings, and quotes.</p>
              </div>

              {/* Testimonials Header */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-emerald-700">Section Header</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                    <input
                      type="text"
                      value={content.testimonials?.badge || ''}
                      onChange={(e) => setContent({
                        ...content,
                        testimonials: { ...content.testimonials, badge: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Main Heading</label>
                    <input
                      type="text"
                      value={content.testimonials?.title || ''}
                      onChange={(e) => setContent({
                        ...content,
                        testimonials: { ...content.testimonials, title: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={content.testimonials?.subtitle || ''}
                    onChange={(e) => setContent({
                      ...content,
                      testimonials: { ...content.testimonials, subtitle: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                  />
                </div>
              </div>

              {/* Dynamic Testimonials List */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
                  <div>
                    <h3 className="text-emerald-700">Reviews ({content.testimonials?.items?.length || 0})</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Add, edit, or remove testimonials. The infinite marquee adapts seamlessly.</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddTestimonial}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <Plus size={15} /> Add Testimonial
                  </button>
                </div>

                <div className="space-y-4">
                  {content.testimonials?.items?.map((tst, idx) => (
                    <div key={tst.id || idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative hover:border-emerald-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          Review #{idx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveTestimonial(idx)}
                          title="Remove this review"
                          className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-2 py-1 rounded-lg border border-rose-200 flex items-center gap-1 transition cursor-pointer"
                        >
                          <Trash2 size={13} />
                          <span>Remove</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Company / Restaurant Name</label>
                          <input
                            type="text"
                            value={tst.name || ''}
                            onChange={(e) => {
                              const newItems = [...(content.testimonials?.items || [])];
                              newItems[idx] = { ...newItems[idx], name: e.target.value };
                              setContent({
                                ...content,
                                testimonials: { ...content.testimonials, items: newItems }
                              });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 font-semibold"
                            placeholder="e.g. Spice Garden Restaurant"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
                          <input
                            type="text"
                            value={tst.location || ''}
                            onChange={(e) => {
                              const newItems = [...(content.testimonials?.items || [])];
                              newItems[idx] = { ...newItems[idx], location: e.target.value };
                              setContent({
                                ...content,
                                testimonials: { ...content.testimonials, items: newItems }
                              });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                            placeholder="e.g. Bangalore, India"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Rating</label>
                          <select
                            value={tst.rating || 5}
                            onChange={(e) => {
                              const newItems = [...(content.testimonials?.items || [])];
                              newItems[idx] = { ...newItems[idx], rating: Number(e.target.value) };
                              setContent({
                                ...content,
                                testimonials: { ...content.testimonials, items: newItems }
                              });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 cursor-pointer"
                          >
                            <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                            <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                            <option value={3}>⭐⭐⭐ (3 Stars)</option>
                            <option value={2}>⭐⭐ (2 Stars)</option>
                            <option value={1}>⭐ (1 Star)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Initials (Fallback)</label>
                          <input
                            type="text"
                            maxLength={3}
                            value={tst.initials || ''}
                            onChange={(e) => {
                              const newItems = [...(content.testimonials?.items || [])];
                              newItems[idx] = { ...newItems[idx], initials: e.target.value };
                              setContent({
                                ...content,
                                testimonials: { ...content.testimonials, items: newItems }
                              });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 uppercase font-mono"
                            placeholder="e.g. SG"
                          />
                        </div>
                        <div className="sm:col-span-3">
                          <ImageUploadField
                            label="Store / Avatar Photo"
                            value={tst.avatarImage || ''}
                            placeholder="/images/tst-spice-garden.jpg"
                            compact
                            onChange={(url) => {
                              const newItems = [...(content.testimonials?.items || [])];
                              newItems[idx] = { ...newItems[idx], avatarImage: url };
                              setContent({
                                ...content,
                                testimonials: { ...content.testimonials, items: newItems }
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Customer Quote</label>
                        <textarea
                          rows="2"
                          value={tst.quote || ''}
                          onChange={(e) => {
                            const newItems = [...(content.testimonials?.items || [])];
                            newItems[idx] = { ...newItems[idx], quote: e.target.value };
                            setContent({
                              ...content,
                              testimonials: { ...content.testimonials, items: newItems }
                            });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                          placeholder="Write the customer testimonial here..."
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-start">
                  <button
                    type="button"
                    onClick={handleAddTestimonial}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-emerald-300 text-emerald-700 hover:bg-emerald-50 text-xs font-bold transition w-full justify-center cursor-pointer"
                  >
                    <Plus size={16} /> Add Another Testimonial
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB: INDUSTRIES */}
          {activeTab === 'industries' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2>Industries We Serve</h2>
                <p>Configure industry category names and sector titles shown on the homepage.</p>
              </div>

              {/* Section Header Inputs */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-emerald-700">Section Header</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                    <input
                      type="text"
                      value={content.industries?.badge || ''}
                      onChange={(e) => setContent({
                        ...content,
                        industries: { ...content.industries, badge: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Main Heading</label>
                    <input
                      type="text"
                      value={content.industries?.title || ''}
                      onChange={(e) => setContent({
                        ...content,
                        industries: { ...content.industries, title: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={content.industries?.subtitle || ''}
                    onChange={(e) => setContent({
                      ...content,
                      industries: { ...content.industries, subtitle: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                  />
                </div>
              </div>

              {/* Dynamic Industry Items Grid */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
                  <div>
                    <h3 className="text-emerald-700">Industry Categories ({content.industries?.items?.length || 0})</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Add, edit, or remove industry categories. The website grid adapts automatically.</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddIndustry}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <Plus size={15} /> Add Industry
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {content.industries?.items?.map((ind, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          #{idx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveIndustry(idx)}
                          title="Remove this industry"
                          className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-2 py-1 rounded-lg border border-rose-200 flex items-center gap-1 transition cursor-pointer"
                        >
                          <Trash2 size={13} />
                          <span>Remove</span>
                        </button>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Industry Name</label>
                        <input
                          type="text"
                          value={ind.name || ''}
                          onChange={(e) => {
                            const newItems = [...(content.industries?.items || [])];
                            newItems[idx] = { ...newItems[idx], name: e.target.value };
                            setContent({
                              ...content,
                              industries: { ...content.industries, items: newItems }
                            });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 font-semibold"
                          placeholder="e.g. Retail Stores"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Sector Tag</label>
                          <input
                            type="text"
                            value={ind.tag || ''}
                            onChange={(e) => {
                              const newItems = [...(content.industries?.items || [])];
                              newItems[idx] = { ...newItems[idx], tag: e.target.value };
                              setContent({
                                ...content,
                                industries: { ...content.industries, items: newItems }
                              });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                            placeholder="e.g. Retail"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Icon</label>
                          <select
                            value={ind.iconName || 'Building2'}
                            onChange={(e) => {
                              const newItems = [...(content.industries?.items || [])];
                              newItems[idx] = { ...newItems[idx], iconName: e.target.value };
                              setContent({
                                ...content,
                                industries: { ...content.industries, items: newItems }
                              });
                            }}
                            className="w-full px-2 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 cursor-pointer"
                          >
                            {INDUSTRY_ICON_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-start">
                  <button
                    type="button"
                    onClick={handleAddIndustry}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-emerald-300 text-emerald-700 hover:bg-emerald-50 text-xs font-bold transition w-full justify-center cursor-pointer"
                  >
                    <Plus size={16} /> Add Another Industry Category
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: FAQ SECTION */}
          {activeTab === 'faqs' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h2>Frequently Asked Questions (FAQ)</h2>
                  <p>Manage common questions, answers, and section category header.</p>
                </div>
                <button
                  type="button"
                  onClick={handleAddFaq}
                  className="btn-brand-primary text-xs py-2 px-3.5 flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Plus size={14} />
                  <span>Add FAQ Item</span>
                </button>
              </div>

              {/* FAQ Section Header Controls */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-emerald-700">FAQ Section Header</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge / Eyebrow</label>
                    <input
                      type="text"
                      value={content.faqs?.badge || ''}
                      placeholder="FREQUENTLY ASKED QUESTIONS"
                      onChange={(e) => setContent({
                        ...content,
                        faqs: { ...content.faqs, badge: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Section Title</label>
                    <input
                      type="text"
                      value={content.faqs?.title || ''}
                      placeholder="Common Questions About ISARVA ERP"
                      onChange={(e) => setContent({
                        ...content,
                        faqs: { ...content.faqs, title: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Section Subtitle</label>
                  <input
                    type="text"
                    value={content.faqs?.subtitle || ''}
                    placeholder="Find clear answers about platform capabilities..."
                    onChange={(e) => setContent({
                      ...content,
                      faqs: { ...content.faqs, subtitle: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                  />
                </div>
              </div>

              {/* FAQ Accordion List */}
              <div className="space-y-4">
                {content.faqs?.items?.map((faq, fIdx) => (
                  <div key={fIdx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs font-bold text-slate-500">Question #{fIdx + 1}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveFaq(fIdx)}
                        className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1 font-semibold transition cursor-pointer"
                      >
                        <Trash2 size={13} />
                        <span>Remove</span>
                      </button>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Question Text</label>
                      <input
                        type="text"
                        value={faq.q || ''}
                        onChange={(e) => {
                          const newItems = [...(content.faqs?.items || [])];
                          newItems[fIdx] = { ...newItems[fIdx], q: e.target.value };
                          setContent({
                            ...content,
                            faqs: { ...content.faqs, items: newItems }
                          });
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Answer Text</label>
                      <textarea
                        rows="3"
                        value={faq.a || ''}
                        onChange={(e) => {
                          const newItems = [...(content.faqs?.items || [])];
                          newItems[fIdx] = { ...newItems[fIdx], a: e.target.value };
                          setContent({
                            ...content,
                            faqs: { ...content.faqs, items: newItems }
                          });
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 leading-relaxed"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: INQUIRIES LIST */}
          {activeTab === 'inquiries' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h2>Received Demo & Trial Inquiries</h2>
                  <p>Customer leads submitted through the website modals.</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full">
                  {inquiries.length} Total Leads
                </span>
              </div>

              <div className="space-y-3">
                {inquiries.length === 0 ? (
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-2">
                    <p className="text-slate-500 text-sm">No inquiries received yet.</p>
                    <p className="text-xs text-slate-400">Leads submitted by visitors will appear here automatically.</p>
                  </div>
                ) : (
                  inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2.5">
                          <span className="font-extrabold text-slate-900 text-base">{inq.name}</span>
                          <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-0.5 rounded-full font-bold border border-brand-200">
                            {inq.product}
                          </span>
                          <span className="inline-flex items-center gap-1 text-2xs font-bold px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700">
                            <FlagIcon code={inq.country || (inq.phone?.startsWith('+966') ? 'SA' : 'IN')} className="w-3.5 h-2.5" />
                            <span>{inq.country === 'SA' || inq.phone?.startsWith('+966') ? 'Saudi' : 'India'}</span>
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                          <span className="flex items-center gap-1"><Building size={13} className="text-slate-400" />{inq.company}</span>
                          <span className="flex items-center gap-1"><Mail size={13} className="text-slate-400" />{inq.email}</span>
                          <span className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"><Phone size={13} />{inq.phone}</span>
                        </div>
                        {inq.message && (
                          <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl mt-2 font-mono border border-slate-100">
                            "{inq.message}"
                          </p>
                        )}
                      </div>
                      <div className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Clock size={12} />
                        <span>{inq.createdAt}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

