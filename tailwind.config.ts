import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  darkMode: 'class',  // Enable dark mode by adding a "dark" class to elements
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a1a1a', // Add custom colors if necessary
        darkText: '#e0e0e0',
      },
    },
  },
  plugins: [],
});

export default config;
