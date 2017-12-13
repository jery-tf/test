import Vue from 'vue'
import Router from 'vue-router'
import Home from './home.js'
import Me from './me.js'
import Personal from './personal.js'
import Util from '@/util'
Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/index',
    },
    ...Home,
    ...Me,
    ...Personal
  ]
})

router.beforeEach((to, from, next) => {
  //更改title
  if(to.meta.title){
    Util.home.setTitle(to.meta.title)
  }else{
    Util.home.setTitle(to.name)
  }
  //路由登录拦截
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    console.log(Util.user.isLogin())
    if (Util.user.isLogin()) {  // 获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }

  next();
});
export default router;
