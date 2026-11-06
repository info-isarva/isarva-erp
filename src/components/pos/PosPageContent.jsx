'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import PosHero from './PosHero';
import PosCapabilities from './PosCapabilities';
import PosModules from './PosModules';
import PosOutlets from './PosOutlets';
import PosWorkflow from './PosWorkflow';
import PosWhyUs from './PosWhyUs';
import PosMobile from './PosMobile';
import PosFaq from './PosFaq';
import Footer from '../Footer';
import PosWhatsAppWidget from './PosWhatsAppWidget';
import { PosLightboxModal, PosBrochureModal, PosDemoModal } from './PosModals';
import { getDefaultContentForCountry } from '../../lib/content';

export default function PosPageContent() {
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
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-800">
      {/* Global Home Page Header (Same Navbar as Home Page) */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={(type, product) => handleOpenDemoModal()}
      />

      <main className="flex-1">
        {/* Hero Section with Home Page Font Style & POS Emerald Accent */}
        <PosHero
          onOpenDemoModal={handleOpenDemoModal}
          onOpenBrochureModal={handleOpenBrochureModal}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 6 Capabilities Section */}
        <PosCapabilities />

        {/* 5 Deep-Dive Modules Section */}
        <PosModules onOpenLightbox={handleOpenLightbox} />

        {/* 10 Outlet Formats Showcase */}
        <PosOutlets />

        {/* 5-Step Service Lifecycle Workflow */}
        <PosWorkflow />

        {/* Why Choose ISARVA POS Section */}
        <PosWhyUs />

        {/* Mobile Captain & Waiter Handheld Section */}
        <PosMobile onOpenLightbox={handleOpenLightbox} />

        {/* Frequently Asked Questions Accordion */}
        <PosFaq onOpenDemoModal={handleOpenDemoModal} />
      </main>

      {/* Global Home Page Footer */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={(type, product) => handleOpenDemoModal()}
      />

      {/* Floating WhatsApp Live Chat Widget */}
      <PosWhatsAppWidget />

      {/* Modals */}
      <PosDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />

      <PosBrochureModal
        isOpen={isBrochureModalOpen}
        onClose={handleCloseBrochureModal}
      />

      <PosLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageSrc={lightboxState.src}
        imageAlt={lightboxState.alt}
      />
    </div>
  );
}
