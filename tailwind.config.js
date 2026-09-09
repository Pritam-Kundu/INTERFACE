/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: '#12121a',
        primary: '#f3f4f6',
        secondary: '#9ca3af',
        accent: '#06b6d4',
        border: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        editorial: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
