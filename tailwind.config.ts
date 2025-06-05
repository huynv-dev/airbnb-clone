import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  options: {
    safelist: [
      /^typography-/,
      /^typography-title-/,
      /^typography-text-/,
    ],
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        muted: "#f5f5f5",

        default: {
          DEFAULT: '#6b7280', // gray-500
          hover: '#4b5563',   // gray-600
          bg: '#f3f4f6',      // gray-100
          border: '#d1d5db',  // gray-300
        },
        blue: {
          500: "#3B82F6",
          600: "#2563EB",
          50: "#EFF6FF",
        },
        red: {
          500: "#EF4444",
          600: "#DC2626",
          50: "#FEE2E2",
        },
        green: {
          500: "#22C55E",
          600: "#16A34A",
          50: "#ECFDF5",
        },
        purple: {
          500: "#A855F7",
          600: "#9333EA",
          50: "#F5F3FF",
        },
        black: "#000000",
        "black-muted": "#111111",
        "black-hover": "#1f1f1f",
        gray: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          500: "#6b7280",
          900: "#111827",
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #e61e4d, #e31c5f, #d70466)',
      },
      fontFamily: {
        sans: [
          '"Airbnb Cereal VF"',
          "Circular",
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        base: "var(--radius-base)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      willChange: {
        transform: 'transform',
      },
    },
  },
  plugins: [],
} satisfies Config;
