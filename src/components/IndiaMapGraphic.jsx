'use client';

import React from 'react';
import { Check } from 'lucide-react';

export default function IndiaMapGraphic() {
  return (
    <div className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 select-none">
      {/* 3D Photorealistic Vector India Map with Indian Tricolor */}
      <div className="relative w-28 sm:w-32 lg:w-36 h-auto shrink-0 group">
        <svg
          viewBox="0 0 400 480"
          className="w-full h-auto drop-shadow-xl filter transition-transform duration-300 group-hover:scale-105"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* India Flag Gradient Clip */}
            <linearGradient id="tricolorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF9933" />
              <stop offset="30%" stopColor="#FF9933" />
              <stop offset="38%" stopColor="#FFFFFF" />
              <stop offset="62%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#138808" />
              <stop offset="100%" stopColor="#138808" />
            </linearGradient>

            {/* 3D Emboss & Lighting Filter */}
            <filter id="map3dDepth" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#092019" floodOpacity="0.22" />
              <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.12" />
            </filter>

            {/* Ashoka Chakra Center Navy Radial */}
            <radialGradient id="ashokaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000088" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000088" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* India Boundary Path with 3D Tricolor Fill */}
          <g filter="url(#map3dDepth)">
            {/* Accurate India Geographic Silhouette */}
            <path
              d="M 180,10 
                 C 195,15 210,30 205,45 
                 C 200,60 215,65 230,70 
                 C 245,75 255,85 250,100 
                 C 245,115 260,120 280,125 
                 C 300,130 330,120 350,135 
                 C 365,145 385,155 375,175 
                 C 365,195 340,190 325,200 
                 C 310,210 295,200 280,215 
                 C 265,230 260,250 250,270 
                 C 240,290 235,315 220,340 
                 C 205,365 195,395 185,425 
                 C 175,455 170,470 165,470 
                 C 160,470 155,450 145,420 
                 C 135,390 120,360 110,335 
                 C 100,310 85,285 75,260 
                 C 65,235 55,215 65,195 
                 C 75,175 90,165 95,145 
                 C 100,125 110,110 120,95 
                 C 130,80 145,60 155,40 
                 C 165,20 170,5 180,10 Z"
              fill="url(#tricolorGradient)"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Inner Border Subtle Gloss Contour */}
            <path
              d="M 180,14 
                 C 193,19 207,33 202,46 
                 C 197,59 211,64 225,69 
                 C 239,74 248,83 244,97 
                 C 239,111 253,116 272,121 
                 C 291,126 319,116 338,130 
                 C 352,139 370,149 361,167 
                 C 352,185 329,181 315,190 
                 C 301,199 287,190 273,204 
                 C 259,218 254,236 244,255 
                 C 234,274 229,297 215,320 
                 C 201,343 191,371 181,399 
                 C 172,427 167,441 163,441 
                 C 158,441 154,422 144,395 
                 C 134,367 121,339 111,316 
                 C 102,293 88,270 79,247 
                 C 69,224 60,206 69,188 
                 C 78,170 92,161 97,143 
                 C 101,124 110,111 119,97 
                 C 128,83 142,65 151,46 
                 C 161,27 166,13 175,17 Z"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.2"
            />

            {/* Central 24-Spoke Ashoka Chakra (Navy Blue) */}
            <g transform="translate(182, 230)">
              {/* Chakra Outer Rings */}
              <circle cx="0" cy="0" r="38" fill="none" stroke="#000088" strokeWidth="3" />
              <circle cx="0" cy="0" r="34" fill="none" stroke="#000088" strokeWidth="1" strokeDasharray="2,2" />
              <circle cx="0" cy="0" r="8" fill="#000088" />
              <circle cx="0" cy="0" r="4" fill="#ffffff" />

              {/* 24 Spokes */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = i * 15;
                const rad = (angle * Math.PI) / 180;
                const x2 = 36 * Math.cos(rad);
                const y2 = 36 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1="0"
                    y1="0"
                    x2={x2}
                    y2={y2}
                    stroke="#000088"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                );
              })}
            </g>
          </g>
        </svg>
      </div>

      {/* Clean "GST Compliant India" Seal Badge (Exact to Reference Design) */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Outlined Green Circle with Solid Checkmark */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-[2.5px] border-[#007a55] bg-emerald-50/40 text-[#007a55] flex items-center justify-center shrink-0 shadow-xs">
          <Check size={22} strokeWidth={3.5} />
        </div>

        {/* 3-Line Stacked Typography */}
        <div className="flex flex-col font-heading font-extrabold tracking-tight leading-[1.12]">
          <span className="text-base sm:text-lg text-[#0b1a30]">
            GST
          </span>
          <span className="text-base sm:text-lg text-[#0b1a30]">
            Compliant
          </span>
          <span className="text-base sm:text-lg text-[#007a55]">
            India
          </span>
        </div>
      </div>
    </div>
  );
}

