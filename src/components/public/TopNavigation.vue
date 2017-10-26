/**
* Created by wyg on 2017/9/22.
*/

<template>
  <div class="mall-warp color">
    <i class="OAIndexIcon C2-guanbi1 .C2-fanhui1" @click="returnBtn"></i>
    <p>{{title}}</p>
    <router-link class="mall-warp" :to="rightLink">
      <span class="font color">{{rightName}}</span>
      <i class="OAIndexIcon C2-fanhui4 color"></i>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: 'TopNavigation',
        components: {},
        props: ['rightName','rightLink','title','rightFun'],
        data () {
            return {}
        },
        created(){

        },
        methods: {
          returnBtn(){
              window.history.go(-1);
          }
        }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
