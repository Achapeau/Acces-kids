/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      fontFamily: {
        text: ["Telescope", "serif"],
        heading: ["Cherry", "serif"],
      },
      extend: {
        colors: {
          pink: "#F094C4",
          yellow: "#F5BC49",
          greenLight: "#B2C84F",
          blue: "#92CCF0",
          greenDark: "#859C39",
          almostWhite: "#E7F2C1",
        },
    },
    plugins: [],
  }
}
