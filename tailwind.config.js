/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8651F",
        secondary: "#C1272D",
        accent: "#F7B32B",
        dark: "#1a1a1a",
        light: "#f5f5f5",
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        ubuntu: ['Ubuntu-Regular','Ubuntu-Bold','Ubuntu-Medium','Ubuntu-Light', 'sans-serif'],
        asimovian: ['Asimovian-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}