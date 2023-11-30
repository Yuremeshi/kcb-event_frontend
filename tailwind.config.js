/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wood-pattern': "url('https://cdn2-optimize.wolfgordon.com/wolf-gord/production/product/swatches/cork-339.jpg?w=624&h=624&q=100&fm=jpg&fit=crop&dm=1620749829&s=545656f412c183a742c3cce0f26ffc88')",
        'paper-pattern': "url('https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701302400&semt=ais')"
      },
      fontFamily: {
        "himelody": ['"Hi Melody"', 'sans-serif'],
      }
    }
  },
  plugins: [],
}