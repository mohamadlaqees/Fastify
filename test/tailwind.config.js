/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: "#3b82f6",
        tabs: " #A0A0A0",
      },
      height: {
        fix: "70px",
      },

      fontSize: {
        circle: "10px",
      },
    },
  },
  plugins: [],
};
