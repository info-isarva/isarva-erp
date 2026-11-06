'use client';

import React from 'react';
import Image from 'next/image';
import { TrendingUp, Cpu, Users, Lightbulb, Sparkles } from 'lucide-react';

export default function AboutForefrontStats() {
  return (
    <section className="bg-white overflow-hidden border-y border-[#10b981]/10">
      <div className="flex flex-col lg:flex-row">

        {/* Left Column: Dark Green Stats Bar */}
        <div className="w-full lg:w-[350px] bg-[#16423C] text-white p-8 md:p-16 flex flex-col justify-center items-center lg:items-start space-y-10 md:space-y-16 section-animate">
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-[#10b981]" />
            </div>
            <span className="text-5xl md:text-6xl font-bold mb-2">15+</span>
            <p className="text-[#FDF8F2]/60 text-sm md:text-base tracking-widest capitalize font-bold text-center lg:text-left">
              Years of <br className="hidden md:block" /> Expertise
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-[#10b981]" />
            </div>
            <span className="text-5xl md:text-6xl font-bold mb-2">1,000+</span>
            <p className="text-[#FDF8F2]/60 text-sm md:text-base tracking-widest capitalize font-bold text-center lg:text-left">
              Projects <br className="hidden md:block" /> Delivered
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-[#10b981]" />
            </div>
            <span className="text-5xl md:text-6xl font-bold mb-2">500+</span>
            <p className="text-[#FDF8F2]/60 text-sm md:text-base tracking-widest capitalize font-bold text-center lg:text-left">
              Global <br className="hidden md:block" /> Enterprises
            </p>
          </div>
        </div>

        {/* Right Column: Cream Content Area with Full-Width Image */}
        <div className="flex-1 bg-[#FDF8F2] p-6 md:p-16 lg:p-20 section-animate" style={{ animationDelay: '0.2s' }}>
          <h2 className="lg:text-left text-center text-[#16423C] mb-6 lg:mb-12 max-w-4xl capitalize">
            Standing at the forefront of digital transformation.
          </h2>

          {/* Full Width Image Content */}
          <div className="relative w-full h-[220px] sm:h-[300px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-12 md:mb-16 shadow-2xl ring-4 ring-white/50">
            <Image
              src="/enterprise-transformation-bg.png"
              alt="Digital Excellence"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16423C]/90 via-transparent to-transparent flex items-end p-6 md:p-12">
              <div className="flex flex-col">
                <h3 className="text-white leading-[1]">Crafting the Future of Enterprise Solutions.</h3>
              </div>
            </div>
          </div>

          {/* Clean Feature List (2x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10">
            <div className="flex gap-4 md:gap-6">
              <div className="flex-none w-12 h-12 rounded-xl bg-[#16423C]/5 flex items-center justify-center border border-[#16423C]/10">
                <Users className="w-6 h-6 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-[#16423C] mb-2">User-Centric</h3>
                <p className="text-[#53606b] leading-relaxed">
                  We build with people in mind, ensuring intuitive and impactful experiences that drive engagement and value.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div className="flex-none w-12 h-12 rounded-xl bg-[#16423C]/5 flex items-center justify-center border border-[#16423C]/10">
                <Lightbulb className="w-6 h-6 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-[#16423C] mb-2">Purpose-Driven Innovation</h3>
                <p className="text-[#53606b] leading-relaxed">
                  Innovating with intention and real-world value, we solve complex challenges with smart, adaptive technologies.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div className="flex-none w-12 h-12 rounded-xl bg-[#16423C]/5 flex items-center justify-center border border-[#16423C]/10">
                <TrendingUp className="w-6 h-6 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-[#16423C] mb-2">Growth & Strategy</h3>
                <p className="text-[#53606b] leading-relaxed">
                  Scalable solutions tailored to grow your business faster and smarter, aligning every digital brick with your vision.
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6">
              <div className="flex-none w-12 h-12 rounded-xl bg-[#16423C]/5 flex items-center justify-center border border-[#16423C]/10">
                <Sparkles className="w-6 h-6 text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-[#16423C] mb-2">Digital Clarity</h3>
                <p className="text-[#53606b] leading-relaxed">
                  Stripping away complexity to deliver clean and efficient solutions that provide ultimate clarity and performance.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
