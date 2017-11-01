//相关企业/单位信息
import views from '@/views'
import Util from '../util'

export default [
  {
    path: '/aboutcmp/aboutcmp/:id',
    name: 'aboutcmp',
    component: views.AboutCmp.aboutcmp,
    meta:{
      title:'授权页'
    },
  },
 {
   path: '/aboutcmp/aboutlist',
     name: 'aboutlist',
   component: views.AboutCmp.AblutList,
   meta:{
   title:'授权事项'
 },
 }
]
