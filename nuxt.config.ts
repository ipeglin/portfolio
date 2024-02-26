// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  ssr: true,
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  imports: {
    dirs: ['stores'],
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  css: ['vuetify/styles', '@/assets/scss/main.scss'],
  vite: {
    define: {
      'process.env.DEBUG': false
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    ssr: { // if ssr enabled in future, this config is required to load vuetify properly
      noExternal: ['vuetify']
    }
  },
  devtools: { enabled: true }
})
