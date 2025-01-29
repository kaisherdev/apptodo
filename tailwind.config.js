/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#d0d0d5',
        secondary:'#1b1b32',
        terciary:'#00471b',
        accent75:'#2a2a40',
        accent50:'#3b3b4f',
      }
    },
  },
  plugins: [],
}

