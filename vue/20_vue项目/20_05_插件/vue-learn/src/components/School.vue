<template>
<!-- 组件结构 -->
    <div class="demo">
        <h2>{{age}}</h2>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
//组件交互相关代码(数据、方法等等)
const School = ({
    name:'School',
    data(){
        return{
            age:18,
            name:'张三'
        }
    },
   

})
export default School
</script>

<style>
/*组件的样式*/
.demo{
    background-color: aquamarine;
}
</style>
