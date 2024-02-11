const { env } = process

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@sidebase/nuxt-auth"
  ],

  auth: {
    provider: { type: 'authjs' }
  },


  runtimeConfig: {
    app: {
      secret: env.APP_SECRET
    },

    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET
    }
  }
})