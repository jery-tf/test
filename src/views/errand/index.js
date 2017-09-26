/**
 * Created by wyg on 2017/9/20.
 */

export default {
  ErrandList:resolve => require(['./ErrandList.vue'], resolve),//办事主页
  Guide:resolve => require(['./Guide.vue'], resolve),//办事指南
  Online:resolve => require(['./Online.vue'], resolve),//在线办理
  FileUpload:resolve => require(['./FileUpload.vue'], resolve),//文件上传
  AddressManagement:resolve => require(['./AddressManagement.vue'], resolve),//地址管理
  CompleteData:resolve => require(['./completeData.vue'], resolve)
}
