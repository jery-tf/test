/**
* Created by Administrator on 2017/10/23.
*/

<template>
    <div class="box-margin-top regardto ">
       <img src="../../assets/img/logo.png" alt="" class="imgs">
      <p class="wx">湖南政务公众号</p>
      <div class="qrcode">
        <img src="../../assets/img/code.png" alt="" class="code">
      </div>
      <span>扫描二维码，关注湖南政务微信公众号</span>
      <p>Copyright 2017</p>
      <p>湖南政务版权所有</p>
    </div>
</template>

<script>
    export default {
        name: 'regardto',
        components: {},
        data() {
            return {}
        },
        created() {

        },
        methods: {}

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .regardto{
      width: 7.2rem;
      margin-top: 0.6rem;
      text-align: center;
      imgs{
        width: 1.28rem;
        height: 1.28rem;
        border-radius: 10px;
      }
      .wx{
        margin-top: 0.32rem;
        margin-bottom: 0.64rem;
        font-size: 0.21rem;
        color: #999;
      }
      .qrcode{
        width: 2.4rem;
        height: 2.4rem;
        margin: 0 auto;
        margin-bottom: 0.66rem;
        .code{
          width: 2.4rem;
          height: 2.4rem;
        }
      }
      span{
        font-size: 0.24rem;
        color: #666;
        margin-bottom: 2rem;
        display: inline-block;
      }
      p{
        font-size: 0.21rem;
        color: #999;
        line-height: 0.4rem;
      }
    }
</style>
