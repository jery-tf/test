/**
 * Created by wyg on 2017/9/22.
 */
export default {
  EnterpriseLogin:resolve => require(['./login/user.vue'], resolve),//个人用户登录
  MyDo:resolve => require(['./myDo/MyDo.vue'], resolve),
  MyPiece:resolve => require(['./myDo/MyPiece.vue'], resolve),
}
