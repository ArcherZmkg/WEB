<template>
<!-- 组件结构 -->
    <div class="demo">
        <h2>{{age}}</h2>
        <h2>{{name}}</h2>
        <button @click="updateAge">修改传入的年龄</button>
    </div>
</template>

<script>
import {a} from '../mixin'
//组件交互相关代码(数据、方法等等)
const School = ({
    name:'School',
    data(){
        return{
            age:18,
            name:'张三'
        }
    },
    mixins:[a]
   

})
export default School
</script>

<style>
/*组件的样式*/
.demo{
    background-color: aquamarine;
}
</style>
