// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  colorMode: {
    preference: 'dark'
  },
  devtools: { enabled: false },
  css: ['~/static/main.css'],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ],
    // ['@nuxtjs/tailwindcss', {}],
    // ['@nuxtjs/color-mode', {}],
    ['nuxt-icon', {}],
    ['@nuxt/ui', {}]
  ]
})
