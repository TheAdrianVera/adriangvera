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
        mycolors: {
          yellow: '#e0ca3c ',
          orange: '#f17300 ',
          sagegreen: '#457353',
          periwinkle: '#b7c0ee',
          white: '#FFF',
          black: '#000',
          darkblack: '#0a0a0a',
        } 
      },
    },
  },
  plugins: [],
} satisfies Config;
