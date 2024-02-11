/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        BRAND_LIGHT: '#00B37E',
        BRAND_MID: '#00875F',
      },
    },
  },
  plugins: [],
}
