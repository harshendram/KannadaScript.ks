module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        display: ["Cal Sans", "SF Pro Display", "system-ui", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Monaco",
          "Consolas",
          "Ubuntu Mono",
          "monospace",
        ],
      },
      colors: {
        primary: {
          900: "#0c0a09", // rich charcoal
          800: "#1c1917", // warm dark gray
          700: "#292524", // coffee brown
          600: "#44403c", // sophisticated brown
          500: "#57534e", // elegant gray
          400: "#78716c", // muted brown
          300: "#a8a29e", // light gray
          200: "#d6d3d1", // cream
          100: "#f5f5f4", // ivory
          50: "#fafaf9", // pearl
        },
        accent: {
          600: "#0891b2", // sophisticated teal
          500: "#06b6d4", // bright cyan
          400: "#22d3ee", // electric blue
          300: "#67e8f9", // light blue
        },
        luxury: {
          gold: "#d4af37",
          platinum: "#e5e4e2",
          bronze: "#cd7f32",
        },
        background: "#0a0a0a", // deep black
        surface: "#111111", // rich black surface
        editorBackground: "#0d1117", // GitHub dark
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "luxury-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
