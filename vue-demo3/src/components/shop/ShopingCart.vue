<template>
  <div>
    <title-bar :title="titleStr" :needback="true"></title-bar>

    <coursal></coursal>
    <msg></msg>

    <!--手动选号-->
    <div class="row" style="margin-top: 5px;">
      <div class="col-xs-4" style="border: 1px solid gainsboro;height: 30px;line-height: 30px;text-align: center;" @click="handClick">+手动选号</div>
      <!--这个地方选择跳转方式是ajax请求还是浏览器地址时，ajax请求是为了获取对应的数据，当前页面浏览器不刷新，而浏览器地址会重新刷新浏览器-->
      <div class="col-xs-4" style="border: 1px solid gainsboro;height: 30px;line-height: 30px;text-align: center;" @click="randomSelect">+机选一注</div>
      <div class="col-xs-4" style="border: 1px solid gainsboro;height: 30px;line-height: 30px;text-align: center;" @click="clearAllItems">清空列表</div>
    </div>

    <selected-item-list :list="selectedList"></selected-item-list>

    <div class="menu">
      <div class="col-xs-12 bottemBarExt" @click="handleClick(1)">
        <p style="text-align: center;width: 100%; line-height: 50px;" >立即付款&nbsp&nbsp{{totalMoney}}元</p>
      </div>
    </div>

  </div>
</template>

<script>
  import TitleBar from "../common/TitleBar"
  import ItemBar from "../common/ItemBar"
  import Coursal from "../home/common/Coursal"
  import Msg from "./common/msg"
  import SelectedItemList from './common/SelectedItemList'
  import {mapActions,mapGetters} from 'vuex'
  import BallUtills from '../../utils/BallUtils'
    export default {
        name: "ShopingCart",
        components:{
          SelectedItemList,
          Msg,
          Coursal,
          TitleBar,ItemBar
        },
        data(){
          return {
            titleStr:"双色球",
            selectedList:[],
          }
        },
        computed:{
          ...mapGetters(['totalMoney','list'])
        },
        methods:{
          //Todo:
          ...mapActions(['addToList','clearList']),
          handClick(){
            this.$router.go(-1)
          },
          randomSelect(){
              let redBallsArr = BallUtills.randomRed()
              let blueBall = BallUtills.randomBlue()
              let redStr="";
              redBallsArr.forEach(item=>{
                redStr+=','+item;
              })
              redStr=redStr.substring(1);
              let item = {red:redStr,blue:blueBall,count:1}
              this.addToList(item);
          },
          clearAllItems(){
            this.clearList();
          },
        },
      watch:{
        selectedList(newVal,oldVal){
          this.selectedList=newVal;
        }
      },
      mounted(){
          this.selectedList=this.list;
      }

    }
</script>

<style scoped>
  .bottemBarExt{
    height: 50px;
  }
</style>
