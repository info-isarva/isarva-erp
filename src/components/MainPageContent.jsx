'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Hero from './Hero';
import ProductsSection from './ProductsSection';
import WhyChooseSection from './WhyChooseSection';
import ComplianceSection from './compliance/ComplianceSection';
import IndustriesSection from './IndustriesSection';
import TestimonialsSection from './TestimonialsSection';
import FaqSection from './FaqSection';
import Footer from './Footer';
import LeadModal from './LeadModal';
import { getDefaultContentForCountry } from '../lib/content';

export default function MainPageContent({ initialCountry = 'IN' }) {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState(initialCountry);
  const [content, setContent] = useState(() => getDefaultContentForCountry(initialCountry));
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'started',
    selectedProduct: ''
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
      setTimeout(() => {
        aosInstance?.refresh();
      }, 150);
    });
  }, []);

  // Keep countryCode in sync with initialCountry if route changes
  useEffect(() => {
    setCountryCode(initialCountry);
    setContent(getDefaultContentForCountry(initialCountry));
    if (typeof window !== 'undefined') {
      localStorage.setItem('isarva_country', initialCountry);
    }
  }, [initialCountry]);

  // Load dynamic CMS updates for the current country
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

    if (code === 'SA') {
      router.push('/sa');
    } else {
      router.push('/');
    }
  };

  const currentCountry = content?.countries?.find((c) => c.code === countryCode) || {
    code: countryCode,
    name: countryCode === 'SA' ? 'Saudi Arabia' : 'India'
  };

  const handleOpenModal = (type = 'started', productName = '') => {
    setModalState({
      isOpen: true,
      type,
      selectedProduct: productName
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Global Header with Live Country Switcher */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Hero Section */}
      <Hero
        hero={content.hero}
        products={content.products}
        onOpenModal={handleOpenModal}
      />

      {/* 4 Products Section */}
      <ProductsSection
        header={content?.productsHeader}
        products={content.products}
        onOpenModal={handleOpenModal}
      />

      {/* Why Choose ERP Section */}
      <WhyChooseSection whyChoose={content.whyChoose} />

      {/* Regional Statutory Compliance (GST for India / ZATCA for Saudi Arabia) */}
      <ComplianceSection
        countryCode={countryCode}
        data={content.gstSection}
      />

      {/* Industries Served Section */}
      <IndustriesSection industries={content.industries} />

      {/* Customer Testimonials Section (Hidden) */}
      {/* <TestimonialsSection testimonials={content.testimonials} /> */}

      {/* Frequently Asked Questions Accordion */}
      <FaqSection faqs={content.faqs} />

      {/* Global Footer with Live Country Switcher */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Interactive Modal for Get Started & Demo */}
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
