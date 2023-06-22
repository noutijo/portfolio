const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "320px",
      md: "1024px",
      lg: "1280px",
      xl: "1536px",
      "2xl": "1920px",
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", "Karla", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        colorPrimary: "#7380ec",
        colorDanger: "#ff7782",
        colorSuccess: "#41f1b6",
        colorWarning: "#ffbb55",
        colorBgLight: "rgba(132, 139, 200, 0.18)",
        colorBg: "#F6F6F6",
        colorWhite: "#FFFFFF",
        colorText: "#363949",
        colorTextVariant: "#677483",
        colorDark: "#000000",
        colorDarkVariant: "#A3BDCC",
        colorTransparent: "transparent",
        //dark variant colors
        colorBg_DM: "#000000",
        colorWhite_DM: "#120e19",
        colorText_DM: "hsl(252, 30%, 95%)",
      },
      boxShadow: ({ theme }) => ({
        // inspired by https://www.joshwcomeau.com/shadow-palette/
        glass: `
          inset 0.25px 1px 0 0 ${theme("colors.rose.200 / 3%")},
          0px 0.3px 0.3px rgba(3, 2, 2, 0.02),
          0px 2.2px 2.5px -0.4px rgba(3, 2, 2, 0.02),
          0px 4.3px 4.8px -0.8px rgba(3, 2, 2, 0.02),
          0px 7.5px 8.4px -1.2px rgba(3, 2, 2, 0.02),
          0px 12.8px 14.4px -1.7px rgba(3, 2, 2, 0.02),
          0px 21px 23.6px -2.1px rgba(3, 2, 2, 0.02),
          0px 33.2px 37.4px -2.5px rgba(3, 2, 2, 0.02)`,
      }),
    },
  },
  plugins: [],
};
