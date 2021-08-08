const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  /**
   * @todo purge messes up some stuff with the gradient borders
   */
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      rotate: {
        270: "270deg",
        360: "360deg",
      },
      gridTemplateRows: {
        main: "auto 1fr auto",
      },
      borderWidth: {
        6: "6px",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
