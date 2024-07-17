/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        gethsemaneBlack: "#000",
        gethsemaneRed: "#ED2A6C",
        gethsemaneRoyalBlue: "#4169E1",
      },
      backgroundColor: {
        gethsemaneBlack: "#000",
        gethsemaneRed: "#ED2A6C",
        gethsemaneRoyalBlue: "#4169E1",
      },
      borderColor: {
        gethsemaneBlack: "#000",
        gethsemaneRed: "#ED2A6C",
        gethsemaneRoyalBlue: "#4169E1",
      },
      animation: {
        spin: "spin 9s linear infinite",
      },
      fontFamily: {
        usual: "Usual",
        matter: "Matter",
      },
    },
  },
  plugins: [],
};
