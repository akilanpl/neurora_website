import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#050505",
        cloud: "#f5f5f7",
        graphite: "#1d1d1f",
        neurora: { blue: "#0a84ff", cyan: "#64d2ff", violet: "#7d7aff" },
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0,0,0,0.10)",
        glow: "0 0 80px rgba(10,132,255,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
