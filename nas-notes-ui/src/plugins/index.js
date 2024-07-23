/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import pinia from '@/stores'
import router from '@/router'
import vuetify from "@/plugins/vuetify";


export function registerPlugins(app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
