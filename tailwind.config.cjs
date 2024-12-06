/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
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
        ShadowsIntoLight: ["Shadows Into Light", "sans-serif"],
      },
    },
  },

  plugins: [],
};
