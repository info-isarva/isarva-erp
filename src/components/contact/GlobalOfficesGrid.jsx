'use client';

import React from 'react';

const OFFICES = [
  {
    name: 'Mangalore',
    address: 'Bajpe , Mangalore, India',
    mapEmbed: 'https://maps.google.com/maps?q=Bajpe,Mangalore,India&t=&z=13&ie=UTF8&iwloc=&output=embed',
  },
  {
    name: 'Bangalore',
    address: 'Bangalore, India',
    mapEmbed: 'https://maps.google.com/maps?q=Bangalore,India&t=&z=12&ie=UTF8&iwloc=&output=embed',
  },
  {
    name: 'Dubai',
    address: 'Dubai, UAE',
    mapEmbed: 'https://maps.google.com/maps?q=Dubai,UAE&t=&z=12&ie=UTF8&iwloc=&output=embed',
  },
  {
    name: 'UK',
    address: 'United Kingdom',
    mapEmbed: 'https://maps.google.com/maps?q=London,UK&t=&z=11&ie=UTF8&iwloc=&output=embed',
  },
];

export default function GlobalOfficesGrid() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-green opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-6 capitalize">Our Offices</h2>
          <p className="max-w-3xl mx-auto">We have offices around the world to serve you better</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OFFICES.map((office, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl card-shadow-emerald transition-all duration-300 group relative"
            >
              <div className="relative h-48 overflow-hidden">
                <iframe
                  src={office.mapEmbed}
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-60 grayscale-[30%] brightness-110"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${office.name}`}
                />
                <div className="absolute inset-0 bg-white/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-emerald-500 group-hover:scale-110 transition-transform duration-300 z-10">
                  <svg className="w-10 h-10 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                  <div className="text-center">
                    <h3 className="drop-shadow-sm">{office.name}</h3>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="leading-relaxed text-center">{office.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
