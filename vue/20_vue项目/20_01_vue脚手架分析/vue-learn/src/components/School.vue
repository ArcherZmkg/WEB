<template>
<!-- 组件结构 -->
    <div class="demo">
        <h2 ref="title">{{schoolName}}</h2>
        <h2>{{schoolAddress}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
//组件交互相关代码(数据、方法等等)
const School =({
    name:'School',
    data(){
        return{
            schoolName:'北京大学',
            schoolAddress:'朝阳区'
        }
    },
    methods: {
        showName(){
            alert(this.schoolName);
            console.log(this.$refs.title);
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
