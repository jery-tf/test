<template>
  <div>
    <ul>
      <li class="peoselect">验证身份</li>
      <li>→</li>
      <li>基本信息</li>
      <li>→</li>
      <li>完成注册</li>
    </ul>
    <div class="regi padding-container-lr common">
      <em>姓名</em>
      <span class="ipt">
        陈楞杰
      </span>
    </div>
    <div class="ableipt common">
      <em>身份证号码</em>
      <input type="text" class="idform" placeholder="请输入18位身份证号码">
    </div>
    <router-link to="/register/registerinfo">
     <Btncommon msg="下一步"></Btncommon>
    </router-link>
  </div>
</template>
<script>
import Btncommon from 'components/btncommon/BtnCommon'
export default {
 components:{Btncommon},
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
