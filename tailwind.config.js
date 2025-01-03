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
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s linear",
        "loading-spin": "spin 1s linear infinite",
      },
      colors: {
        primary: "#000000",
        border: "#ffffff",
        borderDark: "#ededed",
        oaklandsUIBlack: "rgba(0,0,0,0.93)",
        tooltip: "rgba(43,43,43,0.95)",
      },
    },
  },
  plugins: [],
};
