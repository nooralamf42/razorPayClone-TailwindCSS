/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors : {
        bg: "#02042b",
        bg2: "#181c2e"
      },
      backgroundImage : {
        biggestDiv : "url('https://razorpay.com/build/browser/static/x-dark-bg.0bc3bc00.svg')"
      }
    },
  },
  plugins: [],
}

