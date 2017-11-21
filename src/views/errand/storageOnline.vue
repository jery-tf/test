/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100">
    <div class="soll">
      <ErrandHead :score="3" :workDay="approve.commitmentLimit" :workNo="approve.minSeq"
                  :title="approve.approveName"></ErrandHead>

      <div class="isSubmitList box-margin-top">
        <template v-for="(item,index) in materialList">
          <ErrandSubmitLi :title='item.materialName'
                          :isSubmint="isSubmint(item.submitState)"
                          :btnClick="toLoadFile.bind(this,item)">
          </ErrandSubmitLi>
        </template>
      </div>

      <div class="box-margin-top">
        <ErrandAddress :option="option" :addressSelect="testAddress"></ErrandAddress>
      </div>
      <div class="box-margin-top">
        <ErrandAddress :option="option2" :addressSelect="testAddress"></ErrandAddress>
      </div>
    </div>

    <ErrandFoot tel="0731-231224223" :btnClick="onlineSubmit" btnName="提交"
                :errandId="$route.params.id"></ErrandFoot>
  </div>
</template>

<script>
  import ErrandHead from 'components/errand/header.vue'
  import ErrandSubmitLi from 'components/errand/SubmitLi.vue'
  import ErrandAddress from 'components/errand/address.vue'
  import ErrandFoot from 'components/errand/footer.vue'
  import MintUI, {MessageBox,Toast} from 'mint-ui'
  import Util from '../../util'
  import Api from '../../api'

  export default {
    name: 'Online',
    components: {ErrandHead, ErrandSubmitLi, ErrandAddress, ErrandFoot,Toast},
    data () {
      return {
        approve: {},
        currentFileList: {},//当前已上传的文件列表
        currentFlieKey: [],//当前已上传的文件列表id
        currentFliesCount: 0,//当前已经上传的文件列表数
        materialList: [],//材料列表
        approveId:'',
        submitState:'',
        toastStr:'',
        option: {
          userName: '张三',
          phone: '123123123',
          address: '这是地址很长很长这是地址很长很长下看看测试下下看看测试下这是地址很长很长这是地址很长很长这是地址很长很长',
          isDefault: true,
          type: 1,
          id: 'zs'
        },
        option2: {
          id: 'ls',
          userName: '李四',
          phone: '4322423423',
          address: '木有地址',
          isDefault: false,
          type: 2
        },
      }
    },
    created(){

      this.approveId = this.$route.query.approveId
      this.getErrandDetails(this.$route.query.approveId);
      /*清除附件信息*/
      sessionStorage.removeItem('errandData')
      window.addEventListener("popstate", this.bindPopstate, false);
      Api.errandApi.findByInstanceId(this.$route.query.instanceId).then(res=>{
        this.materialList = res
        let errandData = JSON.parse(sessionStorage.getItem('errandData'))
         //获取各材料对应的附件并保存到缓存中
        this.materialList.forEach(item=>{
          Api.errandApi.findListByBusinessId(item.materialInsId).then(res=>{
            console.log('附件',res);
            if (res.length){
              this.currentFliesCount++
              let key = this.approveId+'-'+item.materialId;
              let storeData = [];
              res.forEach(e=>{
                storeData.push({
                  "type": e.attachType,
                  "title": e.attachName,
                  "label": e.attachSize/1000/1000+'Mb '+Util.ctime.format(e.createTime,'yyyy-MM-dd'),
                  "url": e.attachPath,
                  "id": e.createTime,
                  "attachId":e.attachId,
                  "materialInsId":item.materialInsId
                })
              })
              if (!errandData) {
                errandData = {};
              }
              errandData[key] = storeData;
              sessionStorage.setItem('errandData',JSON.stringify(errandData));
            }
          })
        })
      })
    },

    methods: {
      testBtn(data){
        this.$router.push({path: `/errand/fileUpload/test/111`})
      },
      //跳转到上传文件页面
      toLoadFile(obj){
        //根据材料实例ID查所有附件信息
        sessionStorage.setItem('errandTitle', obj.materialName);
        /*在缓存里面标识为暂存修改*/
        sessionStorage.setItem('errandType','update')
        sessionStorage.setItem('materialInsId',obj.materialInsId)
        this.$router.push({path: `/errand/fileUpload/${this.$route.query.approveId}/${obj.materialId}`});
      },
      testAddress(){
        console.log(22)
      },
      //数据初始化
      getErrandDetails(id){
        //获取材料列表参数
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

        MintUI.Indicator.open('请稍后...');
        Promise.all([Api.errandApi.getErrandDetails(id), Api.errandApi.getApproveinterfaceExtend(id)
         ])
          .then(res => {
            this.approve = Object.assign({}, res[0], res[1]);
            console.log('this.approve', res[1])
          })
      },
      //判断是否已经提交
      isSubmint(submitState){
        return submitState === '2'
      },
      //修改办件状态
      //Api.errandApi.updateInstanceStateById()
      updateInstanceStateById(state){
        let instanceId = this.$route.query.instanceId;
        Api.errandApi.updateInstanceStateById(instanceId,{instanceId:instanceId,projectState:state}).then(res=>{
          Toast(this.toastStr);
          this.$router.push({path:`/me/myDo`})
        })
      },
      //提交数据
      onlineSubmit(){
        //console.log(this.currentFliesCount)
        let stateType = sessionStorage.getItem('stateType');
        if (!stateType){
          if (this.currentFliesCount < this.materialList.length){
            //材料未上传完整提示用户是否缓存
            MessageBox.confirm('材料未上传完整是否暂存?').then(action => {
              this.toastStr = '暂存成功请到我的附件里查看'
              this.updateInstanceStateById(0);
            }).catch(e=>{
              return false;
            });
          }else{
            this.toastStr = '提交成功'
            this.updateInstanceStateById(9);
          }
        }else{
          this.toastStr = '材料上传不完整'
          Toast(this.toastStr);
          return false;
        }
      },

      //监听返回事件
      bindPopstate(e){
        console.log('返回 暂存');
      },
    },
    beforeRouteLeave(to, from, next){
      window.removeEventListener("popstate", this.bindPopstate, false);
      next();
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .h100 {
    .soll {
      height: 100%;
      padding-bottom: 1rem;
      overflow-y: auto;
    }
  }
</style>
