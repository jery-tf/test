/**
 * Created by wyg on 2017/9/20.
 */
//个人信息
import views from '@/views'

export default [
    {
        path: '/persondata/personlist',
        name: 'personlist',
        component:views.Persondata.Personlist,
        meta:{
          title:'列表页'
        },
      },
      {
        path: '/persondata/personlist/personinfo',
        name: 'personinfo',
        component: views.Persondata.Personinfo,
        meta:{
          title:'信息页'
        },
      },
      {
        path: '/persondata/personlist/personcam',
        name: 'personcam',
        component: views.Persondata.Personcam,
        meta:{
          title:'证照'
        },
      },
]
