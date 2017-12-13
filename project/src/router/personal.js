/**
 * Created by tangfeng on 2017/12/4.
 * 首页
 */
import Personal from '@/views/Personal'
export default [
  {
    path: '/personal',
    name: 'personal',
    component: Personal.Personal,
    meta:{
      title:'个人',
      isShow:true,
      requireAuth:true//登录
    },
  },
  {
    path: '/personalData',
    name: 'personalData',
    component: Personal.PersonalData,
    meta:{
      title:'个人资料',
      requireAuth:true//登录
    },
  }
]

