/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100 doubleListView">
    <DoubleListView :dataList="leftDataList" :liClickFun="selecedLeftFun"
                    :selectedId="selectedId">
      <div class="flex1 right">
        <component v-bind:is="currentView" keep-alive>
          <!-- 组件在 vm.currentview 变化时改变！ -->
        </component>
      </div>
    </DoubleListView>
  </div>
</template>

<script>
import DoubleListView from 'components/public/DoubleListView.vue'
import Education from 'components/convenpeo/Education.vue'
import Adoption from 'components/convenpeo/Adoption.vue'
import ApplyJob from 'components/convenpeo/ApplyJob.vue'
import Ratepay from 'components/convenpeo/Ratepay.vue'
export default {
  name: 'forpeople',
  components: {
    DoubleListView:DoubleListView,
     Education:Education,
    Adoption:Adoption
  },
  data() {
    return {
      selected: '1',
      currentView: 'Education',
      leftDataList: [
        {
          id: 1,
          icon: 'icon-ertongshouyang',
          name: '婚育收养'
        }, {
          id: 2,
          icon: 'icon-xuexiao',
          name: '教育培训'
        }, {
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
      selectedId: 1
    }
  },
  created() {

  },
  methods: {
    //点击左侧列表 单元格
    selecedLeftFun(id) {
      //左侧列表发生变化  右侧组件变化成不同组件
      this.selectedId = id;
      if (id == "1") {
        this.currentView=Education
      }
      if (id == "2") {
        this.currentView=Adoption
      }
      if (this.selectedId == "3") {
        this.currentView=ApplyJob
      }
       if (this.selectedId == "4") {
        this.currentView=Ratepay
      }
    }
  }

}
</script>

<style lang="less" rel="stylesheet/less" scoped>
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
