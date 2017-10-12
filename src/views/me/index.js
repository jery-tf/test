/**
 * Created by wyg on 2017/9/22.
 */
export default {
  UserLogin:resolve => require(['./login/user.vue'], resolve),
  MyDo:resolve => require(['./myDo/MyDo.vue'], resolve),
  MyPiece:resolve => require(['./myDo/MyPiece.vue'], resolve),
  WxAuthenticationResult:resolve => require(['./wxAuthenticationResult.vue'], resolve),
}
