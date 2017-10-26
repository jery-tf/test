<template>
  <div>
    <div class="warming">
      <p>
        <i class="OAIndexIcon C2-zhuyi1"></i>为确保是你本人操作，请完成以下验证</p>
      <p class="checknum">我们已发送了校验码到你的手机:</p>
      <span>{{totelName}}</span>
    </div>
    <div class="yan">
      <input type="text" class=" padding-container-lr ipt" placeholder="请输入验证码">
      <button class="btn">52秒后重新获取</button>
    </div>
   <!--<router-link to="/setting/newphone">-->
       <!--<Btncommon msg="下一步" @click="forman"></Btncommon>-->
   <!--</router-link>-->
    <router-link to="/setting/newphone">
    <div class="top52">
      <mint-button type="primary" size="large" @click="forman">下一步</mint-button>
    </div>
    </router-link>
  </div>

</template>
<script>
  import { Button} from 'mint-ui'
export default {
  data(){
    return{
      telphone:''
    }
  },
 components:{'mint-button': Button},
  methods:{
    forman(){

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
  .ipt {
    border: 0;
    outline: 0;
    height: 0.8rem;
    font-size: .28rem;
    color: #aaa;
    width: 4.5rem;
  }
  .btn {
    border: 1px solid #ccc;
    outline: 0;
    background-color: #f8f8f8;
    width: 1.82rem;
    height: 0.68rem;
    vertical-align: 20%;
    border-radius: 5px;
    font-size: 0.2rem;
    color: #666;
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
