<template>
  <div class="appBodyExt">
    <title-bar :title="titleStr"></title-bar>
    <msg></msg>
    <div style="color:darkgray;margin-top: 5px;margin-bottom: 5px;">请选择6个红球,1个蓝球</div>
    <red-ball-select @clickNumber="receiveFromRedBall" :randomRedStr="redBallsContent" ></red-ball-select>
    <blue-ball-select @blueSubmit="receiveFromBlueBall" :randomBlueStr="blueBallContent"></blue-ball-select>

    <button class="btn btn-default" style="float:right;width: 100px;margin-top: 20px;margin-right: 20px;height: 40px;" @click="addItemToList">添加</button>
    <div style="clear: both"></div>

    <button class="btn btn-default" style="float: right;width: 30%;margin-top: 20px;margin-right: 20px;height: 40px" @click="randomItem" >机选幸运号</button>

    <select id="selectId" class="form-control" style="float: right;width: 70px;margin-right: 10px;height: 40px ;margin-top: 20px" v-model="randomNum">
      <option value="1" selected="selected">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <div style="clear: both;"></div>

    <select-num-bottem-bar :saveCount="cartSize"></select-num-bottem-bar>
  </div>
</template>

<script>

  import TitleBar from "../common/TitleBar";
  import ItemBar from "../common/ItemBar";
  import Msg from "./common/msg";
  import RedBallSelect from "./common/RedBallSelect";
  import SelectNumBottemBar from "./common/SelectNumBottemBar";
  import BlueBallSelect from "./common/BlueBallSelect";
  import {mapActions,mapGetters} from 'vuex'
  import BallUtills from '../../utils/BallUtils'

    export default {
        name: "SelectPage",
        components: {BlueBallSelect, SelectNumBottemBar, RedBallSelect, Msg, ItemBar, TitleBar},
        data(){
          return {
            titleStr:'选号',
            redBalls:[],
            selectBlueBall:null,
            redBallsContent:"",
            blueBallContent:"",
            randomNum:{
              type:Number,
              default:1
            }
          }
        },
        computed:{
          ...mapGetters(['cartSize'])
        },
        methods:{
          ...mapActions(['addToList']),
          receiveFromRedBall(list){
            this.redBalls=list;
            let str="";
            this.redBalls.forEach(item=>{
              let numberStr="";
              if(item.number<10){
                numberStr="0"+item.number;
              }
              else {
                numberStr=""+item.number;
              }
              str+=","+numberStr;
            })
            str=str.substring(1);
            this.redBallsContent=str;
            console.log("选中的红球:"+str);
          },
          receiveFromBlueBall(item){
            this.selectedBlueBall=item;
            if(item.number<10)
              this.blueBallContent="0"+item.number;
            else
              this.blueBallContent=""+item.number;
            console.log("选中的蓝球:"+this.blueBallContent);
          },
          addItemToList(){
            let item = {red:this.redBallsContent,blue:this.blueBallContent,count:1}
            this.addToList(item);
          },
          randomItem(){
            console.log(this.randomNum)
            if(!this.randomNum){
                this.randomNum=1;
            }
            for (let i = 0; i < this.randomNum; i++) {
              let redBallsArr = BallUtills.randomRed()
              let blueBall = BallUtills.randomBlue()
              let redStr="";
              redBallsArr.forEach(item=>{
                redStr+=','+item;
              })
              redStr=redStr.substring(1);
              let item = {red:redStr,blue:blueBall,count:1}
              this.addToList(item)
              this.redBallsContent=redStr;
              this.blueBallContent=blueBall;
            }
          }
        }
    }
</script>

<style scoped>
  .appBodyExt{
    margin: 0;
    padding: 0;
  }
</style>
