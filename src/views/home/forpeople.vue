/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100 doubleListView">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <DoubleListView :dataList="leftDataList" :liClickFun="selecedLeftFun"
                        :selectedId="selectedId">
          <div class="flex1 right">
            <Education></Education>
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
   import Education from 'components/convenpeo/Education.vue'
  export default {
    name: 'Errand',
    components: {
      DoubleListView,Education
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
            icon: 'icon-xuexiao',
            name: '教育培训'
          },{
            id: 3,
            icon: 'icon-weibiaoti9',
            name: '求职执业'
          },
          {
            id: 4,
            icon: 'icon-shui',
            name: '纳税缴费'
          },
           {
            id: 5,
            icon: 'icon-jiuyifuwu',
            name: '就医保健'
          },
          {
            id: 6,
            icon: 'icon-baoxianweidianji',
            name: '社会保险'
          },
           {
            id: 7,
            icon: 'icon-kunnanjiuzhu',
            name: '福利救助'
          },
            {
            id: 8,
            icon: 'icon-zufang',
            name: '房屋租售'
          },
           {
            id: 9,
            icon: 'icon-bus',
            name: '交通旅游'
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
