/**
* Created by Administrator on 2017/10/12.
*/

<template>
  <div class="company">
      <p>{{data.contents}}</p>
    <span class="datat">注册日期：{{data.time}}</span>
    <span class="star">授权等级：{{data.star}}</span>
    <button class="btn">{{data.status}}</button>
  </div>
</template>

<script>
  export default {
    name: 'company',
    props:['data'],
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
  .company {
    width: 5.93rem;
    height: 1.81rem;
    background-image: url('../../assets/img/company1.png');
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    border-radius: 0.1rem;
    padding: 0.3rem 0.28rem 0.28rem 0.28rem;
    position: relative;
    margin-right: 0.18rem;
    p{
      color: #fff;
      font-size: 0.28rem;
      font-family: "微软雅黑";
      width: 4.52rem;
    }
    .datat{
      position: absolute;
      bottom:0.28rem;
      left:0.24rem;
      font-size: 0.2rem;
      color: #fff;
    }
    .star{
      position: absolute;
      bottom:0.28rem;
      left:2.79rem;
      font-size: 0.2rem;
      color: #fff;
    }
    .btn{
      border: 0;
      outline:0;
      position: absolute;
      top: 0.3rem;
      right:0.28rem;
      width: 0.54rem;
      height: 0.31rem;
      font-size: 0.2rem;
      color: #29ab91;
      background-color: #fff;
      border-radius: 0.03rem;
    }
  }
</style>
