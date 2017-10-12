export default {
    Accountsetting:resolve =>require(['./accountsetting.vue'],resolve),//设置页面
    Changenum:resolve =>require(['./changenum.vue'],resolve),//修改手机号码
    Setting:resolve =>require(['./setting.vue'],resolve),//设置页面
    Newphone:resolve =>require(['./newphone.vue'],resolve),//设置新手机号码
    Resetsec:resolve =>require(['./resetsec.vue'],resolve),//重置手机密码
    Lastphone:resolve =>require(['./lastphone.vue'],resolve),//设置手机号码发送新验证码
  ForgetPwd:resolve =>require(['./forgetpwd.vue'],resolve),//忘记密码找回密码
  ForgetPwdNum:resolve =>require(['./forgetpwdnum.vue'],resolve),//忘记密码手机发送验证码
  SettingPwd:resolve =>require(['./settingpwd.vue'],resolve),//忘记密码重新设置
  }
