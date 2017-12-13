/**
 * Created by tangfeng on 2017/12/4.
 */
import Me from '@/views/Me'
export default [
  {
    path: '/login',
    name: 'login',
    component: Me.Login,
    meta:{
      title:'登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Me.Register,
    meta:{
      title:'注册'
    }
  }
]

