/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      colors: {
        ecffBrown: "#810102",
        ecffSecondary: "#F3F1E7",
        footerBackgroundColor: "#590000",
        footerBackgroundColorDark: "#450000",
        textblack: "#242829",
        copyrightTextColor: "#D7D7D7",
        testimonyTextColor: "rgba(36, 40, 41, 0.5)",
      },
      height: {
        128: "32rem",
      },
      width: {
        130: "35rem",
      },
    },
  },
  plugins: [],
};
