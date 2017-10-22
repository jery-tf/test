// /**
//  * Created by wyg on 2017/9/20.
//  */
// //办事
// import views from '@/views'
//
// export default {
//   path:'/errand/errand1',
//   name:'errand1',
//   component:views.Errand.Errand1,
// }


/**
 * Created by wyg on 2017/9/20.
 */
//办事
import views from '@/views'

export default [
  {
    path:'/errandList/:id',
    name:'errandList',
    component:views.Errand.ErrandList,
    meta:{
      title:'办事列表'
    }
  },{
    path:'/errand/guide/:id',
    name:'guide',
    component:views.Errand.Guide,
    meta:{
      title:'办事指南'
    }
  },{
    path:'/errand/online/:id',
    name:'online',
    component:views.Errand.Online,
    meta:{
      title:'在线办理'
    }
  },{
    path:'/errand/fileUpload/:id',
    name:'fileUpload',
    component:views.Errand.FileUpload,
    meta:{
      title:'文件上传'
    }
  },{
    path:'/errand/AddressManagement/:id',
    name:'addressManagement',
    component:views.Errand.AddressManagement,
    meta:{
      title:'地址管理'
    }
  },{
    path:'/errand/completeData/:id',
    name:'completeData',
    component:views.Errand.CompleteData,
    meta:{
      title:'补正补齐'
    }
  }
]
