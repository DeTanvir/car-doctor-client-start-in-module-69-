/** @type {import('tailwindcss').Config} */
export default {
  // from tailwind website
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // from DaisyUI
  plugins: [require("daisyui")],
}

