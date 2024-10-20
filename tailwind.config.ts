import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          50: 'var(--colour-grey-50)',
          100: 'var(--colour-grey-100)',
          200: 'var(--colour-grey-200)',
          300: 'var(--colour-grey-300)',
          400: 'var(--colour-grey-400)',
          500: 'var(--colour-grey-500)',
          600: 'var(--colour-grey-600)',
          700: 'var(--colour-grey-700)',
          800: 'var(--colour-grey-800)',
          900: 'var(--colour-grey-900)',
          950: 'var(--colour-grey-950)'
        },
        primary: {
          100: '#5c27ce'
        }
      }
    },
  },
  plugins: [],
} satisfies Config
