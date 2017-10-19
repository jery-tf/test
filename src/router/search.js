/**
 * Created by wyg on 2017/9/20.
 */
//办事
import views from '@/views'

export default [
    {
        path: '/search/searchlist',
        name: 'searchlist',
        component: views.Search.Searchlist,
        meta:{
          title:'列表页'
        },
      },
      {
        path: '/search/searchinfo',
        name: 'searchinfo',
        component: views.Search.Searchinfo,
        meta:{
          title:'详情页'
        },
      },
]
