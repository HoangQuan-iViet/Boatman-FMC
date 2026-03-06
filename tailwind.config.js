/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fmc-lime': '#8ec63f', // Xanh cốm
        'fmc-lime-light': '#d1e8b2', // 3 parts white, 2 parts fmc-lime calculation
        'fmc-sec-1': '#f1f9e8', // Very light banner green
        'fmc-sec-2': '#e9f5da', // Slightly darker
        'fmc-sec-3': '#e1f0cc', // Slightly darker
        'fmc-sec-4': '#d9ebbf', // Slightly darker
        'fmc-sec-5': '#d1e7b1', // Slightly darker
        'fmc-sec-6': '#c9e2a3', // Slightly darker
        'fmc-sec-7': '#c0de96', // Slightly darker
        'fmc-orange': '#f26522', // Cam
        'fmc-dark': '#1e380f', // Cohesive dark green replacing #111827
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Open Sans Google Font
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
