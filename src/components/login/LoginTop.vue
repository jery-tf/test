/**
* Created by wyg on 2017/9/22.
*/

<template>
  <div class="mall-warp color">
    <i class="OAIndexIcon icon-guanbi1 close color" @click="closeBtn"></i>
    <router-link class="mall-warp" :to="rightLink">
      <span class="font color">{{rightName}}</span>
      <i class="OAIndexIcon icon-fanhui4 color"></i>
    </router-link>
  </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: 'loginTop',
        components: {},
        props: ['leftLink','rightName','rightLink'],
        data () {
            return {

            }
        },
        created(){

        },
        methods: {
          //左侧按钮
          closeBtn(){
              if(this.leftLink){
                Vue.$router.push({path:this.leftLink});
              }else{
                window.history.go(-1)
              }
          }
        }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
.close{
  font-size: .44rem;
}
.color{
  color: #666;
}
.font{
  font-size: .28rem;
}
</style>
