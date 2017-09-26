<template>
  <div >
      <ul>
        <li class="peoselect">验证身份</li>
        <li>→</li>
        <li>基本信息</li>
        <li>→</li>
        <li>完成注册</li>
      </ul>
     <div v-for="item in list">
        <span class="padding-container-lr peoid">{{item.name}}</span> <br>
        <input type="text" :placeholder="item.pname" class="ipt" >
     </div>
    <router-link to="/register/registerinfo"><button class="mint-button mint-button--primary mint-button--large "><!----> <label class="mint-button-text">提交</label></button></router-link>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[
        {'name':'姓名','pname':'请输入真实姓名'},
        {'name':'身份证号码','pname':'请输入18位身份证号码'},
      ]
    }
  }
}
</script>
<style scoped lang='less'>
    ul{
      width: 6.4rem;
      padding-left: 0.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background-color: #fff;
      li{
        float: left;
        padding-right: 0.48rem;
        font-size: 0.26rem;
      }
    }
    .peoselect{
      color: #f56262;
    }
    .peoid{
     margin-top: 0.28rem;
     margin-bottom: 0.15rem;
     display: inline-block;
     font-size: 0.26rem;
     color: #333;
    }
    .ipt{
      margin-left: 0.24rem;
      width: 6.4rem;
      height: 0.87rem;
      border: 0;
      outline: 0;
      font-size: 0.29rem;
      color: #cbcbcb;
      padding-left: 0.26rem;
      border: 1px solid #e1e1e1
    }
    .mint-button{
    margin: 0 0.24rem;
}
.mint-button--large{
  margin-top: 0.39rem;
    width: 6.72rem;
    height: 0.93rem;
    border-radius: 10px;
}
.mint-button-text{
    font-size: 0.3rem;
}
</style>
