/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fmc-lime': '#8ec63f', // Xanh cốm (from analysis or typical lime, let's use a nice vibrant lime green)
        'fmc-orange': '#f26522', // Cam (vibrant orange for CTA)
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Open Sans Google Font
      },
    },
  },
  plugins: [],
}
