<template>
  <div>
    <div v-for="item in list">
      <change-num :warm="item"></change-num>
    </div>
  </div>
</template>
<script>
import ChangeNum from "../../components/changephone/changephone.vue"
export default {
  components: {
    ChangeNum
  },
  data() {
    return {
      list: [
        { warm: "", finish: '下一步' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>

</style>
