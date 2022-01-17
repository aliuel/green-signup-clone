module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#F2F2F2',
        'weak-green': '#496766',
        'custom-green': '#133A38'
      },
      screens: {
        'large': '900px'
      }
    },
  },
  plugins: [],
}
