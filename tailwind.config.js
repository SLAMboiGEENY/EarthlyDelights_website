/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        curv: ["Delicious Handrawn", "cursive"],
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), ('@tailwindcss/typography'), ('flowbite/plugin')],
};

