'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import BillsoftHero from './BillsoftHero';
import BillsoftCapabilities from './BillsoftCapabilities';
import BillsoftModules from './BillsoftModules';
import BillsoftCoverage from './BillsoftCoverage';
import BillsoftWorkflow from './BillsoftWorkflow';
import BillsoftWhyUs from './BillsoftWhyUs';
import BillsoftMobile from './BillsoftMobile';
import BillsoftFaq from './BillsoftFaq';
import Footer from '../Footer';
import BillsoftWhatsAppWidget from './BillsoftWhatsAppWidget';
import { BillsoftLightboxModal, BillsoftBrochureModal, BillsoftDemoModal } from './BillsoftModals';
import { getDefaultContentForCountry } from '../../lib/content';

export default function BillsoftPageContent() {
  const [countryCode, setCountryCode] = useState('IN');
  const [content, setContent] = useState(() => getDefaultContentForCountry('IN'));

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    src: '',
    alt: '',
  });

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
    setCountryCode(code);
    setContent(getDefaultContentForCountry(code));
    if (typeof window !== 'undefined') {
      localStorage.setItem('isarva_country', code);
    }
  };

  const currentCountry = content?.countries?.find((c) => c.code === countryCode) || {
    code: countryCode,
    name: countryCode === 'SA' ? 'Saudi Arabia' : 'India',
  };

  const handleOpenDemoModal = () => setIsDemoModalOpen(true);
  const handleCloseDemoModal = () => setIsDemoModalOpen(false);

  const handleOpenBrochureModal = () => setIsBrochureModalOpen(true);
  const handleCloseBrochureModal = () => setIsBrochureModalOpen(false);

  const handleOpenLightbox = (src, alt) => {
    setLightboxState({
      isOpen: true,
      src,
      alt,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState({
      isOpen: false,
      src: '',
      alt: '',
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-800">
      {/* Global Home Page Header (Same Navbar as Home Page) */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={() => handleOpenDemoModal()}
      />

      <main className="flex-1">
        {/* Hero Section with Home Page Font Style & BillSoft Royal Blue Accent */}
        <BillsoftHero
          onOpenDemoModal={handleOpenDemoModal}
          onOpenBrochureModal={handleOpenBrochureModal}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 6 Capabilities Section */}
        <BillsoftCapabilities />

        {/* 5 Deep-Dive Modules Section */}
        <BillsoftModules onOpenLightbox={handleOpenLightbox} />

        {/* 360° ERP Coverage Architecture & Sectors Showcase */}
        <BillsoftCoverage onOpenLightbox={handleOpenLightbox} />

        {/* 5-Step Financial Service Lifecycle Workflow */}
        <BillsoftWorkflow />

        {/* Why Choose BillSoft Section */}
        <BillsoftWhyUs />

        {/* Mobile Office & Field Invoicing Section */}
        <BillsoftMobile onOpenLightbox={handleOpenLightbox} />

        {/* Frequently Asked Questions Accordion */}
        <BillsoftFaq onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* Global Home Page Footer */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={() => handleOpenDemoModal()}
      />

      {/* Floating WhatsApp Live Chat Widget */}
      <BillsoftWhatsAppWidget />

      {/* Modals */}
      <BillsoftDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />

      <BillsoftBrochureModal
        isOpen={isBrochureModalOpen}
        onClose={handleCloseBrochureModal}
      />

      <BillsoftLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageSrc={lightboxState.src}
        imageAlt={lightboxState.alt}
      />
    </div>
  );
}
