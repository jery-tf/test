/**
* Created by Administrator on 2017/10/9.
*/

<template>
<div class="box-margin-top">
  <div class="caution  padding-container-lr">请输入需要找回账号的真实姓名和身份证号码</div>
 <div class="idpost">
   <mt-field label="姓名" class="ipt" v-model="pname"></mt-field>
 </div>
  <div class="idpost">
    <mt-field label="身份证号码" class="ipt" v-model="idcard"></mt-field>
  </div>
  <a href="javascript:void(0)" @click="changepwd()" v-bind:disabled="dis">
    <Btncommon msg="下一步" ></Btncommon>
  </a>

  <!--<div class=" padding-container-lr box-margin-top">-->
    <!--<mint-button type="primary" size="large" @click="changepwd">下一步</mint-button>-->
  <!--</div>-->
</div>
</template>

<script>
 import Btncommon from 'components/btncommon/BtnCommon'
//import {Field, Button} from 'mint-ui'
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import  qs from "qs"
    export default {
        name: 'forgetpwd',
      components: {Btncommon},
        data() {
            return {
              pname:"",
              idcard:"",
              dis:true
            }
        },
        created() {

        },
        methods: {
          changepwd(){
            let postId = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
            if (this.pname == '') {
              Toast("请输入姓名");
              return
            }
            else if (!postId.test(this.idcard)) {
              Toast("请输入合法的身份证号")
              return
            }
            Api.registerApi.legal(
              qs.stringify({
                idcard:this.idcard,//身份证号
                name:this.pname, //姓名
              }),
              {Headers:{'content-type':'application/x-www-form-urlencoded'}}
            ).then(res => {
              console.log(res)
//              if (res.code == "703" ||res.code=='2') {
//                console.log(res)
//                Toast('身份证与姓名不符，请重新输入')
//              }
//              else if(res.code=="200"){
                Api.registerApi.uableRegi(
                  {
                    type:"idcard",
                    idcard:this.idcard,//身份证号
                  },
                  {Headers:{'content-type':'application/x-www-form-urlencoded'}}
                ).then(res => {
                  if (res.code == "205") {
                    console.log(res)
                    Util.other.setLocalStorage('newPersonId',res.data[0]);
                    this.dis=true;
                    this.$router.push("/setting/forgetpwdnum")
                    return
                  }else if(res.code =="200"){
                    Toast(res.info)
                    this.dis=false
                  }
                })
//              }
            })
          }


        }

    }
</script>

<style  lang="less" rel="stylesheet/less">
  .caution{
    width: 7.2rem;
    height: 0.74rem;
    line-height: 0.74rem;
    font-size: 0.24rem;
    color: #333333;
    background-color: #ffeeee;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    margin-bottom: 0.19rem;
  }
 .idpost{
   .mint-field {
     .mint-cell-title{
       width: 1.6rem;
     }
   }
   .ipt{
     border-bottom: 1px solid #ddd;
     .mint-cell-text{
       color: #333;
       font-size: 0.28rem;
     }
     .mint-field-core{
       font-size: 0.28rem;
       color: #666;
     }
   }
 }
</style>
