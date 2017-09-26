/**
 * Created by wyg on 2017/9/20.
 */
//注册
import views from '@/views'

export default [
    {
        path: '/register',
        name: 'register',
        component: views.Register.Register,
        meta:{
          title:'注册公共页'
        },
      },
      {
        path: '/register/registerforpeo',
        name: 'registerforpeo',
        component: views.Register.Registerforpeo,
        meta:{
          title:'个人用户注册页'
        },
      },
      {
        path: '/register/registerinfo',
        name: 'registerinfo',
        component:views.Register.Registerinfo,
        meta:{
          title:'个人用户注册基本信息'
        },
      },
      {
        path: '/register/registerfinish',
        name: 'registerfinish',
        component:views.Register.Registerfinish,
        meta:{
          title:'个人用户注册完成页'
        },
      },
      {
        path: '/register/registerforcmp',
        name: 'registerforcmp',
        component:views.Register.Registerforcmp,
        meta:{
          title:'企业用户注册页'
        },
      },
]
