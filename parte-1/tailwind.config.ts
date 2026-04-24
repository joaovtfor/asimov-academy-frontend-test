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
        // Exemplo de mapeamento para evitar valores arbitrários como w-[13px]
        // Caso haja necessidades de pixel perfect que fujam da escala padrão:
        '13': '13px',
      },
    },
  },
  plugins: [],
};

export default config;
