/**
* Created by Administrator on 2017/10/9.
*/

<template>
  <div class="box-margin-top ">
    <div class="checkpwd">
      <mt-field label="输入新密码" v-model="oldpwd" :disableClear="true"
                :type="isShowPassword?'text':'password'">
        <i :class="`OAIndexIcon C2-yanjing1 ${isShowPassword?'passwordIcon':'textIcon'}`"
           @click="showPassword"></i>
      </mt-field>
    </div>
    <div class="checkpwd">
      <mt-field label="确认新密码" v-model="newpwd" :disableClear="true"
                :type="isShowPasswordtwo?'text':'password'">
        <i :class="`OAIndexIcon C2-yanjing1 ${isShowPasswordtwo?'passwordIcon':'textIcon'}`"
           @click="showPassword1"></i>
      </mt-field>
    </div>
    <div class="top52">
      <mint-button type="primary" size="large" @click="restPwd">提交</mint-button>
    </div>
  </div>
</template>

<script>
  import { Button} from 'mint-ui'
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import  qs from "qs"

  export default {
    name: 'settingpwd',
    components:{'mint-button': Button},
    data() {
      return {
        oldpwd: "",
        newpwd: "",
        isShowPassword: false,
        isShowPasswordtwo: false
      }
    },
    created() {

    },
    methods: {
      showPassword() {
        this.isShowPassword = !this.isShowPassword;
      },
      showPassword1() {
        this.isShowPasswordtwo = !this.isShowPasswordtwo;
      },
      restPwd(){
        this.userId = JSON.parse(localStorage.getItem('newPersonId')).id
        console.log( this.userId)
        let params={password:this.oldpwd}
        Api.checkPwdApi.checkPwd(this.userId,params).then(res=>{
          Toast("设置密码成功，即将跳转")
        })
      }
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  .mint-cell-wrapper {
    width: 7.2rem;
    height: 0.98rem;
  }

  .mint-field-core {
    font-size: 0.28rem;
    color: #999;
  }

  .checkpwd {
    .mint-field {
      .mint-cell-title {
        font-size: 0.28rem;
        color: #333;
        width: 1.7rem;
      }
    }

    .passwordIcon {
      color: #31C0F6;
      font-size: 0.32rem;
    }

    .textIcon {
      color: #ccc;
      font-size: 0.32rem;
    }
  }
  .mint-button {
    margin: 0 0.24rem;
    margin-top: 0.24rem ;
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
