import Vue from 'vue'
import App from './App'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false
Vue.component('App', { components: { App } })
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
