'use client';

import React from 'react';

/**
 * India National Flag Component
 * High-definition pre-rendered raster asset with crisp Ashoka Chakra geometry
 */
export function IndiaFlag({ className = 'w-5 h-3.5' }) {
  return (
    <img
      src="/images/flags/in-flag.png"
      alt="Flag of India"
      className={`inline-block object-cover rounded-xs shadow-2xs border border-slate-200/80 overflow-hidden shrink-0 ${className}`}
      loading="eager"
    />
  );
}

/**
 * Saudi Arabia National Flag Component
 * High-definition pre-rendered raster asset with authentic Arabic Thuluth calligraphy & scimitar sword
 */
export function SaudiFlag({ className = 'w-5 h-3.5' }) {
  return (
    <img
      src="/images/flags/sa-flag.png"
      alt="Flag of Saudi Arabia"
      className={`inline-block object-cover rounded-xs shadow-2xs border border-slate-200/80 overflow-hidden shrink-0 ${className}`}
      loading="eager"
    />
  );
}

/**
 * United Arab Emirates National Flag
 */
export function UAEFlag({ className = 'w-5 h-3.5' }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`inline-block rounded-xs shadow-2xs border border-slate-200/80 overflow-hidden shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of UAE"
    >
      <rect width="45" height="13.33" x="15" y="0" fill="#00732F" />
      <rect width="45" height="13.34" x="15" y="13.33" fill="#FFFFFF" />
      <rect width="45" height="13.33" x="15" y="26.67" fill="#000000" />
      <rect width="15" height="40" x="0" y="0" fill="#FF0000" />
    </svg>
  );
}

/**
 * United States National Flag
 */
export function USFlag({ className = 'w-5 h-3.5' }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`inline-block rounded-xs shadow-2xs border border-slate-200/80 overflow-hidden shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of USA"
    >
      <rect width="60" height="40" fill="#B22234" />
      <rect width="60" height="3.08" y="3.08" fill="#FFFFFF" />
      <rect width="60" height="3.08" y="9.23" fill="#FFFFFF" />
      <rect width="60" height="3.08" y="15.38" fill="#FFFFFF" />
      <rect width="60" height="3.08" y="21.54" fill="#FFFFFF" />
      <rect width="60" height="3.08" y="27.69" fill="#FFFFFF" />
      <rect width="60" height="3.08" y="33.85" fill="#FFFFFF" />
      <rect width="25" height="21.54" fill="#3C3B6E" />
      <circle cx="6" cy="5" r="1" fill="#FFFFFF" />
      <circle cx="12.5" cy="5" r="1" fill="#FFFFFF" />
      <circle cx="19" cy="5" r="1" fill="#FFFFFF" />
      <circle cx="9.2" cy="10.7" r="1" fill="#FFFFFF" />
      <circle cx="15.7" cy="10.7" r="1" fill="#FFFFFF" />
      <circle cx="6" cy="16.5" r="1" fill="#FFFFFF" />
      <circle cx="12.5" cy="16.5" r="1" fill="#FFFFFF" />
      <circle cx="19" cy="16.5" r="1" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * United Kingdom National Flag Vector Component
 */
export function UKFlag({ className = 'w-5 h-3.5' }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`inline-block rounded-xs shadow-2xs border border-slate-200/80 overflow-hidden shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of United Kingdom"
    >
      <clipPath id="uk-flag-clip">
        <rect width="60" height="40" />
      </clipPath>
      <g clipPath="url(#uk-flag-clip)">
        <rect width="60" height="40" fill="#012169" />
        <path d="M0 0L60 40M60 0L0 40" stroke="#FFFFFF" strokeWidth="8" />
        <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v40M0 20h60" stroke="#FFFFFF" strokeWidth="12" />
        <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="7" />
      </g>
    </svg>
  );
}

/**
 * Universal Flag Icon Component
 * Accepts country code (e.g. 'IN', 'SA', 'AE', 'US', 'GB', 'UK') or country name
 */
export default function FlagIcon({ code, country, className = 'w-5 h-3.5' }) {
  const rawCode = code || country || '';
  const normalized = rawCode.trim().toUpperCase();

  switch (normalized) {
    case 'IN':
    case 'INDIA':
    case '🇮🇳':
      return <IndiaFlag className={className} />;
    case 'SA':
    case 'SAUDI ARABIA':
    case 'KSA':
    case '🇸🇦':
      return <SaudiFlag className={className} />;
    case 'AE':
    case 'UAE':
    case 'DUBAI':
    case '🇦🇪':
      return <UAEFlag className={className} />;
    case 'US':
    case 'USA':
    case '🇺🇸':
      return <USFlag className={className} />;
    case 'GB':
    case 'UK':
    case 'UNITED KINGDOM':
    case 'ENGLAND':
    case '🇬🇧':
      return <UKFlag className={className} />;
    default:
      return (
        <span
          className={`inline-flex items-center justify-center bg-slate-100 text-slate-700 font-bold text-xs rounded-xs border border-slate-300 shrink-0 ${className}`}
        >
          {normalized.slice(0, 2) || '🌐'}
        </span>
      );
  }
}
