/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div class="box">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">暂存</mt-tab-item>
      <mt-tab-item id="3">待受理</mt-tab-item>
      <mt-tab-item id="4">待审核</mt-tab-item>
      <mt-tab-item id="5">待评价</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected" class="content">
      <mt-tab-container-item id="1" class="flex">
        <AllPiece :type="selected"></AllPiece>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <p>222</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <p>333</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <p>444</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <p>555</p>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import Piece from 'components/myDo/Piece.vue'
  import AllPiece from './MyDo/All.vue'
  export default {
    name: 'myDo',
    components: {Piece,AllPiece},
    data () {
      return {
        selected: '1',
      }
    },
    created(){

    },
    methods: {

    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
.box{
  display: flex;
  height: 100%;
  flex-direction: column;
}
.content{
  flex: 1;
  overflow-y: auto;
  margin-top: .2rem;
}
.mint-navbar .mint-tab-item.is-selected{
  margin-bottom: 0;
}
</style>
