// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// config
import config from '@/config'
Object.defineProperty(Vue.prototype, '$config', {value: config})

// axios
import Vueaxios from 'vue-axios'
import axios from '@/api'
Vue.use(axios, Vueaxios)
Vue.prototype.axios = axios

// routers
import router from '@/router'

// store 
import store from '@/store'

// element-ui
import { 
Pagination,
Carousel,
CarouselItem
} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  // template: '<App/>',
  // components: {
  // }
}).$mount('#app')
