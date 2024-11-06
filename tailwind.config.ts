import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        primary: " 0 0 25px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "ping-slow": "ping 1.5s linear infinite",
      },
    },
    colors: {
      white: "#ffffff",
      red: "#f75255",
      blue: "#0000FF",
      orange: "#ff7f7f",
      "hovered-text-color": "var(--hovered-text-color)",
    },
  },
  plugins: [],
  darkMode: "selector",
};
export default config;