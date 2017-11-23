<template>
  <div class="padding-container border-bottom cell-wrapper">
    <p class="twoLineFont font-middle" :style="{fontSize:size+'rem'}">
      <slot></slot>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props:{
        size:{
          type:Number,
          default: 0.24
        }
      },
      data(){
        return {
            title:'申请材料'
        }
      }
    }
</script>

<style scoped lang="less">
  .cell-wrapper{
    background: #fff;
    height:0.8rem;
  }

</style>
