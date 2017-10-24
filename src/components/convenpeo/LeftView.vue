/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="doubleListBox">
    <div class="left">
      <div v-for="(item,index) in dataList" :key="index"
           :class="item.channelId==selectedId?'li active':'li fff'"
           @click="liClickFun(item.channelId)">
        <i class="OAIndexIcon icon-ertongshouyang"></i>
        <span>{{item.name}}</span>
      </div>

    </div>
    <div class="right padding-container-lr">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  /***
   * 两栏显示列表
   * *dataList     *liClickFun(id)    *selectedId
   * 左侧数据列表     点击事件 回调ID      选中单元的ID
   */
  export default {
    name: 'LeftView',
    props: ['dataList', 'liClickFun', 'selectedId'],
    components: {},
    data () {
      return {}
    },
    created(){
    },
    methods: {
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .doubleListBox {
    display: flex;
    position: absolute;
    top: .96rem;
    left: 0;
    right: 0;
    bottom: 0;
    .left {
      width: 1.66rem;
      overflow-y: auto;
      height: 100%;
      position: relative;
      top:0;
      bottom: 0;
      background-color: #fff;
      .li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 1.15rem;
        font-size: .24rem;
      }
      .li.active {
        background: #f2f2f2;
        color: #13b7f6;
      }
    }
  }

  .right{
    flex: 1;
    height: 100%;
    overflow-y: auto;
  }
</style>
