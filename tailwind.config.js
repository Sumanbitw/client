/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust this to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        border: "#E5E7EB", // Change this to your desired border color
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
