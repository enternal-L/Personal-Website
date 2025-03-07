/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'notion-default': '#37352f',
        'notion-hover': '#2eaadc',
        'notion-gray': '#F7F6F3',
      },
    },
  },
  plugins: [],
} 