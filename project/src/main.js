// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
//import VueRouter from 'vue-router'
import App from './App'
//import Home from './components/HelloFromVux'
import router from './router'
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false
require('./style/base.less');

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  template: '<App/>',
  components: { App }
})
