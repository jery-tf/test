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
        { warm: "为确保是你本人操作，请完成以下验证", finish: '下一步' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>

</style>
