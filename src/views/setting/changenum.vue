<template>
  <div class="changnum">
    <div class="warming">
      <p>
        <i class="OAIndexIcon C2-zhuyi1"></i>为确保是你本人操作，请完成以下验证</p>
      <p class="checknum">我们已发送了校验码到你的手机:</p>
      <span>{{totelName}}</span>
    </div>
    <div class="yan">
      <!--<input type="text" class=" padding-container-lr ipt" placeholder="请输入验证码">-->
      <mt-field label="验证码" placeholder="请输入短信验证码" v-model="vcode"></mt-field>
      <div class="common">
        <span class="btn" @click="sendBtn" v-show="isshow">获取验证码</span>
        <span class="btn" v-show="!isshow">{{time}}秒后重新发送</span>
      </div>
    </div>
    <div class="top52">
      <mint-button type="primary" size="large" @click="forman">下一步</mint-button>
    </div>
  </div>

</template>
<script>
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import Btncommon from 'components/btncommon/BtnCommon'
  import {Toast} from 'mint-ui';
  import qs from "qs"
  import {Field, Button} from 'mint-ui'
export default {
  data(){
    return{
      telphone:'',
      vcode:'',
      isshow: true,
      time:60

    }
  },
 components:{'mint-button': Button},
  methods:{
    sendBtn() {
      let postId = /^1[34578]\d{9}$/;
      if (!postId.test(this.telphone)) {
        Toast('手机号码有误哦')
        return
      }
      this.mathRadom = Math.floor((Math.random() * 9000 + 1000))
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
    forman(){
      if(this.vcode==''){
        Toast('验证码不能为空')
      }
      else{
        console.log(this.getradom)
        Api.otherApi.senvCode(
          {
            content: this.mathRadom,//验证码
            phone: this.telphone, //手机号码
            type: 'dev',//type类型
          },
        ).then(res => {
          console.log(res)
          this.num = res.content
          if (this.num != this.vcode) {
            Toast('验证码不一致，请重新输入')
          }else{
            console.log('验证成功')
            this.$router.push("/setting/newphone")
          }

        })
      }


    }
  },
  computed:{
    totelName(){
      const telphone= JSON.parse(localStorage.getItem('userInfo')).phone;
      this.telphone=telphone
      let start = telphone.slice(0,3);
      let end = telphone.slice(-2);
      return `${start}******${end}`;
    }
  }
}
</script>
<style lang="less" scoped>
  .changnum{
    .warming {
      width: 7.2rem;
      height: 2.72rem;
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

  }

</style>
