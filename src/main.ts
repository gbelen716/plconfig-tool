import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import mixin from './mixin/css.style.inject.mixin';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mixins: [mixin],
  render: h => h(App)
}).$mount('#app')
