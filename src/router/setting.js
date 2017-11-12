/**
 * Created by wyg on 2017/9/20.
 */
//设置
import views from '@/views'
import Util from '../util'

export default [
  {
    path: '/setting/accountsetting',
    name: 'accountsetting',
    component: views.Setting.Accountsetting,
    meta: {
      title: '账号设置'
    },
  },
  {
    path: '/setting/setting',
    name: 'Setting',
    component: views.Setting.Setting,
    meta: {
      title: '账号设置'
    },
    beforeEnter: Util.login.checkLogin
  },
  {
    path: '/setting/changenum',
    name: 'Changenum',
    component: views.Setting.Changenum,
    meta: {
      title: '修改手机号码'
    },
  },
  {
    path: '/setting/newphone',
    name: 'newphone',
    component: views.Setting.Newphone,
    meta: {
      title: '输入新手机'
    },
  },
  {
    path: '/setting/resetsec',
    name: 'resetsec',
    component: views.Setting.Resetsec,
    meta: {
      title: '重置密码'
    },
  },
  {
    path: '/setting/lastphone',
    name: 'lastphone',
    component: views.Setting.Lastphone,
    meta: {
      title: '发送验证码'
    },
  },
  {
    path: '/setting/forgetpwd',
    name: 'forgetpwd',
    component: views.Setting.ForgetPwd,
    meta: {
      title: '重置密码'
    },
  },
  {
    path: '/setting/forgetpwdnum',
    name: 'forgetpwdnum',
    component: views.Setting.ForgetPwdNum,
    meta: {
      title: '发送验证码'
    },
  },
  {
    path: '/setting/settingpwd',
    name: 'settingpwd',
    component: views.Setting.SettingPwd,
    meta: {
      title: '重置密码'
    },
  },
  {
    path: '/setting/regardto',
    name: 'regardto',
    component: views.Setting.RegardTo,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/setting/paycost',
    name: 'paycost',
    component: views.Setting.PayCost,
    meta: {
      title: '公共缴费'
    },
  },
  {
    path: '/setting/consulting',
    name: 'consulting',
    component: views.Setting.Consulting,
    meta: {
      title: '办事咨询'
    },
    beforeEnter: Util.login.checkLogin
  },
  {
    path: '/setting/myconsulting',
    name: 'myconsulting',
    component: views.Setting.MyConsulting,
    meta: {
      title: '我的咨询'
    },
  },
]
