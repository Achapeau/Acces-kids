/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      pink: "#f094c4",
      yellow: "#f5bc49",
      greenLight: "#b2c84f",
      blue: "#92ccf0",
      greenDark: "#859c39",
      almostWhite: "#e7f2c1",
      almostBlack: "#31332B",
    },
    extend: {
      keyframes: {
        slideFromTop: {
          from: {
            transform: "translateY(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        slide: "slideFromTop 1s ",
      },
    },
    fontFamily: {
      text: ["telescope", "serif"],
      heading: ["cherry", "serif"],
    },
  },
  plugins: [require("daisyui")],
};
