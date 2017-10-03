/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100 doubleListView bm">
    <DoubleListView :dataList="leftDataList" :liClickFun="selecedLeftFun"
                    :selectedId="selectedId">
      <div class="flex1 right">
        <Education></Education>
      </div>
    </DoubleListView>
  </div>
</template>

<script>
import DoubleListView from 'components/public/DoubleListView.vue'
import Education from 'components/convenpeo/Education.vue'
import Api from '../../api'
import Util from '../../util'
import axios from 'axios'
import Config from '../../config'
import qs from "qs"
export default {
  name: 'forpeople',
  components: {
    DoubleListView:DoubleListView,
     Education:Education,
  },
  data() {
    return {
      selected: '1',
      currentView: 'Education',
      leftDataList: [

      ],
      selectedId: 13
    }
  },
  created() {
  this.peolist()
  },
  methods: {
    //发送请求获取左侧栏的数据
    peolist(){
      Api.opacityApi.forpeo(
        {
          content: btoa(Util.other.Utf8ToUnicode(JSON.stringify({
            channelId: "3",
            start: "0",
            count: "99",
            grantUserName: "xxld",
            userName: "xxld",
            site: "hunanzhengwu"
          })))
        },
        {headers: {'content-type': 'application/x-www-form-urlencoded'}}
      ).then(res => {
        console.log(res.data)
        this.leftDataList = res.data
        this.leftDataList.id=res.data.channelId
      })
    },

    //点击左侧列表 单元格
    selecedLeftFun(id) {
      //左侧列表发生变化  右侧组件变化成不同组件
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
  .bm{
    div.doubleListBox{
      top:0;
    }
  }
</style>
