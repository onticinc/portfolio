module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF', 
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3f3f51',
        'input-border': '#565666',
        'input': '#2A2A35',
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}