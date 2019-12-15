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

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App)
}).$mount('#app')
