/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        hindi:['Hind Siliguri'],
        lora:['Lora']
      },
      colors:{
        cream:"#F4FFF8",
       silver:"#CCCCCC",
       pictonBlue:"#00AFF5"
      },
      backgroundColor:{
        raisinBlack:"#1C1A23",
        antiFlash:"#E7E9EE",
        night:"#0A090C",
    scaryBlack:"#373A43"
      }
    },
  },
  plugins: [],
}