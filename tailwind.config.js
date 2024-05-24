/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    center: true,
    screens: {
      sm: "500px",
      md: "700px",
      lg: "800px",
      xl: "960px",
      "2xl": "1100px",
    },
    extend: {
      
      colors: {
        footbg: "#1a252f",
        infobg: "#2c3e50",
        homebg : "#1abc9c"
      }
    },
  },
  plugins: [],
};
