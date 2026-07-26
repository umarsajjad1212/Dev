// tailwind.config.ts
import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#212121',
        ivory: '#FAF9F6',
        gold: '#D4AF37',
        roseGold: '#B76E79',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config;
