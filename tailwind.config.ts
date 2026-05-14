import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Consume CSS variables so Tailwind utilities retint with the theme.
        // The <alpha-value> placeholder enables opacity utilities (e.g. border-primary/20).
        'primary':        'rgb(var(--color-accent-rgb) / <alpha-value>)',
        'primary-dark':   'rgb(var(--color-panel-rgb) / <alpha-value>)',
        'primary-darker': 'rgb(var(--color-bg-rgb) / <alpha-value>)',
      }
    },
  },
  plugins: [],
};
export default config;
