/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        'DotGothic': ['"DotGothic16"'],
        'Manrope': ['"Manrope"'],
        'firaCode': ['"Fira Code"'],
        
      }
    },
  },
  plugins: [],
}
