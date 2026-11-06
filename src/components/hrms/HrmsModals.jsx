'use client';

import React from 'react';
import { X } from 'lucide-react';
import LeadModal from '../LeadModal';

export function HrmsLightboxModal({ isOpen, onClose, imageSrc, imageAlt }) {
  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X size={20} />
        </button>
        <img
          src={imageSrc}
          alt={imageAlt || 'Preview'}
          className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border border-white/20"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

export function HrmsBrochureModal({ isOpen, onClose }) {
  return (
    <LeadModal
      isOpen={isOpen}
      onClose={onClose}
      modalType="brochure"
      selectedProduct="HRMS Software"
    />
  );
}

export function HrmsDemoModal({ isOpen, onClose }) {
  return (
    <LeadModal
      isOpen={isOpen}
      onClose={onClose}
      modalType="demo"
      selectedProduct="HRMS Software"
    />
  );
}
