/**
* Created by wyg on 2017/9/27.
*/

<template>
  <div class="content fff ">
    <div class="padding-container">
      <p class="twoLineFont">{{entranceInfo.title}}</p>
      <div class="stars box-margin-top">
        <StarsScore :score="entranceInfo.score"></StarsScore>
        <div class="frequency">
          <i class="OAIndexIcon icon-gouxuan"></i>
          <span class="font21">最多跑现场{{entranceInfo.frequency}}次</span>
        </div>
      </div>
    </div>
    <div class="foot padding-container-lr">
      <p>
        <i class="OAIndexIcon icon-jigou1"></i>
        <span class="font21">{{entranceInfo.mechanism}}</span>
      </p>
      <span :class="btnColor" @click="clickFun">在线办理</span>
    </div>

  </div>
</template>

<script>
  import StarsScore from '../public/StarsScore.vue'
  export default {
    name: 'Entrance',
    components: {StarsScore},
    props:['entranceInfo'],
    data () {
      return {}
    },
    created(){

    },
    methods: {
      //点击在线办理
      clickFun(){
        if(this.entranceInfo.isActive){
            this.$router.push({path:`/errand/guide/${this.entranceInfo.id}`});
        }
      }
    },
    computed:{
      btnColor(){
        return this.entranceInfo.isActive?'btn font21 active':'btn font21';
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .content{
    .twoLineFont{
      font-size: .28rem;
      color:#333;
    }
    .stars{
      display: flex;
      align-items: center;
    }
    .foot{
      display: flex;
      align-items: center;
      border-top: 1px solid #ddd;
    }
    .OAIndexIcon{
      font-size: .25rem;
    }
    .icon-jigou1{
      color:#13b7f6;
    }
    .icon-gouxuan{
      color:#29ab91;
      margin-right: .12rem;
    }
    .font21{
      font-size: .21rem;
      color:#999;
    }
    .frequency{
      margin-left: .3rem;
      display: flex;
      align-items: center;
      height: .26rem;
    }
    .foot{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: .15rem;
      padding-bottom: .15rem;
    }
    .btn{
      border: 1px solid #bbb;
      padding: .02rem .1rem;
      color:#bbb;
      border-radius: .05rem;
    }
    .btn.active{
      border: 1px solid #ff3e3e;
      color:#ff3e3e;
    }
  }
</style>
