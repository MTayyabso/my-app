import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },  // Start from right side
          '100%': { transform: 'translateX(-100%)' }, // End at left side
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite', // Adjust the speed to your liking
      },

    },
  },
  plugins: [],
} satisfies Config;


