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
      }
    },
    created(){
      this.getLeftList(Util.errand.getErrandClassName(this.$route.params.id));
    },
    methods: {
      //获取左侧列表
      getLeftList(id){
        Api.otherApi.getDictionaries(id).then(res => {

          console.log('左侧', res);
          let arr = [];
          for (let item of res[Util.errand.getErrandClassName(this.$route.params.id)]) {
            arr.push({id: item.dictdataName, name: item.dictdataValue, icon: 'icon-ertongshouyang'});

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
        })
      },
      //点击左侧列表 单元格
      selecedLeftFun(id){
        this.selectedId = id;
        console.log('id--->', id);

        let cond = {
          filters: {
            groupOp: 'OR',
            rules: [
              {field:this.catalog,op:"eq",data:id},
              {field:this.catalog,op:"bw",data:id+","},
              {field:this.catalog,op:"cn",data:","+id+","},
              //todo 办事列表
              //{field:this.catalog,op:"ew",data:","+id} 该运算符有问题，暂不使用该条件
            ]
          }
        };
        let params = {page: 1, rows: 100, cond: encodeURI(JSON.stringify(cond))};
        Api.errandApi.getErrandList(params).then(res => {
          console.log(res);
          let arr = [];
          for (let item of res.contents) {
            let _item = {
              id: item.approveId, title: item.approveName, score: parseInt(item.transactLevel),
              frequency: item.minSeq, name: item.orgName, isActive: true
            };
            arr.push(_item);
          }
          this.guideList = arr;
        })
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
    },
    computed:{
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
