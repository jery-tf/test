/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="foot fff font-large">
    <p @click="addCollectionClick">添加收藏</p>
    <div class="right">
        <div class="box-margin-left" @click="callPhone">
          <i class="OAIndexIcon icon-dianhua1 font-large"></i>
        <span class="box-margin-left">{{tel || ''}}</span>
      </div>
      <p class="onlineWork" @click="btnFun">{{btnName || ''}}</p>
    </div>
  </div>
</template>

<script>
  /***
   * 办事指南及在线办理 底部电话及按钮 为固定在底部 高度为1rem
   */
  import Util from '../../util'
  export default {
    name: 'footer',
    props: ['tel', 'btnClick', 'btnName','errandId'],
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
      callPhone(){
          location.href = `tel:${this.tel}`;
      },
      //添加收藏按钮
      addCollectionClick(){
        //判断是否已经登录
        let token = Util.login.getAccessToken();
        let userInfo = Util.user.getUserAllInfo();
        console.log('userInfo->',userInfo)
//        if(token && userInfo){
//          let params = {
//            Apply_id:'',
//            Apply_type:'',
//            Collect_type:'',
//            Business_id:'',
//            Collect_time:''
//          };
//            Api.collectionApi.addCollection().then(res=>{
//
//            });
//        }else{
//          this.$router.push({path:''})
//        }

      }
    },
    computed:{
    }

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
    .right{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
    }
    i {
      position: relative;
      top: -0.02rem;
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
