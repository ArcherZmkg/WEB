import Vue from 'vue';

//  完整引入
//  引入element ui 组件库
// import ElementUI from 'element-ui';
//  引入全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button } from 'element-ui';

// Vue.use(ElementUI);

//按需引入
//第一种方式:引入Button，并将其组件名改为<atigui-button>使用
// Vue.component('atigui-button',Button)
//第二种方式
Vue.use(Button);

