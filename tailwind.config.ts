import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { brand: "#d7193f", ink: "#17181d", slatepanel: "#292b34" }, fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] } } },
  plugins: []
};
export default config;
