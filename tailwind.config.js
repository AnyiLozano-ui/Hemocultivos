/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "montserrat-light": ["Montserrat Light", "sans-serif"],
        "montserrat-thin": ["Montserrat Thin", "sans-serif"],
        "montserrat-bold": ["Montserrat Bold", "sans-serif"],
        "montserrat-semibold": ["Montserrat SemiBold", "sans-serif"],
        "montserrat-regular": ["Montserrat Regular", "sans-serif"],
        "montserrat-extrabold": ["Montserrat ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
