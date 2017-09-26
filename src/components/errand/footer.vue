/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="foot fff font-large">
    <div class="box-margin-left">
      <i class="OAIndexIcon icon-dianhua1 font-large"></i>
      <span class="box-margin-left">{{tel || ''}}</span>
    </div>
    <p class="onlineWork" @click="btnFun">{{btnName || ''}}</p>
  </div>
</template>

<script>
  /***
   * 办事指南及在线办理 底部电话及按钮 为固定在底部 高度为1rem
   * 不适用 页面存在input场景,在安卓有兼容问题
   */
  export default {
    name: 'footer',
    props: ['tel', 'btnClick', 'btnName'],
    components: {},
    data () {
      return {}
    },
    created(){

    },
    methods: {
      btnFun(){
        this.btnClick();
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .foot {
    position: absolute;
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    left: 0;
    align-items: center;
    background: #fff;
    color: #26a2ff;
    i {
      position: relative;
      top: -0.02rem;
    }
    div {
      display: flex;
      align-items: center;
    }
    .onlineWork {
      background: #ff9900;
      width: 2rem;
      color: #fff;
      height: 100%;
      line-height: 1rem;
      text-align: center;
    }
  }
</style>
