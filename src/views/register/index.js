export default {
    Register:resolve =>require(['./register.vue'],resolve),//注册主页面
    Registerfinish:resolve =>require(['./registerfinish.vue'],resolve),//注册完成页
    Registerforcmp:resolve =>require(['./registerforcmp.vue'],resolve),//公司注册页面
    Registerforpeo:resolve =>require(['./registerforpeo.vue'],resolve),//个人注册页面
    Registerinfo:resolve =>require(['./registerinfo.vue'],resolve),//注册列表
  }