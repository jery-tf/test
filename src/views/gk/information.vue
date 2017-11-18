/**
* Created by Administrator on 2017/11/17.
*/

<template>
    <div id="tmpl" class="box-margin-top">
        <div class="column padding-container-lr">
          <span>我的订阅</span>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'information',
        components: {},
        data() {
            return {}
        },
        created() {

        },
        methods: {}

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    #tmpl{
      .column{
        background-color: #fff;
        span{
          font-size: 0.32rem;
          color: #000;
          font-family: '微软雅黑';
        }
        he:before{
          content: '';
        }
      }
    }
</style>
