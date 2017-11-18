/**
 * Created by wyg on 2017/10/16.
 */

//4个首页
import views from '@/views'
import Util from '../util'

export default [
  {
    path: '/mySelfInfo',
    name: 'mySelfInfo',
    component: views.Home.Myselfinfo,
    meta:{
      title:'我的'
    },
    beforeEnter:Util.login.checkLogin
  },{
    path: '/errand',
    name: 'errand',
    component: views.Home.Errand,
    meta:{
      title:'办件'
    }
  },{
    path: '/forpeople',
    name: 'forpeople',
    component: views.Home.Forpeople,
    meta:{
      title:'便民'
    },
    beforeEnter:Util.login.checkLogin
  },{
    path: '/publicitem',
    name: 'publicitem',
    component: views.Home.Publicitem,
    meta:{
      title:'新闻资讯'
    },
    beforeEnter:Util.login.checkLogin
  },

]
