/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

let vue = new Vue({
  el: '#app',
  render: h => h(App),
  router
})
