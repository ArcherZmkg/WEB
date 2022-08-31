import Vue from 'vue'
import App from './App.vue'

import router from './plugins/Router/index.js'
import  './plugins/Nanoid/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
