/* eslint-disable no-undef */
// const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        toolmine: {

          "primary": "#dc2626",

          "secondary": "#ea580c",

          "accent": "#111827",

          "neutral": "#1A252D",

          "base-100": "#9ca3af",

          "info": "#3ABFF8",

          "success": "#16a34a",

          "warning": "#FBBD23",

          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

