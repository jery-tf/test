/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100 doubleListView">
    <div class="contentTop fff border-bottom">
      <div>顶部</div>
    </div>

    <DoubleListView :dataList="leftDataList" :liClickFun="selecedLeftFun"
                    :selectedId="selectedId">
      <div class="flex1 right">
        <router-link to="/errand/guide/test" class="center-center">
          <p>办事指南</p>
        </router-link>
      </div>
    </DoubleListView>
  </div>
</template>

<script>
  import DoubleListView from 'components/public/DoubleListView.vue'
  export default {
    name: 'Errand',
    components: {
      DoubleListView
    },
    data () {
      return {
        selected: '1',
        leftDataList: [
          {
            id: 1,
            icon: 'icon-ertongshouyang',
            name: '婚育收养'
          },{
            id: 2,
            icon: 'icon-ertongshouyang',
            name: '教育培训'
          },{
            id: 3,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },{
            id: 4,
            icon: 'icon-ertongshouyang',
            name: '婚育收养'
          },{
            id: 5,
            icon: 'icon-ertongshouyang',
            name: '教育培训'
          },{
            id: 6,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },{
            id: 7,
            icon: 'icon-ertongshouyang',
            name: '婚育收养'
          },{
            id: 8,
            icon: 'icon-ertongshouyang',
            name: '教育培训'
          },{
            id: 9,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },{
            id: 10,
            icon: 'icon-ertongshouyang',
            name: '婚育收养'
          },{
            id: 21,
            icon: 'icon-ertongshouyang',
            name: '教育培训'
          },{
            id: 31,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },{
            id: 11,
            icon: 'icon-ertongshouyang',
            name: '婚育收养'
          },{
            id: 22,
            icon: 'icon-ertongshouyang',
            name: '教育培训'
          },{
            id: 32,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },
        ],
        selectedId:1
      }
    },
    created(){

    },
    methods: {
      //点击左侧列表 单元格
      selecedLeftFun(id){
          //拿着ID 请求数据
        console.log('selecedLeftFun-->',id);
        this.selectedId = id;
      }
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  .doubleListView {
    position: relative;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    .contentTop{
      height: .96rem;
    }
  }

</style>
