/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: "Montserrat",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      purple: "#a729f8",
      casper: "#aab8cc",
      "dark-grey": "#333333",
      "medium-grey": "#313e51",
      "light-grey": "#3c4d67",
    },
  },
  plugins: [],
};
