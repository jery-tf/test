/**
* Created by Administrator on 2017/11/18.
*/

<template>
    <div>这是便民设施</div>
</template>

<script>
    export default {
        name: 'facilities',
        components: {},
        data() {
            return {}
        },
        created() {
          this.id = this.$route.params.id;
          console.log(this.id)
        },
        methods: {}

    }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
