
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import App from './App'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,                  //键与值一样 只需要写一个
  components: { App },
  template: '<App/>'
})
