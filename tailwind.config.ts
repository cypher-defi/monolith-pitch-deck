import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dashboard color system
        'bg-primary': '#f5f7fa',
        'bg-secondary': '#ffffff',
        'bg-tertiary': '#f8f9fb',
        'bg-card': '#ffffff',
        'text-primary': '#1a202c',
        'text-secondary': '#4a5568',
        'text-tertiary': '#718096',
        'accent-primary': '#4c9aff',
        'accent-secondary': '#00c9a7',
        'accent-warning': '#ffab00',
        'accent-danger': '#ff5630',
        'border': '#e2e8f0',
        'success': '#36b37e',
        'conservative': '#4c9aff',
        'balanced': '#6554c0',
        'aggressive': '#ff5630',

        // Keep legacy for backwards compatibility
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4c9aff",
        secondary: "#6554c0",
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
};
export default config;
