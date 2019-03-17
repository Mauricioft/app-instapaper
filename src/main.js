import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// Sync router with store
import { sync } from 'vuex-router-sync'
// import router from './router'
import router from './router/index'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// Sync store with router
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
