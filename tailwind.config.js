/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
      backgroundColor: {
        taupe: "#D2CCCC",
        "olive-green": "#172A10",
      },
    },
  },
  plugins: [],
};
