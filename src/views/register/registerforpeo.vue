<template>
  <div>
    <ul>
      <li class="peoselect">验证身份</li>
      <li>→</li>
      <li>基本信息</li>
      <li>→</li>
      <li>完成注册</li>
    </ul>
    <div class="ableipt common">
      <em>姓名</em>
      <input type="text" class="idform" v-model="pname">
    </div>
    <div class="ableipt common">
      <em>身份证号码</em>
      <input type="text" class="idform" placeholder="请输入18位身份证号码" v-model="idcard" v-on:blur="changeCount()">
    </div>
    <!--<router-link to="/register/registerinfo">-->
    <button class="btn2" @click="postId()" v-bind:disabled="dis">下一步</button>
    <!--</router-link>-->
  </div>
</template>
<script>
  import Btncommon from 'components/btncommon/BtnCommon'
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import  qs from "qs"
  export default {
    components: {Btncommon},
    data() {
      return {
        pname: '',
        idcard: '',
        dis:false
      }
    },
    methods: {
      changeCount(){
        Api.registerApi.uableRegi(
         {
            type:"idcard",
            idcard:this.idcard,//身份证号
          },
          {Headers:{'content-type':'application/x-www-form-urlencoded'}}
        ).then(res => {
          if (res.code == "100") {
            Toast(res.info);
            this.dis=true
            return
          }else if(res.code =="200"){
            Toast(res.info)
            this.dis=false
            return
          }
        })
      },
      postId() {
        let postId = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
        if (this.pname == '') {
          Toast("请输入姓名");
          return
        }
        else if (!postId.test(this.idcard)) {
          Toast("请输入合法的身份证号")
          return
        }
//        let orderList=[{"pname":this.pname},{"idcard":this.idCard}]{'pname',this.name;"idcard",this.idcard}
        let orderList = {'pname': this.pname, "idcard": this.idcard}
        window.sessionStorage.setItem("orderList", JSON.stringify(orderList))

        Api.registerApi.legal(
          qs.stringify({
            idcard:this.idcard,//身份证号
            name:this.pname, //姓名
          }),
          {Headers:{'content-type':'application/x-www-form-urlencoded'}}
        ).then(res => {
          if (res.code == "703") {
            Toast(res.info)

          }
          else if(res.code=="200"){

            this.$router.push("/register/registerinfo");
          }
        })


      }
    }

  }
</script>
<style scoped lang='less'>
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

  .peoselect {
    color: #f56262;
  }

  .cmp {
    margin: 0.19rem 0;
    width: 7.2rem;
    background-color: #fff;
  }

  .regi,
  .ableipt {
    width: 7.2rem;
    height: 0.97rem;
    line-height: 0.97rem;
    border-top: 1px solid #d9d9d9;
    background-color: #fff;
    .ipt {
      .icon-next {
        float: right;
      }
    }
  }

  .idform {
    border: 0;
    outline: 0;
    width: 3rem;
    height: 0.8rem;
    font-size: 0.23rem;
    color: #333;
  }

  .common {
    font-size: 0.23rem;
    color: #333;
    padding-left: 0.24rem;
  }

  em {
    display: inline-block;
    font-style: normal;
    width: 1.95rem;
  }

  .telp {
    margin-top: 0.19rem;
    background: #fff;
  }

  .yan {
    width: 7.2rem;
    height: 1.07rem;
    line-height: 1.07rem;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    strong {
      font-weight: 400;
      display: inline-block;
      width: 1.88rem;
    }
    .ipt {
      border: 0;
      outline: 0;
      height: 0.8rem;
      font-size: .28rem;
      color: #aaa;
      width: 2.36rem;
    }
    .btn {
      border: 1px solid #a0a0a0;
      outline: 0;
      background-color: #f8f8f8;
      width: 1.82rem;
      height: 0.68rem;
      vertical-align: 20%;
      border-radius: 10px;
      font-size: 0.2rem;
    }
  }

  .btn2 {
    width: 6.68rem;
    height: 0.94rem;
    line-height: 0.94rem;
    color: #fff;
    font-size: 0.32rem;
    margin-left: 0.24rem;
    margin-top: 0.24rem;
    border-radius: 10px;
    background-color: #12b7f5;
    border: 0;
    outline: 0;
  }

</style>
