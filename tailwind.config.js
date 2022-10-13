/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
     './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(500px)' },
        },
        slideReverse: {
          '0%, 100%': { 'background-position': 'translateY(-500px)' },
          '50%': { 'background-position': 'translateY(0)' },
        }
      },
      animation: {
        slide: 'slide 5s ease-in',
        slideReverse: 'slideReverse 5s ease-in',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}
