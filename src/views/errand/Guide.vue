/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div class="h100">
    <div class="h100 guideContent">
      <ErrandHead :score="3" :workDay="approve.commitmentLimit" :workNo="approve.minSeq"
                  :title="approve.approveName"></ErrandHead>

      <div class="mall-warp fff padding-container shoufei h88">
        <div>
          <p>
            <i class="OAIndexIcon icon-charge red-color"></i>
          </p>
          <span>收费标准:{{approve.chargeStandard}}元</span>
        </div>
        <i class="OAIndexIcon icon-gengduo11 red-color"></i>
      </div>

      <div class="box-margin-top fff padding-container dingwei h88">
        <p>
          <i class="OAIndexIcon icon-dingwei"></i>
        </p>
        <p class="oneLineFont">{{approve.transactAddress}}</p>
      </div>

      <div class="box-margin-top">
        <mt-navbar v-model="selected">
          <mt-tab-item id="info">基本信息</mt-tab-item>
          <mt-tab-item id="application">申请材料</mt-tab-item>
          <mt-tab-item id="process">办理流程</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="info">
            <div class="padding-container fff box-margin-top">
              <div>
                <Subtitle title="事项类型" :content="CdictionariesXZLB"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="实施机关" :content="approve.orgName||''"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="法定时限" :content="`${approve.approveLimit ||''}个工作日`"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="办理形式" :content="CtransactionFrom||''"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="设定依据" :content="approve.settingGist||''"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="收费依据" :content="approve.chargeGist||''"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="审查标准" :content="approve.examinationStandard||''"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="通办范围" :content="approve.doScope||''"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="预约办理" :content="approve.makeTransaction == 'N' ? '不支持' : '支持'"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="网上支付" :content="approve.onlinePayment == 'N' ? '不支持' : '支持'"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="物流快递" :content="approve.logisticsExpress == 'N' ? '不支持' : '支持'"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="办理时间" :content="approve.workTime||''"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="监督电话" :content="approve.complaintTel||''"></Subtitle>
              </div>
              <div class="box-margin-top">
                <Subtitle title="办理流程" :content="approve.handingProcedures||''"></Subtitle>
              </div>
            </div>
          </mt-tab-container-item>

          <mt-tab-container-item id="application">
            <div class="box-margin-top fff">
              <p class="padding-container" style="font-size: .24rem;color:#333">申请材料</p>
              <template v-for="item in materialList">
                <applicationMaterials :name="item.materialTitle" :number="item.copiesNum" :source="item.sourceChannel">
                </applicationMaterials>
              </template>
            </div>
          </mt-tab-container-item>

          <mt-tab-container-item id="process">
            <div class="box-margin-top fff">
              <p class="padding-container" style="font-size: .24rem;color:#333">办理流程</p>

            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <ErrandFoot tel="0731-231224223" :btnClick="testBtn" :isShowCollection="true" :isCollection="isCollection"
                btnName="在线提交" :errandId="$route.params.id" :updataIsCollection="updataIsCollection"></ErrandFoot>
  </div>
</template>

<script>
  import ErrandFoot from 'components/errand/footer.vue'
  import ErrandHead from 'components/errand/header.vue'
  import Subtitle from 'components/errand/Subtitle.vue'
  import applicationMaterials from 'components/errand/applicationMaterials.vue'
  import MintUI from 'mint-ui';
  import Util from '../../util'
  import Api from '../../api'
  export default {
    name: 'Guide',
    components: {ErrandFoot, ErrandHead, Subtitle, applicationMaterials},
    data () {
      return {
        selected: 'info',
        approve: {},//办事指南详细数据
        dictionariesXZLB: {},
        materialList: [],//材料列表
        isCollection:false,
      }
    },
    created(){
      this.getErrandDetails(this.$route.params.id);


      this.getDictionaries();
      this.getMaterialList();
    },
    methods: {
      testBtn(){
        this.$router.push({path: `/errand/online/${this.$route.params.id}`})
      },
      //数据初始化
      getErrandDetails(id){
        MintUI.Indicator.open('请稍后...');
        Promise.all([Api.errandApi.getErrandDetails(id), Api.errandApi.getApproveName(id)])
          .then(res => {
            this.approve = Object.assign({}, res[0], res[1]);
            console.log(Object.assign({}, res[0], res[1]));
          })
      },
      //获取字典
      getDictionaries(){
        let dictionariesXZLB = Util.other.getDictionariesByKey('行政类别');
        if (dictionariesXZLB) {
          this.dictionariesXZLB = dictionariesXZLB;
        } else {
          let arr = ['行政类别'];
          Api.otherApi.getDictionaries(['行政类别']).then(res => {
            if (res) {
              for (let key in res) {
                Util.other.setDictionaries(key, res[key]);
              }
              this.dictionariesXZLB = res['行政类别'];
            }
          })
        }
      },
      //获取材料列表
      getMaterialList(){
        let cond = {
          filters: {
            groupOp: 'AND',
            rules: [
              {
                field: 'approveId',
                op: 'eq',
                data: this.$route.params.id
              }
            ]
          }
        };
        let params = {page: 1, rows: 100, cond: encodeURI(JSON.stringify(cond))};
        Api.errandApi.getMaterialList(params).then(res => {
          console.log('材料列表', JSON.parse(JSON.stringify(res.contents)));
          if (res.contents) {
            this.materialList = res.contents;
          }

        })
      },
      //修改收藏状态
      updataIsCollection(state){
        this.isCollection = state;
      }
    },
    computed: {
      //事项类型
      CdictionariesXZLB(){
        if (this.dictionariesXZLB) {
          for (let i in this.dictionariesXZLB) {
            if (this.dictionariesXZLB[i].dictdataName == this.approve.typeCode) {
              return this.dictionariesXZLB[i].dictdataValue;
            }
          }
        }
        return '查询中...'
      },
//      办件形式
      CtransactionFrom(){
        let transactionFrom = {
          '1': '网上办理'
        };
        return transactionFrom[this.approve.transactionFrom];
      },

    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .fff {
    font-size: .28rem;
  }
  .guideContent{
    padding-bottom: 1rem;
    overflow-y: auto;
  }

  .icon-charge {
    font-size: .25rem;
    margin-right: .15rem;
    color: #f56262;
  }

  .icon-gengduo11 {
    color: #999;
  }

  .h88{
    height: .88rem;
  }

  .shoufei {
    >div{
      display: flex;
      align-items: center;
    }
    p {
      width: .5rem;
    }
  }

  .dingwei {
    display: flex;
    align-items: center;
    .icon-dingwei {
      font-size: .24rem;
      color: #fc992c;
    }
    > p:first-child {
      width: .5rem;
      height: .3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    > p:last-child {
      flex: 1;
    }
  }

  .mint-navbar .mint-tab-item.is-selected {
    margin-bottom: -1px;
    z-index: 100;
  }

  .h100 {
    .flex1 {
      flex: 1;
      display: flex;
      flex-direction: column;
      .mint-tab-container {
        flex: 1;
        background: #fff;
        border-top: 1px solid #ccc;
        padding-bottom: 1rem;
      }
    }
  }

  .colorY {
    color: #ff9900;
    font-size: .21rem;
  }

</style>
