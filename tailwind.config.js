/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}"],
  theme: {
    extend: {
      colors: {
        primary: "#7d5a4f",
        secondary: "#9b735c",
        earth: "#c29e80",
        cream: "#f3e9dc",
        "aurora-blue": "#58B2DC",
        "aurora-purple": "#A59ACA",
        "aurora-pink": "#F5B2AC",
        "aurora-green": "#A8D8B9",
        "text-base": "#333333",
        "bg-base": "#ffffff",
        "sidebar-bg": "#f5f5f5",
        "border-base": "#dddddd",
        "hover": "#9b735c",
        "active": "#7d5a4f"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        garamond: ["EB Garamond", "serif"]
      },
      typography: (theme) => ({
        stone: {
          css: {
            '--tw-prose-body': theme('colors.text-base'),
            '--tw-prose-headings': theme('colors.primary'),
            '--tw-prose-links': theme('colors.secondary'),
            '--tw-prose-bold': theme('colors.primary'),
            '--tw-prose-quotes': theme('colors.primary'),
            '--tw-prose-quote-borders': theme('colors.secondary'),
            maxWidth: 'none',
            h1: {
              fontFamily: theme('fontFamily.montserrat'),
              fontWeight: '700'
            },
            h2: {
              fontFamily: theme('fontFamily.montserrat'),
              fontWeight: '600'
            },
            h3: {
              fontFamily: theme('fontFamily.montserrat'),
              fontWeight: '600'
            },
            'blockquote p': {
              fontFamily: theme('fontFamily.garamond'),
              fontSize: '1.125rem',
              fontStyle: 'italic'
            }
          }
        }
      })
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
}
