import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/home/HomePage'
import MyPage from '../components/my/MyPage'
import SelectPage from '../components/shop/SelectPage'
import ShoppingCart from '../components/shop/ShopingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/my',
      name: 'MyPage',
      component: MyPage
    },
    {
      path:"/shop",
      name:"SelectPage",
      component:SelectPage
    },
    {
      path:"/cart",
      name:"ShoppingCart",
      component:ShoppingCart
    }

  ]
})
