'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LeadModal from '../LeadModal';
import { getDefaultContentForCountry } from '../../lib/content';
import AboutHeroShowcase from './AboutHeroShowcase';
import AboutForefrontStats from './AboutForefrontStats';
import AboutVisionMission from './AboutVisionMission';
import AboutPhilosophyGlobe from './AboutPhilosophyGlobe';
import AboutCultureCareers from './AboutCultureCareers';
import AboutBottomCta from './AboutBottomCta';

export default function AboutPageContent({ initialCountry = 'IN' }) {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState(initialCountry);
  const [content, setContent] = useState(() => getDefaultContentForCountry(initialCountry));
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'demo',
    selectedProduct: '',
  });

  // Sync country code from localStorage if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('isarva_country');
      if (stored && (stored === 'IN' || stored === 'SA')) {
        setCountryCode(stored);
        setContent(getDefaultContentForCountry(stored));
      }
    }
  }, []);

  const handleCountryChange = (countryObj) => {
    const code = countryObj?.code || 'IN';
    if (typeof window !== 'undefined') {
      localStorage.setItem('isarva_country', code);
    }
    setCountryCode(code);
    setContent(getDefaultContentForCountry(code));
    if (code === 'SA') {
      router.push('/sa');
    } else {
      router.push('/');
    }
  };

  const currentCountry = content?.countries?.find((c) => c.code === countryCode) || {
    code: countryCode,
    name: countryCode === 'SA' ? 'Saudi Arabia' : 'India',
  };

  const handleOpenModal = (type = 'demo', productName = '') => {
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
    <div className="flex flex-col min-h-screen bg-[#FDF8F2] text-[#1a1f24]">
      {/* Global Navbar */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      <main className="flex-grow">
        {/* 1. Hero 5-Card Interactive Showcase */}
        <AboutHeroShowcase />

        {/* 2. 15+ Years Stats & Forefront Transformation Banner with 4 Pillars */}
        <AboutForefrontStats />

        {/* 3. Dual Vision & Mission Bento Cards */}
        <AboutVisionMission />

        {/* 4. Philosophy & Opportunity with HD Globe */}
        <AboutPhilosophyGlobe />

        {/* 5. Culture & Careers Bento Showcase */}
        <AboutCultureCareers />

        {/* 6. Bottom Dark Conversion CTA */}
        <AboutBottomCta />
      </main>

      {/* Global Footer */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Global Demo / Contact Modal */}
      <LeadModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        product={modalState.selectedProduct}
        countryCode={countryCode}
      />
    </div>
  );
}
