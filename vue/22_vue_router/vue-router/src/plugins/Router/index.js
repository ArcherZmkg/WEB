import Vue from 'vue';
import VueRouter from "vue-router";
import About from '../../pages/About.vue';
import Home from '../../pages/Home.vue';
import News from '../../pages/News.vue';
import Message from '../../pages/MessageList.vue';
import Detail from '../../pages/Detail.vue';
const router = new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'detail',
                            component:Detail
                        }
                    ]
                }
            ]
        }
    ]
})

Vue.use(VueRouter);

export default router



