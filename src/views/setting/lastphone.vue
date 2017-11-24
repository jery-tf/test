<template>
  <div>
    <div class="warming">
      <p class="checknum">我们已发送了校验码到你的手机:</p>
      <span>{{totelName}}</span>
    </div>
    <div class="yan">
      <mt-field label="验证码" placeholder="请输入短信验证码" v-model="vcode"></mt-field>
      <div class="common">
        <span class="btn" @click="sendBtn" v-show="isshow">获取验证码</span>
        <span class="btn" v-show="!isshow">{{time}}秒后重新发送</span>
      </div>
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
        data: '18684892246',
        vcode: '',
        isshow: true,
        time: 60,
        str: ''
      }
    },
    components: {'mint-button': Button},
    methods: {
      sendBtn() {
        let postId = /^1[34578]\d{9}$/;
        if (!postId.test(this.str)) {
          Toast('手机号码有误哦')
          return
        }
        let mathRadom = Math.floor((Math.random() * 9000 + 1000))
        Util.other.setSessionStorage('mathRadom', mathRadom);
        console.log(mathRadom)
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
          this.userId = JSON.parse(localStorage.getItem('userInfo')).userId;
          this.str = Util.other.getLocalStorage('newphone')
          this.getradom = Util.other.getSessionStorage('mathRadom')
          console.log(this.getradom)
          Api.otherApi.senvCode(
            {
              content: this.getradom,//验证码
              phone: this.str, //手机号码
              type: 'dev',//type类型
            },
          ).then(res => {
            console.log(res)
            this.num = res.content
            if (this.num != this.vcode) {
              Toast('验证码不一致，请重新输入')
            } else {
              console.log('验证成功')
              Api.checkPwdApi.changeNum(this.userId, {
                phone: this.str
              }).then(res => {
                if (res.code = 200) {
                  Toast("修改手机号码成功,即将跳转到首页")
                  //清除用户相关信息
                  Util.login.clearUserInfo();
                  this.$router.push("/mySelfInfo")
                }
              })
            }

          })
        }

      }
    },
    computed: {
      totelName() {
        let str = Util.other.getLocalStorage('newphone')
        this.str = str
        console.log('--->' + str)
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
</style>
