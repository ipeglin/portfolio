// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import { themes } from '@/config/vuetify/index'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,
    theme: {
      defaultTheme: 'dark',
      themes
    }
  })
  app.vueApp.use(vuetify)
})
