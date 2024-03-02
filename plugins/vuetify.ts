// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const myCustomLightTheme = {
    dark: false,
    colors: {
      background: '#F2F2F2',
      surface: '#FFFFFF',
      primary: '#BF2E34',
      'primary-darken-1': '#3700B3',
      secondary: '#2D2C2C',
      'secondary-darken-1': '#018786',
      error: '#E5111E',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  }

  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    }
  })
  app.vueApp.use(vuetify)
})
