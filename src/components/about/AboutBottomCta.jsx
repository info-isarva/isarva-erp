'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutBottomCta() {
  return (
    <section className="section-padding relative bg-[#1a1f24] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/agency_design_process_abstract_1773850147849.png"
          alt="Abstract"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.08] mix-blend-screen"
        />
      </div>

      <div className="site-container text-center relative z-10 section-animate">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white mb-8 capitalize">
            Ready to shape the digital future?
          </h2>
          <p className="text-[clamp(1rem,2vw,1.3rem)] text-[#FDF8F2]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            We simplify complexity through innovation—crafting custom platforms, accelerating cloud adoption, and advancing intelligent automation aligned with your strategic goals.
          </p>
          <div className="flex justify-center items-center">
            <Link
              href="/contact"
              prefetch={false}
              className="press-illusion-btn-orange bg-orange-500 text-white w-fit font-bold px-8 py-3 text-lg flex items-center space-x-3"
            >
              <span>Get In Touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 9"
                className="h-3 w-5"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
