module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        Background: "#fffffe",
        Headline: "#094067",
        Paragraph: "#5f6c7b",
        Button: "#3da9fc",
        ButtonText: "#fffffe",
        Stroke: "#094067",
        Main: "#fffffe",
        Hightlight: "#3da9fc",
        Secondary: "#90b4ce",
        Tertiary: "#ef4565",
      },
      fontFamily: {
        openSan: ['"Open Sans"', "sans-serif"],
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      transitionProperty: {
        underline: "text-decoration",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
