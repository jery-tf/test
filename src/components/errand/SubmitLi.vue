/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="padding-container border-bottom" @click="btnClick">
    <p class="twoLineFont font-middle">{{title}}</p>
    <div class="right">
      <span :class="`font-small ${fontContent._class}`">{{fontContent.content}}</span>
      <i class="OAIndexIcon C2-fanhui4"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SubmitLi',
    props: ['title', 'isSubmint', 'btnClick'],
    components: {},
    data () {
      return {}
    },
    created(){

    },
    methods: {},
    computed: {
      fontContent(){
        return this.isSubmint ? {_class:'yes',content:'已提交'} : {_class:'no',content:'未提交'};
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .padding-container {
    background: #fff;
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .twoLineFont{
      flex: 1;
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
