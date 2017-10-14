/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100 doubleListView bm">
    <LeftView :dataList="leftDataList" :liClickFun="selecedLeftFun"
              :selectedId="selectedId">
      <div class="flex1 right">
        <template v-if="selectedId ==14" :selectedId="selectedId">
          <Education :datainfoto="list" :datainfolist="list1"></Education>
        </template>
      </div>
    </LeftView>

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
          this.leftDataList = res.data
//        this.leftDataList.id=this.leftDataList.channelId
//        console.log( this.leftDataList)
        })
      },

      //点击左侧列表 单元格
      selecedLeftFun(channelId) {
        //左侧列表发生变化  右侧组件变化成不同组件
        this.selectedId = channelId;
        console.log(channelId)
        if (this.selectedId == channelId) {
          Api.getnewsApi.getnews(
            {
              content: btoa(Util.other.Utf8ToUnicode(JSON.stringify({
                channelId: "14",
                start: "0",
                count: "99",
                grantUserName: "xxld",
                userName: "xxld",
                site: "hunanzhengwu"
              })))
            },
            {headers: {'content-type': 'application/x-www-form-urlencoded'}}
          ).then(res => {
            this.list = res.data;
//         console.log(this.list)
            Api.getnewsApi.getnews(
              {
                content: btoa(Util.other.Utf8ToUnicode(JSON.stringify({
                  channelId: "21",
                  start: "0",
                  count: "99",
                  grantUserName: "xxld",
                  userName: "xxld",
                  site: "hunanzhengwu"
                })))
              },
              {headers: {'content-type': 'application/x-www-form-urlencoded'}}
            ).then(res => {
              this.list1 = res.data;
//           console.log(this.list1)
            })
          })
        }
        else {
          Toast("没有内容")
        }
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

  .bm {
    div.doubleListBox {
      top: 0;
    }
  }
</style>
