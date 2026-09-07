/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fi: {
          purple: {
            DEFAULT: '#5E2BE9',
            50: '#F5F3FF',
            100: '#EDE9FE',
            200: '#DDD6FE',
            300: '#C4B5FD',
            400: '#A78BFA',
            500: '#8B5CF6',
            600: '#5E2BE9',
            700: '#5020D0',
            800: '#3D14A6',
            900: '#260B70',
            950: '#170448',
          },
          dark: {
            bg: '#12002E',
            card: '#1D0647',
            hero1: '#15003A',
            hero2: '#280766',
            hero3: '#441094',
          },
          surface: '#FFFFFF',
          bg: '#F8F9FD',
          text: {
            primary: '#111827',
            secondary: '#6B7280',
            muted: '#9CA3AF',
          },
          border: '#EAEBF0',
          accent: '#00D09C', // 1Fi green accent for savings/ratings
          gold: '#FFB800',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'fi-card': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'fi-card-hover': '0 8px 24px rgba(94, 43, 233, 0.12)',
        'fi-purple': '0 8px 20px rgba(94, 43, 233, 0.35)',
        'fi-sheet': '0 -8px 30px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
