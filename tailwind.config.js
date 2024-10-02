/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#f9fbfc',
          light: '#c5b4fb',
          default: '#907ad6',
          dark: '#4f518c',
        },
        base: {
          white: '#ffffff',
          black: '#000000',
          navy: '#0E2234',
        },
        service: {
          success: '#31D555',
          successLight: '#e6faea',
          error: '#f52222',
          errorLight: '#f9d2d2',
        },
        tags: {
          javascript: '#ffe02f',
          react: '#61dafb',
          html: '#ff6827',
          css: '#487fff',
        },
      },
    },
  },
  plugins: [],
};
