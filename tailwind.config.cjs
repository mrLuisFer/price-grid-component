/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ["'Karla'", "system-ui"]
    },
    colors: {
      'brightyellow': 'hsl(71, 73%, 54%)',
      'lightgray': 'hsl(204, 43%, 93%)',
      'grayishblue': 'hsl(218, 22%, 67%)',
      'varCyan': 'hsl(179, 62%, 43%)',
      'white': '#ffffff'
    },
    extend: {},
  },
  plugins: [],
}
