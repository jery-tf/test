/**
 * Created by wyg on 2017/9/20.
 */
//办事
import views from '@/views'
import Util from '../util'

export default

      [
        {
          path: '/selfinfo',
          name: 'selfinfo',
          component: views.Selfinfo.Selfinfo,
          meta:{
            title:'个人信息'
          },
          beforeEnter:Util.login.checkLogin
        },
        {
          path: '/selfinfo/AddressList/:id',
          name: 'addresslist',
          component: views.Selfinfo.AddressList,
          meta:{
            title:'地址管理'
          },
          beforeEnter: Util.login.checkLogin
        },
      ]
