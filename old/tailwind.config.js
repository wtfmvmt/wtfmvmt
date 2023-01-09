/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      major: ["Major Mono Display", "display"],
      share_tech: ["Share Tech", "monospace"],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],

}