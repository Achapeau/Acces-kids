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
    keyframes: {
      wave: {
        "0%": { transform: "rotate(0.0deg)" },
        "10%": { transform: "rotate(14deg)" },
        "20%": { transform: "rotate(-8deg)" },
        "30%": { transform: "rotate(14deg)" },
        "40%": { transform: "rotate(-4deg)" },
        "50%": { transform: "rotate(10.0deg)" },
        "60%": { transform: "rotate(0.0deg)" },
        "100%": { transform: "rotate(0.0deg)" },
      },
    },
    animation: {
      "waving-illus": "wave 2s linear infinite",
      "waving-illustra": "wave 2s linear infinite 700ms",
    },
    extend: {
      backgroundImage: {
        "background-modal":
          "url('./src/assets/images/background-acceskids.png')",
      },
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
        goRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0)" },
        },
        goLeft: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(0)" },
        },
        goUp: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-80%)" },
          "100%": { transform: "translateY(0)" },
        },
        goDown: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(80%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slide: "slideFromTop 1s ",
        moveRight: "goRight 3s",
        moveLeft: "goLeft 3s",
        moveUp: "goUp 3s",
        moveDown: "goDown 3s",
      },
    },
    fontFamily: {
      text: ["telescope", "serif"],
      heading: ["cherry", "serif"],
    },
  },
  plugins: [require("daisyui")],
};
