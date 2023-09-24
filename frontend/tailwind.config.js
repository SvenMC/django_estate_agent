/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Inter",
      },
      colors: {
        primary: "#28AAD7",
        primaryHover: "#2397BF",
        secondary: "#E9F6FB",
        secondaryHover: "#E1F3FA",
        tertiary: "#007AA5",
        cardBorder: "#C6EAF5",
      },
    },
  },
  plugins: [],
};
