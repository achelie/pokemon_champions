import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        mist: "#f5f7fb",
        line: "#dfe5ef",
        champion: {
          red: "#d7263d",
          blue: "#2563eb",
          yellow: "#f5b700",
          green: "#16a34a",
          navy: "#172033"
        }
      },
      boxShadow: {
        soft: "0 14px 34px rgba(23, 32, 51, 0.08)"
      },
      fontFamily: {
        geist: ["Geist", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
