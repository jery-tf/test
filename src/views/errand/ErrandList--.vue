/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100 doubleListView">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">按主题</mt-tab-item>
      <mt-tab-item id="2">按部门</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <DoubleListView :dataList="leftDataList" :liClickFun="selecedLeftFun"
                        :selectedId="selectedId">
          <div class="flex1 right">
            <router-link to="/errand/guide/test" class="center-center">
              <p>办事指南</p>
            </router-link>
          </div>
        </DoubleListView>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        222
      </mt-tab-container-item>
    </mt-tab-container>
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
            icon: 'C2-ertongshouyang',
            name: '婚育收养'
          },{
            id: 2,
            icon: 'C2-ertongshouyang',
            name: '教育培训'
          },{
            id: 3,
            icon: 'C2-ertongshouyang',
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
    display: flex;
    flex-direction: column;
    .mint-tab-container {
      flex: 1;
      .mint-tab-container-wrap {
        height: 100%;
      }
    }
  }

</style>
