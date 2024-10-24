/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react');

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       primary: '#298D6F',
       secondary: '#4EC29F',
       accent: '#dc8967',
      },

    },
  },
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      light: {
        primary: '#298D6F',
        secondary: '#4EC29F',
        accent: '#dc8967',
      },
      dark: {
        primary: '#298D6F',
        secondary: '#4EC29F',
        accent: '#dc8967',
      },
    },
  })],
}

