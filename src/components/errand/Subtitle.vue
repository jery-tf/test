/**
* Created by wyg on 2017/9/26.
*/

<template>
  <div class="flow">
    <p class="title">{{title}}</p>
    <p class="content">
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
  .flow {
    font-size: 0.21rem;
    color: #333;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    border: 1px solid #e8e8e8;
    margin-bottom: -1px;
    min-height: 0.94rem;
  }
  .title,
  .content {
    display: inline-block;
    border:1px solid #fff;
    display:flex;
  }

  .title {
    width: 1.75rem;
    background-color: #f9f9f9;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    border-right: 1px solid #e8e8e8;
    justify-content:center;
  }

  .content {
    font-size: 0.21rem;
    width: 4.83rem;
    padding:0.19rem;
    margin-left: 1.75rem;
    a{
      color: blue;
    }
  }
</style>
