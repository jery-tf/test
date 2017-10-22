/**
* Created by wyg on 2017/9/25.
*/

<template>
  <div class="myCellSwipe">
    <mt-cell-swipe :title="title" :right="rightArr" :label="label">
      <i class="OAIndexIcon icon-shezhi4"></i>
      <slot name="icon">
        <img v-if="type==1" class="icon" src="../../assets/img/fileIcon.png">
        <img v-if="type==2" class="icon" src="../../assets/img/pdfIcon.png">
      </slot>
    </mt-cell-swipe>
  </div>
</template>

<script>
  /***
   * 侧滑组件
   * title rightFun    label       type
   * 标题   右边删除按钮   标题下文字   根据类型显示左边图标
   */
  export default {
    name: 'CellSwipe',
    props: ['title', 'rightFun', 'label', 'type'],
    components: {},
    data () {
      return {}
    },
    created(){

    },
    methods: {},
    computed: {
      rightArr(){
        let _rightArr = [{
          content: '删除',
          style: {background: 'red', color: '#fff',width:'1rem'},
          handler: () => this.rightFun()
        }];
        return _rightArr;
      },
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  .OAIndexIcon {
    width: .34rem;
    height: .34rem;
    font-size: .34rem;
    color: #ccc;
  }
  .myCellSwipe{
    .mint-cell.mint-cell-swipe{
      height: 1.34rem;
      >div{
        height: 100%;
      }
      .mint-cell-swipe-button{
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .mint-cell-title{
      padding-left: 1rem;
    }
    .icon{
      position: absolute;
      left: .23rem;
      top:50%;
      transform: translateY(-50%);
    }
  }

  .icon{
    width: .73rem;
  }
</style>
