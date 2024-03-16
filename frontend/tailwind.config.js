/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xss': '0.60rem',
      },
      colors: {
        'uol-header': '#333333',
        'uol-btn': '#FF8000',
      },
    },
  },
  plugins: [],
}

