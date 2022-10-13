import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  head: {
      link: [
          { rel: "preconnect", href: "https://fonts.googleapis.com" },
          { rel: "preconnect", href:"https://fonts.gstatic.com"},
          { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=UnifrakturCook&display=swap" } 
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
