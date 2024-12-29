/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Carol Dentist Colors
        'color60': '#f4f1ec', 
        'color30': '#e0701e',
        'color10a':'#231f20',
        'color10b':'#dacaa1',
        // 'color10c':'#3e3358',

      },
      screens: {
        'max1000': {'max': '1000px'},
        'max900': {'max': '900px'},
        'max800': {'max': '800px'},
        'max700': {'max': '700px'},
        'max600': {'max': '600px'},
        'max500': {'max': '500px'},
        'max400': {'max': '400px'},
        'max300': {'max': '300px'},
      }
    },
  },
  plugins: [],
}

