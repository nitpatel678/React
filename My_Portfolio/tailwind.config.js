/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // Custom Color Theme
      violetBlue: {
        50: '#E5E6F6',
        100: '#B8B9E1',
        200: '#8A8BDC',
        300: '#5C5FC7',
        400: '#3F40B4',
        500: '#2D2F9F', // Primary violet blue
        600: '#232683',
        700: '#191D67',
        800: '#10134C',
        900: '#080A32',
      },
      pink: {
        50: '#F9E3F6',
        100: '#F1B7E3',
        200: '#E88DCE',
        300: '#E062B8',
        400: '#D738A3',
        500: '#D10D8D', // Primary pink
        600: '#A40874',
        700: '#77075A',
        800: '#4C063F',
        900: '#210623',
      },
      white: '#FFFFFF',
      black: '#000000',
      // Additional Colors
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Poppins"', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
    },
  },
  plugins: [],
};
