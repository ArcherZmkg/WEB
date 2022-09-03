<template>
    <div>
        <h3 :style="{opacity}">欢迎学习vue</h3>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{item.val}}
            </li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name:'News',
    data(){
        return {
            list:[
                {
                    val:'news1'
                },
                {
                    val:'news1'
                },
                {
                    val:'news3'
                }
            ],
            opacity:1
        }
    },
    beforemounted(){
        this.list.forEach((e)=>{
            e.id = nanoid();
        
        })
    },
    mounted(){
        // this.timer = setInterval(()=>{
        //     if (this.opacity<=0) {
        //         this.opacity=1;
        //     }
        //     this.opacity-=0.01
        // },16)
        console.log("News组件挂载");
    },
    beforeDestroy(){
        // clearInterval(this.timer);
        console.log('News组件即将被销毁');
    },
    //激活生命周期 路由组件激活时触发
    activated(){
        console.log('News组件被激活了');
        this.timer = setInterval(()=>{
            if (this.opacity<=0) {
                this.opacity=1;
            }
            this.opacity-=0.01
        },16)
    },
    //失活生命周期  路由组件失活时触发
    deactivated(){
        clearInterval(this.timer);
        console.log('News组件失活了');
    }
}
</script>

<style>

</style>