/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a1fcf0",
          "secondary": "#0bef5b",
          "accent": "#c01ac9",
          "neutral": "#1d1f25",
          "base-100": "#435056",
          "info": "#a1b1e8",
          "success": "#4ad994",
          "warning": "#f0a90f",
          "error": "#ed8978",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}

