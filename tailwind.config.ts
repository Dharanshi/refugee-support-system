import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey10"', 'sans-serif'],  // Custom Jersey10 font
        Minecraftia: ['"Minecraftia"', 'sans-serif'],  // Custom Jersey10 font
        pixelify: ['"PixelifySans"', 'sans-serif'],  // Custom PixelifySans font
      },
    },
  },
  plugins: [],
};

export default config;
