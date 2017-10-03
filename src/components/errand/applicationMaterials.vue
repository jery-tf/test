/**
* Created by wyg on 2017/10/3.
*/

<template>
  <div class="padding-container fff">
    <div>
      <p>{{name}}</p>
      <div class="source">
        <span class="colorf90">{{number}}</span><span>份</span>
        <span style="margin-left: .2rem">{{source}}</span>
      </div>
    </div>
    <i class="OAIndexIcon icon-yanjing1"></i>
  </div>
</template>

<script>
  /***
   * 申请材料组件
   */
  export default {
    name: 'applicationMaterials',
    props:['name','number','source'],
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
  .padding-container{
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      font-size: .24rem;
      color:#333;
    }

    .source{
      font-size: .21rem;
      margin-top: .2rem;
      color:#999;
    }
    .colorf90{
      color:#ff9900;
    }
    .OAIndexIcon{
      font-size: .33rem;
      color:#999;
    }
  }

</style>
