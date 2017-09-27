/**
 * Created by wyg on 2017/9/20.
 */
//设置
import views from '@/views'

export default [
    {
        path: '/setting/accountsetting',
        name: 'accountsetting',
        component:views.Setting.Accountsetting,
        meta:{
          title:'账号设置页'
        },
      },
      {
        path: '/setting/setting',
        name: 'Setting',
        component:views.Setting.Setting,
        meta:{
          title:'账号设置页'
        },
      },
      {
        path: '/setting/changenum',
        name: 'Changenum',
        component: views.Setting.Changenum,
        meta:{
          title:'修改手机号码第一页'
        },
      },
      {
        path: '/setting/newphone',
        name: 'newphone',
        component: views.Setting.Newphone,
        meta:{
          title:'输入新手机'
        },
      },
     
]
