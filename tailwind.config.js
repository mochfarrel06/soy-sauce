/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      screens: {
        '2xl': '1320px',
      },
      colors: {
        primary: '#00782B',
        secondary: '#013012',
        yellow: '#C6FF25',
        gray: '#EFEFEF',
      },
    },
  },
  plugins: [],
};
