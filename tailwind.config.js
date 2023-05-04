/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        navbar: '#729873',
        btnbg: '#85cd91',
        btnhover: '#c8f9d0'
      },
      fontFamily: {
        body: ['Urbanist']
      }
    },
  },
  plugins: [],
}

