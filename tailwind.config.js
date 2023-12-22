/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-background': "url('/public/images/background-pattern-desktop.svg')",
        'mobile-background': "url('/public/images/background-pattern-mobile.svg')"
      }
    },
  },
  plugins: [],
}
