<template>
  <div class="menu">
    <div class="col-xs-6 " @click="handleClick(1)">
      <div class="countDiv"  style="position: absolute;display: none;background-color: rgba(255,0,0,1.0);color: white;left: 52%;border-radius: 100%;height: 20px;width:20px;text-align: center"></div>
      <span class="glyphicon glyphicon-home" style="text-align: center;width: 100%;margin-top: 10px;" ></span>
      <p style="text-align: center;width: 100%;">购物车 <span class="badge badgeEtx">{{saveCount}}</span></p>
    </div>
    <div class="col-xs-6 " @click="handleClick(2)">
      <span class="glyphicon glyphicon-home" style="text-align: center;width: 100%;margin-top: 10px;" ></span>
      <p style="text-align: center;width: 100%;">立即投注</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SelectNumBottemBar",
        props:['saveCount'],
        methods:{
          handleClick(i){

            if(i==1) {
              this.$router.push('/cart')
            }
            else {
              //Todo:
             this.$router.push('')
            }
          }
        }
    }
</script>

<style scoped>
  .badgeEtx{
    position: absolute;
    top:-10px;
    background-color: red;
    border-radius: 100%;
  }

</style>
