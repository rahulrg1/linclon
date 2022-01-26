const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '298px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
  darkMode: "class",
  important: true,
};
