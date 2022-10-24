import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  head: {
      link: [
          { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=UnifrakturCook&display=swap" },
          { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
          { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
          { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      ],
  },
	build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: [
    "~/assets/css/tailwind.css"
  ],
})
