/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f5',
          100: '#e3e7e0',
          200: '#c8d1c3',
          300: '#a7b5a0',
          400: '#87967f',
          500: '#6b7a64',
          600: '#56624f',
          700: '#444d3f',
          800: '#1c3423',
          900: '#2c312a',
        },
        earth: {
          50: '#f9f7f4',
          100: '#e8e1d8',
          200: '#d4c5b5',
          300: '#bda48d',
          400: '#a68468',
          500: '#8b6b52',
          600: '#715647',
          700: '#5a453a',
          800: '#473731',
          900: '#392d29',
        },
      },
    },
  },
  plugins: [],
};