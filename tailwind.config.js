const autoprefixer = require("autoprefixer");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      dark: {
        100: "#2c2e36",
        200: "#242424",
      },
      light: {
        100: "#e8e9ed",
      },
      green: "#53944a",
      red: "#ad3434",
    },
    extend: {
      FontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("autoprefixer"), autoprefixer],
};
