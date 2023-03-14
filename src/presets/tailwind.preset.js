const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px", //1280px
        "2xl": "1536px",
      },
      colors: {
        brand: {
          baseGreen: "#3BB77E",
          lightGreen: "#DEF9EC",
          overlay: "rgba(197, 234, 217, .78)",
          gray: "#ADADAD",
          black: "#253D4E",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        mono: ["'Quicksand'", ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        "hero-image": "url('/src/images/hero-bg-image.png')",
      },
      padding: {
        "105px": "105px",
      },
    },
  },
  plugins: [],
};
