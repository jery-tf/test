/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100">
    <div class="soll">
      <ErrandHead :score="3" :workDay="approve.commitmentLimit" :workNo="approve.minSeq"
                  :title="approve.approveName">
      </ErrandHead>
      <div class="isSubmitList box-margin-top">
        <CellBox>申请信息</CellBox>
        <ApplyInfoLi :clickFn="toDoInfomation.bind(this)" :info="user_Info" :isComplete="isComplete()"></ApplyInfoLi>
      </div>
      <div class="isSubmitList box-margin-top">
        <CellBox>申请材料</CellBox>
        <template v-for="(item,index) in materialList">
          <ErrandSubmitLi :title='item.materialTitle'
                          :isSubmint="isSubmint(item.materialId)"
                          :btnClick="toLoadFile.bind(this,item)">
          </ErrandSubmitLi>
        </template>
      </div>
      <div class="box-margin-top">
        <ErrandAddress :option="option" :addressSelect="testAddress"></ErrandAddress>
      </div>
      <div class="box-margin-top">
        <ErrandAddress :option="option2" :addressSelect="testAddress"></ErrandAddress>
        <a href="https://wwww.baidu.com" target="showHere">点击</a>
      </div>

    </div>
    <ErrandFoot tel="0731-231224223" :btnClick="onlineSubmit" storageBtnName="暂存" btnName="提交"
                :errandId="$route.params.id" :storageBtnCallBack="storageSubmit" ></ErrandFoot>
  </div>
</template>

