/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors:{
        "primary": "#2b5876",
        "primary-alt": "#4e4376",
        
        "grad-1": "#4e4376",
        "grad-2": "#2b5876"
      }
    },
    
  },
  plugins: [],
}