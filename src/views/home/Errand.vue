/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div>
    <router-link to="/errandList/zrrfl" class="center-center">
      <p>自然人</p>
    </router-link>
    <p>------------------=---------------</p>
    <router-link to="/errandList/frfl" class="center-center">
      <p>法人</p>
    </router-link>
    <p>-----------------------------------</p>
    <router-link to="/errand/completeData/test" class="center-center">
      <p>补正补齐</p>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: 'Errand',
    components: {},
    data () {
      return {
      }
    },
    created(){

    },
    methods: {}

  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
