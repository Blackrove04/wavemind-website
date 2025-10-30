/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",   // Indigo Blue (brand color)
        secondary: "#9333EA", // Purple accent
        accent: "#3B82F6",    // Light blue
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // clean modern font
      },
    },
  },
  plugins: [],
};
