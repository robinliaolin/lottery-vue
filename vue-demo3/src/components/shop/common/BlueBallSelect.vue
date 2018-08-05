<template>
  <div class="row" style="margin-top: 20px;">
    <div class="div_item" v-for="item in list">
      <div class="div_box_item_blue" :class="{div_box_item_blue_selected:item.selected}" @click="buleSelected(item)">{{item.number}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BlueBallSelect",
        data(){
          return {
            list:[],
            selectedBlue:null,
          }
        },
        props:['randomBlueStr'],
        methods:{
          buleSelected(i){
            // console.log(i);
            if (this.selectedBlue) {
              this.selectedBlue.selected=false;
            }

            i.selected=!i.selected;
            if(i.selected)
              this.selectedBlue=i;
            this.$emit("blueSubmit",this.selectedBlue);
          },
        },
        mounted(){
          for (let i = 1; i <=16 ; i++) {
            let ball = {number:i,selected:false};
            this.list.push(ball)
          }
        },
        watch:{
          randomBlueStr(newVal,oldVal){
          this.list=[];
          this.selectedBlue=newVal;
          for (let i = 1; i <=16 ; i++) {
              let istr="";
              if(i<10){
                istr="0"+i;
              }
              else {
                istr=""+i;
              }
              let ball=null;
              if(istr===this.selectedBlue){
                ball={number:i,selected:true}

              }
              else {
                ball={number:i,selected:false};
              }
              this.list.push(ball);
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
