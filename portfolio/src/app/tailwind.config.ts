import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // important for your theme toggle
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // ✅ your app components
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}", // if you ever move components here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
