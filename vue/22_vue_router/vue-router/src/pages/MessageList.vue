<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">
                <!-- 跳转路由并携带query参数,to的路径写法和对象写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.val}`"> {{item.val}}</router-link> -->
                <router-link :to="{
                    path:'/home/message/detail',
                    query:{
                        id:item.id,
                        title:item.val
                    }
                }">{{item.val}}</router-link>

                <!-- 跳转路由并携带params参数,to的路径写法和对象写法 -->
                <!-- <router-link to="/home/message/detail/666/title">{{item.val}}</router-link> -->
                <!-- <router-link :to="{
                    name:'Dtl',
                    params:{
                        id:item.id,
                        title:item.val
                    }
                }">{{item.val}}</router-link> -->
                <button @click="pushShow(item)">push查看</button>
                <button @click="replaceShow(item)">replace查看</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name:'MessageList',
    data(){
        return {
            list:[
                {
                    val:'msg1'
                },
                {
                    val:'msg2'
                },
                {
                    val:'msg3'
                }
            ]
        }
    },
    beforeMount(){
        this.list.forEach((e)=>{
            e.id = nanoid();
        
        })
    },
    methods:{
        pushShow(item){
            this.$router.push(
                {
                    path:'/home/message/detail',
                    query:{
                        id:item.id,
                        title:item.val
                    }
                }
            )
            // console.log(this.$router);
        },
        replaceShow(item){
            this.$router.replace(
                {
                    path:'/home/message/detail',
                    query:{
                        id:item.id,
                        title:item.val
                    }
                }
            )
        }
    },
    mounted(){
        console.log('Msg组件被挂载');
    },
    beforeDestroy(){
        console.log('Msg组件被销毁');
    }
}
</script>

<style>

</style>