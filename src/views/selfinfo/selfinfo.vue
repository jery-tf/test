<template>
  <div class="tmpl">
    <div class="headport padding-container-lr">
      头像
        <img src="../../assets/img/hport.png" alt="">
    </div>
    <div class="pname">
      <div class="adminpname">
        用户名
        <span class="">{{username}}</span>
      </div>
    </div>
    <div class="pname address">
      <div class="adminpname">
        手机号码
        <span class="">{{telphone}}</span>
      </div>
    </div>
    <div class="pname padding-container-lr">
      地址管理
      <span class="OAIndexIcon icon-next"></span>
    </div>
  </div>
</template>
<script>
  import  Util from '../../util'
  export default {
    data(){
      return{
          telphone:'',
        username:""
      }
    },
    created(){
      this.getitems()
    },
    methods:{
        getitems(){
          const telphone= JSON.parse(sessionStorage.getItem('userInfo')).phone;
          this.telphone=telphone
          const username= JSON.parse(sessionStorage.getItem('userInfo')).name;
          this.username=username
        }
    }

  }
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
        img{
          width: 1.01rem;
          height: 1.01rem;
          display: inline-block;
          position: absolute;
          top:0.5rem;
          right: 0.24rem;
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
