<template>
  <button :style="{background:bg}">
    <slot></slot>
  </button>
</template>

<script type="text/ecmascript-6">

    export default {
     // props:['bg','color','width']
      props:{
        bg:{
          default:"#ddd"
        }
      }
    }
</script>

<style scoped lang="less">
  button{
    display: block;
    width: 3.4rem;
    color:#fff;
    border:none;
    border-radius: 0.22rem;
    height:0.86rem;
    font-size:0.28rem;
    text-align: center;
    margin:0 auto;
  }
</style>
