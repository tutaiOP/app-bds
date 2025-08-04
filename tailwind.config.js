/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#F7DE58",
        secondary: "#B27414",
        background: "#F2F2F2",
        text: "#2c2c2c",
        border: "#ccc",
        card: "#F8F8F8",
        notification: "#FF4500",
      },
    },
  },
  plugins: [],
};
