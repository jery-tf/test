/**
* Created by Administrator on 2017/11/17.
*/

<template>
  <div id="tmpl" class="box-margin-top">
    <div class="column padding-container-lr">
      <div class="read"><span>我的订阅</span><i>点击进入栏目</i></div>
      <div class="columnbot">
        <Column :data="item" :list="list" v-for="(item,index) in list"></Column>
      </div>
      <div class="read"><span>推荐频道</span><i>点击添加栏目</i></div>
      <div class="columnbot">
        <div   class="recom"  v-for="(item,index) in lists">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Column from 'components/publicitem/column.vue'

  export default {
    name: 'information',
    components: {
      Column
    },
    data() {
      return {
        list: [
          {id: '1', name: '湖南政务'}, {id: '2', name: '长沙新闻'}, {id: '3', name: '岳阳动态'}, {id: '4', name: '常德牛粉'},
          {id: '5', name: '川麻辣烫'}, {id: '6', name: '汉热干面'}, {id: '7', name: '汉热干面'}, {id: '8', name: '汉热干面'}
        ],
        lists: [
          {id: '1', name: '政府会议'}, {id: '2', name: '市州动态'}, {id: '3', name: '厅局动态'}, {id: '4', name: '政府领导'},
          {id: '5', name: '政府文件'}, {id: '6', name: '政策解答'}, {id: '7', name: '认识信息'}, {id: '8', name: '通知公告'}
        ]
      }
    },
    created() {
      //console.log(this.list.length)
    },
    methods: {}

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  #tmpl {
    .column {
      background-color: #fff;
      padding-top: 0.34rem;
      .read {
        margin-bottom: 0.38rem;
        span {
          font-size: 0.32rem;
          color: #000;
          font-family: '微软雅黑';
          border-left: 0.08rem solid #29a1f7;
          padding-left: 0.1rem;
        }
        i {
          font-size: 0.24rem;
          color: #999;
          font-style: normal;
          padding-left: 0.24rem;
        }
      }
      .recom{
        position: relative;
        display: inline-block;
        width: 2rem;
        height: 0.82rem;
        line-height: 0.82rem;
        text-align: center;
        margin-right: 0.26rem;
        margin-bottom: 0.26rem;
        border-radius: 6px;
        border: 1px solid #ddd;
      }
    }
  }
</style>
