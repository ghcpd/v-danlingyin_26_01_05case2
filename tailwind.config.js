/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      colors: {
        aurora: {
          50: '#f2f7ff',
          100: '#e6f0ff',
          200: '#c7dfff',
          300: '#98c5ff',
          400: '#6daaff',
          500: '#3f8cff',
          600: '#1d6cf2',
          700: '#1456cc',
          800: '#1247a6',
          900: '#113d85'
        },
      },
    },
  },
  plugins: [],
};
