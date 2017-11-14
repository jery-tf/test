/**
* Created by wyg on 2017/9/23.
* 我的办件详情
*/

<template>
  <div>
    <doDetails :dataInfo="MyPiceInfo" :doInfo="doInfo"></doDetails>
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
            doInfo:{}
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
          Api.errandApi.getProceedingDetail(this.MyPiceInfo.approveId).then(res=>{
             this.doInfo = res;
          })
        }
      }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
