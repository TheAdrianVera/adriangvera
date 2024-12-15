import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myColors: {
          yellow: '#e0ca3c ',
          orange: '#f17300 ',
          sagegreen: '#457353',
          periwinkle: '#b7c0ee',
        } 
      },
    },
  },
  plugins: [],
} satisfies Config;
