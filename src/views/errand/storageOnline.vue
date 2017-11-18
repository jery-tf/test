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
  import MintUI, {MessageBox} from 'mint-ui'
  import Util from '../../util'
  import Api from '../../api'

  export default {
    name: 'Online',
    components: {ErrandHead, ErrandSubmitLi, ErrandAddress, ErrandFoot},
    data () {
      return {
        approve: {},
        currentFileList: {},//当前已上传的文件列表
        currentFlieKey: [],//当前已上传的文件列表id
        currentFlies: [],//当前已经上传的文件列表
        materialList: [],//材料列表
        approveId:'',
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
      //console.log(this.$route.query);
      this.approveId = this.$route.query.approveId
      this.getErrandDetails(this.$route.query.approveId);
      this.getFileListById(this.$route.params.approveId);
      /*清除附件信息*/
      sessionStorage.removeItem('errandData')
      window.addEventListener("popstate", this.bindPopstate, false);
      Api.errandApi.findByInstanceId(this.$route.query.instanceId).then(res=>{
        this.materialList = res
        console.log('materialList',this.materialList)
        let errandData = JSON.parse(sessionStorage.getItem('errandData'))
        for (let item in this.materialList){
          /*获取各材料对应的附件并保存到缓存中*/
          Api.errandApi.findListByBusinessId(item.materialInsId).then(res=>{
             console.log(res)
             if (res.length){
               let key = this.approveId+'-'+obj.materialId;
               let storeData = [];
               res.forEach(e=>{
                 storeData.push({
                   "type": e.attachType,
                   "title": e.attachName,
                   "label": e.attachSize/1000/1000+'kb',
                   "url": e.attachPath,
                   "id": "15109063502651",
                   "attachId":e.attachId
                 })
               })
               if (!errandData) {
                errandData = {};
               }
               errandData[key] = storeData;
               sessionStorage.setItem('errandData',JSON.stringify(errandData));
             }
           })
        }
      })
    },

    methods: {
      testBtn(data){
        this.$router.push({path: `/errand/fileUpload/test/111`})
      },
      //跳转到上传文件页面
      toLoadFile(obj){
        //根据材料实例ID查所有附件信息
        console.log(obj)
        sessionStorage.setItem('errandTitle', obj.materialName);
        /*在缓存里面标识为暂存修改*/
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
          })
      },
      //获取当前id下的所有材料列表
      getFileListById(id){
        let errandData = Util.other.getSessionStorage('errandData');
        let data = {};
        for (let key in errandData) {
          if (key.indexOf(id) !== -1) {
            let filesId = key.split('-')[1];
            if (data[filesId]) {
              data[filesId].push(errandData[key]);
            } else {
              data[filesId] = [];
              data[filesId].push(errandData[key]);
            }
            console.log();
            if (errandData[key].length){
              this.currentFlieKey.push(key);
            }
            let errandDataLi = {
              value:errandData[key],
              id:filesId
            };
            this.currentFlies.push(errandDataLi);
            console.log('this.currentFlies',this.currentFlies);
          }
        }
//        console.log('已提交的材料列表',JSON.parse(JSON.stringify(data)));
        this.currentFileList = data;
      },
      //判断是否已经提交
      isSubmint(submitState){
        return submitState === '2'
      },
      /**/
      //提交数据
      onlineSubmit(){
        /*材料不全默认提交到暂存*/

        let allUserInfo = Util.user.getUserAllInfo();
        let applicantMap = {
          name: allUserInfo.name,
          sex: allUserInfo.sex,
          certificateNum: allUserInfo.cidcard,
          phone: allUserInfo.phone,
          email: allUserInfo.email,
          certificateType: 'idcard'
        };
        Api.errandApi.addApplicant(applicantMap).then(res => {
          let approveInfo = this.approve;
          console.log(approveInfo);
          let params = {
            projectState: '9',
            instanceSource: '4',
            approveCode: approveInfo.approveCode,
            instanceName: allUserInfo.name+'办理'+approveInfo.approveName+'项目',
            approveName: approveInfo.approveName,
            approveId: approveInfo.approveId,
            orgId: approveInfo.orgId,
            areaCode: approveInfo.areaCode,
            orgName: approveInfo.orgName,
            rzApplyId:allUserInfo.id,
            applyType: '1',
            applyName: allUserInfo.username,
            applyId: res.applicantId,
          }
          if (this.materialList.length > this.currentFlieKey.length) {
            params.projectState = '0'
          }

          Api.errandApi.getApprovematerial(approveInfo.approveId).then(result=>{
            //debugger
            let _materialList = [];
            console.log('currentFlies',this.currentFlies);
            console.log('result',result);
            for (let item of this.currentFlies) {
              for (let jItem of result) {
                if (jItem.materialId === item.id) {
                  console.log('jItem',jItem)
                  let _materLi = {
                    materialId: jItem.materialId,
                    copiesNum:jItem.copiesNum,
                    commitWay:jItem.commitWay,
                    isMust:jItem.isMust,
                    orderNum:jItem.orderNum,
                    materialName:jItem.materialTitle,
                    attachList:[]
                  };
                  /*材料文件数据*/
                  for(let kItem of item.value){
                    let kItemLi = {
                      attachName:kItem.title,
                      attachSize:parseInt(kItem.label)*1024,
                      attachType:kItem.type,
                      attachPath:kItem.url,
                      attachCode:'000005',
                      isValid:'Y',
                      isDel:'N'
                    }
                    _materLi.attachList.push(kItemLi);

                  }
                  if(_materLi.attachList.length>0){
                    _materLi.submitState = '1';
                  }else{
                    _materLi.submitState = '0';
                  }
                  _materialList.push(_materLi);

                  break;
                }
              }
            }
            params.materialList = _materialList;
            params.applicant = res;
            console.log('params:',JSON.stringify(params))
            Api.errandApi.addErrandExample(params).then(_res => {
              console.log('instanceInfo:',_res);
              if(_res){
                //成功
                console.log("提交成功");
              }
            }).catch(e => {
              console.log(e);
            })
          })

        })
      },

      //监听返回事件
      bindPopstate(e){
        console.log('返回 暂存');
//        MessageBox.confirm('需要暂存之前的数据么?','提示').then(active=>{
//          console.log('确定',active);
//          //开始保存
//          MessageBox.alert('可以到我的办件中查看','操作成功').then(action => {});
//        }).catch(active=>{
//            console.log('取消',active);
//        })
      },
    },
    beforeRouteLeave(to, from, next){
      window.removeEventListener("popstate", this.bindPopstate, false);
      next();
    },

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
