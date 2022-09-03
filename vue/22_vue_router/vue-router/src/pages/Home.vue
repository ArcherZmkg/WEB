<template>
    <div>
        <h1>这是home</h1>
        <router-link to="/home/news">News</router-link>
        <br>
        <router-link to="/home/message">Message</router-link>
        <!-- 路由缓存keep-alive 作用:让不展示的路由组件保持挂载不被销毁，
        注意：若没有include参数则router-view的所有组件都会被缓存,采用include的参数为需要缓存的组件名而非路由名，如News组件 -->
        <!-- <keep-alive include="News"> -->
        <keep-alive :include="['News','MessageList']">
            <router-view></router-view>
        </keep-alive>
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