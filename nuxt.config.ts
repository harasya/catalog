// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: true,
  css: ['~/assets/css/style.scss'],
  postcss: {
    plugins: {
      'postcss-nested': {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    apiBaseUrl               : '',
  },
})
