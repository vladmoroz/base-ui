import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-gridline': 'var(--color-gridline)',
        'color-content': 'var(--color-content)',
        'color-link': 'var(--color-link)',
        'color-text-gray': 'var(--color-text-gray)',
      },
      fontFamily: {
        sans: '"Unica 77", system-ui',
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1rem' }],
        sm: ['0.9375rem', { lineHeight: '1.25rem' }],
        base: ['1.0625rem', { lineHeight: '1.5rem' }],
        lg: ['1.1875rem', { lineHeight: '1.75rem' }],
        xl: ['1.3125rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.0125em' }],
        // Unused yet:
        // '3xl': ['1.875rem', { lineHeight: '1.2' }],
        // '4xl': ['2.25rem', { lineHeight: '1.1111' }],
        // '5xl': ['3rem', { lineHeight: '1' }],
        // '6xl': ['3.75rem', { lineHeight: '1' }],
        // '7xl': ['4.5rem', { lineHeight: '1' }],
        // '8xl': ['6rem', { lineHeight: '1' }],
        // '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
} satisfies Config;
