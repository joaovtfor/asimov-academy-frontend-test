import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B9FF66',
        },
        secondary: {
          DEFAULT: '#191A23',
        },
        tertiary: {
          DEFAULT: '#F3F3F3',
        },
        // Atribuições diretas para manter o código DRY e semântico
        dark: '#191A23',
        light: '#F3F3F3',
      },
      fontFamily: {
        sans: ['var(--font-positivus)', 'Positivus', 'sans-serif'],
        positivus: ['var(--font-positivus)', 'Positivus', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        '13': '13px',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
