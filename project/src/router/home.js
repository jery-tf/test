/**
 * Created by tangfeng on 2017/12/4.
 * 首页
 */
import home from '@/views/Home'
export default [
  {
    path: '/index',
    name: 'index',
    component: home.Home,
    meta:{
      title:'首页',
      isShow:true
    },
  },
  {
    path: '/search',
    name: 'search',
    component: home.Search,
    meta:{
      title:'搜索'
    },
  }
]
