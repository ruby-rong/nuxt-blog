// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    size: '24', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied #c7d2fe
    aliases: {
      nuxt: 'logos:nuxt-icon'
    }
  },
  ui: {
    primary: 'purple',
    gray: 'cool'
  }
})
