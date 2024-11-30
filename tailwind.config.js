/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Dark mode enabled via class
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'), // DaisyUI plugin
  ],
  daisyui: {
    themes: ["light", "dark"], // Enable both light and dark themes
  },
}
