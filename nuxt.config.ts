// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  typescript: {
    typeCheck: true
  },
  extends: ['nuxt-umami'],

  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  modules: [
    // [
    //   '@pinia/nuxt',
    //   {
    //     autoImports: ['defineStore']
    //   }
    // ],
    ['@nuxt/content', {}],
    ['nuxt-icon', {}],
    ['@nuxt/ui', {}],
    ['@nuxt/image', {}],
    ['@vueuse/nuxt', {}],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: true,
          Inter: [400, 700],
          'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
          'Crimson Pro': {
            wght: '200..900',
            ital: '200..700'
          },
          Kalam: true
        }
      }
    ],
    '@nuxtjs/supabase'
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
  },
  build: {
    transpile: ['echarts', 'zrender', 'tslib']
  },
  supabase: {
    // Options
    redirect: false,
    redirectOptions: {
      login: '/',
      callback: '/confirm',
      include: undefined,
      exclude: [],
      cookieRedirect: false
    }
  },
  routeRules: {
    '/api': {
      cors: true,
      headers: {
        'access-control-allow-methods': 'GET,HEAD,PATCH,POST,DELETE',
        'access-control-allow-origin': 'http://localhost:3001',
        'access-control-allow-credentials': 'true'
      }
    }
  },

  nitro: {
    static: true,
    prerender: {
      failOnError: false,
      crawlLinks: true,
      concurrency: 12
    }
  }
})
