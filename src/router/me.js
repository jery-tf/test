/**
 * Created by wyg on 2017/9/22.
 */
//我的
import views from '../views'

export default [
  {
    path:'/me/userLogin/:url',
    name:'enterpriseLogin',
    component:views.Me.UserLogin,
    meta:{
      title:'个人登录'
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
    meta:{
      title:"我的办件",
    },
    component:views.Me.MyPiece,
  },
  {
    path:'/me/wxAuthenticationResult',
    name:'WxAuthenticationResult',
    meta:{
      title:"实人认证",
    },
    component:views.Me.WxAuthenticationResult,
  },
]
