/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="flex1 doubleListBox">
    <div class="left fff">
      <div v-for="(item,index) in dataList" :key="index"
           :class="item.id==selectedId?'li active':'li'"
           @click="liClickFun(item.id)">
        <i :class="`OAIndexIcon ${item.icon}`"></i>
        <span>{{item.name}}</span>
      </div>

    </div>
    <div class="right padding-container">
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
    name: 'DoubleListView',
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
    height: 100%;
    .left {
      width: 1.66rem;
      overflow-y: auto;
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
    .OAIndexIcon{
      font-size: .33rem;
    }
  }

  .right {
    flex: 1;
    overflow-y: auto;
  }
</style>
