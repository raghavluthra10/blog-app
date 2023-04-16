/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "450px",
        largeMobile: "570px",
        tab: "750px",
      },
      spacing: {
        104: "28rem",
        112: "32rem",
        120: "36rem",
        128: "40rem",
        136: "44rem",
      },
      minWidth: {
        56: "14rem",
        60: "15rem",
        72: "18rem",
        80: "20rem",
        88: "24rem",
        96: "32rem",
        104: "36rem",
        112: "40rem",
        120: "44rem",
      },
    },
  },
  plugins: [],
};
