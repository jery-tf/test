export default {
    Accountsetting:resolve =>require(['./accountsetting.vue'],resolve),//设置页面
    Changenum:resolve =>require(['./changenum.vue'],resolve),//修改手机号码
    Setting:resolve =>require(['./setting.vue'],resolve),//设置页面
    Newphone:resolve =>require(['./newphone.vue'],resolve),//设置新手机号码
    Lastphone:resolve =>require(['./lastphone.vue'],resolve),//新手机获取验证码
    Resetsec:resolve =>require(['./resetsec.vue'],resolve),//重置登录密码
  }