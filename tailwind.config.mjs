/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint-green': '#b8d0b8', // Light green background color
        'dark-navy': '#2c3e50', // Dark background for product section
      },
      fontFamily: {
        sans: [ 'var(--font-geist-sans)', 'Arial', 'sans-serif' ],
      },
    },
  },
};

export default config;