<script>
  import ErrandHead from 'components/errand/header.vue'
  import ErrandSubmitLi from 'components/errand/SubmitLi.vue'
  import ApplyInfoLi from 'components/errand/applyInfoLi.vue'
  import ErrandAddress from 'components/errand/address.vue'
  import ErrandFoot from 'components/errand/footer.vue'
  import CellBox from 'components/public/CellBox.vue'
  import MintUI, {MessageBox,Toast } from 'mint-ui'
  import Util from '../../util'
  import Api from '../../api'

  export default {
    name: 'Online',
    components: {ErrandHead, ErrandSubmitLi, ErrandAddress, ErrandFoot,ApplyInfoLi,CellBox,Toast},
    data () {
      return {
        approve: {},
        currentFileList: {},//当前已上传的文件列表
        currentFlieKey: [],//当前已上传的文件列表id
        currentFlies: [],//当前已经上传的文件列表
        materialList: [],//材料列表
        isStorge:false, //是否暂存 默认为不暂存
        projectState:9,
        toastStr:'提交成功请到我的办理里查看',
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
        formData:'',
        user_Info:{},
        iframeState:true,
        applyInfoList:{
          name:''
        }
      }
    },
    created(){
      this.getErrandDetails(this.$route.params.id);
      this.getFileListById(this.$route.params.id);
      window.addEventListener("popstate", this.bindPopstate, false);
      //获取个人/企业信息
      this.getUserInfo();
      this.formData = this.$route.query.formData ? JSON.parse(this.$route.query.formData) : '';
    },
    methods: {
      getUserInfo(){
        let userInfo = Util.user.getUserInfo();
        this.user_Info['name'] = {str:'姓名',value:userInfo.name}
        this.user_Info['cidcard'] = {str:'身份证号码',value:userInfo.certificateNum}
      },
      testBtn(data){
        //this.$router.push({path: `/errand/fileUpload/test/111`})
      },
      toDoInfomation(){
       /* window.location.href=Api.errandApi.drawForm(this.$route.params.id,'',this.$route.query.formData,);*/
       let id = this.$route.params.id;
        window.location.href= Api.errandApi.drawForm(id,'',this.$route.query.formData,encodeURIComponent(`http://172.16.17.94:8080/#/errand/online/${this.$route.params.id}/`))
      },
      //跳转到上传文件页面
      toLoadFile(obj){
        sessionStorage.setItem('errandTitle', obj.materialTitle);
        sessionStorage.removeItem('errandType')
        this.$router.push({path: `/errand/fileUpload/${this.$route.params.id}/${obj.materialId}`});
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
        Promise.all([Api.errandApi.getErrandDetails(id), Api.errandApi.getApproveinterfaceExtend(id),
          Api.errandApi.getMaterialList(params)])
          .then(res => {
            console.log(res);
            this.approve = Object.assign({}, res[0], res[1]);
            //材料列表
            console.log('材料列表', JSON.parse(JSON.stringify(res[2].contents)));
            this.materialList = res[2].contents;
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
      //判断材料是否已经提交
      isSubmint(materialId){
        //debugger
        if (!materialId) return;
        return this.currentFlieKey.join("").indexOf(materialId) > 0 && this.currentFlieKey.length>0
      },
      //判断申请信息是否填写完整
      isComplete(){
        if (!this.formData) return false;
        var result = true;
        for(let item in this.formData) {
            if (!this.formData[item]){
               result = false;
                break;
            }
        }
        console.log(result)
        return result;
      },
      submitData(){
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
          let params = {
            projectState: this.projectState,
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
            applyName: allUserInfo.name,
            applyId: res.applicantId,
          }
          Api.errandApi.getApprovematerial(approveInfo.approveId).then(result=>{
            let _materialList = [];
            for (let jItem of result) {
              let _materLi = {
                materialId: jItem.materialId,
                copiesNum:jItem.copiesNum,
                commitWay:jItem.commitWay,
                isMust:jItem.isMust,
                orderNum:jItem.orderNum,
                materialName:jItem.materialTitle,
                attachList:[],

              };
              _materialList.push(_materLi);
            }
            for(let sitem of this.currentFlies){
              for(let item of _materialList){
                if (item.materialId ===sitem.id ){
                  for(let kItem of sitem.value){
                    let kItemLi = {
                      attachName:kItem.title,
                      attachSize:parseInt(kItem.label)*1024,
                      attachType:kItem.type,
                      attachPath:kItem.url,
                      attachCode:'000005',
                      createTime:new Date().getTime(),
                      isValid:'Y',
                      isDel:'N'
                    }
                    item.attachList.push(kItemLi)
                  }
                }
              }
            }
            for(let item of _materialList){
              if(item.attachList.length>0){
                item.submitState = '2';
              }else{
                item.submitState = '1';
              }
            }
            params.materialList = _materialList;
            params.applicant = res;

            console.log('params',JSON.stringify(params));

            Api.errandApi.addErrandExample(params).then(_res => {
                console.log('_res',_res)
              if(_res){
                let instance = Toast(this.toastStr);
                setTimeout(() => {
                  instance.close();
                  console.log(JSON.stringify({
                    "formInsId": "",
                    "formId": _res.approveId,
                    "instanceId": _res.instanceId,
                    "valueJson": this.$route.query.formData
                  }))
                  Api.errandApi.addInstanceForms(
                    {
                      "formInsId": "",
                      "formId": _res.approveId,
                      "instanceId": _res.instanceId,
                      "valueJson": this.$route.query.formData
                    }
                  ).then(res=>{
                     console.log(res)
                  })
                  this.$router.push({path:'/errandList/zrrfl'})
                }, 1000);
              }
            }).catch(e => {
              let instance = Toast('提交失败');
              setTimeout(() => {
                instance.close();
                this.$router.push({path:'/errandList/zrrfl'})
              }, 1000);
            })
          })
        })
      },
      //提交数据
      onlineSubmit(){
        this.projectState =9;
        if (!this.isComplete()){
          Toast('申请信息填写不完整');
          return false;
        }
        if (this.materialList.length > this.currentFlieKey.length) {
          //材料未上传完整提示用户是否缓存
          Toast('材料未上传');
          return false;
        }else{
          this.submitData();
        }
      },
      //提交暂存
      storageSubmit(){
        this.projectState =0;
        this.toastStr = '暂存成功请到我的附件里查看'
        this.submitData();
      }
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
  .ifame-wrapper{
    position: absolute;
    width: 100%;
    height:100%;
    top:0;
    left:0
  }
</style>
