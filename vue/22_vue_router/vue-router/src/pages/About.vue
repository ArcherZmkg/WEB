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
}
</script>

<style>

</style>