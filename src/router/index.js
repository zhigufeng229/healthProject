import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Registered.vue'
import User from '../components/User.vue'
import Welcome from '../components/Welcome.vue'
import Rights from '../components/Rights.vue'
import Individual from '../components/Individual.vue'
import Food from '../components/Food.vue'
import Calories from '../components/Calories.vue'
import Share from '../components/Share.vue'
import Calorie from '../components/Calorie.vue'
import Article from '../components/Article.vue'
import Forget from '../components/Forget.vue'

Vue.use(VueRouter)

//配置路由
const routes = [
  {
    path: "/",
    redirect:"/login"

  },

  {
    path:"/login",
    component: Login

  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      { path:'/welcome', component: Welcome},
      { path:'/user', component: User},
      {path:'/rights',component: Rights},
      {path:'/individual',component: Individual},
      {path:'/food',component: Food},
      {path:'/calories' ,component:Calories},
      {
    path:"/share",
    component:Share
  },
  {path:"/article", component: Article},
  {path:"/calorie", component: Calorie},
    ],
  },
  
  {
    path:"/register",
    component:Register
  },
  
  {
    path: "/forget",
    component: Forget
  },
  

]


const router = new VueRouter({
  routes
})

// //挂载路由导航守卫
// router.beforeEach((to,from,next)=>{
//   // to 将要访问
//   // from 从哪访问
//   // next 接着 next(url) 重定向到 url 上 next() 继续访问 to路径 
//   if(to.path=='/login') return next(); 
//   //获取user
//   const userFlag = window.sessionStorage.getItem("flag");
//   if(!userFlag) return next('/login');
//   next();
// })

export default router
