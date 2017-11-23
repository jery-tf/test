/**
* Created by tf on 2017/11/22.
*/

<template>
  <div class="padding-container border-bottom" @click="clickFn">
    <div class="info-wrapper">
      <div class="twoLineFont font-middle">
        <span>{{info.name.str}}</span>{{info.name.value}}
      </div>
      <div class="twoLineFont font-middle bottom">
        <span>{{info.cidcard.str}}</span>{{info.cidcard.value}}
      </div>
    </div>
    <div class="right">
      <span :class="`font-small ${fontContent._class}`">{{fontContent.content}}</span>
      <i class="OAIndexIcon C2-fanhui4"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SubmitLi',
    props: ['info', 'isSubmint', 'clickFn'],
    components: {},
    data () {
      return {}
    },
    created(){

    },
    computed: {
      fontContent(){
        return this.isSubmint ? {_class:'yes',content:'已完成'} : {_class:'no',content:'待完善'};
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .padding-container {
    background: #fff;
    min-height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .twoLineFont{
      color:#333;
      flex: 1;
      font-size: 0.21rem;
      &.bottom{
        padding-top:.26rem;
      }
      &>span{
        display: inline-block;
        min-width:1.3rem;
        color:#999;
      }
    }
    .right{
      padding-left: .2rem;
    }
    .C2-fanhui4 {
      font-size: .29rem;
      color:#ccc;
    }
    .yes {
      color: #333;
    }
    .no {
      color: #ccc;
    }
  }
</style>
