<template>
    <div>
        <img src="./assets/logo.png" alt="">
        <School></School>
        <student></student>
    </div>
</template>

<script>
    //引入组件
    import Student from './components/Student.vue';
    import School from './components/School.vue';
    export default {
        name:'App',
        components:{
            School,
            Student
        }

    }
</script>

<style>

</style>