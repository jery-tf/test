/**
* Created by Administrator on 2017/11/2.
*/

<template>
  <div class="consult  box-margin-top">
    <div class="myconsult" v-for="item in consult">
      <h4 class="padding-container-lr">{{item.consultTitle}}</h4>
      <p class="contents ">
        {{item.consultContent}}
      </p>
      <span class="padding-container-lr">{{item.consultTime}}</span>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import qs from "qs"

  export default {
    name: 'myconsulting',
    components: {},
    data() {
      return {
        consult: []
      }
    },
    created() {
      this.userid = JSON.parse(localStorage.getItem('userInfo')).userId
      console.log(this.userid)
      this.getMyconsult()
    },
    methods: {
      getMyconsult() {
        let id = this.userid
        let cond = {};
        cond = {
          filters: {
            groupOp: "AND",
            rules: [
              {field: 'applyId', op: "eq", data: this.userid}
            ]
          }
        }
        let params = {page: 1, rows: 100, cond: JSON.stringify(cond)};
        Api.consultApi.myConsult(params).then(res => {
//          console.log(res)
          //取咨询的数据
          let arr = [];
          for (let item of res.contents) {
            let _item = {
              applyId: item.applyId, applyName: item.applyName, applyPhone: item.applyPhone,
              consultContent: item.consultContent, approveId: item.approveId, consultTitle: item.consultTitle,
              orgName: item.orgName,consultTime: Util.ctime.ctime(item.consultTime)
            };
            arr.push(_item);
            this.consult = arr
          }
          let ctime=this.consult.consultTime
        })
      },
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .consult {
    .myconsult {
      background-color: #fff;
      padding-right: 0.24rem;
      margin-bottom: 0.2rem;
      h4 {
        width: 6.72rem;
        height: 0.8rem;
        line-height: 0.8rem;
        font-weight: 400;
        font-size: 0.28rem;
        color: #333;
        font-family: '微软雅黑';
        border-bottom: 1px solid #eee;
      }
      p {
        padding: 0.24rem 0 0 0.24rem;
        font-size: 0.24rem;
        color: #666;
        line-height: 0.35rem;
      }
      span {
        font-size: 0.2rem;
        color: #aaa;
      }
    }
  }
</style>
