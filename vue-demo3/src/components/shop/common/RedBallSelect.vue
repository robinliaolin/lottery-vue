<template>
  <div class="row" >
    <div class="div_item" v-for="item in list">
      <div class="div_box_item" :class="{div_box_item_selected:item.selected}" @click="oneClick(item)">{{item.number}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RedBallSelect",
        data(){
          return {
            list:[],
            selectedList:[],
          }
        },
        props:['randomRedStr'],
        methods:{
          oneClick(i){
            if(this.selectedList.length==6){
              alert("红球不能超过6个！")
              return;
            }
            i.selected=!i.selected;

            if(i.selected){
              this.selectedList.push(i);
            }
            else {
              let index = this.selectedList.indexOf(i.number);
              this.selectedList.splice(index,1);
            }
            this.$emit("clickNumber",this.selectedList);
          }
        },
        mounted(){
          for(let i = 1;i<=33;i++){
            let ball ={number:i,selected:false};
            this.list.push(ball);
          }
        },
        watch:{
          randomRedStr(newVal,oldVal){
            this.list=[];
            let arr = newVal.split(',');
            for (let i = 1; i <=33 ; i++) {
              let istr="";
              if(i<10){
                istr="0"+i
              }
              else
                istr=""+i;
              let index = arr.indexOf(istr);
              let ball=null;
              if(index>=0){
                 ball ={number:i,selected:true};
              }
              else {
                ball = {number:i,selected:false};
              }
              this.list.push(ball)
            }
          },

          list(newVal,oldVal){
            this.list=newVal;
          }
        }
    }
</script>

<style scoped>

</style>
