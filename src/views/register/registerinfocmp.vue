<template>
  <div class="registforcmpa">
    <ul>
      <li>验证企业</li>
      <li>→</li>
      <li class="peoselect">设置密码</li>
      <li>→</li>
      <li>完成注册</li>
    </ul>
    <div class="registcmp other">
      <mt-field label="手机号码" v-model="telp" ></mt-field>
    </div>
    <div class="registcmp">
      <mt-field label="验证码"  placeholder="请输入短信验证码"></mt-field>
      <div class="common">
        <span class="btn" @click="sendBtn" v-show="isshow">获取验证码</span>
        <span class="btn"  v-show="!isshow">{{time}}秒后重新发送</span>
      </div>
    </div>
    <div class="registcmp other">
      <mt-field label="密码"  v-model="passwordfirst"></mt-field>
    </div>
    <div class="registcmp">
      <mt-field label="确认密码"  v-model="passwordsecond" ></mt-field>
    </div>
    <div class="checkbox">
      <mint-button type="primary" size="large" @click="inputgo">提交</mint-button>
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
  import  qs from "qs"
  import {Field, Button} from 'mint-ui'
  export default {
    components: {'mint-button': Button, },
    data() {
      return {
        telp: "",
        passwordfirst: "",
        passwordsecond:"",
        time:5,
        isshow:true
      }
    },
    created() {
      //获取上个页面传过来的姓名和身份证号
//      this.pname = JSON.parse(sessionStorage.getItem('orderList')).pname
//      this.idcard = JSON.parse(sessionStorage.getItem('orderList')).idcard
//      console.log(this.pname)
//      console.log(this.idcard)
    },
    methods: {
      sendBtn(){
        let postId = /^1[34578]\d{9}$/;
        if(!postId.test(this.telp)){
          Toast('手机号码有误哦')
          return
        }
        this.isshow=false
        this.time=5;
        let resend =setInterval(()=>{

          if(this.time!=0){
            this.time--
          }
          else{
            clearInterval(resend)
            this.isshow=true
          }
        },1000)
      },
      inputgo() {
        console.log(this.idcard,this.telp)
        //判断手机号码是否为11位有效手机号码
        let telphone =/^1[34578]\d{9}$/
        if(!(/^1[34578]\d{9}$/.test(this.telp))){
          Toast("请输入有效的11位手机号码")
          return;
        }
        //判断密码是否输入以及两次密码是否相同
        if(this.passwordfirst==""){
          Toast("请输入密码")
        }
        else if(this.passwordsecond==""){
          Toast("请再次输入密码")
        }
        else if(this.passwordfirst != this.passwordsecond){
          Toast("两次输入的密码不一致，请重新输入")
        }
        Api.registerApi.registerGo(
          qs.stringify({
            idcard:this.idcard,//身份证号
            name:this.pname, //姓名
            pwd:this.passwordfirst,//密码
            phone:this.telp, //手机号码
            grade:"1", // 认证级别：实名认证
          }),
          {Headers:{'content-type':'application/x-www-form-urlencoded'}}
        ).then(res => {
          if (res.code == "200") {
            Toast("注册成功")

            this.$router.push("/register/registerfinish")
          }else{
            Toast('该身份号已注册')
          }
        })
      },
      //离开页面时清除定时器
      destroyed(){
        clearInterval(resend)
      }
    },

  }
</script>
<style  lang='less'>
  .registforcmpa{
    ul {
      width: 6.4rem;
      padding-left: 0.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background-color: #fff;
      li {
        float: left;
        padding-right: 0.48rem;
        font-size: 0.26rem;
      }
    }
    .registcmp{
      position: relative;
      padding-left: 0.28rem;
      background-color: #fff;
      border-bottom: 1px solid #d9d9d9;
      width: 7.2rem;
      height: 1.02rem;
      line-height: 1.02rem;
      .mint-cell{
        min-height: 0;
        height: 1rem;
        line-height: 1rem;
        .mint-cell-wrapper{
          height: 1rem;
          line-height: 1rem;
          padding:0;
          .mint-cell-title{
            width:1.44rem;
            font-size: 0.24rem;
          }
        }

      }
    }
    .common{
      position: absolute;
      top:0.15rem;
      right:0.24rem;
      width: 1.81rem;
      height: 0.67rem;
      line-height:0.67rem;
      border-radius:5px;
      font-size: 0.2rem;
      color: #666;
      text-align: center;
      border: 1px solid #dcdcdc;
    }
    .checkbox{
      margin: 0.24rem;
      .mint-button--primary{
        background-color: #12b7f5;
      }
    }
    .other{
      margin-top: 0.24rem;
    }
    .peoselect {
      color: #f56262;
    }
  }


</style>
