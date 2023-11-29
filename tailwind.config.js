/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "himelody": ['"Hi Melody"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}