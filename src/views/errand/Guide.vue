/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div class="h100">
    <ErrandHead :score="3" :workDay="30" :workNo="2"
      title="这里很多中文这里很多中文这里很多中文这里很多中文这里很多中文这里很多中文这里很多中文这里"></ErrandHead>

    <div class="mall-warp fff padding-container shoufei h88">
      <div>
        <p>
          <i class="OAIndexIcon icon-charge red-color"></i>
        </p>
        <span>收费标准:元</span>
      </div>
      <i class="OAIndexIcon icon-gengduo11 red-color"></i>
    </div>

    <div class="box-margin-top fff padding-container dingwei h88">
      <p>
        <i class="OAIndexIcon icon-dingwei"></i>
      </p>
      <p class="oneLineFont">
        这里很多中文这里很多中文这里很多中文这里很多中文这里很多中文这里很多中文这里很多中文这里很多中文这里很多中文这里很多中文这里很多中文
      </p>
    </div>

    <div class="box-margin-top flex1">
      <mt-navbar v-model="selected">
        <mt-tab-item id="info">基本信息</mt-tab-item>
        <mt-tab-item id="application">申请材料</mt-tab-item>
        <mt-tab-item id="process">办理流程</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="info">
          <div>
            <p style="margin-top: 20px">基本信息</p>
            <p style="margin-top: 20px">基本信息</p>
            <p style="margin-top: 20px">基本信息</p>
            <p style="margin-top: 20px">基本信息</p>
            <p style="margin-top: 20px">基本信息</p>
            <p style="margin-top: 20px">基本信息</p>
            <p style="margin-top: 20px">基本信息</p>
            <p style="margin-top: 20px">基本信息</p>
            <p style="margin-top: 20px">基本信息</p>
            <p style="margin-top: 20px">基本信息</p><p style="margin-top: 20px">基本信息</p>


          </div>
          <!--<mt-cell v-for="n in 10" :title="'内容 ' + n" />-->
        </mt-tab-container-item>
        <mt-tab-container-item id="application">
          <div>
            申请材料
          </div>
          <!--<mt-cell v-for="n in 4" :title="'测试 ' + n" />-->
        </mt-tab-container-item>
        <mt-tab-container-item id="process">
          <div>
            办理流程
          </div>
          <!--<mt-cell v-for="n in 6" :title="'选项 ' + n" />-->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <ErrandFoot tel="0731-231224223" :btnClick="testBtn" btnName="在线提交"></ErrandFoot>
  </div>
</template>

<script>
  import ErrandFoot from 'components/errand/footer.vue'
  import ErrandHead from 'components/errand/header.vue'
    export default {
        name: 'Guide',
        components: {ErrandFoot,ErrandHead},
        data () {
            return {
              selected:'info'
            }
        },
        created(){

        },
        methods: {
          testBtn(){
              this.$router.push({path:`/errand/online/${this.$route.params.id}`})
          }
        }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .fff{
    font-size: .28rem;
  }
  .icon-charge{
    font-size: .25rem;
    margin-right: .15rem;
  }
  .icon-gengduo11{
    color:#999;
  }
  .h88{
    height: .88rem;
  }
  .shoufei{
    >div{
      display: flex;
      align-items: center;
    }
    p{
      width: .5rem;
    }
  }
  .dingwei{
    display: flex;
    align-items: center;
    .icon-dingwei{
      font-size: .24rem;
      color:#fc992c;
    }
    >p:first-child{
      width: .5rem;
      height: .3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    >p:last-child{
      flex: 1;
    }
  }
  .mint-navbar .mint-tab-item.is-selected{
    margin-bottom: -1px;
    z-index: 100;
  }
  .h100{
    display: flex;
    flex-direction: column;
    .flex1{
      flex: 1;
      display: flex;
      flex-direction: column;
      .mint-tab-container{
        flex: 1;
        overflow-y: auto;
        background: #fff;
        border-top: 1px solid #ccc;
        padding-bottom: 1rem;
      }
    }
  }

</style>
