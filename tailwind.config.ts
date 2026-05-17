import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5F0E8",
        surface: "#FDFAF5",
        "surface-2": "#EDE8DC",
        border: "#DDD8CC",
        "text-primary": "#1A1A1A",
        "text-muted": "#7A7570",
        gold: "#C9A84C",
        "gold-dark": "#A8893A",
        "gold-light": "#E2C97E",
        dark: "#1A1A1A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
