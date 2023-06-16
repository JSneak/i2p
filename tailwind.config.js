/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        offWhite: "#F8F8F7",
        offOrange: "#F4AF53",
        offGray: "#A3A2A0",
        offRed: "#BB5E5A",
        offGreen: "#3B484E",
      },
      backgroundImage: {
        rain: "url('./assets/rainy.jpg')",
        sun: "url('./assets/sunny.webp')",
      },
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
