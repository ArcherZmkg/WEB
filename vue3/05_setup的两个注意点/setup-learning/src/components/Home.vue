<template>
    <h1>准备一个人的信息</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <slot name="qwe"></slot>
    <button @click="hello">触发hello</button>
</template>

<script>
import {reactive} from 'vue'
export default {
    name:'Home',
    props:['person'],
    emits:['hello'],
    // beforeCreate(){
    //     console.log('--------beforeCreated');
    // },
    setup(props,context){
        // console.log('--------setup',props);
        // console.log('--------setup',context);
        // console.log('--------setup',context.attrs); //  详单与Vue2中的$attrs
        // console.log('--------setup',context.emit);  //  触发自定义事件的
        console.log('--------setup',context.slots);  //插槽
        //方法
        function hello(){
            context.emit("hello",'6666');
        }
        return{
            hello
        }
    }
}
</script>

<style>

</style>