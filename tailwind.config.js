/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yekanbakh: ["yekanbakh"],
      },
      colors: {
        'primary': "#1e40af",
        'secondary': "#7dd3fc",
        'secondary2': "#38bdf8",
      },
    },
  },
  plugins: [],
};
