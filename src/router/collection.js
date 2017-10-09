/**
 * Created by wyg on 2017/10/8.
 */
//收藏
import views from '@/views'
import Util from '../util'

export default [
  {
    path: '/collection',
    name: 'collection',
    component: views.Collection.Collection,
    meta:{
      title:'我的收藏'
    },
    beforeEnter:Util.login.checkLogin
  }
]
