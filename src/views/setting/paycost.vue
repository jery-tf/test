/**
* Created by Administrator on 2017/10/23.
*/

<template>
  <div class="consulting ">
      <div class="checked">
        <i class="OAIndexIcon icon-shuifei"></i><br>
        <span>水费</span>
      </div>
    <div class="checked">
      <i class="OAIndexIcon icon-dianfei"></i><br>
      <span>电费</span>
    </div>
    <div class="checked">
      <i class="OAIndexIcon icon-dianhua"></i><br>
      <span>固话费</span>
    </div>
    <div class="checked">
      <i class="OAIndexIcon icon-jiayouka"></i><br>
      <span>油卡充值</span>
    </div>
    <div class="checked">
      <i class="OAIndexIcon icon-qiche"></i><br>
      <span>交通违法</span>
    </div>

  </div>
</template>

<script>
    export default {
        name: 'consulting',
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
    .consulting{
      padding-top: 0.5rem;
      background-color: #fff;
      .checked{
        margin: 0 0.65rem 0.5rem;
        display: inline-block;
        text-align: center;
        width: 0.98rem;
        .OAIndexIcon{
          font-size: 0.61rem;
        }
        .icon-shuifei{
          color: #fc992c;
        }
        .icon-dianfei,.icon-qiche{
          color: #108ee9;
        }
        .icon-dianhua{
          color: #f15a4a;
        }
        .icon-jiayouka{
          color: #29ab91;
        }
        span{
          font-size: 0.24rem;
          color: #555;
        }
      }
    }
</style>
