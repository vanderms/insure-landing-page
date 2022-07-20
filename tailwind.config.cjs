/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      primary: "var(--primary)",
      "primary-100": "var(--primary-100)",
      secondary: "var(--secondary)",
      "neutral-50": "var(--neutral-50)",
      "neutral-500": "var(--neutral-500)",
      "neutral-800": "var(--neutral-800)",
      "transparent": "transparent"
    },

    screens: {
      sm: "22.5rem",
      md: "45rem",
      xl: "74rem",
    },

    extend: {},
    fontFamily: {
      serif: "'DM Serif Display', serif"
    }
  },
  plugins: [],
}