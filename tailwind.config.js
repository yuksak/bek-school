/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: { gilroy: ['Gilroy', 'sans-serif'] },
      colors: {
        grey: {
          DEFAULT: '#797C80',
          dark: '#232626',
          darkest: '#0E0E0E',
        },
        light: { DEFAULT: '#FFFFFF', dark: '#F8F8F8' },
        yellow: {
          light: '#FFF9E3',
          DEFAULT: '#FED363',
        },
      },
      screens: {
        lg: '1024px',
        xl: '1142px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}
