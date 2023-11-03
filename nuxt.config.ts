// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head:{
      title: 'Tooling Studio'
    }
  
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-vue3-google-signin',
    '@pinia/nuxt',
  ],
  runtimeConfig:{
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_SECRET,
    googleRedirectUrl: process.env.GOOGLE_REDIRECT_URL,
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  
})
