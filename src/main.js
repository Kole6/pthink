import './assets/style/reset.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/element.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import global from './common/global/global'
import ElementUI from 'element-ui'

Vue.prototype.$Global = global
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')