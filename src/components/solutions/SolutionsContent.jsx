'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LeadModal from '../LeadModal';
import { getDefaultContentForCountry } from '../../lib/content';
import SolutionsHero from './SolutionsHero';
import CoreSolutionsGrid from './CoreSolutionsGrid';
import UnifiedSynergySection from './UnifiedSynergySection';
import IndustrySolutionsMatrix from './IndustrySolutionsMatrix';
import SolutionsMetricsRoi from './SolutionsMetricsRoi';
import SolutionsImplementationRoadmap from './SolutionsImplementationRoadmap';

export default function SolutionsContent() {
  const [countryCode, setCountryCode] = useState('IN');
  const [content, setContent] = useState(() => getDefaultContentForCountry('IN'));
  const [modalState, setModalState] = useState({ isOpen: false, type: 'demo', product: null });
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('isarva_country');
      if (stored && (stored === 'IN' || stored === 'SA')) {
        setCountryCode(stored);
        setContent(getDefaultContentForCountry(stored));
      }
    }
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Existing Global Navbar */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      <main className="flex-1">
        {/* Solutions Hero with Interactive Module Category Filter */}
        <SolutionsHero activeTab={activeTab} onTabChange={setActiveTab} />

        {/* 6 Core Solutions Deep-Dive Cards */}
        <CoreSolutionsGrid activeTab={activeTab} onOpenModal={handleOpenModal} />

        {/* Unified Real-Time Synergy vs Fragmented Apps */}
        <UnifiedSynergySection />

        {/* Industry-Specific Matrix */}
        <IndustrySolutionsMatrix onOpenModal={handleOpenModal} />

        {/* Quantified Impact Metrics & Executive Endorsement */}
        <SolutionsMetricsRoi />

        {/* Rapid 2-4 Week Implementation Roadmap */}
        <SolutionsImplementationRoadmap />
      </main>

      {/* Existing Global Footer */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Existing Global Lead / Demo Modal */}
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
