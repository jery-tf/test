<template>
  <div id="tmpl" class="box-margin-top">
    <mt-field label="请输入原始密码" class="ipt" :type="ablesee?'text':'password'" v-model="oldpwd">
      <span class="OAIndexIcon C2-yanjing1" @click="isshow()"></span>
    </mt-field>
    <div class="sect">
      <mt-field label="请输入新密码" class="ipt" :type="ablesee1?'text':'password'" v-model="password1">
        <span class="OAIndexIcon C2-yanjing1" @click="isshow1()"></span>
      </mt-field>
      <mt-field label="请再次输入新密码" class="ipt" :type="ablesee2?'text':'password'" v-model="password2">
        <span class="OAIndexIcon C2-yanjing1" @click="isshow2()"></span>
      </mt-field>
      <div class="top52 reseto">
        <mint-button type="primary" size="large" @click.native="handleClick">保存</mint-button>
      </div>
    </div>
  </div>
</template>
<script>
  import {Field, Button} from 'mint-ui'
import { Toast } from 'mint-ui';
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import  qs from "qs"
export default {
  components:{'mint-button': Button},

  data() {
    return {
      oldpwd: '',
      ablesee: false,
      ablesee1: false,
      ablesee2: false,
      popupVisible: false,
      password1: "",
      password2: '',
    }
  },
  methods: {
    isshow() {
      this.ablesee = !this.ablesee
    },
    isshow1() {
      this.ablesee1 = !this.ablesee1
    },
    isshow2() {
      this.ablesee2 = !this.ablesee2
    },
    handleClick: function() {
      if(this.oldpwd==""){
        Toast("请输入原始密码");
        return;
      }
      else if(this.password1==""){
          Toast("新密码输入不能为空");
          return;
      }
      else if(this.password2==""){
        Toast("新密码输入不能为空")
        return
      }
      else if (this.password1 != this.password2) {
        Toast({
          message: '两次密码输入不一致，请重新输入',
          position: 'top',
        });
        return
      }
      this.userId =JSON.parse(localStorage.getItem('userInfo')).userId;
      let params={password:this.password1}
      let paramsfor={userpwd:this.userId,password:this.oldpwd}
      Api.checkPwdApi.searchPwd(paramsfor).then(res=>{
        if(res==false){
              Toast("原密码错误，请重新输入")
          return;
        }else if(res==true){
          Api.checkPwdApi.checkPwd(this.userId,params).then(res=>{
               Toast('修改密码成功，即将跳转到首页')
            Util.login.clearUserInfo();
            this.$router.push('/mySelfInfo')
          })
        }

      })

    },

  }
}
</script>
<style  lang='less'>
#tmpl {
  .C2-yanjing1 {
    display: block;
    width: 0.33rem;
    height: 0.24rem;
    font-size: 0.24rem;
    color: #11b7f3
  }
  .ipt {
    width: 7.2rem;
    height: 0.98rem;
    line-height: 0.98rem;
    font-size: 0.28rem;
    color: #333;
    box-sizing: border-box;
    .mintui-field-error {
      content: ""
    }
    .mint-cell-wrapper {
      background-image: none;
      padding: 0 0.24rem;
    }
    .mint-cell-title {
      color: #333;
      font-size: 0.28rem;
      width: 2.6rem;
      margin-right: 0.3rem;
    }
    .mint-field-core {
      font-size: 0.28rem;
      color: #99666666;
    }
  }
  .sect {
    margin-top: 0.2rem;
    .mint-cell:last-child {
      background-image: none;
    }
    .mint-cell:first-child {
      border-bottom: 1px solid #d9d9d9
    }
  }
  .reseto{
    margin:0.24rem 0 0 0.24rem
  }
}

/*.mint-button {*/
  /*margin: 0.5rem 0.24rem 0;*/
/*}*/

.mint-button--large {
  width: 6.72rem;
  height: 0.93rem;
  border-radius: 0.1rem;
}

.mint-button-text {
  font-size: 0.3rem;
}
</style>
