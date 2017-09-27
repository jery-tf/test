<template>
  <div>
    <div class="padding-container-lr changephone">修改手机号码</div>
    <mt-field placeholder="手机号码" type="tel" label="手机号码" class="padding-container-lr"> </mt-field>
    <router-link to="/setting/lastphone" class="mint-button mint-button--primary mint-button--large ">    
      <label class="mint-button-text">下一步</label>
    </router-link>
  </div>
</template>
<script>

export default {

}
</script>
<style lang="less" >
.changephone {
  width: 7.2rem;
  height: 0.92rem;
  line-height: 0.92rem;
  font-size: 0.24rem;
  color: #999;
}

.mint-button {
  margin: 0 0.24rem;
  margin-top: 0.3rem;
}

.mint-button--large {
  width: 6.72rem;
  height: 0.93rem;
  line-height: 0.93rem;
  border-radius: 10px;
}

.mint-button-text {
  font-size: 0.3rem;
}

.mint-cell-wrapper {
  padding: 0;
  font-size: 0.28rem;
  color: #333;
  width: 7.2rem;
  height: 0.98rem;
  .mint-field-core {
    padding-left: 0.5REM;
    padding-top: 0.07rem;
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: #666;
    }
  }
}
.mint-field .mint-cell-title{
  width: 1.12rem;
  margin-right: 0.48rem;
}
</style>
