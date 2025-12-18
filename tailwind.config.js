/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe-noir': '#4C3D19',
        'kombu': '#354024',
        'moss': '#889063',
        'tan': '#CFB899',
        'bone': '#E5D7C4',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}