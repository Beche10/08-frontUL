/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {     
      fontFamily: {
        "dm-sans": "'DM Sans', sans-serif",
      },

      colors: {
        "green-color": "#27AE60",
        "gray-color": "#828282",
        "card-color": "#212121",
        "color-background": "#171717",
        "menu-color": "#172554",
        "primary": "#9932CC",
        "secondary": {
          100:"1E1F25",
          900:"#131517"
        }
      },

      backgroundImage:{
        "open-menu": "url('./menu.svg')",
        "close-menu": "url('./close.svg')",
      }


    },
  },
  plugins: [],
};
