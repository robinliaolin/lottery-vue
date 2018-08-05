//保存属性的地方
const state={
  user:null,
};
//对外提供可调用的属性
const getters={
  isLogin:state=>state.user!=null,
  user:state=>state.user,
};
//提交给外部调用的接口方法
const actions={
  setUser:(context,user)=>{
    context.commit('mSetUser',user);
  }
};
//真正修改数据的地方
const mutations={
  mSetUser:(state,user)=>{
    state.user=user;
  }
};
export default{
  actions,getters,state,mutations
}
