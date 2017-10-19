/**
 * Created by wyg on 2017/9/20.
 */
//公开
import views from '@/views'

export default
[
  {
    path: '/publicmore',
    name: 'newsmore',
    component: views.Gk.Publicmore,
    meta:{
      title:'查看更多'
    },
  },

  {
    path: '/publicmore1',
    name: 'newsmoreone',
    component: views.Gk.Publicmore1,
    meta:{
      title:'查看更多'
    },
  },
  {
    path: '/publicmore2',
    name: 'newsmoretwo',
    component: views.Gk.Publicmore2,
    meta:{
      title:'查看更多'
    },
  }

]
