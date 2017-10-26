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
import convenience from "./convenience"
import collection from './collection'
import me from './me'
import aboutcmp from "./aboutcmp";
import home from './home'

import Api from '../api'
import Config from '../config'

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
      name: 'menu',
      component: views.Home.Menu,
      meta:{
        title:'首页'
      },
    },...errand,...me,...search,...persondata,...register,...setting,...gk,...selfinfo,...convenience,
    ...collection,...aboutcmp,...home
  ]
});

// router.beforeEach((to, from, next) => {
//   console.log('indexRouter to==>',to)
//   //拦截404
//   if(!to.name){
//     next({path:'/404'})
//   }
//   next();
// });

//刷新token
router.beforeEach((to,from,next)=>{
  let token = Util.login.getToken();
  if(token){
    let isRefresh = sessionStorage.getItem('isRefreshToken');
    if(!isRefresh){
      let data = {
        client_id:Config.clientId,
        client_secret:'W5O1PNzgQFyKhpuaqEkyvA',
        grant_type:'refresh_token',
        refresh_token:token.refresh_token
      };
      Api.loginApi.refreshToken(data,{loading:'请稍后...'}).then(res=>{
        Util.login.setToken(res);
        sessionStorage.setItem('isRefreshToken',true);
        next();
      }).catch(err=>{
        next();
      })
    }else{
      next();
    }
  }else{
    next();
  }

});

router.beforeEach((to, from, next) => {
  console.log('indexRouter to==>',to)
  //设置title
  if(to.meta.title){
    Util.home.setTitle(to.meta.title)
  }else{
    Util.home.setTitle(to.name)
  }
  next();
});


// const refreshToken = ()=>{
//   let isRefresh = sessionStorage.getItem('refreshToken');
//   if(!isRefresh){
//     console.log('去刷新token');
//   }else{
//     console.log('token正常');
//   }
// };

export default router;

