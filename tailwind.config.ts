import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue Scale (Primary)
        background: {
          dark: "#152C42",
          "dark-alt": "#0A1A29",
          light: "#F4F8FB",
          "light-alt": "#F8F6FC",
        },
        primary: {
          DEFAULT: "#466F9D", // Whale Street Blue
          dark: "#2E4C70",
          light: "#A9C5E0",
          lighter: "#DCE9F2",
        },
        accent: {
          DEFAULT: "#3B95D9", // Biolume Blue
          light: "#A9C5E0",
        },
        // Purple Scale (Secondary - AI elements only)
        secondary: {
          DEFAULT: "#523EB2", // Royal Anchor
          dark: "#3E2F66",
          light: "#C6BFE6",
          lighter: "#EBE6F5",
        },
        "accent-purple": {
          DEFAULT: "#8A64FF", // Electric Amethyst
        },
        // Text colors
        text: {
          primary: "#212121", // Light mode text
          dark: "#FFFFFF", // Dark mode text
          muted: "#8390A4",
        },
        // Border color
        border: {
          DEFAULT: "#DCE9F2",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(59, 149, 217, 0.35)",
        "glow-sm": "0 0 30px -10px rgba(59, 149, 217, 0.25)",
        "glow-purple": "0 0 60px -15px rgba(138, 100, 255, 0.35)",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
