<template>
  <div class="tmpl">
    <div class="headport padding-container-lr">
      头像
      <span class="OAIndexIcon icon-yonghu21"></span>
    </div>
    <div class="pname">
      <div class="adminpname">
        用户名
        <span class="">陈主任</span>
      </div>
    </div>
    <div class="pname address">
      <div class="adminpname">
        手机号码
        <span class="">15899662258</span>
      </div>
    </div>
    <div class="pname padding-container-lr">
      地址管理
      <span class="OAIndexIcon icon-next"></span>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" scoped>
  .tmpl {
    margin-top: 0.2rem;
    .headport {
      width: 7.2rem;
      height: 1.6rem;
      line-height: 1.6rem;
      font-size: 0.32rem;
      color: #333;
      background-color: #fff;
      span {
        float: right;
      }
      .icon-yonghu21 {
        font-size: 1.01rem;
        color: #ccc
      }
    }
    .pname {
      .adminpname {
        margin: 0 0.24rem;
        border-top: 1px solid #d9d9d9;
      }
      background-color: #fff;
      width: 7.2rem;
      height: 0.97rem;
      line-height: 0.97rem;

      span {
        float: right;
        font-size: 0.28rem;
        color: #c2c2c2;
      }
      .icon-next {
        color: #cbcbcb;
      }
    }
  }

  .address {
    margin-bottom: 0.19rem
  }


</style>
