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
      <mt-tab-item id="5">已办结</mt-tab-item>
      <mt-tab-item id="6">不予受理</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected" class="content">
      <mt-tab-container-item id="1" class="flex">
        <AllPiece :type="0"></AllPiece>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <AllPiece type=0></AllPiece>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <AllPiece type=9></AllPiece>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <AllPiece type=4></AllPiece>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <AllPiece type=5></AllPiece>
      </mt-tab-container-item>
      <mt-tab-container-item id="6">
        <AllPiece type=2></AllPiece>
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
      document.getElementsByTagName('body')[0].scrollTop = 0;
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
