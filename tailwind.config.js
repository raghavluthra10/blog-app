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
      spacing: {
        104: "28rem",
        112: "32rem",
        120: "36rem",
      },
      minWidth: {
        56: "14rem",
        60: "15rem",
        72: "18rem",
      },
    },
  },
  plugins: [],
};
