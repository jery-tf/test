<template>
  <div>
       <button class="mint-button mint-button--primary mint-button--large">
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
  },
 methods:{
//   ppp(idCard){
//     let postId=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/i;
//     if(!postId.test(idCard)){
//       console.log(idCard)
////       alert("请输入的合法身份证 ");
//       return
//     }
//     console.log(123)
//     this.$router.push("/register/registerinfo")
//   }
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
    border-radius: 0.1rem;
  }
  .mint-button-text{
    font-size: 0.32rem;
    color: #fff;
  }
</style>
