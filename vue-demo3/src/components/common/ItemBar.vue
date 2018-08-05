<template>
  <!--5.底部菜单栏-->
  <div class="div-height">
    <div class="menu" >
      <div class="col-xs-4 menu-item" :class="{'menu-item-activied':selected=='1'}" @click="handleClick('1')">
        <span class="glyphicon glyphicon-home" :class="{'menu-item-activied':selected=='1'}"></span>
        <p :class="{'menu-item-activied':selected=='1'}">首页</p>
      </div>
      <div class="col-xs-4 menu-item"  @click="handleClick('2')">
        <span class="glyphicon glyphicon-shopping-cart" ></span>
        <p >选号</p>
      </div>
      <div class="col-xs-4 menu-item" :class="{'menu-item-activied':selected=='3'}"  @click="handleClick('3')">
        <span class="glyphicon glyphicon-user" :class="{'menu-item-activied':selected=='3'}"></span>
        <p :class="{'menu-item-activied':selected=='3'}">我</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ItemBar",
        data(){
          return {
            selected:{
              type:String,
              default:'1'
            }
          }
        },
        methods:{
          handleClick(index){
            this.selected=index;
            switch (index) {
              case '1':
                this.$router.push('/');
                break;
              case '2':
                this.$router.push('/shop')
                break;
              case '3':
                this.$router.push("/my")
                break;
            }
          }
        }

    }
</script>

<style scoped>
      .div-height{
        height: 50px;
      }
</style>
