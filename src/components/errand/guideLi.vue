/**
* Created by wyg on 2017/10/1.
*/

<template>
  <div class="fff">
    <div class="padding-container border-bottom">
      <p class="twoLineFont">{{data.title}}</p>
      <div class="box-margin-top StarsScore">
        <StarsScore :score="data.score"></StarsScore>
        <p class="frequency">
          <i class="OAIndexIcon icon-gouxuan"></i>
          <span>最多跑现场 {{data.frequency}} 次</span>
        </p>
      </div>
    </div>
    <div class="mall-warp padding-container">
      <div class="jigou">
        <i class="OAIndexIcon icon-jigou1"></i>
        <span>{{data.name}}</span>
      </div>
      <div :class="`btn ${btnActive}`">
        <span>在线办理</span>
      </div>
    </div>
    <!--<router-link to="/errand/guide/test" class="center-center">-->
      <!--<p>办事指南</p>-->
    <!--</router-link>-->
  </div>
</template>

<script>
  /***
   * 单个办事指南组件
   */
  import StarsScore from '../public/StarsScore.vue'
  export default {
    name: 'guideLi',
    props:['data'],
    components: {StarsScore},
    data () {
      return {}
    },
    created(){

    },
    methods: {},
    computed:{
        btnActive(){
            return this.data.isActive?'active':'';
        }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .twoLineFont{
    font-size: .28rem;
  }
  .box-margin-top{
    font-size: .21rem;
  }
  .StarsScore{
    display: flex;
    align-items: center;
  }
  .frequency{
    display: flex;
    align-items: center;
    margin-left: .3rem;
    i{
      color:#29ab91;
      margin-right: .1rem;
    }
  }
  .jigou{
    display: flex;
    align-items: center;
    color:#999;
    i{
      color:#13b7f6;
      font-size: .24rem;
      margin-right: .1rem;
    }
  }
  .btn{
    font-size: .2rem;
    color:#aaa;
    border:1px solid #aaa;
    border-radius: .1rem;
    padding: .03rem .1rem;
  }
  .btn.acrive{

  }
  .mall-warp{
    font-size: .21rem;
  }
</style>
