import type { Config } from "tailwindcss";
import { themer } from "@tailus/themer";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "media",
  safelist: ["isToggled"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: ({ colors }) => ({
      primary: colors.blue,
      secondary: colors.lime,
      accent: colors.pink,
      success: colors.lime,
      danger: colors.red,
      warning: colors.yellow,
      info: colors.blue,
      gray: colors.zinc,
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
    }),
    fontFamily: {
      sans: "var(--font-geist-sans)",
      mono: "var(--font-geist-mono)",
    },
    keyframes: {
      loop: {
        to: {
          "offset-distance": "100%",
        },
      },
    },
  },
  plugins: [
    themer({
      radius: "smoothest",
      background: "lighter",
      border: "light",
      padding: "large",
      components: {
        button: {
          rounded: "2xl",
        },
      },
    }),
  ],
};

export default config;
