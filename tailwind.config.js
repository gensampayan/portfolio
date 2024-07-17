/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#E4E4DF",
        secondaryBg: "#BFBFB1",
        versatile:"#131311",
        secondaryType: "#7E766C",
        tertiaryType: "#6b645c"
      },
    }
  },
  plugins: []
};
