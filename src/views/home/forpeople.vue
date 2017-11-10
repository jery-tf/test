/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100 doubleListView bm">
    <LeftView :dataList="leftDataList" :liClickFun="selecedLeftFun"
              :selectedId="selectedId">

    </LeftView>
    <div class="flex1">
      <template :selectedId="selectedId">
        <Education :datainfoto="list" :datainfolist="list1"></Education>
      </template>
    </div>
  </div>
</template>
<script>
  import LeftView from 'components/convenpeo/LeftView.vue'
  import Education from 'components/convenpeo/Education.vue'
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import qs from "qs"
  import {Toast} from 'mint-ui';

  export default {
    name: 'forpeople',
    components: {
      LeftView: LeftView,
      Education: Education,
    },
    data() {
      return {
        selected: '13',
        currentView: 'Education',
        leftDataList: [],
        selectedId: 13,
        list: [],
        list1: [],
      }
    },
    created() {
      this.peolist()
      this.selecedLeftFun(13)
    },
    methods: {
      //发送请求获取左侧栏的数据
      peolist() {
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
          let arr = [];
          for (let item of res.data) {
            arr.push({
              channelId: item.channelId,
              name: item.name,
              icon: Util.icon.getValueBySeed(item.name)
            });
          }
          this.leftDataList = arr
          //列表中的默认值给 selectedId
          if (!this.selectedId && item.dictdataIsdefault) {
            this.selectedId = item.name;
          }
        })
      },
      //点击左侧列表 单元格
      selecedLeftFun(channelId) {
        //左侧列表发生变化  右侧组件变化成不同组件
       this.selectedId = channelId;
        Util.cmsdao.fetchAllSubChnlNArti(`${this.selectedId}`,2).then(res=>{
//           this.list=res
          if(res==null){
            Toast('功能正在开发中，敬请期待')
            this.list=''
            return
          }
          let arr = [];
          for (let item of res) {
            arr.push({
              sub:item.sub,
              channelId: item.channelId,
              name: item.name,
              icon: Util.icon.getValueBySeed(item.name)
            });
          }
          this.list = arr
        })
      }
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
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

  .flex1 {
    margin-left: 1.7rem;
  }

  .bm {
    div.doubleListBox {
      top: 0;
    }
  }
</style>
