// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'] ,
        'karla': ["Karla", 'sans-serif'],
        'rubik': ["Rubik", 'sans-serif'],
        'righteous' : ["Righteous",'cursive'],
        'roboto' :["Roboto", 'sans-serif' ]
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}