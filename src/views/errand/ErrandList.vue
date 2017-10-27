/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100 doubleListView">
    <div class="contentTop fff border-bottom padding-container-lr">
      <p><i class="OAIndexIcon C2-llmainpageback topIcon"></i></p>
      <div class="topTab">
        <p v-for="(item,index) in topSelect" :class="item.isCurrent?'current':''"
           @click="topTabClick(item.id)">
          {{item.name}}
        </p>
      </div>
      <p>
        <!--<i class="OAIndexIcon C2-sousuo_sousuo topIcon"></i>-->
      </p>
    </div>

    <div class="doubleListViewClass">
      <DoubleListView :dataList="leftDataList" :liClickFun="selecedLeftFun"
                      :selectedId="selectedId">
        <div class="flex1 right">
          <template v-for="(item,index) in guideList">
            <GuideLi :data="item"></GuideLi>
          </template>
        </div>
      </DoubleListView>
    </div>
    <div class="foot" @click="openAddressSelect">
      <p>
        <i class="C2-dingwei" style="font-size: .24rem;color:#fb992e;"></i>
        <span>当前区域 : {{currentAddress}}</span>
        <i class="C2-xialagengduo addressIcon"></i>
      </p>
    </div>
  </div>
</template>

<script>
  import DoubleListView from 'components/public/DoubleListView.vue'
  import GuideLi from 'components/errand/guideLi.vue'
  import Api from '../../api'
  import Util from '../../util'
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
        leftDataList: [],//左侧列表
        guideList: [],//右侧列表
        selectedId: '',
        currentAddress:'长沙市',
        errandName:Util.errand.getErrandClassName(this.$route.params.id)
      }
    },
    created(){
      this.getLeftList(this.errandName);
    },
    methods: {
      //获取左侧列表
      getLeftList(id){
        console.log('请求左侧', id);
        let leftList = Util.cache.getCacheDataByKey(id);
        let params = {
          url: `/approveinterface/v1/dicttypes/dictdatas/${id}`,
          type: 'GET',
          hashCode:'',
        };
        if(leftList && leftList.code){
          params.hashCode = leftList.code;
          //先展示缓存数据
          this.initLeftData(leftList.value);
        }
        Api.cacheApi.getCacheData(params).then(res => {
          //接口是否返回了数据
          if(res.respData){
            //取接口数据
            let data = JSON.parse(res.respData);
            this.initLeftData(data[id]);
            Util.cache.setCacheData(id,{code:res.hashCode,value:data[id]});
          }else{
            //取缓存
            this.initLeftData(leftList.value);
          }
        }).catch(err=>{
          //请求出错  取缓存数据;
          if(leftList && leftList.value){
            this.initLeftData(leftList.value);
          }
        });
      },
      //初始化左侧列表
      initLeftData(list){
        let arr = [];
        for (let item of list) {
          arr.push({
            id: item.dictdataName,
            name: item.dictdataValue,
            icon: Util.icon.getValueBySeed(item.dictdataName)
          });

          //列表中的默认值给 selectedId
          if (!this.selectedId && item.dictdataIsdefault) {
            this.selectedId = item.dictdataName;
          }
        }
        //如果列表中没有默认值 则默认第一个
        if (!this.selectedId && arr[0]) {
          this.selectedId = arr[0].id;
        }
        if (this.selectedId) {
          this.selecedLeftFun(this.selectedId);
        }
        this.leftDataList = arr;
      },
      //点击左侧列表 单元格
      selecedLeftFun(id){
        console.log('i---d',id)
        this.selectedId = id;
        //缓存用的key
        let cacheKey = `${this.errandName}-${id}`;
        let cacheList = Util.cache.getCacheDataByKey(cacheKey);
        let cond = {
          filters: {
            groupOp: 'OR',
            rules: [
              {field: this.catalog, op: "eq", data: id},
              {field: this.catalog, op: "bw", data: id + ","},
              {field: this.catalog, op: "cn", data: "," + id + ","},
              //todo 办事列表
              //{field:this.catalog,op:"ew",data:","+id} 该运算符有问题，暂不使用该条件
            ]
          }
        };
        let _params = {page: 1, rows: 100, cond: encodeURI(JSON.stringify(cond))};
        let params = {
          url: `/approveinterface/v1/approveinfo${Util.other.reqParms(_params)}`,
          type: 'GET',
          hashCode:'',
        };
        if(cacheList && cacheList.code){
          params.hashCode = cacheList.code;
          //先取缓存数据
          this.guideList = cacheList.value;
        }
        Api.cacheApi.getCacheData(params).then(res => {
            console.log('右侧数据',res)
          if(res.respData){
            //取接口数据
            let data = JSON.parse(res.respData);
            let arr = [];
            for (let item of data.contents) {
              let _item = {
                id: item.approveId, title: item.approveName, score: parseInt(item.transactLevel)+1,
                frequency: item.minSeq, name: item.orgName, isActive: true
              };
              arr.push(_item);
            }
            this.guideList = arr;

            Util.cache.setCacheData(cacheKey,{code:res.hashCode,value:arr});
          }else{
            //取缓存
            this.guideList = cache.value;
          }
        }).catch(err=>{
          if(cacheList && cacheList.value){
            this.guideList = cacheList.value;
          }
        })

//        let cond = {
//          filters: {
//            groupOp: 'OR',
//            rules: [
//              {field: this.catalog, op: "eq", data: id},
//              {field: this.catalog, op: "bw", data: id + ","},
//              {field: this.catalog, op: "cn", data: "," + id + ","},
//              //todo 办事列表
//              //{field:this.catalog,op:"ew",data:","+id} 该运算符有问题，暂不使用该条件
//            ]
//          }
//        };
//        let params = {page: 1, rows: 100, cond: encodeURI(JSON.stringify(cond))};
//
//        Api.errandApi.getErrandList(params).then(res => {
//          console.log(res);
//          let arr = [];
//          for (let item of res.contents) {
//            let _item = {
//              id: item.approveId, title: item.approveName, score: parseInt(item.transactLevel),
//              frequency: item.minSeq, name: item.orgName, isActive: true
//            };
//            arr.push(_item);
//          }
//          this.guideList = arr;
//        })
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
      },
      //打开地址选择
      openAddressSelect(){
          console.log('打开地址选择');
      }
    },
    computed: {
      catalog(){
        const _catalog = {
          frfl: 'themeType',
          zrrfl: 'naturalpersonType'
        };
        return _catalog[this.$route.params.id];
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
    .C2-llmainpageback {
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
    bottom: .8rem;
    z-index: 10;
    .contentTop {
      height: .96rem;
    }
  }
  .doubleListViewClass{
    position: absolute;
    width: 100%;
    top:0;
    bottom: 0;
  }
  .foot{
    position: absolute;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #dedede;
    background: #f9f9f9;
    font-size: .28rem;
    display: flex;
    height: .8rem;
    align-items: center;
    justify-content: center;
    p{
      /*display: flex;*/
      /*align-items: center;*/
      /*justify-content: center;*/
    }
    .addressIcon{
      font-size: .16rem;
      color:#666;
    }
    .addressIcon::before{
      transform: rotate(180);
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
