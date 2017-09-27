import Vue from 'vue'
import Router from 'vue-router'
import Util from '../util'
import views from '@/views'
import search from './search'
import persondata from './persondata'
import register from './register'
import setting from './setting'
import gk from './gk'
import errand from './errand'
import selfinfo from './selfinfo'

import me from './me'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/404',
      name: 'noPage',
      component: views.noPage,
      meta:{
        title:'404'
      },
    },
    {
      path: '/',
      name: 'home',
      component: views.Home,
      meta:{
        title:'首页'
      },
      // beforeEnter:(to, from, next)=>{
        // console.log('Home to==>',to);
        // console.log('Home from==>',from);
        // to.query.show = Util.checkHomeUrl(to.query.show);
      //   next();
      // }
    },...errand,...me,...search,...persondata,...register,...setting,gk,selfinfo
  ]
})

router.beforeEach((to, from, next) => {
  console.log('indexRouter to==>',to)
  //拦截404
  if(!to.name){
    next({path:'/404'})
  }
  next();
})

router.beforeEach((to, from, next) => {
  //设置title
  if(to.meta.title){
    Util.setTitle(to.meta.title)
  }else{
    Util.setTitle(to.name)
  }
  next();
})


export default router;

