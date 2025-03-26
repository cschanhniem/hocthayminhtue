/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}"],
  theme: {
    extend: {
      colors: {
        primary: "#7b5e57",
        secondary: "#a87c4f",
        "text-base": "#333333",
        "bg-base": "#ffffff",
        "sidebar-bg": "#f5f5f5",
        "border-base": "#dddddd",
        "active": "#6b4226",
        "hover": "#8a674a"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
}
