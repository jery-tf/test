/**
 * Created by wyg on 2017/9/22.
 */
//我的
import views from '../views'

export default [
  {
    path:'/me/userLogin',
    name:'enterpriseLogin',
    component:views.Me.EnterpriseLogin,
    meta:{
      title:'用户登录'
    }
  },
  {
    path:'/me/myDo',
    name:'myDo',
    component:views.Me.MyDo,
    meta:{
      title:'我的办件'
    }
  },
  {
    path:'/me/doDetails/:id',
    name:'myPiece',
    mata:{
      title:"我的办件",
    },
    component:views.Me.MyPiece,
  }
]
