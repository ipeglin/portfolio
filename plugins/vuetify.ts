// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import { themes, defaults } from '@/config/vuetify/index'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,
    theme: {
      defaultTheme: 'dark',
      themes,
    },
    defaults,
    components,
    directives,
    // icons: {
    //   defaultSet: 'mdi',
    //   aliases,
    //   sets: {
    //     mdi
    //   }
    // }
  })
  app.vueApp.use(vuetify)
})
