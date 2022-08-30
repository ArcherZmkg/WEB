import Vue from 'vue';
import App from './App.vue';
import vueResource from 'vue-source';

//引入store
import store from './store/index'

Vue.config.productionTip = false

Vue.use(vueResource);

const vm=new Vue({
  render: h => h(App),
  store
}).$mount('#app')
