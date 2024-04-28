/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        evilBlack: "#0c0c0c",
        ironBlue: "#047889",
        lightGray: "#faf5fb",
        darkGray: "#acacad",
      },
    },
  },
  plugins: [],
};
