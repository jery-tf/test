/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="foot fff">
    <div class="iconAll">
      <template v-if="isShowCollection">
        <div class="icon" v-if="!isCollection" @click.one="addCollectionClick">
          <i class="OAIndexIcon C2-aixin1"></i>
          <span>收藏</span>
        </div>
        <div class="icon current" @click.one="deleteCollectionClick" v-else>
          <i class="OAIndexIcon C2-shoucang1"></i>
          <span>收藏</span>
        </div>
      </template>
      <div class="telPhone icon" @click="callPhone">
        <i class="OAIndexIcon C2-dianhua1"></i>
        <span>咨询</span>
      </div>
    </div>
    <p class="onlineWork" @click="storgeBtnFun" v-show="storageBtnName">{{storageBtnName || ''}}</p>
    <p class="onlineWork" @click="btnFun">{{btnName || ''}}</p>
  </div>
</template>

<script>
  /***
   * 办事指南及在线办理 底部电话及按钮 为固定在底部 高度为1rem
   */
  import Util from '../../util'
  import Api from '../../api'
  import {Toast} from 'mint-ui';
  export default {
    name: 'footer',
    props: ['tel', 'btnClick', 'btnName', 'errandId', 'isCollection', 'isShowCollection', 'updataIsCollection','storageBtnCallBack','storageBtnName'],
    //                                                  是否已经收藏        是否显示收藏        fun 修改收藏状态
    components: {},
    data () {
      return {}
    },
    created(){
    },
    methods: {
      btnFun(){
        this.btnClick();
      },
      storgeBtnFun(){
        this.storageBtnCallBack();
      },
      callPhone(){
        location.href = `tel:${this.tel}`;
      },
      //添加收藏按钮
      addCollectionClick(){
        //判断是否已经登录
        if (this.isLogin()) {
          let userInfo = Util.user.getUserAllInfo();
          let params = {
            apply_id: userInfo.certificateNum,
            apply_type: 1,
            collect_type: 1,
            business_id: this.errandId,
            collect_time: new Date().getTime(),
            apply_name: userInfo.username
          };
          // todo 参数Apply_type 暂写1
          Api.collectionApi.addCollection(params).then(res => {
            console.log('添加收藏', res);
            if (res.code == '200') {
              this.updataIsCollection(true);
              Toast(res.info);
            }
          });
        } else {
          console.log('登录');
          this.$router.push({path: `/me/userLogin/errand-guide-${this.errandId}`})
        }
      },
      deleteCollectionClick(){
        if (this.isLogin()) {
          let userInfo = Util.user.getUserAllInfo();
          let params = {
            apply_id: userInfo.certificateNum,
            apply_type: 1,
            collect_type: 1,
            business_id: this.errandId
          };
          Api.collectionApi.deleteCollection(params).then(res => {
            if (res.code == '200') {
              this.updataIsCollection(false);
              Toast(res.info);
            }
          });
        } else {
          console.log('登录');
          this.$router.push({path: `/me/userLogin/errand-guide-${this.errandId}`})
        }
      },
      //是否已登录
      isLogin(){
        let token = Util.login.getAccessToken();
        let userInfo = Util.user.getUserAllInfo();
        return token && userInfo;
      }
    },
    computed: {}

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .foot {
    position: absolute;
    width: 100%;
    height: 1rem;
    display: flex;
    bottom: 0;
    left: 0;
    align-items: center;
    background: #fff;
    color: #26a2ff;
    border-top: 1px solid #eee;
    position: fixed;
    .iconAll {
      display: flex;
      flex: 1;
      height: 100%;
      span {
        font-size: .25rem;
      }
      .icon {
        display: flex;
        width: 1.3rem;
        height: 100%;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        color: #999;

      }
      .icon.current {
        color: #ff9900;
      }
      .icon:last-child {
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
      }
    }
    i {
      position: relative;
      font-size: .32rem;
      /*margin-bottom: .1rem;*/
    }
    div {
      display: flex;
      align-items: center;
    }
    .onlineWork {
      background: #ff9900;
      width: 2rem;
      color: #fff;
      height: 100%;
      line-height: 1rem;
      text-align: center;
    }

  }
</style>
