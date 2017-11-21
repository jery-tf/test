<!--分割线-->
<template>
  <div  :style="{ background:color, height:height+'rem'}"></div>
</template>

<script type="text/ecmascript-6">
    export default {
      props:{
        color:{
          type:String,
          default:'#f2f2f2'
        },
        height:{
          type:Number,
          default:0.18
        }
      }
    }
</script>

<style scoped lang="less">

</style>
