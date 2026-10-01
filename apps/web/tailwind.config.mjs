/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#39FF14', // Fluorescent Green
        ink: '#0B0D0C',
        background: '#F7F1E3', // Warm editorial background
        dark: '#101210',
        surface: '#FFFFFF',
        muted: '#6B706D',
        border: '#D9DDD8',
        brand: {
          green: '#39FF14',
          ink: '#0B0D0C',
          bg: '#F7F1E3',
          dark: '#101210',
          surface: '#FFFFFF',
          muted: '#6B706D',
          border: '#D9DDD8',
        },
      },
      fontFamily: {
        display: ['"Anton"', '"Arial Narrow"', 'sans-serif'],
        sans: ['"Sora"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Geist Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
      },
      maxWidth: {
        container: '1200px',
        reading: '760px',
      },
      transitionTimingFunction: {
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
