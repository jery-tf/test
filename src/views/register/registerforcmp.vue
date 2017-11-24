<template>
  <div class="registforcmp box-margin-top">
    <ul>
      <li class="peoselect">验证企业</li>
      <li>→</li>
      <li >基本信息</li>
      <li>→</li>
      <li>完成注册</li>
    </ul>
    <div class="registcmp other">
      <mt-field label="企业名称"  ></mt-field>
    </div>
    <div class="registcmp">
      <mt-field label="统一社会信用代码"></mt-field>
    </div>
    <div class="registcmp">
      <mt-field label="法定代表人" ></mt-field>
    </div>
    <div class="registcmp">
      <mt-field label="身份证号码"  ></mt-field>
    </div>
    <div class="checkbox">
      <mint-button type="primary" size="large" @click="validation">验证</mint-button>
    </div>
  </div>
</template>
<script>
  import {Field, Button} from 'mint-ui'
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import qs from "qs"
  import {Toast} from 'mint-ui';

  export default {
    data() {
      return {
      }
    },
    components: {'mint-button': Button, },
    created() {

    },
    methods: {
      validation(){
        this.$router.push("/register/registerinfocmp");
      }
      //      企业注册的正则验证非空验证以及请求接口
    },
  }
</script>
<style lang='less'>
  .registforcmp{
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
            width:2.44rem;
            font-size: 0.24rem;
          }
        }

      }
    }
    .checkbox{
      margin: 0.24rem;
      .mint-button--primary{
        background-color: #12b7f5;
      }
    }
    .peoselect {
      color: #f56262;
    }
    .other {
      margin-top: 0.24rem;
    }
  }
</style>
