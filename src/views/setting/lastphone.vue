<template>
  <div>
    <div class="warming">
      <p class="checknum">我们已发送了校验码到你的手机:</p>
      <span>{{totelName}}</span>
    </div>
    <div class="yan">
      <input type="text" class=" padding-container-lr ipt" placeholder="请输入验证码">
      <button class="btn">52秒后重新获取</button>
    </div>
    <div class="top52 box-margin-top">
      <mint-button type="primary" size="large" @click="successchange">保存</mint-button>
    </div>
  </div>
</template>
<script>
  import {Button} from 'mint-ui'
  import Util from '../../util'
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import axios from 'axios'
  import qs from "qs"
  export default {
    data() {
      return {
        data: '18684892246'
      }
    },
    components: {'mint-button': Button},
    methods: {
      successchange() {
        this.userId =JSON.parse(localStorage.getItem('userInfo')).userId;
        let str = Util.other.getLocalStorage('newphone')
        Api.checkPwdApi.changeNum(this.userId,{
          phone:str
        }).then(res=>{
         if(res.code=200){
           Toast("修改手机号码成功,即将跳转到首页")
           //清除用户相关信息
           Util.login.clearUserInfo();
           this.$router.push("/mySelfInfo")
         }
        })
      }
    },
    computed: {
      totelName() {
        let str = Util.other.getLocalStorage('newphone')
        console.log('--->'+str)
        let start = str.slice(0, 3);
        let end = str.slice(-2);
        return `${start}******${end}`;
      }
    }
  }
</script>
<style lang="less" scoped>
  .warming {
    width: 7.2rem;
    height: 2.2rem;
    line-height: 0.5rem;
    text-align: center;
    padding-top: 0.55rem;
    font-size: 0.24rem;
    color: #999;
    .C2-zhuyi1 {
      font-size: 0.28rem;
      color: #12B7F5;
      margin-right: 0.1rem;
    }
    .checknum {
      margin-bottom: 0.55rem;
    }
    span {
      font-size: 0.4rem;
      color: #333;
    }
  }

  .yan {
    width: 7.2rem;
    height: 1.07rem;
    line-height: 1.07rem;
    background-color: #fff;
    margin-top: 0.56rem;
    margin-bottom: 0.26rem;
    .ipt {
      border: 0;
      outline: 0;
      height: 0.8rem;
      font-size: .28rem;
      color: #aaa;
      width: 4.5rem;
    }
    .btn {
      border: 1px solid #a0a0a0;
      outline: 0;
      background-color: #f8f8f8;
      width: 1.82rem;
      height: 0.68rem;
      vertical-align: 20%;
      border-radius: 10px;
      font-size: 0.2rem;
    }
  }

  .mint-button {
    margin: 0 0.24rem;
  }

  .mint-button--large {
    width: 6.72rem;
    height: 0.93rem;
    border-radius: 10px;
  }

  .mint-button-text {
    font-size: 0.3rem;
  }
</style>
