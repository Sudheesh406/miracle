/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#e8ddd0',
          300: '#d9c6b0',
          400: '#c7a888',
          500: '#b8926b',
          600: '#ab8159',
          700: '#8f6a4c',
          800: '#745642',
          900: '#5e4736',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e3e5e8',
          300: '#d2d6da',
          400: '#b8bfc7',
          500: '#9ca4af',
          600: '#828a96',
          700: '#6b737f',
          800: '#575d67',
          900: '#484d55',
        },
        accent: {
          50: '#fdf4f3',
          100: '#fce8e5',
          200: '#f9d5d0',
          300: '#f4b8b0',
          400: '#ed9184',
          500: '#e3715f',
          600: '#d05544',
          700: '#af4435',
          800: '#913c31',
          900: '#78372f',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}