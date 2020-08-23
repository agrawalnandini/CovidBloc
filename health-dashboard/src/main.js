/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import Toasted from 'vue-toasted'
import App from './App.vue'
import router from './router'
import { axiosInstance } from './axios'
import store from './store'
import { saveAs } from 'file-saver'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'

const jsrsa = require('jsrsasign')

Vue.config.productionTip = false
Vue.prototype.$axios = axiosInstance
// this.$axios.defaults.headers.common['Authorization'] = this.$store.getters.authToken;

// creating a prototype using defineProperty will make it readOnly
Object.defineProperty(Vue.prototype, '$saveAs', { value: saveAs })
Object.defineProperty(Vue.prototype, '$crypto', { value: jsrsa })

Vue.use(Toasted)
Vue.use(ArgonDashboard)
export default new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
