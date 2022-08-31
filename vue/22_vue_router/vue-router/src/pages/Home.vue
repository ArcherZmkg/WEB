<template>
    <div>
        <h1>这是home</h1>
        <router-link to="/home/news">News</router-link>
        <br>
        <router-link to="/home/message">Message</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Home',
    // mounted(){
    //     console.log('Home被挂载',this);
    // },
    // beforeDestroy() {
    //     console.log('Home即将被销毁');
    // },
}
</script>

<style>

</style>