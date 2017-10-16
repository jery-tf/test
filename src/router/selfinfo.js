/**
 * Created by wyg on 2017/9/20.
 */
//办事
import views from '@/views'
import Util from '../util'

export default
    {
        path: '/selfinfo',
        name: 'selfinfo',
        component: views.Selfinfo.Selfinfo,
        meta:{
          title:'个人信息'
        },
        beforeEnter:Util.login.checkLogin
      }
