/**
* Created by Administrator on 2017/10/9.
*/

<template>
  <div class="box-margin-top ">
    <div class="verify">
      <span>已发送验证码短信到</span>
      <p>{{totelName}}</p>
    </div>
    <input type="text" class="ipt padding-container-lr" placeholder="请输入验证码">
    <button class="btn">获取验证码</button>
    <router-link to="/setting/settingpwd">
        <Btncommon msg="提交" ></Btncommon>
    </router-link>
  </div>
</template>

<script>
  import Btncommon from 'components/btncommon/BtnCommon'
  import {Field, Button} from 'mint-ui'
  export default {
    name: 'forgetpwdnum',
    components: {Btncommon},
    data() {
      return {
        dis:true,
        telphone:''
      }
    },
    created() {

    },
    computed:{
      totelName(){
        const telphone= JSON.parse(localStorage.getItem('newphone'));
        this.telphone=telphone
        let start = telphone.slice(0,3);
        let end = telphone.slice(-2);
        return `${start}******${end}`;
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
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
    .ipt{
      border: 0;
      outline:0;
      width: 7.2rem;
      height: 1.08rem;
      line-height: 1.08rem;
      font-size: 0.28rem;
      color: #aaa;
    }
    .btn{
      border: 1px solid #ececec;
      background-color: #fefefe;
      border-radius: 0.1rem;
      width: 1.81rem;
      height: 0.67rem;
      line-height: 0.67rem;
      position: absolute;
      top:2.3rem;
      right:0.26rem;
      font-size: 0.2rem;
      color: #666;
      overflow: hidden;
    }

</style>
