/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        "blue": {
          "700": "#3B49DF",
        },
        "gray": {
          "50": "#F5F5F5",
          "70": "#FAFAFA",
          "100": "#F3F3F3",
          "200": "#F1F1F1",
          "300": "#E4E4E4",
          "400": "#F9F9F9",
          // "500": "#A3A3A3",
          "600": "#3D3D3D",
          "700": "#525252",
          "800": "#404040",
          "900": "#171717"
        },
      }
    },
  },
  plugins: [],
}
