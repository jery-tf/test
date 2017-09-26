<template>
  <div class="noPage">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'noPage',
  data () {
    return {
      msg: '真的没有这个页面',
    }
  }
}
</script>

<style scoped>
  .noPage{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .22rem;
  }
</style>
