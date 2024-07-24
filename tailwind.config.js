/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "././pages/**/*.{html,js}",
    "././components/**/*.{html,js}",
    "././core/**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  customUtilities: {},
  plugins: ["@tailwindcss/forms"],
};
