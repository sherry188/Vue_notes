// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueCookies from 'vue-cookies'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000,
  baseURL: '/api' // 接口请求地址
})
Vue.use(VueCookies)
Vue.prototype.$http = instance
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
