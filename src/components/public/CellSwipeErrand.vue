/**
* Created by wyg on 2017/10/13.
*/

<template>
  <div class="errandCellswipe">
    <mt-cell-swipe :right="rightArr">
      <i class="OAIndexIcon C2-shezhi4"></i>
      <slot>
        <GuideLi :data="this.data"></GuideLi>
      </slot>
    </mt-cell-swipe>
  </div>
</template>

<script>
  import GuideLi from '../errand/guideLi.vue'
  export default {
    name: 'CellSwipeErrand',
    components: {GuideLi},
    props:['rightFun','data'],
    data () {
      return {
      }
    },
    created(){

    },
    methods: {},
    computed: {
      rightArr(){
        let _rightArr = [{
          content: '删除',
          style: {background: 'red', color: '#fff',width:'1rem'},
          handler: () => this.rightFun(this.data.id)
        }];
        return _rightArr;
      },
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  .errandCellswipe{
    .mint-cell-title{
      flex: none;
    }
    .C2-shezhi4{
      display: none !important;
    }
    .mint-cell-value{
      flex:1;
      .fff{
        flex: 1;
      }
    }
    .mint-cell-swipe-buttongroup a{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

</style>
