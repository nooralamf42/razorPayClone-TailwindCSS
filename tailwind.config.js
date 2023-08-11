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
      },
      animation : {
        scroll : "scroll 25s linear infinite reverse"
      },
      keyframes : {
        scroll : {
          "0%": {
            "transform" : "translateY(-100%)"
          },
          "100%" : {
            "transfrom" : "translateY(0%)"
          }
        }
      }
    },
  },
  plugins: [],
}

