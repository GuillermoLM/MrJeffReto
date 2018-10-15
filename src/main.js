import Vue from 'vue'
import App from './App.vue'
import '@mrjeffapp/vuejs-camera'
import router from './router'
import Checkout from './components/Checkout'

Vue.config.productionTip = false

Vue.component("Checkout", Checkout);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
