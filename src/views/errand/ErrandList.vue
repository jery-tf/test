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
            <!--<Entrance :entranceInfo="entrance"></Entrance>-->
            <template v-for="(item,index) in entrance">
              <div class="box-margin-top">
                <Entrance :entranceInfo="item" :key="index">
                </Entrance>
              </div>
            </template>
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
  import Entrance from 'components/errand/Entrance.vue'
  export default {
    name: 'Errand',
    components: {
      DoubleListView, Entrance
    },
    data () {
      return {
        selected: '1',
        leftDataList: [
          {
            id: 1,
            icon: 'icon-ertongshouyang',
            name: '婚育收养'
          }, {
            id: 2,
            icon: 'icon-ertongshouyang',
            name: '教育培训'
          }, {
            id: 3,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          }, {
            id: 4,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },{
            id: 5,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },{
            id: 6,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },{
            id: 7,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },{
            id: 8,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },{
            id: 9,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },{
            id: 10,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },{
            id: 11,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },
        ],
        entrance: [
          {
            id:'11',
            title: '这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题',
            score:3,
            frequency:1,
            mechanism:'劳动局',
            isActive:true
          },
          {
            id:'12',
            title: '这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题',
            score:4,
            frequency:2,
            mechanism:'社保局',
            isActive:false
          },
          {
            id:'12',
            title: '这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题',
            score:4,
            frequency:2,
            mechanism:'社保局',
            isActive:false
          },
          {
            id:'12',
            title: '这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题',
            score:4,
            frequency:2,
            mechanism:'社保局',
            isActive:false
          },
          {
            id:'12',
            title: '这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题',
            score:4,
            frequency:2,
            mechanism:'社保局',
            isActive:false
          },
          {
            id:'12',
            title: '这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题',
            score:4,
            frequency:2,
            mechanism:'社保局',
            isActive:false
          }
        ],
        selectedId: 1
      }
    },
    created(){

    },
    methods: {
      //点击左侧列表 单元格
      selecedLeftFun(id){
        //拿着ID 请求数据
        console.log('selecedLeftFun-->', id);
        this.selectedId = id;
      },
      //点击在线办理  回调参数ID
      _clickFun(id){
          this.$router.push({})
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
  .right{
    .box-margin-top:first-child{
      margin-top: 0;
    }
  }

</style>
