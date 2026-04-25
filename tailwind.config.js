/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#bccfff",
          300: "#8fb0ff",
          400: "#5a86ff",
          500: "#335fff",
          600: "#1f3ff2",
          700: "#1a31d0",
          800: "#1a2da8",
          900: "#1b2c85",
          950: "#141b52",
        },
        ink: {
          50: "#f6f7f9",
          100: "#ebedf2",
          200: "#d2d6e0",
          300: "#aab1c3",
          400: "#7b839c",
          500: "#5a6280",
          600: "#444a66",
          700: "#363b52",
          800: "#1f2338",
          900: "#12152a",
          950: "#0a0c1c",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(51,95,255,0.25), 0 20px 80px -20px rgba(51,95,255,0.45)",
        card: "0 10px 30px -10px rgba(10,12,28,0.35)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(51,95,255,0.25), transparent 60%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
