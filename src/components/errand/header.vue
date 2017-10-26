/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="fff border-bottom padding-container">
    <p class="twoLineFont">
      {{title}}
    </p>
    <div class="score box-margin-top">
      <p v-if="score!=''">
        <StarsScore :score="score"></StarsScore>
      </p>
      <div>
        <p>
          <i class="OAIndexIcon C2-gouxuan"></i>
          <span class="font-small">承诺期限{{workDay}}工作日</span>
        </p>
        <p>
          <i class="OAIndexIcon C2-gouxuan"></i>
          <span class="font-small">最多跑现场{{workNo}}次</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  /***
   * 办事指南及在线办理 顶部标题和评分
   * props title文字 score评分 workDay天数 workNo次数
   */
  import StarsScore from '../public/StarsScore.vue'
  export default {
    name: 'header',
    props: ['title', 'score', 'workDay', 'workNo'],
    components: {StarsScore},
    data () {
      return {}
    },
    created(){

    },
    methods: {}

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .fff {
    font-size: .28rem;
  }

  .C2-charge {
    font-size: .25rem;
    margin-right: .15rem;
  }

  .C2-gengduo11 {
    color: #999;
  }

  .h88 {
    height: .88rem;
  }

  .score {
    display: flex;
    justify-content: space-between;
    >div {
      display: flex;
    }
    i{
      font-size: .25rem;
    }
    p{
      display: flex;
      align-items: center;
    }
    span {
      color: #999;
    }
  }

  .C2-gouxuan {
    color: #29ab91;
    margin-left: .15rem;
  }
</style>
