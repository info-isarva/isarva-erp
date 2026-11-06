'use client';

import React from 'react';
import Link from 'next/link';
import {
  UtensilsCrossed,
  ReceiptText,
  BarChart3,
  Users2,
  Handshake,
  ArrowRight,
  Sparkles,
  Boxes,
  Package
} from 'lucide-react';
import { renderTitleWithGradient } from '../lib/render-title';

function getProductItemColClass(count, idx) {
  if (count === 5 && idx === 4) {
    return 'sm:col-span-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-1';
  }
  if (count === 3 && idx === 2) {
    return 'sm:col-span-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-1';
  }
  return '';
}

function getProductsGridClass(count) {
  if (count <= 2) return 'grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-4 sm:gap-5';
  if (count === 3) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-4 sm:gap-5';
  if (count === 4) return 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5';
  if (count === 5) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 xl:gap-4.5 2xl:gap-5';
  return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5';
}

const DEFAULT_DESCRIPTIONS = {
  billsoft: 'Complete financial management with GST, VAT and multi-currency support.',
  'restaurant-pos': 'Fast and flexible POS for restaurants, cafes and retail outlets.',
  hrms: 'Manage your workforce from hiring to payroll, attendance and leave.',
  crm: 'Convert leads, manage customers and grow your sales pipeline.',
  'inventory-operations': 'Real-time stock, purchase, sales, warehouses and multi-branch management.',
  operations: 'Real-time stock, purchase, sales, warehouses and multi-branch management.',
  pos: 'Fast and flexible POS for restaurants, cafes and retail outlets.'
};

