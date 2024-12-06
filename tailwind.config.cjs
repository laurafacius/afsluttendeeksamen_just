/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      wine: "#6E1E3A",
      rose: "#CDA7B2",
      darkgrey: "#2F3642",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        shadowsintolight: ["Shadows Into Light", "sans-serif"],
      },
    },
  },

  plugins: [],
};
