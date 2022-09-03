<template>
    <div>
        <h1>Vue-Router Demo</h1>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">测试go</button>
    </div>
</template>

<script>
export default {
    name:'Banner',
    methods:{
        back(){
            this.$router.back();
        },
        forward(){
            this.$router.forward();
        },
        go(){
            this.$router.go(-2);//历史记录后退两步
            this.$router.go(2);//历史记录前进两步
        }
    }
}
</script>

<style>

</style>