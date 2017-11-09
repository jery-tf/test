/**
 * Created by wyg on 2017/9/20.
 */
//公开
import views from '@/views'

export default
[
  {
    path: '/publicmore/:id',
    name: 'newsmore',
    component: views.Gk.Publicmore,
    meta:{
      title:'通知公告'
    },
  },
]
