/**
 * Created by asus on 2017/12/4.
 */
export default {
  Login:resolve => require(['./login'], resolve),//登录
  Register:resolve => require(['./register'], resolve),//注册
}
