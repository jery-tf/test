/**
* Created by Administrator on 2017/10/16.
*/

<template>
  <div class="tmp">
    <div class="theader box-margin-top" v-for="item in list">
      <div class="images-t">
        <i :class="`OAIndexIcon ${item.classn}`" :style="`background:${item.backgroundcolor}`"></i>
      </div>
      <div class="contents">
        <p>{{item.title}}</p>
        <span>授权期限:{{item.datatime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'aboutlist',
    components: {},
    data() {
      return {
        id: 1,
        list: [
          {classn:'icon-ertongshouyang',backgroundcolor:'#29ab91',title:'结婚生育',datatime:'2017-02-20-2017-06-15'},
          {classn:'icon-jiaoyu',backgroundcolor:'#fc992c',title:'教育培训',datatime:'2017-02-20-2017-06-15'},
          {classn:'icon-weibiaoti9',backgroundcolor:'#108ee9',title:'求职执业',datatime:'2017-02-20-2017-06-15'},
          {classn:'icon-jiuyifuwu',backgroundcolor:'#f15a4a',title:'就医保健',datatime:'2017-02-20-2017-06-15'},
          {classn:'icon-weibiaoti9',backgroundcolor:'#108ee9',title:'求职执业',datatime:'2017-02-20-2017-06-15'},
          {classn:'icon-jiuyifuwu',backgroundcolor:'#f15a4a',title:'就医保健',datatime:'2017-02-20-2017-06-15'},
        ]
      }
    },
    created() {
      this.id = this.$route.params.id;
    },
    methods: {}

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .tmp {
    background-color: #fff;
    .theader {
      background-color: #fff;
      width:6.64rem;
      height: 1.34rem;
      padding-top: 0.26rem;
      /*line-height: 1.34rem;*/
      border-bottom: 1px solid #d9d9d9;
      margin: 0 0.28rem;
      .images-t {
        height: 1.34rem;
        margin-right: 0.28rem;
        float: left;
        .OAIndexIcon {
          display: inline-block;
          width: 0.8rem;
          height: 0.81rem;
          line-height: 0.81rem;
          border-radius: 50%;
          /*background-color: deeppink;*/
          text-align: center;
          font-size: 0.4rem;
          color: #fff;
        }
      }
      .contents{
        float: left;
        p{
          font-size: 0.28rem;
          color: #333;
          font-family: "微软雅黑";
        }
        span{
          font-size: 0.21rem;
          color: #aaa;
          font-family: "微软雅黑";
        }
      }
    }
  }
</style>
