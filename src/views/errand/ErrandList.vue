/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100 doubleListView">
    <div class="contentTop fff border-bottom padding-container-lr">
      <p><i class="OAIndexIcon icon-llmainpageback topIcon"></i></p>
      <div class="topTab">
        <p v-for="(item,index) in topSelect" :class="item.isCurrent?'current':''"
           @click="topTabClick(item.id)">
          {{item.name}}
        </p>
      </div>
      <p><i class="OAIndexIcon icon-sousuo_sousuo topIcon"></i></p>
    </div>

    <DoubleListView :dataList="leftDataList" :liClickFun="selecedLeftFun"
                    :selectedId="selectedId">
      <div class="flex1 right">
        <template v-for="(item,index) in guideList">
          <GuideLi :data="item"></GuideLi>
        </template>
      </div>
    </DoubleListView>
  </div>
</template>

<script>
  import DoubleListView from 'components/public/DoubleListView.vue'
  import GuideLi from 'components/errand/guideLi.vue'
  export default {
    name: 'Errand',
    components: {
      DoubleListView, GuideLi
    },
    data () {
      return {
        //顶部选主题和部门
        topSelect: [{isCurrent: true, name: '按主题', id: 'zt'},
          {isCurrent: false, name: '按部门', id: 'bm'}],
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
            name: '婚育收养'
          }, {
            id: 5,
            icon: 'icon-ertongshouyang',
            name: '教育培训'
          }, {
            id: 6,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          }, {
            id: 7,
            icon: 'icon-ertongshouyang',
            name: '婚育收养'
          }, {
            id: 8,
            icon: 'icon-ertongshouyang',
            name: '教育培训'
          }, {
            id: 9,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          }, {
            id: 10,
            icon: 'icon-ertongshouyang',
            name: '婚育收养'
          }, {
            id: 21,
            icon: 'icon-ertongshouyang',
            name: '教育培训'
          }, {
            id: 31,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          }, {
            id: 11,
            icon: 'icon-ertongshouyang',
            name: '婚育收养'
          }, {
            id: 22,
            icon: 'icon-ertongshouyang',
            name: '教育培训'
          }, {
            id: 32,
            icon: 'icon-ertongshouyang',
            name: '求职执业'
          },
        ],
        guideList: [
          {
            id: 1,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 3,
            frequency: 10,
            name: '物价局',
            isActive: true
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: true
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
          }, {
            id: 2,
            title: '这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字这里很多字',
            score: 4,
            frequency: 1,
            name: '烟草局',
            isActive: false
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
        // @todo 根据Id 渲染右侧数据
        console.log('selecedLeftFun-->', id);
        this.selectedId = id;
      },
      //顶部选择的 id
      topTabClick(id){
        this.topSelect.forEach((item) => {
          if (item.id == id) {
            item.isCurrent = true;
          } else {
            item.isCurrent = false;
          }
        });
        console.log(id);
        // @todo 根据选择的ID 重新加载数据
      }
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  .contentTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .topIcon {
      font-size: .4rem;
      color: #999;
    }
    .icon-llmainpageback {
      color: #fff;
    }
  }

  .right div.fff {
    margin-top: .24rem;
  }

  .doubleListView {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .contentTop {
      height: .96rem;
    }
  }

  .topTab {
    height: 100%;
    display: flex;
    p {
      display: flex;
      align-items: center;
      margin: 0 .3rem;
      font-size: .26rem;
      border-bottom: 2px solid transparent;
    }
    p.current {
      border-bottom: 2px solid #13b7f6;
    }
  }

</style>
