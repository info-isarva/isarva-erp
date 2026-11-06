'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LeadModal from '../LeadModal';
import WhyUsHero from './WhyUsHero';
import WhyUsMetrics from './WhyUsMetrics';
import BentoBenefitsGrid from './BentoBenefitsGrid';
import ErpComparisonTable from './ErpComparisonTable';
import EeatPillars from './EeatPillars';
import WhyUsCta from './WhyUsCta';
import { getDefaultContentForCountry } from '../../lib/content';

export default function WhyChooseUsContent({ initialCountry = 'IN' }) {
  const [countryCode, setCountryCode] = useState(initialCountry);
  const [content, setContent] = useState(() => getDefaultContentForCountry(initialCountry));
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'demo',
    selectedProduct: 'Why Choose ISARVA ERP',
  });

  // Sync country from localStorage on mount if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('isarva_country');
      if (saved && (saved === 'IN' || saved === 'SA') && saved !== countryCode) {
        setCountryCode(saved);
        setContent(getDefaultContentForCountry(saved));
      }
    }
  }, []);

  // Sync if initialCountry prop changes
  useEffect(() => {
    setCountryCode(initialCountry);
    setContent(getDefaultContentForCountry(initialCountry));
  }, [initialCountry]);

  // Load dynamic CMS content for the country
  useEffect(() => {
    let isMounted = true;
    async function loadContent() {
      try {
        const res = await fetch(`/api/content?country=${countryCode}`);
        if (res.ok) {
          const data = await res.json();
          if (data?.content && isMounted) {
            setContent(data.content);
          }
        }
      } catch (err) {
        if (isMounted) {
          setContent(getDefaultContentForCountry(countryCode));
        }
      }
    }
    loadContent();
    return () => {
      isMounted = false;
    };
  }, [countryCode]);

  const handleCountryChange = (countryObj) => {
    const code = countryObj?.code || 'IN';
    if (typeof window !== 'undefined') {
      localStorage.setItem('isarva_country', code);
    }
    setCountryCode(code);
    setContent(getDefaultContentForCountry(code));
  };

  const currentCountry = content?.countries?.find((c) => c.code === countryCode) || {
    code: countryCode,
    name: countryCode === 'SA' ? 'Saudi Arabia' : 'India',
  };

  const handleOpenModal = (type = 'demo', productName = 'Why Choose ISARVA ERP') => {
    setModalState({
      isOpen: true,
      type,
      selectedProduct: productName,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* Global Navbar */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      <main className="flex-1">
        {/* Hero Section with 3D Visual */}
        <WhyUsHero onOpenModal={handleOpenModal} />

        {/* Proven Value Metrics Band */}
        <WhyUsMetrics />

        {/* 10-Card Bento Benefits Grid */}
        <BentoBenefitsGrid onOpenModal={handleOpenModal} />

        {/* 3-Way Architectural Comparison Table */}
        <ErpComparisonTable onOpenModal={handleOpenModal} />

        {/* 4 Institutional E-E-A-T Pillars */}
        <EeatPillars />

        {/* Bottom Conversion CTA */}
        <WhyUsCta onOpenModal={handleOpenModal} />
      </main>

      {/* Global Footer */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Lead & Demo Modal */}
      <LeadModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        modalType={modalState.type}
        selectedProduct={modalState.selectedProduct}
        countryCode={countryCode}
      />
    </div>
  );
}
