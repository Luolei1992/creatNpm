import Vue from 'vue'
import App from './App.vue'
import router from './router'

import byzsll from '../packages/index'
Vue.use(byzsll)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
