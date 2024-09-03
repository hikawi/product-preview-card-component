/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{svelte,js,ts}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
      fontSize: {
        paragraph: "0.875rem", // 14px
        double: "2rem", // 32px
      },
      colors: {
        "darker-cyan": "hsl(158, 42%, 18%)",
        "dark-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
      backgroundSize: {
        "double-x": "200% 100%",
      },
    },
  },
  plugins: [],
};
