/**
* Created by wyg on 2017/10/8.
*/

<template>
  <div class="h100 doubleListView">

      <!--<div class="contentTop fff border-bottom padding-container-lr">-->
      <!--<p><i class="OAIndexIcon C2-llmainpageback topIcon"></i></p>-->
      <!--<div class="topTab">-->
      <!--<p v-for="(item,index) in topSelect" :class="item.isCurrent?'current':''"-->
      <!--@click="topTabClick(item.id)">-->
      <!--{{item.name}}-->
      <!--</p>-->
      <!--</div>-->
      <!--<p><i class="OAIndexIcon C2-sousuo_sousuo topIcon"></i></p>-->
      <!--</div>-->
      <div>
        <!--<div class="box-margin-top">-->
        <div v-if="topSelect[0].isCurrent">
          <template v-if="collectListErrand.length>0">
            <template v-for="(item,index) in collectListErrand">
              <div class="border-bottom marTop">
                <CellSwipeErrand :rightFun="testFun" :data="item"></CellSwipeErrand>
              </div>
            </template>
          </template>
          <template v-else>
            <div style="text-align: center;margin-top: .2rem">
              暂无收藏内容
            </div>
          </template>
        </div>
        <div v-else>
          <template v-for="(item,index) in collectList">
            <div class="border-bottom">
              <CellSwipe :title="item.orgName" :rightFun="testFun" label="2017-05-12" :type="2"></CellSwipe>
            </div>
          </template>
        </div>
      </div>
  </div>
</template>

<script>
  /***
   * 收藏
   */
  import CellSwipe from 'components/public/CellSwipe.vue'
  import CellSwipeErrand from 'components/public/CellSwipeErrand.vue'
  import Api from '../../api'
  import Util from '../../util'
  import {Toast} from 'mint-ui'
  export default {
    name: 'collection',
    components: {CellSwipe,CellSwipeErrand},
    data () {
      return {
        topSelect: [{isCurrent: true, name: '事项', id: 'sx'},
          {isCurrent: false, name: '便民', id: 'bm'}],
        collectList:[],
        //办事的收藏列表
        collectListErrand:[],
      }
    },
    created(){
      this.getMatterCollection();
    },
    methods: {
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
      getMatterCollection(){
        let userInfo = Util.user.getUserInfo();
        let params = {certificate_no: userInfo.certificateNum};
        Api.collectionApi.getMatterCollection(params).then(res => {
          console.log(res)
          if (res.code='200') {
            let list = [];
            if (res.list.length) {
              for(let item of res.list){
                list.push(item.business_id);
              }
            }
            let cond = {
              filters: {
                groupOp: 'OR',
                rules: [
                  {field:'approveId',op:"in",data:list.length? list : ''},
                ]
              }
            };
            let params = {page: 1, rows: 100, cond: encodeURI(JSON.stringify(cond))};

            console.log('params',params)
            //根据ID集合 获取列表
            Api.errandApi.getErrandList(params).then(res=>{
              this.collectList = res.contents;
              let collectListErrand = [];
              for(let item of res.contents){
                  let _item = {
                    title:item.approveName,
                    name:item.orgName,
                    id:item.approveId,
                    score:parseInt(item.transactLevel),
                    isActive:true,
                    frequency:item.minSeq
                  };
                collectListErrand.push(_item);
              }
              this.collectListErrand = collectListErrand;
            });
          }else{
            console.log('-------事项查询没有数据-----', res);
            // todo  事项查询数据为空操作
          }
        });
      },
      testFun(id){
        console.log('删除的id--->',id);
        let userInfo = Util.user.getUserAllInfo();
        let params = {
          apply_id: userInfo.certificateNum,
          apply_type: 1,
          collect_type: 1,
          business_id: id
        };
        Api.collectionApi.deleteCollection(params).then(res => {
          if (res.code == '200') {
            Toast(res.info);
            this.getMatterCollection();
          }
        });
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
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

  .doubleListView {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    .contentTop {
      height: .96rem;
    }
    .marTop{
      margin-top: .23rem;
    }
    .marTop:first-child{
      margin-top: 0;
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
