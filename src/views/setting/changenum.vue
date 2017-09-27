<template>
  <div>
    <div class="warming">
      <p>
        <i class="OAIndexIcon icon-zhuyi1"></i>为确保是你本人操作，请完成以下验证</p>
      <p class="checknum">我们已发送了校验码到你的手机:</p>
      <span>152*******62</span>
    </div>
    <div class="yan">
      <input type="text" class=" padding-container-lr ipt" placeholder="请输入验证码">
      <button class="btn">52秒后重新获取</button>
    </div>
   <router-link to="/setting/newphone">
      <button class="mint-button mint-button--primary mint-button--large ">
      <!---->
      <label class="mint-button-text">下一步</label>
    </button>
   </router-link>
  </div>
</template>
<script>
export default {

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
  .icon-zhuyi1 {
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
    width: 4.75rem;
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
