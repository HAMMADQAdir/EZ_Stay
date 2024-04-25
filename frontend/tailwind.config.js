/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'my': "url('./images/ezstay.jpg')",
    },},
  },
  plugins: [],
}