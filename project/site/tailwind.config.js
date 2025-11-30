import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#6366f1",        // Vibrant indigo
          "secondary": "#ec4899",      // Hot pink
          "accent": "#14b8a6",         // Teal
          "neutral": "#1e293b",        // Slate gray
          "base-100": "#ffffff",       // White
          "base-200": "#f8fafc",       // Very light gray
          "base-300": "#e2e8f0",       // Light gray
          "info": "#3b82f6",           // Blue
          "success": "#10b981",        // Emerald
          "warning": "#f59e0b",        // Amber
          "error": "#ef4444",          // Red
        },
      },
      {
        dark: {
          "primary": "#818cf8",        // Light indigo
          "secondary": "#f472b6",      // Light pink
          "accent": "#2dd4bf",         // Light teal
          "neutral": "#1e293b",        // Slate
          "base-100": "#0f172a",       // Very dark slate
          "base-200": "#1e293b",       // Dark slate
          "base-300": "#334155",       // Medium slate
          "info": "#60a5fa",           // Light blue
          "success": "#34d399",        // Light emerald
          "warning": "#fbbf24",        // Light amber
          "error": "#f87171",          // Light red
        },
      },
    ],
  },
};

export default config;
