<template>
    <div>
        <h1>这是about</h1> 
    </div>
</template>

<script>
export default {
    name:'About',
    mounted(){
        console.log('About被挂载',this);
    },
    beforeDestroy() {
        console.log('About即将被销毁');
    },

    //  通过组件路由规则，在进入该组件时调用
    beforeRouteEnter(to, from, next){
        console.log('i am coming');
        next();
    },

    //  通过组件路由规则，在离开该组件时调用（注意：该守卫与后置路由守卫不一样,后置路由守卫是路由跳转后触发，该守卫是组件离开时触发）
    beforeRouteLeave (to, from, next) {
        console.log('i be leaved');
        next();
    }
}
</script>

<style>

</style>