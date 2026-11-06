/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#007a55',
          600: '#006c4b',
          700: '#005a3e',
          800: '#004731',
          900: '#003324',
          dark: '#0f2922',
        },
        pos: {
          DEFAULT: '#059669',
          light: '#ecfdf5',
          dark: '#047857'
        },
        billsoft: {
          DEFAULT: '#2563eb',
          light: '#eff6ff',
          dark: '#1d4ed8'
        },
        hrms: {
          DEFAULT: '#7c3aed',
          light: '#f5f3ff',
          dark: '#6d28d9'
        },
        crm: {
          DEFAULT: '#ea580c',
          light: '#fff7ed',
          dark: '#c2410c'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        space: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-grotesk)', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.12)',
        'glow-brand': '0 0 25px rgba(0, 122, 85, 0.25)',
        'glow-pos': '0 0 20px rgba(5, 150, 105, 0.2)',
        'glow-billsoft': '0 0 20px rgba(37, 99, 235, 0.2)',
        'glow-hrms': '0 0 20px rgba(124, 58, 237, 0.2)',
        'glow-crm': '0 0 20px rgba(234, 88, 12, 0.2)',
      }
    },
  },
  plugins: [],
};
