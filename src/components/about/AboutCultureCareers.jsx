'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';

export default function AboutCultureCareers() {
  return (
    <section className="section-padding bg-[#FDF8F2] relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="bg-white rounded-[4rem] p-10 lg:p-20 shadow-2xl border border-[#10b981]/5 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text Area */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <span className="text-[#10b981] font-black tracking-[0.2em] capitalize text-xs sm:text-sm mb-4 inline-block">
              Join our mission
            </span>
            <h2 className="text-[#1a1f24] mb-8 capitalize">
              Shape the future at<br />
              <span className="text-[#10b981]"> Isarva Infotech.</span>
            </h2>
            <p className="text-xl text-[#53606b] mb-10 max-w-2xl font-medium leading-relaxed">
              We’re looking for bold thinkers who believe technology can solve the world's most complex challenges. Explore our open roles and find where you belong.
            </p>
            <Link
              href="/contact"
              prefetch={false}
              className="press-illusion-btn-orange bg-orange-500 text-white w-fit lg:mx-0 mx-auto font-bold px-6 py-2 text-base flex items-center space-x-2"
            >
              <span>View Careers</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 9"
                className="h-2 w-4"
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

          {/* Right Culture Image */}
          <div className="lg:w-2/5 relative lg:block hidden">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-2xl ring-4 ring-white/50">
              <Image
                src="/about_tech_light_v2.png"
                alt="Our Tech Culture"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#10b981] lg:flex hidden rounded-2xl items-center justify-center text-white shadow-2xl transform rotate-12">
              <Briefcase className="w-10 h-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
