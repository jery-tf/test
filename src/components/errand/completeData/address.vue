/**
* Created by wyg on 2017/9/26.
*/

<template>
  <div class="box-margin-top fff">
    <p class="padding-container border-bottom">{{titleType}}</p>
    <div class="padding-container content">
      <div>
        <span class="left">{{userType}}人</span>
        <p class="flex1">
          <span> {{userInfo.name || ''}} </span>
          <span style="margin-left: .2rem"> {{userInfo.phone || ''}} </span>
        </p>
      </div>

      <div class="box-margin-top">
        <span class="left">{{userType}}地址</span>
        <p class="flex1"> {{userInfo.address}} </p>
      </div>

      <div class="box-margin-top">
        <span class="left">快递运单号</span>
        <div class="flex1">
          <img v-if="type==1" src="">
          <p>{{expressInfo.no}}</p>
          <span class="btn">查看物流</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'address',
    props: ['userInfo', 'expressInfo', 'type'],
    components: {},
    data () {
      return {}
    },
    created(){

    },
    methods: {},
    computed: {
      userType(){
          console.log(12123)
        let _userType = {
          1: '寄件',
          2: '收件'
        };
        return _userType[this.type];
      },
      titleType(){
        let _titleType = {
          1: '原件快递收取',
          2: '办结快递送达'
        };
        return _titleType[this.type];
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .border-bottom{
    font-size: .28rem;
  }
  .content{
    font-size: .24rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .left{
      width: 1.6rem;
      display: block;
      color:#999;
    }
    .flex1{
      flex:1;
    }
    div{
      display: flex;
      align-items: center;
    }
    .btn{
      border-radius: .1rem;
      border:1px solid #ccc;
      padding: .03rem .1rem;
      margin-left: .2rem;
    }
  }
</style>
