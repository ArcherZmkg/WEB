<template>
  <div class="item-list">
    <input type="checkbox" class="input-checkbox" v-model="choose"/>
    <span class="item-span" v-show="!canEdit" >{{Name}}</span>
    <input type="text" ref="inputText" class="input-edit" v-show="canEdit" v-model="Name" @blur="cancelEdit()"/>
    <button class="btn-danger btn-list" @click="deleteName">删除</button>
    <button class="btn-default btn-list" @click="edit">编辑</button>
  </div>
</template>

<script>
export default {
    name:'MyItem',
    props:{
      item:{
        type:Object,
        isRequire:true
      }
    },
    data(){
      return{
        uid:this.item.uid,
        Name:this.item.name,
        canEdit:this.item.canEdit,
        choose:this.item.choose
      }
    },
    methods:{
      edit(){
        this.canEdit = true;
        //点击编辑自动获取焦点
        this.$nextTick(()=>{
          console.log(this);
          this.$refs.inputText.focus();
        })
      },
      cancelEdit(){
        if (this.Name == "") {
          this.Name = this.item.name
          alert("所修改的姓名不能为空!")
        }
        else {this.$bus.$emit("editName",{'uid':this.uid,'name':this.Name});}
        this.canEdit = false;
      },
      deleteName(){
        this.$bus.$emit("deleteName",this.uid)
      }
    },
    beforeDestroy(){
      this.$off();
    }
    

}
</script>

<style scoped lang="less">
.item-list{
    width:calc(100% - 1.2rem);
    height:2rem;
    margin: 0.5rem;
    padding-left:0.2rem;
    display:flex;
    justify-content: flex-start;
    align-items: center;
   

    .item-span{
      width:10rem;
      flex-grow: 18;
      font-size:0.4rem;
      font-weight: 600;
      text-align: left;
      font-family: 'Times New Roman', Times, serif;
    }
    .input-checkbox{
      width:1rem;
      flex-grow:1;
    }
    .input-checkbox:hover{
      cursor: pointer;
    }
    .input-edit{
      width:10rem;
      flex-grow: 18;
    }
    .btn-list{
      width:4.5rem;
      height:1.25rem;
      font-size: 0.05rem;
      flex-grow: 1;
    }
    .item-span:hover{
      cursor: pointer;
    }
}
.item-list:hover{

  background: rgba(24, 116, 202, 0.5);
  color: white;
}

</style>