<template>
  <div class="padding-container">
    <LoginTop rightName="企业用户登录" rightLink="/"></LoginTop>
    <div class="center-center logo">
      <img class="icon" src="../../../assets/img/logo.png">
      <img class="name" src="../../../assets/img/logoName.png">
    </div>
    <div class="top100">
      <Field placeholder="身份证/手机号码" v-model="userName"></Field>
    </div>
    <div>
      <Field placeholder="登录密码" v-model="password" :disableClear="true"
             :type="isShowPassword?'text':'password'">
        <i :class="`OAIndexIcon C2-yanjing1 ${isShowPassword?'passwordIcon':'textIcon'}`"
           @click="showPassword"></i>
      </Field>
    </div>
    <div class="top52">
      <mint-button type="primary" size="large" @click="submitLogin">登录</mint-button>
    </div>
    <p class="flex font-middle">
      <router-link to="/register">
        <span>立即注册</span>
      </router-link>
      <span>|</span>
      <router-link to="/setting/forgetpwd">忘记密码</router-link>
    </p>
  </div>
</template>

<script>
  import LoginTop from '../../../components/login/LoginTop.vue'
  import MintUI,{Field, Button,Toset,Toast} from 'mint-ui'
  import Api from '../../../api'
  import Util from '../../../util'
  import Config from '../../../config'

  export default {
    components: {LoginTop, Field, 'mint-button': Button},
    data () {
      return {
        userName: null,
        password: null,
        isShowPassword: false
      }
    },
    created(){
    },
    methods: {
      showPassword(){
        this.isShowPassword = !this.isShowPassword;
      },
      toNextPage(){
//        let params = Util.user.getRouterUrl();
        console.log('this.nextPath',this.nextPath);
        this.$router.replace({path:'/'+this.nextPath})
      },
      //点击完成操作
      submitLogin(){
        let content = {ticket:this.password,account:this.userName,type:'pwd'};
        let _this = this;
        content = {content:JSON.stringify(content)};
        //获取登录加密
        MintUI.Indicator.open('请稍后...');
        Api.loginApi.getLoginAes(content).then(res => {
          let data = {clientId:Config.clientId,s:res};
          //登录
          Api.loginApi.userLogin(data).then(res=>{
            //获取用户信息
            Api.userApi.getUserInfo({access_token: res.access_token}).then(res => {
              //获取用户详情
              Api.userApi.getUserDetails(res.userId).then(res=>{
                MintUI.Indicator.close();
                Util.other.setLocalStorage('userDetails',res);
                //跳转页面
                _this.toNextPage();
              }).catch(err=>{ //获取用户详情失败
//                MintUI.Indicator.close();
                console.log('获取用户详情失败');
              });
              Util.user.setUserInfo(res);
            }).catch(err=>{ //获取用户信息失败
//              MintUI.Indicator.close();
              console.log('获取用户详情失败');
            });
            let tokenTime = new Date().getTime();
            res = Object.assign({},res,{tokenTime});
            sessionStorage.setItem('isRefreshToken',true);
            console.log('token=>',res);
            Util.login.setToken(res);
          }).catch(err=>{  //登录失败
            console.log('登录失败,原因->',err.errorMessage);
//            MintUI.Indicator.close();
            if(err.errorMessage){
              Toast(err.errorMessage);
            }else{
              Toast('登录超时');
            }

          })
        })
      }
    },
    computed:{
      nextPath(){
        console.log('this.$route.params.url',this.$route.params.url);
        if(this.$route.params.url.indexOf('-')===-1){
          return this.$route.params.url||'home';
        }else{
          let arr = this.$route.params.url.split('-');
          return arr.join('/');
        }

      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .padding-container {
    background: #fff;
    min-height: 100%;
  }

  .logo {
    margin-top: 1.1rem;
    flex-direction: column;
    .icon {
      width: 1.29rem;
      height: 1.29rem;
    }
    .name {
      margin-top: .2rem;
      width: 1.97rem;
      height: .47rem;
    }
  }

  .top100 {
    margin-top: 1rem;
  }

  .OAIndexIcon {
    font-size: .33rem;
  }

  .passwordIcon {
    color: #333;
  }

  .textIcon {
    color: #ccc;
  }

  .top52 {
    margin-top: .52rem;
  }

  .font-middle {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    flex: 1;
    span {
      padding: 0 .3rem;
    }
  }
</style>
