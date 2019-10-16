import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$url = 'https://127.0.0.1:3001'

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
