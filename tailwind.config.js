/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ikookYellow: "rgba(252, 192, 28, 1)",
      },
      fontFamily:{
        poppins :['Poppins' , 'sans-serif']
      }
    },
  },
  plugins: [],
};

