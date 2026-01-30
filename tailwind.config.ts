import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          bg: "#030014",      // Noir Profond
          text: "#FFFFFF",    // Blanc Pur
          cyan: "#00F0FF",    // Cyan Néon
          purple: "#7000FF",  // Violet Plasma
          dark: "#0a0a0a",    // Gris sombre
        },
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        rajdhani: ["var(--font-rajdhani)"],
      },
    },
  },
  plugins: [],
};
export default config;