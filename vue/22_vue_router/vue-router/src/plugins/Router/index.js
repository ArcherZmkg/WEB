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
            component:About,
            // 路由元信息meta：用于供给程序员去配置一些自己需要用到的参数配置项,如访问路由权限参数
            meta:{
                //  是否需要授权
                isAuth:false,
                //  路由标题
                title:'关于'
            }
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{
                title:'主页'
            },
            children:[
                {
                    name:'xiaoxi',
                    path:'news',
                    component:News,
                    meta:{
                        isAuth:true,
                        title:'新闻'
                    },
                    //  独享路由守卫,仅该路由具有的路由守卫，值得注意的是，独享路由守卫只有前置路由守卫没有后置路由守卫
                    // beforeEnter:(to,from,next)=>{
                    //     const token = localStorage.getItem('Name');
                    //     if (token==="Admin"){
                    //         document.title='加强管理员模式';
                    //         console.log('!!',document.title);
                    //         next()
                    //     }
                    // }
                },
                {
                    name:'msg',
                    path:'message',
                    component:Message,
                    meta:{
                        isAuth:true,
                        title:'消息'
                    },
                    children:[
                        {
                            name:'Dtl',
                            // path:'detail/:id/:title',
                            path:'detail',
                            component:Detail,
                            meta:{
                                title:'详情'
                            },
                            //  props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传递给Detail组件
                            // props:{
                            //     a:1,
                            //     b:2
                            // }

                            //  props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            // props:true

                            //  props的第三种写法,值为函数
                            // props($route){
                            //     return {id:$route.query.id,title:$route.query.title}
                            // }
                            //  ES6多重解构赋值
                            props({query:{id,title}}){
                                return {id,title}
                            }

                        }
                    ]
                }
            ]
        }
    ]
})

//全局前置路由守卫------初始化的时候被调用,每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     // console.log('@',to,from);
//     // if (to.path === '/home/news'|| to.path === '/home/message'){
//     if (to.meta.isAuth){    //  判断是否需要授权
//         // console.log(localStorage);
//         if (localStorage.getItem('school')==='high'){
//             next()
//         }
//         else{
//             alert('学校名不对,无权限查看!')
//         }
//     }
//     else{
//         next()
//     }
    
// })

//全局后置路由守卫----初始化的时候被调用,每次路由切换之后被调用
// router.afterEach((to)=>{
//     document.title=to.meta.title || '硅谷系统'
// })


Vue.use(VueRouter);

export default router



