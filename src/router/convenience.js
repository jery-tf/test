//便民
import views from '@/views'

export default [
{
    path: '/convenience/police',
    name: 'police',
    component: views.Convenience.Police,
    meta:{
      title:'便民政策'
    },
  },
  {
    path: '/convenience/guideto',
    name: 'guideto',
    component: views.Convenience.Guideto,
    meta:{
      title:'办事指南'
    }
  },
  {
    path: '/convenience/facilities/:id',
    name: 'facilities',
    component: views.Convenience.Facilities,
    meta:{
      title:'便民设施'
    }
  }
]
