/**
* Created by Administrator on 2017/11/13.
*/
//咨询与投诉详情列表
<template>
  <div>
    <h4 class="padding-container-lr">{{title}}</h4>
    <p class="contents">
      {{content}}
    </p>
    <span class="padding-container-lr">{{time}}</span>
  </div>
</template>

<script>
    export default {
        name: 'consult',
        components: {},
      props: ['title', 'content', 'time'],
        data() {
            return {

            }
        },
        created() {

        },
        methods: {}

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .consult {
    .myconsult {
      background-color: #fff;
      padding-right: 0.24rem;
      margin-bottom: 0.2rem;
      h4 {
        width: 6.72rem;
        height: 0.8rem;
        line-height: 0.8rem;
        font-weight: 400;
        font-size: 0.28rem;
        color: #333;
        font-family: '微软雅黑';
        border-bottom: 1px solid #eee;
      }
      p {
        padding: 0.24rem 0 0 0.24rem;
        font-size: 0.24rem;
        color: #666;
        line-height: 0.35rem;
      }
      span {
        font-size: 0.2rem;
        color: #aaa;
      }
    }
  }
</style>
