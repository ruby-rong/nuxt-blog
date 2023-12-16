// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  loading: '~/components/loading.vue',
  css: ['~/static/main.css'],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ],
    ['@nuxtjs/tailwindcss'],
    ['@nuxtjs/color-mode'],
    ['nuxt-icon'],
    ['@ant-design-vue/nuxt']
  ],
  antd: {
    // Options
  },
  colorMode: {
    classSuffix: ''
  }
})
