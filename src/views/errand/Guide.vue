/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div class="h100">
    <div class="guideContent">
      <ErrandHead :score="3" :workDay="approve.commitmentLimit" :workNo="approve.minSeq"
                  :title="approve.approveName"></ErrandHead>

      <div class="mall-warp fff padding-container shoufei h88">
        <div>
          <p>
            <i class="OAIndexIcon C2-charge red-color"></i>
          </p>
          <span>收费标准:{{approve.chargeStandard}}元</span>
        </div>
        <i class="OAIndexIcon C2-gengduo11 red-color"></i>
      </div>
      <div  class="paycost padding-container shoufei h88" v-if="approve.makeTransaction != 'N' ">
        <span> <i class="OAIndexIcon C2-yuyue"></i> 预约办理</span>
        <span> <i class="OAIndexIcon C2-rongzixindai"></i> 网上支付</span>
        <span> <i class="OAIndexIcon C2-wuliu"></i> 物流快递</span>
      </div>
      <div  class="nopaycost padding-container shoufei h88" v-else>
        <span><i class="OAIndexIcon C2-yuyue"></i> 不支持预约办理</span>
        <span><i class="OAIndexIcon C2-rongzixindai"></i>不支持网上支付</span>
        <span><i class="OAIndexIcon C2-wuliu"></i> 不支持物流快递</span>
      </div>
      <div class="box-margin-top fff padding-container dingwei h88">
        <p>
          <i class="OAIndexIcon C2-dingwei"></i>
        </p>
        <p class="oneLineFont">{{approve.transactAddress}}</p>
      </div>
      <div class="box-margin-top">
        <div class="box-margin-top fff dingwei h88" id="searchBar">
          <ul :class="searchBarFixed == true ? 'isFixed' :''" class="flexm">
            <li v-for="(item,index) in list" :key='index' @click="getprocess(item.id)" :class="item.id==selectedId?'li active':'li'">{{item.name}}</li>
          </ul>
        </div>
            <div class="padding-container fff" id="one">
                <Subtitle title="事项类型" :content="CdictionariesXZLB"></Subtitle>
                <Subtitle title="实施机关" :content="approve.orgName||''"></Subtitle>
                <Subtitle title="法定时限" :content="`${approve.approveLimit ||''}个工作日`"></Subtitle>
                <Subtitle title="办理形式" :content="CtransactionFrom||''"></Subtitle>
                <Subtitle title="设定依据" :content="approve.settingGist||''"></Subtitle>
                <Subtitle title="收费依据" :content="approve.chargeGist||''"></Subtitle>
                <Subtitle title="审查标准" :content="approve.examinationStandard||''"></Subtitle>
                <Subtitle title="通办范围" :content="approve.doScope||''"></Subtitle>
                <Subtitle title="办理时间" :content="approve.workTime||''"></Subtitle>
                <Subtitle title="监督电话" :content="approve.complaintTel||''"></Subtitle>
                <Subtitle title="办理流程" :content="approve.handingProcedures||''"></Subtitle>
            </div>
            <div class="box-margin-top fff" id="two">
              <p class="padding-container" style="font-size: .24rem;color:#333">申请材料</p>
              <template v-for="item in materialList">
                <applicationMaterials :name="item.materialTitle" :number="item.copiesNum" :source="item.sourceChannel">
                </applicationMaterials>
              </template>
            </div>
            <div class="box-margin-top fff" id="three">
              <p class="padding-container" style="font-size: .24rem;color:#333">办理流程</p>
            </div>
      </div>
    </div>
    <ErrandFoot tel="0731-231224223" :btnClick="testBtn" :isShowCollection="true" :isCollection="isCollection"
                btnName="在线办理" :errandId="$route.params.id" :updataIsCollection="updataIsCollection"></ErrandFoot>
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
        searchBarFixed:'',
        list: [
          {id: '1', name: '基本信息'}, {id: '2', name: '申请材料'}, {id: '3', name: '办理流程'}
        ],
        selectedId: '1',
      }
    },
    created(){
      this.getErrandDetails(this.$route.params.id);

      //获取收藏状态
      this.isCollectionFun();

      this.getDictionaries();
      this.getMaterialList();

    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
      this.handleScroll()
    },
    methods: {
//      bgc1(){
//        let aaaa=document.querySelector('#one').offsetTop;
//        document.body.scrollTop =aaaa;
//      },
//      bgc2(){
//        let bbbb=document.querySelector('#two').offsetTop;
//        document.body.scrollTop =bbbb;
//      },
//      bgc3(){
//        let cccc=document.querySelector('#three').offsetTop;
//        document.body.scrollTop =cccc;
//      },
      getprocess(id){
        this.selectedId = id;
        if(this.selectedId==1){
          console.log(1)
          let aaaa=document.querySelector('#one').offsetTop;
        document.body.scrollTop =aaaa;
        }else if(this.selectedId==2){
          console.log(2)
          let bbbb=document.querySelector('#two').offsetTop;
        document.body.scrollTop =bbbb;
        }else if(this.selectedId==3){
          console.log(3)
          let bbbb=document.querySelector('#three').offsetTop;
          document.body.scrollTop =bbbb;
        }
      },
      handleScroll () {
        var scrollTop =  document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        var offsetTop = document.querySelector('#searchBar').offsetTop
        if (scrollTop > offsetTop) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }
      },
      testBtn(){
        this.$router.push({path: `/errand/online/${this.$route.params.id}`})
      },
      //数据初始化
      getErrandDetails(id){
        MintUI.Indicator.open('请稍后...');
        Promise.all([Api.errandApi.getErrandDetails(id), Api.errandApi.getApproveinterfaceExtend(id)])
          .then(res => {
            this.approve = Object.assign({}, res[0], res[1]);
//            console.log(Object.assign({}, res[0], res[1]));
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
//          console.log('材料列表', JSON.parse(JSON.stringify(res.contents)));
          if (res.contents) {
            this.materialList = res.contents;
          }

        })
      },
      //修改收藏状态
      updataIsCollection(state){
        this.isCollection = state;
      },
      //判断是否已经收藏
      isCollectionFun(){
        let userInfo = Util.user.getUserAllInfo();
        let params = {certificate_no: userInfo.certificateNum};
        if(userInfo){
          Api.collectionApi.getMatterCollection(params).then(res=>{
//            console.log('收藏',res);
            if(res.code === '200'){
                if(res.TotalSize){
                  for(let data of res.list){
//                    console.log('res.list',data)
                     if(data.business_id == this.$route.params.id) {
//                         console.log('已经收藏')
                         this.isCollection = true;
                         break
                     }
                  }
                }
            }
          })
        }
      },

    },
    computed: {
      //事项类型
      CdictionariesXZLB(){
//        console.log('this.dictionariesXZLB',this.dictionariesXZLB,this.approve.typeCode);
        if (this.dictionariesXZLB) {
          for (let i in this.dictionariesXZLB) {
            if (this.dictionariesXZLB[i].dictdataName == this.approve.typeCode) {
              return this.dictionariesXZLB[i].dictdataValue;
            }
          }
        }
        return '';
      },
//      办件形式
      CtransactionFrom(){
        let transactionFrom = {
          '1': '网上办理'
        };
        return transactionFrom[this.approve.transactionFrom];
      },

    },
    //清除页面滚动事件
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },


  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .fff {
    font-size: .28rem;
  }
  .guideContent{
    padding-bottom: 1rem;
    /*overflow-y: auto;*/
  }

  .C2-charge {
    font-size: .25rem;
    margin-right: .15rem;
    color: #f56262;
  }

  .C2-gengduo11 {
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
    .C2-dingwei {
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
.paycost{
  background-color: #f9f9f9;
  span{
    .C2-yuyue,.C2-rongzixindai,.C2-wuliu{
      color: red;
      font-size: 0.21rem;
    }
    margin-right: 0.36rem;
    font-size: 0.21rem;
    color: #333;
  }
}
.nopaycost{
  background-color: #f9f9f9;
  span{
    .C2-yuyue,.C2-rongzixindai,.C2-wuliu{
      font-size: 0.21rem;
    }
    margin-right: 0.36rem;
    font-size: 0.21rem;
    color: #333;
  }
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
.onfixed{
  border:1px solid #fff;
  margin-bottom:-1px;
}
  #searchBar{
    .isFixed{
      position:fixed;
      background-color:#Fff;
      top:0;
      z-index:999;
    }
    ul {
      WIDTH:100%;
      height: 40px;
      line-height: 40px;
      display: flex;
      li {
        font-size: 0.2rem;
        text-align: center;
        flex: 1;
        i {
          font-size: 0.9rem;
          padding-left: 5px;
          color: #ccc;
        }
      }
      li.active{
        color: #13B7F6;
        border-bottom: 2px solid #13B7F6 ;
      }
      border-bottom: 1px solid #ddd;
    }
  }
  .isFixed{
    position: fixed
  }

</style>
