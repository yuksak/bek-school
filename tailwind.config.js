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
        dark: {
          light: '#797C80',
          DEFAULT: '#232626',
          deep: '#0E0E0E',
        },
        light: '#FFFFFF',
        yellow: '#FED363',
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
