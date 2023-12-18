// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
  colorMode: {
    preference: 'dark'
  },
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ],
    ['@nuxt/content', {}],
    ['nuxt-icon', {}],
    ['@nuxt/ui', {}],
    ['@nuxt/image', {}],
    ['@vueuse/nuxt', {}]
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  content: {
    experimental: {
      search: {
        indexed: true,
        options: {
          // 在这里提供其他选项的默认值
          fields: ['title', 'description', 'body']
        }
      }
    },
    highlight: {
      theme: 'github-dark',
      preload: ['javascript', 'typescript', 'vue', 'vue-html', 'jsx']
    }
  }
})
