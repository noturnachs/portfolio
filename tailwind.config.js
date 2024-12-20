/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        surface: "#1E1E1E",
        primary: {
          DEFAULT: "#6366F1",
          dark: "#4F46E5",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#9CA3AF",
        },
      },
    },
  },
  plugins: [],
};
