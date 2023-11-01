import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      blue: "#68C6E8",
      white: "#FFFFFF",
      black: "#111",
      gray: "#808080",
      error: "#e88268",
    },
  },
  plugins: [],
};
export default config;
