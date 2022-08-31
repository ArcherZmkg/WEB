<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">
                {{item.val}}
            </li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name:'News',
    data(){
        return {
            list:[
                {
                    val:'news1'
                },
                {
                    val:'news1'
                },
                {
                    val:'news3'
                }
            ]
        }
    },
    mounted(){
        this.list.forEach((e)=>{
            e.id = nanoid();
        
        })
    }
}
</script>

<style>

</style>