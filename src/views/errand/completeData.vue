/**
* Created by wyg on 2017/9/26.
*/

<template>
  <div class="wrapper">
    <div class="padding-container topImg">
      <div>
        <p>{{dataInfo.title}}</p>
        <div class="box-margin-top font21">
          <p>
            <i class="OAIndexIcon C2-chuangkou"></i><span>3号窗口</span>
            <i class="OAIndexIcon C2-icon21"></i><span>{{dataInfo.applyName}}</span>
            <i class="OAIndexIcon C2-shijian"></i>
            <span>
            {{format( parseInt(dataInfo.submitTime),'yyyy-MM-dd')}}
          </span>
          </p>
        </div>
      </div>
      <p @click="lookProgress(dataInfo.instanceId)"><i class="OAIndexIcon C2-fanhui2"></i></p>
    </div>
    <p class="remind fff padding-container">
      <i class="OAIndexIcon C2-guanyu1"></i>
      <span>XXXX材料缺失,请于2017年12月12日之前进行重新提交(接口没有字段)</span>
    </p>
    <div class="box-margin-top padding-container fff">
      <p class="twoLineFont">{{dataInfo.instanceName}}</p>
    </div>
    <div class="box-margin-top padding-container fff Eno">
      <p>
        <span class="label">受理编号</span>
        <span class="number">{{dataInfo.approveCode}}</span>
      </p>
      <p v-show="dataInfo.queryCode">
        <span class="label">查询编码</span>
        <span class="number" ref="txt" id="number">{{dataInfo.queryCode}}</span>
        <span class="btn" @click="copy('number')">复制</span>
      </p>
    </div>
    <div class="box-margin-top fff">
      <p class="padding-container border-bottom">办件信息</p>
      <div class="padding-container">
        <div>
          <Subtitle title="申报事项" :content="doInfo.approveName"></Subtitle>
        </div>
        <div class="box-margin-top">
          <Subtitle title="办件类型" :content="_transType"></Subtitle>
        </div>
        <div class="box-margin-top">
          <Subtitle title="办理时限" :content="_limitTime"></Subtitle>
        </div>
      </div>
    </div>
    <div class="box-margin-top fff">
      <p class="padding-container border-bottom">申请人(单位)信息</p>
      <div class="padding-container">
        <div>
          <Subtitle title="申报人" :content="applyInfoData.name"></Subtitle>
        </div>
        <div class="box-margin-top">
          <Subtitle title="联系电话" :content="applyInfoData.phone"></Subtitle>
        </div>
      </div>
    </div>

    <div class="box-margin-top fff padding-container submintBtn" v-show="userInfoArr.projectState === '3'||userInfoArr.projectState === '0'">
      <p @click="submit">{{userInfoArr.operButtonName}}</p>
    </div>
  </div>
</template>

<script>
  import Subtitle from 'components/errand/Subtitle.vue'
  import CompleteAddress from 'components/errand/completeData/address.vue'
  import { format} from '@/util/ctime.js'
  export default {
    name: 'completeData',
    components: {Subtitle, CompleteAddress},
    props:['dataInfo','doInfo','applyInfo'], // dataInfo事项信息  doInfo办件信息  applyInfo申请人信息
    data () {
      return {
        userInfoArr: this.dataInfo,
        transType:'',
        limitTime:'',
        applyInfoData:this.applyInfo
      }
    },
    methods: {
      format,
      //复制查询编码
      copy(element){
        let text = document.getElementById(element);
        if (document.body.createTextRange) {
          let range = document.body.createTextRange();
          range.moveToElementText(text);
          range.select();
        } else if (window.getSelection) {
          let selection = window.getSelection();
          let range = document.createRange();
          range.selectNodeContents(text);
          selection.removeAllRanges();
          selection.addRange(range);
        } else {
          alert("none");
        }
        document.execCommand("Copy");
      },
      submit(){
        sessionStorage.setItem('stateType',3)
        let params = {instanceId:this.dataInfo.instanceId,approveId:this.dataInfo.approveId}
        console.log('this.applyInfoData',this.dataInfo)
        this.$router.push({path: `/errand/storageOnline`,query:params});
      },
      lookProgress(instanceId){
        console.log(instanceId);
        let param = {title:this.dataInfo.instanceName,instanceId:instanceId}
        this.$router.push({path:'/errand/errandProgress/',query:param})
      }
    },
    created(){
        //console.log(this.doInfo)
    },
    watch:{
      applyInfo(val){
        this.applyInfoData = val
      }
    },
    computed:{
      _transType(){
        let transType =['承诺件','即办件','转报件','上报件'];
        return transType[this.doInfo.transType]
      },
      _limitTime(){
         return this.doInfo.commitmentLimit? this.doInfo.commitmentLimit+'工作日' :'（空）'
      }
    },

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .wrapper{
    background: #fff;position: absolute;height:100%;width:100%;
    .topImg {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      background: url('../../assets/img/bjTopImg.png') no-repeat center;
      background-size: 100% auto;
      font-size: .28rem;
      i {
        font-size: .19rem;
        margin: 0 .1rem 0 .2rem;
      }
      i:first-child {
        margin-left: 0;
      }
      .font21 {
        font-size: .21rem;
      }
      .C2-fanhui2 {
        font-size: .5rem;
      }
    }

    .remind {
      color: #ff9900;
      font-size: .24rem;
      i {
        font-size: .21rem;
      }
    }

    .Eno {
      font-size: .24rem;
      p {
        display: flex;
        align-items: center;
      }
      p:last-child {
        margin-top: .1rem;
      }
      .label {
        color: #999;
      }
      .number {
        margin-left: .2rem;
      }
      .btn {
        margin-left: .2rem;
        font-size: .2rem;
        /*display: block;*/
        padding: .04rem .2rem;
        border: 1px solid #ddd;
        border-radius: .1rem;
      }
    }
    .box-margin-top{
      margin-top: -0.01rem;
    }
    .submintBtn{
      display: flex;
      justify-content: flex-end;
      p{
        padding: .1rem .2rem;
        border-radius: .1rem;
        border: 1px solid #e54242;
        color:#e54242;
        font-size: .24rem;
      }
    }
  }

</style>
