/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f1f7ed',
          100: '#e0eec6',
          200: '#c8d1c3',
          300: '#a7b5a0',
          400: '#7ca982',
          500: '#6b7a64',
          600: '#56624f',
          700: '#444d3f',
          800: '#1c3423',
          900: '#243e36',
        },
        earth: {
          50: '#f9f7f4',
          100: '#e8e1d8',
          200: '#d4c5b5',
          300: '#c2a83e',
          400: '#a68468',
          500: '#8b6b52',
          600: '#715647',
          700: '#5a453a',
          800: '#473731',
          900: '#392d29',
        },
        mint: '#f1f7ed',
        slate: '#243e36',
        cambridge: '#7ca982',
        nyanza: '#e0eec6',
        gold: '#c2a83e',
        // New color palette
        // 'dark-purple': '#321325',
        // 'tyrian-purple': '#5f0f40',
        // 'carmine': '#9a031e',
        // 'caramel': '#cb793a',
        // 'mustard': '#fcdc4d'
      },
      // backgroundImage: {
      //   'gradient-sunset': 'linear-gradient(45deg, #321325 0%, #5f0f40 25%, #9a031e 50%, #cb793a 75%, #fcdc4d 100%)',
      //   'gradient-dusk': 'linear-gradient(to right, #321325, #5f0f40, #9a031e)',
      //   'gradient-warm': 'linear-gradient(to right, #9a031e, #cb793a, #fcdc4d)',
      //   'gradient-radial-warm': 'radial-gradient(circle, #fcdc4d, #cb793a, #9a031e)',
      //   'gradient-diagonal': 'linear-gradient(135deg, #321325, #5f0f40, #9a031e, #cb793a, #fcdc4d)',
      //   'gradient-conic': 'conic-gradient(from 45deg, #321325, #5f0f40, #9a031e, #cb793a, #fcdc4d, #321325)'
      // }
    },
  },
  plugins: [],
};