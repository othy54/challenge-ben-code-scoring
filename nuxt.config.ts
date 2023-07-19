// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f[]=boska@1&display=swap' }]
    }
  }
})
