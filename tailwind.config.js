const { Weight } = require('lucide-react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      Weight: {
        weightPrimary: "font-medium", //500
        weightSecondary: "font-semibold", //600
        weightTertiary: "font-light", //300
      },
      size: {
        sizePrimary: "text-sm", //14px
        sizeSecondary: "text-base", //16px
        sizeTertiary: "text-[28px]", //28px
      },
      colors: {
        app_primary: "#675DFF",
        app_second: "#414552",
        app_third: "#FFFFFF",
        app_fourth: "#FBFBFB",
        app_fifth: "#9F9F9F",
        app_sixth: "#004488",
        app_seventh: "#FF7A01",
        app_twelfth: "#15BE53",
      },
      fontFamily: {
        system: ["BlinkMacSystemFont"],
      },
    },
  },
  plugins: [],
};
