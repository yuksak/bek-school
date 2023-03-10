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
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
  },
  plugins: [],
}
