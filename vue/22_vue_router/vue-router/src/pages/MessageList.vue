<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">
                <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.val}`"> {{item.val}}</router-link> -->
                <router-link :to="{
                    path:'/home/message/detail',
                    query:{
                        id:item.id,
                        title:item.val
                    }
                }">{{item.val}}</router-link>
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
    mounted(){
        this.list.forEach((e)=>{
            e.id = nanoid();
        
        })
    }
}
</script>

<style>

</style>