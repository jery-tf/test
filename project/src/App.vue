<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <my-footer v-show="$route.meta.isShow"></my-footer>

  </div>
</template>

<script>
  import MyFooter from '@/components/Public/myFooter.vue'
export default {
  name: 'app',
  components:{
    MyFooter,
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body {
  background:#f0f0f0;
  #app {
    box-sizing: border-box;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
}
</style>
