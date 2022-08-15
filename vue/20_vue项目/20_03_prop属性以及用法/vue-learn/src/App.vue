<template>
    <div>
        <img src="./assets/logo.png" alt="">
        <School></School>
    </div>
</template>

<script>
    //引入组件
    import School from './components/School.vue';
    export default {
        name:'App',
        components:{
            School
        }

    }
</script>

<style>

</style>