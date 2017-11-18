/**
* Created by wyg on 2017/9/23.
* 我的办件详情
*/

<template>
  <div>
    <doDetails :dataInfo="MyPiceInfo" :doInfo="doInfo" :applyInfo="applyInfo"></doDetails>
   </div>
</template>

<script>
  import doDetails from '@/views/errand/completeData'
  import Api from '@/api'
  export default {
      name: 'MyPiece',
      components: {
        doDetails
      },
      data () {
          return {
            MyPiceInfo:{},
            doInfo:{},
            applyInfo:{}
          }
      },
      created(){
       // console.log(this.$route.query);
        this.MyPiceInfo = this.$route.query;
        console.log(this.MyPiceInfo)
        this._initData();
      },
      methods: {
        _initData() {
            /*获取事项基本信息*/
          Api.errandApi.getApproveinterface(this.MyPiceInfo.approveId).then(res=>{
             this.doInfo = res;
            // console.log(this.doInfo)
            /*获取事项扩展信息*/
          })
          Api.errandApi.getApproveinterfaceExtend(this.MyPiceInfo.approveId).then(res=>{
            this.doInfo.commitmentLimit = res.commitmentLimit;
          })
          this._getApplyById();
        },
        /*根据ID查询申请人*/
        _getApplyById(){
          let type = this.MyPiceInfo.applyType;
          let applyId = this.MyPiceInfo.applyId
          if (type === '1'){
            Api.errandApi.getApplyInfo(applyId).then(res=>{
              this.applyInfo = res;
            })
          }else{
            Api.errandApi.getApplyBankInfo(applyId).then(res=>{
              this.applyInfo = res;
            })
          }
        }
      }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