export default function ProductsSection({ header, products, onOpenModal }) {
  // Helper to format image path
  const getImageUrl = (imagePath, fallbackPath) => {
    const src = imagePath || fallbackPath;
    if (!src) return '';
    if (src.startsWith('http')) return src;
    return src.startsWith('/') ? src : '/' + src;
  };

  const getProductIcon = (iconName, productId) => {
    switch (productId) {
      case 'billsoft':
      case 'bill-soft':
        return <ReceiptText size={22} strokeWidth={2.4} />;
      case 'restaurant-pos':
      case 'pos':
        return <UtensilsCrossed size={22} strokeWidth={2.4} />;
      case 'hrms':
        return <Users2 size={22} strokeWidth={2.4} />;
      case 'crm':
        return <Handshake size={22} strokeWidth={2.4} />;
      case 'inventory-operations':
      case 'inventory':
      case 'operations':
        return <Boxes size={22} strokeWidth={2.4} />;
    }

    switch (iconName) {
      case 'ReceiptText':
      case 'Receipt':
        return <ReceiptText size={22} strokeWidth={2.4} />;
      case 'UtensilsCrossed':
      case 'Utensils':
        return <UtensilsCrossed size={22} strokeWidth={2.4} />;
      case 'Users2':
      case 'Users':
        return <Users2 size={22} strokeWidth={2.4} />;
      case 'Handshake':
        return <Handshake size={22} strokeWidth={2.4} />;
      case 'Boxes':
      case 'Package':
        return <Boxes size={22} strokeWidth={2.4} />;
      case 'BarChart3':
        return <BarChart3 size={22} strokeWidth={2.4} />;
      default:
        return <Sparkles size={22} strokeWidth={2.4} />;
    }
  };

  const getProductStyles = (themeClass, productId) => {
    switch (productId || themeClass) {
      case 'billsoft':
      case 'bill-soft':
        return {
          iconBg: 'bg-[#2563eb]',
          borderColor: 'hover:border-[#2563eb]/50',
          shadowClass: 'card-shadow-blue',
          fallbackImage: '/images/billsoft-card-preview.jpg'
        };
      case 'restaurant-pos':
      case 'pos':
        return {
          iconBg: 'bg-[#f43f5e]',
          borderColor: 'hover:border-[#f43f5e]/50',
          shadowClass: 'card-shadow-rose',
          fallbackImage: '/images/pos-card-preview.jpg'
        };
      case 'hrms':
        return {
          iconBg: 'bg-[#7c3aed]',
          borderColor: 'hover:border-[#7c3aed]/50',
          shadowClass: 'card-shadow-purple',
          fallbackImage: '/images/hrms-card-preview.jpg'
        };
      case 'crm':
        return {
          iconBg: 'bg-[#ea580c]',
          borderColor: 'hover:border-[#ea580c]/50',
          shadowClass: 'card-shadow-orange',
          fallbackImage: '/images/crm-card-preview.jpg'
        };
      case 'inventory-operations':
      case 'inventory':
      case 'operations':
        return {
          iconBg: 'bg-[#059669]',
          borderColor: 'hover:border-[#059669]/50',
          shadowClass: 'card-shadow-emerald',
          fallbackImage: '/images/hero-erp-overview.jpg'
        };
      default:
        return {
          iconBg: 'bg-[#007a55]',
          borderColor: 'hover:border-[#007a55]/50',
          shadowClass: 'card-shadow-emerald',
          fallbackImage: '/images/hero-erp-overview.jpg'
        };
    }
  };

  const formatCardTitle = (title) => {
    if (!title) return '';
    const clean = title.replace(/\s*\([^)]*\)/g, '').trim();
    if (clean === 'BillSoft Accounting' || clean.includes('BillSoft')) {
      return (
        <>
          <span className="block whitespace-nowrap">BillSoft</span>
          <span className="block whitespace-nowrap">Accounting</span>
        </>
      );
    }
    if (clean === 'Restaurant POS' || clean.includes('Restaurant')) {
      return (
        <>
          <span className="block whitespace-nowrap">Restaurant</span>
          <span className="block whitespace-nowrap">POS</span>
        </>
      );
    }
    if (clean === 'HRMS & Payroll' || clean.includes('HRMS')) {
      return (
        <>
          <span className="block whitespace-nowrap">HRMS &amp;</span>
          <span className="block whitespace-nowrap">Payroll</span>
        </>
      );
    }
    if (clean === 'CRM & Sales' || clean.includes('CRM')) {
      return (
        <>
          <span className="block whitespace-nowrap">CRM &amp;</span>
          <span className="block whitespace-nowrap">Sales</span>
        </>
      );
    }
    if (clean === 'Inventory & Operations' || clean.includes('Inventory')) {
      return (
        <>
          <span className="block whitespace-nowrap">Inventory &amp;</span>
          <span className="block whitespace-nowrap">Operations</span>
        </>
      );
    }
    const words = clean.split(/\s+/);
    if (words.length === 2) {
      return (
        <>
          <span className="block whitespace-nowrap">{words[0]}</span>
          <span className="block whitespace-nowrap">{words[1]}</span>
        </>
      );
    }
    return clean;
  };

  const getProductHref = (product) => {
    if (product.id === 'crm') return '/crm';
    if (product.id === 'billsoft' || product.id === 'bill-soft') return '/billsoft';
    if (product.id === 'restaurant-pos' || product.id === 'pos') return '/restaurant-pos';
    if (product.buttonLink && product.buttonLink.startsWith('/')) return product.buttonLink;
    return null;
  };

  return (
    <section id="products" className="section-padding bg-slate-50/60 border-t border-slate-100">
      <div className="site-container">

        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="600" className="section-header">
          <div className="section-eyebrow">
            {header?.badge || 'OUR SOLUTIONS'}
          </div>
          <h2>
            {renderTitleWithGradient(header?.title || 'One platform. The tools your teams need.')}
          </h2>
          <p>
            {header?.subtitle ||
              'From accounting to operations, ISARVA ERP brings all your business functions together in a single system.'}
          </p>
        </div>

        {/* Product Cards Grid with interface preview images */}
        <div className={getProductsGridClass(products?.length || 5)}>
          {products?.map((product, idx) => {
            const style = getProductStyles(product.themeClass, product.id);
            const colClass = getProductItemColClass(products?.length || 5, idx);
            const href = getProductHref(product);
            const imageUrl = getImageUrl(product.image, style.fallbackImage);
            const description = product.description || DEFAULT_DESCRIPTIONS[product.id] || product.subtitle;
            const cardDelay = (idx % 4) * 100 + 100;

            const cardInner = (
              <>
                <div>
                  {/* Card Top Row: Icon on left, Title in middle, Arrow on top-right */}
                  <div className="flex items-start justify-between gap-2 mb-3.5 sm:mb-4 h-[46px] sm:h-[50px]">
                    <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${style.iconBg} text-white flex items-center justify-center shrink-0 shadow-xs`}>
                        {getProductIcon(product.iconName, product.id)}
                      </div>
                      <h3 className="min-w-0 flex-1 leading-snug">
                        {formatCardTitle(product.title)}
                      </h3>
                    </div>
                    <div className="text-[#2563eb] shrink-0 pt-0.5 sm:pt-1 pl-1 group-hover:translate-x-1 transition-transform duration-200">
                      <ArrowRight size={17} strokeWidth={2.4} />
                    </div>
                  </div>

                  {/* Photorealistic Product Interface Image Showcase */}
                  <div className="relative mb-3.5 sm:mb-4 rounded-xl overflow-hidden border border-slate-100/90 shadow-2xs aspect-[16/10] bg-slate-100 group/img w-full">
                    <img
                      src={imageUrl}
                      alt={`${product.title} Interface Preview`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                      loading="lazy"
                      onError={(e) => {
                        if (style.fallbackImage && e.currentTarget.src !== style.fallbackImage) {
                          e.currentTarget.src = style.fallbackImage;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Card Description */}
                <p className="min-h-[3rem] sm:min-h-[3.25rem] flex items-start">
                  {description}
                </p>
              </>
            );

            if (href) {
              return (
                <Link
                  key={product.id}
                  id={product.id}
                  href={href}
                  data-aos="fade-up"
                  data-aos-delay={cardDelay}
                  data-aos-duration="700"
                  className={`card-product group bg-white rounded-2xl border border-slate-200/90 ${style.borderColor} ${style.shadowClass} p-4 sm:p-5 lg:p-3.5 xl:p-4.5 flex flex-col justify-between transition-all duration-200 min-w-0 w-full block ${colClass}`}
                  aria-label={`Explore ${product.title}`}
                >
                  {cardInner}
                </Link>
              );
            }

            return (
              <button
                key={product.id}
                id={product.id}
                type="button"
                onClick={() => onOpenModal && onOpenModal('product', product.title)}
                data-aos="fade-up"
                data-aos-delay={cardDelay}
                data-aos-duration="700"
                className={`card-product group bg-white rounded-2xl border border-slate-200/90 ${style.borderColor} ${style.shadowClass} p-4 sm:p-5 lg:p-3.5 xl:p-4.5 flex flex-col justify-between transition-all duration-200 min-w-0 w-full text-left cursor-pointer ${colClass}`}
                aria-label={`Explore ${product.title}`}
              >
                {cardInner}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
