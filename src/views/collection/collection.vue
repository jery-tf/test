/**
* Created by wyg on 2017/10/8.
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

    <div class="box-margin-top">
      <div v-if="topSelect[0].isCurrent">
        <div class="border-bottom">
          <CellSwipe title="婚育收养-幼儿园" :rightFun="testFun" label="2017-05-12" :type="2"></CellSwipe>
        </div>
        <div class="border-bottom">
          <CellSwipe title="婚育收养-幼儿园" :rightFun="testFun" label="2017-05-12" :type="2"></CellSwipe>
        </div>

      </div>
      <div v-else>222</div>
    </div>
  </div>
</template>

<script>
  /***
   * 收藏
   */
  import CellSwipe from 'components/public/CellSwipe.vue'
  import Api from '../../api'
  import Util from '../../util'
  export default {
    name: 'collection',
    components: {CellSwipe},
    data () {
      return {
        topSelect: [{isCurrent: true, name: '事项', id: 'sx'},
          {isCurrent: false, name: '便民', id: 'bm'}],
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
        let params = {Certificate_no: userInfo.certificateNum};
        Api.collectionApi.getMatterCollection(params).then(res => {
          if (res.TotalSize) {
            console.log('OK');
          }else{
            console.log('-------事项查询没有数据-----', res);
            // todo  事项查询数据为空操作
          }
        });
      },
      testFun(){
        console.log(11)
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
    .icon-llmainpageback {
      color: #fff;
    }
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
