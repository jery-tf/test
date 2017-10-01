<template>
  <div>
    <ul>
      <li>验证身份</li>
      <li>→</li>
      <li class="peoselect">基本信息</li>
      <li>→</li>
      <li>完成注册</li>
    </ul>
    <div class="ableipt common">
      <em>手机号码</em>
      <input type="text" class="idform" v-model="telp">
    </div>

    <div class="yan common">
      <strong>验证码</strong>
      <input type="text" class=" ipt" placeholder="请输入短信验证码">
      <button class="btn">52秒后重新获取</button>
    </div>
    <div class="ableipt common secret">
      <em>密码</em>
      <input type="text" class="idform" v-model="secr">
    </div>
    <div class="ableipt common">
      <em>确认密码</em>
      <input type="text" class="idform">
    </div>
    <router-link to="/register/registerfinish">
      <button @click="inputgo()">提交</button>
    </router-link>
  </div>
</template>
<script>
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import { axiosPost } from '../../api/baseApi'
import Btncommon from 'components/btncommon/BtnCommon'
export default {
 components:{Btncommon},
  data(){
    return{
        telp:"",
        secr:""
    }
  },
  created(){
    this.getitems();

  },
  methods:{
    getitems(){
      let pname=window.sessionStorage.getItem("pname");
      let idcard=window.sessionStorage.getItem("idcard");
      console.log(idcard)
    },
    inputgo(){
        let cont={idCard:this.idcard,name:name,pwd:this.secr,phone:this.telp};
        let url="/xndt/svp/v1/userreg"
        axiosPost(url,cont).then((res)=>{
              if(res.code=="200"){
                console.log(res.info)
              }
        })
    }
  },

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
    width: 2.76rem;
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
    color: #666;
  }
}

.secret {
  margin-top: 0.18rem;
}

.mint-button {
  margin: 0.26rem 0.24rem;
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
