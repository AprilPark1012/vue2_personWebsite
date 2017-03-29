import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import VueTouch from 'vue-touch'

import VueAnimatedList from 'vue-animated-list'
import zepto from 'webpack-zepto'
import fastclick from 'fastclick'
import VueLazyload from 'vue-Lazyload'

/*import routerMap from './route-ownConfig'*/

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


import store from 'store'
//import routerMap from './route-config.js'
import filters from './filters'
//import serviceWorker from "../serviceWorker.js"

import routes from './routes'
/*
import Element from 'element-ui'

Vue.use(Element)
*/


Vue.use(Vuex)
Vue.use(VueRouter)


import { Swipe, SwipeItem, Search } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Search.name, Search);


/*import VueResource from 'vue-resource'

Vue.use(VueResource)*/


Vue.use(VueLazyload, {
  /*error: './error.png',
  loading: './loading.gif',*/
  try: 3 // default 1
})

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  linkActiveClass: 'u-link--Active',
  // base: '/app/',
  routes
})


/*routerMap(router)*/

/*sync(store, router)

filters(Vue)

fastclick.attach(document.body)*/

/*const App = Vue.extend(require('./app.vue'))

router.start(App, 'body')*/

const App = Vue.extend(require('./app.vue'))

//import App from "./app"

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})


window.router = router
window.Vue = Vue
window.$ = zepto