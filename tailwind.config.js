/* eslint-disable @typescript-eslint/no-var-requires */
const {
  red,
  volcano,
  orange,
  gold,
  yellow,
  lime,
  green,
  cyan,
  blue,
  geekblue,
  purple,
  magenta,
} = require("@ant-design/colors");

module.exports = {
  purge:
    process.env.NODE_ENV === "production"
      ? [
          "./src/pages/**/*.tsx",
          "./src/layout/**/*.tsx",
          "./src/components/**/*.tsx",
        ]
      : [],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      black: "#000000",
      red,
      volcano,
      orange,
      gold,
      yellow,
      lime,
      green,
      cyan,
      blue,
      geekblue,
      purple,
      magenta,
      gray: {
        1: "#fafafa",
        2: "#f5f5f5",
        3: "#f0f0f0",
        4: "#d9d9d9",
        5: "#bfbfbf",
        6: "#8c8c8c",
        7: "#595959",
        8: "#434343",
        9: "#262626",
        10: "#1f1f1f",
        11: "#141414",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
