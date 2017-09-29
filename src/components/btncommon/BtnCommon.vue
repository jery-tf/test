<template>
  <div>
       <button class="mint-button mint-button--primary mint-button--large ">
      <!---->
      <label class="mint-button-text">{{msg}}</label>
    </button>
  </div>
</template>
<script>
export default {
  props:['msg'],
  data(){
    return{
    }
  }

}
</script>
<style lang="less" scoped>
  .mint-button{
    width: 6.68rem;
    height: 0.94rem;
    line-height: 0.94rem;
    color: #12b7f5;
    margin-left: 0.24rem;
    margin-top: 0.26rem;
    border-radius: 10px;
  }
  .mint-button-text{
    font-size: 0.32rem;
    color: #fff;
  }
</style>
