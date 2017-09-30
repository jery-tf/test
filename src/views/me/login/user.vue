<template>
  <div class="padding-container">
    <LoginTop rightName="企业用户登录" rightLink="/"></LoginTop>
    <div class="center-center logo">
      <img class="icon" src="../../../assets/img/logo.png">
      <img class="name" src="../../../assets/img/logoName.png">
    </div>
    <div class="top100">
      <Field placeholder="用户名/省份证/手机号码" v-model="userName"></Field>
    </div>
    <div>
      <Field placeholder="登录密码" v-model="password" :disableClear="true"
             :type="isShowPassword?'text':'password'">
        <i :class="`OAIndexIcon icon-yanjing1 ${isShowPassword?'passwordIcon':'textIcon'}`"
           @click="showPassword"></i>
      </Field>
    </div>
    <div class="top52">
      <mint-button type="primary" size="large" @click="submitLogin">登录</mint-button>
    </div>
    <p class="flex font-middle">
      <span>立即注册</span>
      <span>|</span>
      <span>忘记密码</span>
    </p>
  </div>
</template>

<script>
  import LoginTop from '../../../components/login/LoginTop.vue'
  import {Field, Button} from 'mint-ui'
  import Api from '../../../api'
  import Util from '../../../util'
  import axios from 'axios'
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
    methods: {
      showPassword(){
        this.isShowPassword = !this.isShowPassword;


        //test
        let accessToken = Util.login.getAccessToken();
        Api.userApi.getUserInfo({access_token: accessToken}).then(res => {
          console.log('用户信息->', res);
          Util.user.setUserInfo(res)
          console.log('缓存中的信息-->', Util.user.getUserInfo())
        }).catch(err => {
          console.log(err)
        })

      },
      submitLogin(){
        let content = {ticket:this.password,account:this.userName,type:'pwd'};
        content = {content:JSON.stringify(content)};
        Api.loginApi.getLoginAes(content).then(res => {
          let data = {clientId:Config.clientId,s:res};
          console.log('getLoginAes-->', res);
          console.log('data------->',data);
          Api.loginApi.userLogin(data).then(res=>{
            console.log('TOKEN->',res)
            Util.login.setToken(res);
          })
        })


      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .padding-container {
    background: #fff;
    min-height: 100%;
    /*position: relative;*/
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
