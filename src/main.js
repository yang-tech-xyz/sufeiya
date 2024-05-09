import Vue from 'vue'
import App from './App.vue'
import qs from 'qs'
import 'amfe-flexible'
import router from './router'
import store from './store'
import axios from '@/request/http'
import api from '@/request/api'
import i18n from '@/i18n/i18n'
import Es6Promise from 'es6-promise'
import './const/bridge'
import 'babel-polyfill'

import { goTo, goRep, goBack, goResolve } from '@/const/common.js'
import {
  copySubmit,
  interceptFn,
  noTipFn,
  roundingFn,
  numberOnlyFn,
  interceptFn2,
  scientificToNumber
} from '@/util/filters'
import * as echarts from "echarts";
import 'echarts-liquidfill'
Vue.prototype.$echarts = echarts;
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import inc_loader from './components/inc_loader'
import inc_footer_bar from './components/inc_footer_bar'
import inc_footer from './components/inc_footer'
import inc_menu from './components/inc_menu'
import inc_pager from './components/inc_pager'
import inc_load_more from './components/inc_load_more'
import inc_preloader from './components/inc_preloader'
Vue.component('inc_loader', inc_loader)
Vue.component('inc_footer_bar', inc_footer_bar)
Vue.component('inc_footer', inc_footer)
Vue.component('inc_menu', inc_menu)
Vue.component('inc_pager', inc_pager)
Vue.component('inc_load_more', inc_load_more)
Vue.component('inc_preloader', inc_preloader)
import list from './components/list.vue'
Vue.component('list', list)

Vue.prototype.goTo = goTo
Vue.prototype.copySubmit = copySubmit
Vue.prototype.interceptFn = interceptFn
Vue.prototype.noTipFn = noTipFn
Vue.prototype.roundingFn = roundingFn
Vue.prototype.numberOnlyFn = numberOnlyFn
Vue.prototype.interceptFn2 = interceptFn2
Vue.prototype.scientificToNumber = scientificToNumber

Vue.prototype.goRep = goRep
Vue.prototype.qs = qs
Vue.prototype.goBack = goBack
Vue.prototype.goResolve = goResolve
Vue.prototype.api = api
Vue.config.productionTip = false
Vue.prototype.axios = axios

require('es6-promise').polyfill()
Es6Promise.polyfill()
router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0

  document.documentElement.scrollTop = 0

  window.pageYOffset = 0

  next()
})

window.vm =new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
