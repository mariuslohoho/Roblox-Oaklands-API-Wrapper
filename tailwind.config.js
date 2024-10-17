/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      light: 75,
      normal: 100,
      medium: 115,
      semibold: 135,
      bold: 150,
      extrabold: 175,
      black: 200,
    },
    extend: {},
  },
  plugins: [],
};
