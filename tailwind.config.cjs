/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "main-font": ["Montserrat"],
        expertise: ["Arial", "sans-serif"],
      },
      colors: {
        primary: "#0B3D91",
        secondary: "#ebeff3",
        dark_primary: "#1f2937",
        dark_secondary: "#111827",
        text_primary: "#0B3D91",
        text_secondary: "#6c9ff5",
      },
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-7%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(7%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromBottom: {
          "0%": { transform: "translateY(7%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInFromTop: {
          "0%": { transform: "translateY(-7%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 1s ease-out forwards",
        slideInFromRight: "slideInFromRight 1s ease-out forwards",
        slideInFromBottom: "slideInFromBottom 1s ease-out forwards",
        slideInFromTop: "slideInFromTop 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
