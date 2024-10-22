import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-red": "#FF6767",
        "main-white": "#F5F8FF",
        "border-gray": "#A1A3AB",
      },
    },
  },
  plugins: [],
};
export default config;
