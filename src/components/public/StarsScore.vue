/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div>
    <template v-for="i in 5">
      <i v-if="score>=i" class="OAIndexIcon C2-shoucangshangpin stars"></i>
      <i class="OAIndexIcon C2-shoucang2 stars" v-else></i>
    </template>
  </div>
</template>

<script>
  /***
   * 根据评分 显示星星数
   */
  export default {
    name: 'StarsScore',
    props: ['score'],
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
  .stars {
    color: #ff9900;
    font-size: .24rem;
  }
</style>
