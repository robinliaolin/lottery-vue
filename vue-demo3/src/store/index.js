import Vue from 'vue'
import Vuex from 'vuex'
import Cart from './cart'
import User from './user'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    User,
    Cart,
  }
})
