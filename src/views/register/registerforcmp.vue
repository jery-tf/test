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
      <mt-field label="企业名称"  v-model="entname"></mt-field>
    </div>
    <div class="registcmp">
      <mt-field label="统一社会信用代码" v-model="uniscid"></mt-field>
    </div>
    <div class="registcmp">
      <mt-field label="法定代表人" v-model="legalname"></mt-field>
    </div>
    <div class="registcmp">
      <mt-field label="身份证号码"  v-model="legalid"></mt-field>
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
        entname:'',
        legalname:'',
        uniscid:'',
        legalid:''
      }
    },
    components: {'mint-button': Button, },
    created() {

    },
    methods: {
      validation(){
//        if(this.entname==''){
//            Toast('请输入企业名称')
//          return
//        }
//        else if(this.uniscid==''){
//          Toast('请输入18位统一社会信用代码')
//        }
//        else if(!(/^[0-9A-Z]{18}$/).test(this.uniscid)){
//          Toast("请输入有效的18位有效社会统一信用代码")
//          return;
//        }
//        else if(this.legalname==''){
//          Toast('法定代表人名称')
//        }
//        else if(this.legalid==''){
//          Toast('请输入身份证号')
//        }
//        this.uniscid=this.uniscid
//        console.log(this.uniscid)
//        let params={entname:this.entname,legalName:this.legalname,legalIdcard:this.legalid}
//        Api.registerApi.seecompany(this.uniscid,params).then(res=>{
//          console.log(res)
//        })




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
          .mint-field-core{
            font-size: 0.24rem;
            color: #333;
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
