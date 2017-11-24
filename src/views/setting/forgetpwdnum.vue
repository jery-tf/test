/**
* Created by Administrator on 2017/10/9.
*/

<template>
  <div class="box-margin-top newphone">
    <div class="verify">
      <span>已发送验证码短信到</span>
      <p>135*****044</p>
    </div>
    <div class="yan">
      <mt-field label="验证码" placeholder="请输入短信验证码" v-model="vcode"></mt-field>
      <div class="common">
        <span class="btn" @click="sendBtn" v-show="isshow">获取验证码</span>
        <span class="btn" v-show="!isshow">{{time}}秒后重新发送</span>
      </div>
    </div>
    <div class="top52 box-margin-top">
      <mint-button type="primary" size="large" @click="successchange">提交</mint-button>
    </div>

  </div>
</template>

<script>
  import {Field, Button} from 'mint-ui'
  import Util from '../../util'
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import axios from 'axios'
  import qs from "qs"
  export default {
    name: 'forgetpwdnum',
    components: {'mint-button': Button},
    data() {
      return {
        vcode: '',
        isshow: true,
        time: 60,
      }
    },
    created() {

    },
    methods:{
      sendBtn() {
        let postId = /^1[34578]\d{9}$/;
        this.mathRadom = Math.floor((Math.random() * 9000 + 1000))
        console.log(this.mathRadom)
        this.isshow = false
        this.time = 60;
        let resend = setInterval(() => {
          if (this.time != 0) {
            this.time--
          }
          else {
            clearInterval(resend)
            this.isshow = true
          }
        }, 1000)
      },
      successchange() {
        if (this.vcode == '') {
          Toast('验证码不能为空')
        }
        else {
          this.str = Util.other.getLocalStorage('newphone')
          Api.otherApi.senvCode(
            {
              content: this.mathRadom,//验证码
              phone: '13574890044', //手机号码
              type: 'dev',//type类型
            },
          ).then(res => {
            console.log(res)
            this.num = res.content
            if (this.num != this.vcode) {
              Toast('验证码不一致，请重新输入')
            }
           else{
              this.$router.push("/setting/settingpwd")
            }
          })
        }

      }
    },
    computed:{
      totelName(){
//        const telphone= JSON.parse(localStorage.getItem('newphone'));
//        console.log(telphone)
//        this.telphone=telphone
//        let start = telphone.slice(0,3);
//        let end = telphone.slice(-2);
//        return `${start}******${end}`;
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .newphone{
    .verify {
      text-align: center;
      width: 7.2rem;
      height: 1.88rem;
      position: relative;
      overflow: hidden;
      /*line-height: 1.88rem;*/
      span {
        font-size: 0.24rem;
        color: #999;
      }
      p {
        padding-top: 0.25rem;
        padding-bottom: 0.55rem;
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
      position: relative;
      .common {
        position: absolute;
        top: 0.15rem;
        right: 0.24rem;
        width: 1.81rem;
        height: 0.67rem;
        line-height: 0.67rem;
        border-radius: 5px;
        font-size: 0.2rem;
        color: #666;
        text-align: center;
        border: 1px solid #dcdcdc;
      }
      .ipt {
        border: 0;
        outline: 0;
        height: 0.8rem;
        font-size: .28rem;
        color: #aaa;
        width: 4.5rem;
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
  }

</style>
