<template>
  <div class="seainfo">
    <div class="isfixed">
      <div class="ufix">
        <input type="text" class="ipt" v-model="ipt">
        <i class=" OAIndexIcon C2-search"></i>
        <span class=" OAIndexIcon C2-guanbi2" @click="dele()"></span>
        <input type="button" value="确定" class="btn" @click="inquire">
      </div>
    </div>
    <!--<div class="searchmore padding-container-lr">-->
    <!--<p>非财政性资金<span>建设</span>的信息工程设计施工方案备案建设的信息工程设计</p>-->
    <!--<div class="appraise">-->
    <!--<i class="OAIndexIcon C2-iconfontshoucang"></i>-->
    <!--<i class="OAIndexIcon C2-iconfontshoucang"></i>-->
    <!--<i class="OAIndexIcon C2-iconfontshoucang"></i>-->
    <!--<i class="OAIndexIcon C2-iconfontshoucang"></i>-->
    <!--<i class="OAIndexIcon C2-shoucang"></i>-->
    <!--<span><i class="OAIndexIcon C2-gouxuan"></i>最多跑现场一次</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="rightnow padding-container-lr">-->
    <!--<span><em class="OAIndexIcon C2-jigou1"></em>省环保厅</span><button class="btn">在线办理</button>-->
    <!--</div>-->
    <template v-for="(item,index) in guideList">
      <GuideInp :data="item"></GuideInp>
    </template>
  </div>
</template>
<script>
  import GuideInp from 'components/personinfo/guideinp'
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'

  export default {
    data() {
      return {
        guideList: [],//模糊查询列表信息
        ipt: ""
      }
    },
    components: {GuideInp},
    methods: {
      dele() {
        this.ipt = ""
      },
      inquire() {
        let valuefor = this.ipt
        console.log(valuefor)
        let cond = {
          filters: {
            groupOp: 'AND',
            rules: [
              {
                field: 'approveName',
                op: 'cn',
                data: valuefor
              }
            ]
          }
        };
        let params = {page: 1, rows: 100, cond: encodeURI(JSON.stringify(cond))};
        Api.opacityApi.getSearch(params).then(res => {
          console.log(res.contents)
          if (res.contents == '') {
            alert("没有此方面消息，请重新输入")
          }
          let arr = [];
          for (let item of res.contents) {
            let _item = {
              id: item.approveId, title: item.approveName, score: 4,
              frequency: item.minSeq, name: item.orgName, isActive: true,search:this.ipt
            };
            arr.push(_item);
          }
          this.guideList = arr;
        })
      }
    }
  }
</script>
<style scoped lang='less'>
  .seainfo {
    position: relative;
    background-color: #f2f2f2;
    .isfixed {
      width: 7.2rem;
      height: 1rem;
      background-color: #fbfbfb;
      .ipt {
        border: 0;
        outline: 0;
        width: 5.35rem;
        height: 0.58rem;
        margin-left: 0.2rem;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        border-radius: 10px;
        border: 1px solid #e9e9e9;
        padding-left: 0.6rem;
        font-size: 0.24rem
      }
      .C2-search {
        position: absolute;
        top: 0.33rem;
        left: 0.4rem;
        font-size: 0.26rem;
        color: #c2c2c2
      }
      .C2-guanbi2 {
        position: absolute;
        top: 0.33rem;
        right: 1.24rem;
        font-size: 0.26rem;
        color: #b2b2b2;
      }
      .btn {
        border: 0;
        outline: 0;
        font-size: 0.3rem;
        color: #1983d1;
        background-color: #fbfbfb;
        vertical-align: -15%;
        margin-left: 0.1rem
      }
      .searchmore {
        padding: 0.2rem 0.24rem;
        background-color: #fff;
        p {
          font-size: 0.28rem;
          color: #333;
          span {
            color: #ff0000
          }
        }
        .appraise {
          .C2-iconfontshoucang {
            color: #ff9900;
            font-size: 0.22rem;
          }
          .C2-shoucang {
            color: #ff9900;
            font-size: 0.30rem;
          }
          span {
            font-size: 0.21rem;
            color: #999;
            .C2-gouxuan {
              margin-left: 0.33rem;
              margin-right: 0.05rem;
              color: #29ab91;
              font-size: 0.22rem
            }
          }
        }
      }
      .rightnow {
        border-top: 1px solid #eee;
        padding-bottom: 0.15rem;
        background-color: #fff;
        span {
          font-size: 0.21rem;
          color: #999;
          .C2-jigou1 {
            font-size: 0.24rem;
            color: #21bbf7;
            padding-right: 0.2rem
          }

        }
        .btn {
          border: 0;
          outline: 0;
          float: right;
          color: #ff3e3e;
          border: 1px solid #ff3e3e;
          border-radius: 5px;
          font-size: 0.2rem;
          padding: 5px;
          margin-top: 0.1rem
        }
      }
    }
  }

</style>

