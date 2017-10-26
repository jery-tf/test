/**
* Created by Administrator on 2017/10/23.
*/

<template>
  <div class="consulting ">
      <div class="checked">
        <i class="OAIndexIcon C2-shuifei"></i><br>
        <span>水费</span>
      </div>
    <div class="checked">
      <i class="OAIndexIcon C2-dianfei"></i><br>
      <span>电费</span>
    </div>
    <div class="checked">
      <i class="OAIndexIcon C2-dianhua"></i><br>
      <span>固话费</span>
    </div>
    <div class="checked">
      <i class="OAIndexIcon C2-jiayouka"></i><br>
      <span>油卡充值</span>
    </div>
    <div class="checked">
      <i class="OAIndexIcon C2-qiche"></i><br>
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
        .C2-shuifei{
          color: #fc992c;
        }
        .C2-dianfei,.C2-qiche{
          color: #108ee9;
        }
        .C2-dianhua{
          color: #f15a4a;
        }
        .C2-jiayouka{
          color: #29ab91;
        }
        span{
          font-size: 0.24rem;
          color: #555;
        }
      }
    }
</style>
