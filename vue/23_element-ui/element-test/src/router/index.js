import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '../page/main.vue'

const routes =[
    {
        path:'/',
        component:MainPage
    },

]

const router = new VueRouter({routes})


Vue.use(VueRouter)

export default router