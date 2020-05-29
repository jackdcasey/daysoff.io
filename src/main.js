import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import './assets/css/skeleton/2.0.4/skeleton.css'
import './assets/css/skeleton/2.0.4/normalize.css'
import router from './router'

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
