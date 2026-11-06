'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'aos/dist/aos.css';
import Navbar from '../Navbar';
import CrmHero from './CrmHero';
import CrmCapabilities from './CrmCapabilities';
import CrmModules from './CrmModules';
import CrmWorkflow from './CrmWorkflow';
import CrmWhyUs from './CrmWhyUs';
import CrmMobile from './CrmMobile';
import CrmFaq from './CrmFaq';
import Footer from '../Footer';
import CrmWhatsAppWidget from './CrmWhatsAppWidget';
import { CrmLightboxModal, CrmBrochureModal, CrmDemoModal } from './CrmModals';
import { getDefaultContentForCountry } from '../../lib/content';

export default function CrmPageContent() {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState('IN');
  const [content, setContent] = useState(() => getDefaultContentForCountry('IN'));

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    src: '',
    alt: '',
  });

  // Dynamically initialize AOS on client mount
  useEffect(() => {
    let aosInstance = null;
    import('aos').then((module) => {
      aosInstance = module.default || module;
      aosInstance.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: false,
        offset: 50,
        delay: 50,
      });
      // Refresh to recalculate element offsets
      setTimeout(() => {
        aosInstance?.refresh();
      }, 150);
    });
  }, []);

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
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-100 selection:text-orange-700">
      {/* Global Home Page Header (Same Navbar as Home Page) */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={(type, product) => handleOpenDemoModal()}
      />

      <main className="flex-1">
        {/* Hero Section with Home Page Font Style & CRM Orange Accent */}
        <CrmHero
          onOpenDemoModal={handleOpenDemoModal}
          onOpenBrochureModal={handleOpenBrochureModal}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 6 Capabilities Section */}
        <CrmCapabilities />

        {/* 6 Deep-Dive Modules Section */}
        <CrmModules onOpenLightbox={handleOpenLightbox} />

        {/* 5-Step Deal Acceleration Workflow */}
        <CrmWorkflow />

        {/* Why Choose Isarva CRM Section */}
        <CrmWhyUs />

        {/* Mobile CRM Companion Section */}
        <CrmMobile onOpenLightbox={handleOpenLightbox} />

        {/* Frequently Asked Questions Accordion */}
        <CrmFaq />
      </main>

      {/* Global Home Page Footer */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={(type, product) => handleOpenDemoModal()}
      />

      {/* Floating WhatsApp Live Chat Widget */}
      <CrmWhatsAppWidget />

      {/* Modals */}
      <CrmDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />

      <CrmBrochureModal
        isOpen={isBrochureModalOpen}
        onClose={handleCloseBrochureModal}
      />

      <CrmLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageSrc={lightboxState.src}
        imageAlt={lightboxState.alt}
      />
    </div>
  );
}
