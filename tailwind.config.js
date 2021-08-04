const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: [],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter',  ...defaultTheme.fontFamily.sans]
      },
      rotate: {
        '270': '270deg',
        '360': '360deg',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
