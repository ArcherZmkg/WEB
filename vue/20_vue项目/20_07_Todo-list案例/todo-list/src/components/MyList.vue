<template>
  <div class="contain-center">
    <my-item v-for="item in nameList" :key="item.uid" :item="item"/>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue"
export default {
  name:'MyList',
  components:{
      MyItem
  },
  data(){
      return {
        nameList:[
          {
            name:'张三',
          },
          {
            name:'李四',
          },
          {
            name:'王婶',
          }
        ]
      }
  },
  methods:{
    //初始化id以及可编辑属性
    initalData(){
      this.nameList.forEach((item)=>{
        this.$set(item,'canEdit',false)
        this.$set(item,'uid',JSON.stringify(Date.parse(new Date()))+Math.random()*1000)
        this.$set(item,'choose',false)
      })
    },
    //新增名字
    addName(value){
      this.nameList.push(
        {
          uid:JSON.stringify(Date.parse(new Date()))+Math.random()*1000,
          name:value
        }
      )
    },
    //修改名字
    editName(newObj){
      const newList= [];
        this.nameList = this.nameList.filter((e)=>{
          if (newObj.uid===e.uid){
            e.name=newObj.name
          }
          newList.push(e)
          return newList
        })
    },
    //删除名字
    deleteName(uid){
      this.nameList = this.nameList.filter((e)=>e.uid!=uid)
    }
  },
  mounted(){
      this.initalData();
      this.$bus.$on('addName',(value)=>{
        this.addName(value);
      })
      this.$bus.$on('editName',(newObj)=>{
        this.editName(newObj);
      })
      this.$bus.$on('deleteName',(uid)=>{
        this.deleteName(uid);
      })
  },
  beforeDestroy(){
    this.$bus.$off();
  }
}
</script>


<style scoped>
  .contain-center{
    width:calc(100% - 2.56rem);
    max-height:22rem;
    /* background-color:red; */
    margin:1rem 1.25rem 0 1.25rem;
    border: 0.03rem solid gray;
    border-radius: 0.25rem;
    overflow-y:scroll;
  }
</style>