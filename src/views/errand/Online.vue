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
          <ErrandSubmitLi :title='item.materialTitle'
                          :isSubmint="isSubmint(item.materialId)"
                          :btnClick="toLoadFile.bind(this,item)"></ErrandSubmitLi>
        </template>
        <!--<ErrandSubmitLi title='测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下下看看测试下下看看测试下看看测试下看看'-->
        <!--:isSubmint="true" :btnClick="toLoadFile.bind(this,1)"></ErrandSubmitLi>-->
        <!--<ErrandSubmitLi title='测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看'-->
        <!--:isSubmint="false" :btnClick="toLoadFile.bind(this,21)"></ErrandSubmitLi>-->
        <!--<ErrandSubmitLi title='测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看'-->
        <!--:isSubmint="true" :btnClick="toLoadFile.bind(this,31)"></ErrandSubmitLi>-->
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
        }
      }
    },
    created(){
      this.getErrandDetails(this.$route.params.id);

      this.getFileListById(this.$route.params.id);

      this.isSubmint();

      window.addEventListener("popstate", this.bindPopstate, false);
    },
    methods: {
      testBtn(data){
        this.$router.push({path: `/errand/fileUpload/test/111`})
      },
      //跳转到上传文件页面
      toLoadFile(obj){
        sessionStorage.setItem('errandTitle', obj.materialTitle);
//        this.$router.push({path: `/errand/fileUpload/${this.$route.params.id}/new`});
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
        Promise.all([Api.errandApi.getErrandDetails(id), Api.errandApi.getApproveName(id),
          Api.errandApi.getMaterialList(params)])
          .then(res => {

            console.log('approve', Object.assign({}, res[0], res[1]));
            this.approve = Object.assign({}, res[0], res[1]);

            //材料列表
            console.log('材料列表', JSON.parse(JSON.stringify(res[2].contents)));
            this.materialList = res[2].contents;
          })
      },
      //获取当前id下的所有材料列表
      getFileListById(id){
        let errandData = Util.other.getSessionStorage('errandData');
//        console.log('errandData', errandData);
        let data = {};
        for (let key in errandData) {
          if (key.indexOf(id) != -1) {
//            console.log('errandData[key]',errandData[key])
            let filesId = key.split('-')[1];
            if (data[filesId]) {
              data[filesId].push(errandData[key]);
            } else {
              data[filesId] = [];
              data[filesId].push(errandData[key]);
            }
            this.currentFlieKey.push(filesId);
            let errandDataLi = {
                value:errandData[key],
              id:filesId
            };
            this.currentFlies.push(errandDataLi);
          }
        }
//        console.log('已提交的材料列表',JSON.parse(JSON.stringify(data)));
        this.currentFileList = data;
      },
      //判断是否已经提交
      isSubmint(materialId){
        if (!materialId) return;
        return this.currentFlieKey.indexOf(materialId) != -1;
      },
      //提交数据
      onlineSubmit(){
        let allUserInfo = Util.user.getUserAllInfo();
        console.log('allUserInfo-->',allUserInfo);
        let applicantMap = {
          name: allUserInfo.username,
          sex: allUserInfo.sex,
          certificateNum: allUserInfo.certificateNum,
          phone: allUserInfo.phone,
          email: allUserInfo.email,
          certificateType: 'idcard'
        };

        Api.errandApi.addApplicant(applicantMap).then(res => {
          let approveInfo = this.approve;
          let params = {
            projectState: '9',
            instanceSource: '4',
            approveCode: approveInfo.approveCode,
            instanceName: approveInfo.parentName,
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
          if (this.materialList.length < this.currentFlieKey.length) {
            params.projectState = '0';
          }
          Api.errandApi.getApprovematerial(approveInfo.approveId).then(result=>{
            let _materialList = [];
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
                  for(let kItem of item.value){
                    let kItemLi = {
                      attachName:kItem.title,
                      attachSize:parseInt(kItem.label)*1024,
                      attachType:kItem.type,
                      attachPath:kItem.url,
                      attachCode:'000004',
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
            console.log('params-->', params);
            Api.errandApi.addErrandExample(params).then(res => {
              console.log(res);
              if(res){
                //成功
                alert(111)
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
