let jsonStr=localStorage.getItem("carts");
let arr = JSON.parse(jsonStr);
if(arr == null){
  arr = [];
}
const state={
  list:arr,
};
const getters={
  list:state=>state.list,
  totalMoney:state=>{
    let count=0;
    state.list.forEach(item=>{
      count+=item.count;
    })
    console.log("已买了"+count+"注彩票！")
    return count*2;
  },
  cartSize:state=>state.list.length,
};
const actions={
  addToList(context,item){
    console.log("addToList被调用了，红球是："+item.red+";蓝球是："+item.blue);
    context.commit("mAddToList",item);
  },
  clearList(context){
    context.commit('mClearList');
  }
};
const mutations={
  mAddToList(state,item){
    state.list.push(item);
    console.log("真实提交保存的list："+state.list)
    localStorage.setItem("carts",JSON.stringify(state.list))
  },
  mClearList(state){
    state.list.splice(0,state.list.length)
    localStorage.setItem("carts",JSON.stringify(state.list))
  }
};

export default {
  actions,getters,mutations,state
}
