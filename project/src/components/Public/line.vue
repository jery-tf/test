<template>
  <div>
    <div class="line" :style="{height:h,backgroundColor:bg}"></div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props:{
        h:{
          default:'0.01rem'
        },
        bg:{
          default:"#D9D9D9"
        }
      }
    }
</script>

<style scoped lang="less">
  .line{
    width:100%;
  }
</style>
