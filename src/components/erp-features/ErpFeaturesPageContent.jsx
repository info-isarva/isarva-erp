'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LeadModal from '../LeadModal';
import ErpFeaturesHero from './ErpFeaturesHero';
import ErpFeaturesGrid from './ErpFeaturesGrid';
import ErpBusinessControl from './ErpBusinessControl';
import ErpReadyCta from './ErpReadyCta';
import { getDefaultContentForCountry } from '../../lib/content';

export default function ErpFeaturesPageContent() {
  const router = useRouter();
  const [content, setContent] = useState(() => getDefaultContentForCountry('IN'));
  const [countryCode, setCountryCode] = useState('IN');
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'started',
    selectedProduct: '',
  });

  // Load dynamic CMS content
  useEffect(() => {
    let isMounted = true;
    async function loadContent() {
      try {
        const res = await fetch(`/api/content?country=${countryCode}`);
        if (res.ok) {
          const data = await res.json();
          if (data?.content && isMounted) setContent(data.content);
        }
      } catch {
        // fall back to default content already set
      }
    }
    loadContent();
    return () => { isMounted = false; };
  }, [countryCode]);

  const currentCountry =
    content?.countries?.find((c) => c.code === countryCode) || {
      code: countryCode,
      name: countryCode === 'SA' ? 'Saudi Arabia' : 'India',
    };

  const handleCountryChange = (countryObj) => {
    const code = countryObj?.code || 'IN';
    if (typeof window !== 'undefined') {
      localStorage.setItem('isarva_country', code);
    }
    setCountryCode(code);
    if (code === 'SA') router.push('/sa');
    else router.push('/');
  };

  const handleOpenModal = (type = 'started', productName = '') => {
    setModalState({ isOpen: true, type, selectedProduct: productName });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Global Navbar */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Page Sections */}
      <main>
        <ErpFeaturesHero onOpenModal={handleOpenModal} />
        <ErpFeaturesGrid />
        <ErpBusinessControl />
        <ErpReadyCta onOpenModal={handleOpenModal} />
      </main>

      {/* Global Footer */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Lead / Demo Modal */}
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
