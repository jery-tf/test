/**
* Created by Administrator on 2017/10/17.
*/

<template>
  <div class="tmp ">
    <div class="box-margin-top pushset padding-container-lr">
      推送设置
      <mt-switch ></mt-switch>
    </div>
    <span class="">如关闭提醒，则将不能保存对应的消息提示 </span>
  </div>

</template>

<script>
    export default {
        name: 'pushsetting',
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
.tmp{
  .pushset{
    width: 7.2rem;
    height: 0.98rem;
    line-height: 0.98rem;
    background-color: #fff;
    font-size: 0.32rem;
    color: #333;
    font-family: "微软雅黑";
    position: relative;
    margin-bottom: 0.4rem;
    .mint-switch{
      position: absolute;
      top: 0.2rem;
      right: 0.28rem;
      width: 1.12rem;
    }
  }
  span{
    font-size: 0.24rem;
    color: #999;
    margin-left: 1rem;
  }
}
</style>
