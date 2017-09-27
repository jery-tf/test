/**
* Created by wyg on 2017/9/26.
*/

<template>
  <div class="font-middle">
    <p class="title">{{title}}</p>
    <p class="content">
      <i class="OAIndexIcon icon-ZHicon-"></i>
      <span>{{content}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Subtitle',
    props:['title','content'],
    components: {},
    data () {
      return {}
    },
    created(){

    },
    methods: {}

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .title{
    color:#ff9900;
    font-size: .28rem;
  }
  .content{
    margin-top: .1rem;
    display: flex;
    align-items: center;
    .OAIndexIcon{
      color:#999;
    }
  }
</style>
