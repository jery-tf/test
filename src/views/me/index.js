/**
 * Created by wyg on 2017/9/22.
 */
export default {
  EnterpriseLogin:resolve => require(['./login/enterprise.vue'], resolve),
  MyDo:resolve => require(['./myDo/MyDo.vue'], resolve),
  MyPiece:resolve => require(['./myDo/MyPiece.vue'], resolve),
}
