/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="h100">
    <div class="soll">
      <ErrandHead :score="3" :workDay="approve.commitmentLimit" :workNo="approve.minSeq"
                  :title="approve.approveName"></ErrandHead>

      <div class="isSubmitList box-margin-top">
        <ErrandSubmitLi title='测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下下看看测试下下看看测试下看看测试下看看'
                        :isSubmint="true" :btnClick="testBtn.bind(this,1)"></ErrandSubmitLi>
        <ErrandSubmitLi title='测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看'
                        :isSubmint="false" :btnClick="testBtn.bind(this,21)"></ErrandSubmitLi>
        <ErrandSubmitLi title='测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看测试下看看'
                        :isSubmint="true" :btnClick="testBtn.bind(this,31)"></ErrandSubmitLi>
      </div>

      <div class="box-margin-top">
        <ErrandAddress :option="option" :addressSelect="testAddress"></ErrandAddress>
      </div>
      <div class="box-margin-top">
        <ErrandAddress :option="option2" :addressSelect="testAddress"></ErrandAddress>
      </div>
    </div>

    <ErrandFoot tel="0731-231224223" :btnClick="testBtn" btnName="在线提交"></ErrandFoot>
  </div>
</template>

<script>
  import ErrandHead from 'components/errand/header.vue'
  import ErrandSubmitLi from 'components/errand/SubmitLi.vue'
  import ErrandAddress from 'components/errand/address.vue'
  import ErrandFoot from 'components/errand/footer.vue'
  import MintUI from 'mint-ui'
  import Util from '../../util'
  import Api from '../../api'
  export default {
    name: 'Online',
    components: {ErrandHead, ErrandSubmitLi, ErrandAddress,ErrandFoot},
    data () {
      return {
        approve:{},
        option: {
          userName: '张三',
          phone: '123123123',
          address: '这是地址很长很长这是地址很长很长下看看测试下下看看测试下这是地址很长很长这是地址很长很长这是地址很长很长',
          isDefault: true,
          type:1,
          id:'zs'
        },
        option2: {
          id:'ls',
          userName: '李四',
          phone: '4322423423',
          address: '木有地址',
          isDefault: false,
          type:2
        }
      }
    },
    created(){
      this.getErrandDetails(this.$route.params.id);
    },
    methods: {
      testBtn(data){
        this.$router.push({path:`/errand/fileUpload/test`})
      },
      testAddress(){
          console.log(22)
      },
      //数据初始化
      getErrandDetails(id){
        MintUI.Indicator.open('请稍后...');
        Promise.all([Api.errandApi.getErrandDetails(id), Api.errandApi.getApproveName(id)])
          .then(res => {
            this.approve = Object.assign({}, res[0], res[1]);
            console.log('qqq',Object.assign({}, res[0], res[1]));
          })
      },
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .h100{
    .soll{
      height: 100%;
      padding-bottom: 1rem;
      overflow-y: auto;
    }
  }
</style>
