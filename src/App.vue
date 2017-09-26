<template>
  <div id="app">
    <transition name="fade" mode="out-in" >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import url("./assets/font/iconfont.css");
  #app{
    box-sizing: border-box;
    width:100vw;
    height:100%;
    overflow-y: auto;
    font-size: .32rem;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
