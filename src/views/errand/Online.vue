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
          :isSubmint="true" :btnClick="toLoadFile.bind(this,item)"></ErrandSubmitLi>
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

    <ErrandFoot tel="0731-231224223" :btnClick="testBtn" btnName="在线提交"
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
        materialList:[],//材料列表
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

      window.addEventListener("popstate", this.bindPopstate, false);
    },
    methods: {
      testBtn(data){
        this.$router.push({path: `/errand/fileUpload/test/111`})
      },
      //跳转到上传文件页面
      toLoadFile(obj){
        sessionStorage.setItem('errandTitle',obj.materialTitle);
        this.$router.push({path: `/errand/fileUpload/${this.$route.params.id}/${obj.materialId}`})
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
            this.approve = Object.assign({}, res[0], res[1]);

            //材料列表
            console.log('材料列表',JSON.parse(JSON.stringify(res[2].contents)));
            this.materialList = res[2].contents;
          })
      },
      //获取当前id下的所有材料列表
      getFileListById(id){
        let errandData = Util.other.getSessionStorage('errandData');
        let data = [];
        for(let key in errandData){
            if(key.indexOf(id)){
              data.push(errandData[key]);
            }
        }
        console.log(data);
      },

      //监听返回事件
      bindPopstate(e){
        console.log('返回');
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
