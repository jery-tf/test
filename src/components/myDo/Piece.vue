/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div class="content">
    <router-link :to="`/me/doDetails/${option.id}`">
      <div class="font-small padding-container border-bottom">
        <p class="number oneLineFont">受理编号 : {{option.approveCode || ''}}</p>
        <span :class="`state${pieceState}`" class="state">{{ stateToZW }}</span>
      </div>
      <div class="content-warpper">
        <p>
          <img :src="stateToImg">
        </p>
        <div>
          <p class="font twoLineFont">{{option.instanceName || ''}}</p>
          <span class="time">{{format(option.submitTime,'yyyy-MM-dd')}}</span>
        </div>
      </div>
    </router-link>
    <!--<div class="foot padding-container">
      <div>
        <i v-if="option.state=='1'" class="OAIndexIcon C2-wuliu"></i>
        <p v-if="option.state=='1'">{{option.logisticsNo || ''}}</p>
      </div>
      <p>
        <mt-button v-if="isShowCancel" size="small" plain type="default"
                   @click="cancelFun">
          取消
        </mt-button>
        <mt-button v-if="isShowSubmitBtn" size="small" plain type="danger"
                   @click="submitFun">
          提交审核
        </mt-button>
        <router-link :to="`/me/doDetails/${option.id}`" v-if="isShowDetails">
          <mt-button size="small" plain type="default">
            查看详情
          </mt-button>
        </router-link>
        <mt-button v-if="isShowSvaluate" size="small" plain type="default"
                   @click="svaluateFun">
          我要评价
        </mt-button>
      </p>
    </div>-->
  </div>
</template>

<script>
  /***
   * 我的办件  单个办件单组件
   * 参数 option{
   *      id:String, //*主键
   *      number:String, //*受理编号
   *      state:String, //*当前状态
   *      content:String, //描述文本
   *      time:String, //时间
   *      logisticsNo:String //运单号
   *    }
   *根据状态来显示不同的操作按钮
   */
  import tp from '@/assets/img/ok.png'
  import api from '@/api'
  import { format} from '@/util/ctime.js'
  export default {
    name: 'Piece',
    components: {},
    props: ['option'],
    data () {
      return {
        pieceState: this.option.projectState
      }
    },
    created(){
      console.log(this.option)
    },
    methods: {
      format,
      cancelFun(){
        let id = this.option.id;
        console.log(id);
      },
      //提交审核
      submitFun(){
        let id = this.option.id;
        console.log(id);
      },
      /*//我要评价
      svaluateFun(){
        let id = this.option.id;
        console.log(id);
      }*/

    },
    computed: {
      //根据状态 返回当前中文状态
      stateToZW(){
        let pieceStateSheet = {
          0:'暂存',
          1:'受理',
          2:'不予受理',
          3:'补正补齐',
          4:'业务办结',
          5:'统一办结',
          6:'办结',
          7:'作废办结',
          8:'网上提交',
          9:'预审通过',
          10:'预审不通过'
        };
        return pieceStateSheet[this.pieceState];
      },
      //根据状态 返回图标
      stateToImg(){
        let pieceStateImg = {
          1: '',
          2: tp,
          3: '已完成'
        };
        return pieceStateImg[this.pieceState];
      },
      //是否显示提交按钮
      isShowSubmitBtn(){
        let pieceStateShow = {
          1: true,
          2: true,
          3: false
        };
        return pieceStateShow[this.pieceState];
      },
      //是否显示取消按钮
      isShowCancel(){
        let pieceStateShow = {
          1: false,
          2: true,
          3: false
        };
        return pieceStateShow[this.pieceState];
      },
      //是否显示详情按钮
      isShowDetails(){
        let pieceStateShow = {
          1: true,
          2: true,
          3: true
        };
        return pieceStateShow[this.pieceState];
      },
      //是否显示评价按钮
      isShowSvaluate(){
        let pieceStateShow = {
          1: true,
          2: true,
          3: true
        };
        return pieceStateShow[this.pieceState];
      }

    },

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .content {
    background: #fff;
    .font-small {
      display: flex;
      justify-content: space-between;
    }
    .state {
      text-align: right;
      width: 1.2rem;
      color: #5fd8b7;
    }
    .state2,.state7,.state10{
      color: #ff0000;
    }
    .number {
      color: #666;
    }
    .content-warpper{
      padding: 0.24rem 0.26rem;
      display: flex;
      &>p{
        img{
           width:0.81rem;
        }
      }
      &>div{
        flex:1;
        margin-left:0.21rem;
        .font{
          font-size:0.28rem;
        }
        .time{
          font-size:0.2rem;
          color:#aaa;
        }

      }
    }
    .foot {

      align-items: center;
      justify-content: space-between;
      > div {
        display: flex;
        align-items: center;
        font-size: .24rem;
        color: #999;
        i {
          margin-right: .2rem;
          font-size: .32rem;
        }
      }
      > p {
        display: flex;
        align-items: center;
      }
      .is-plain {
        margin-left: .1rem;
        min-width: 1.34rem;
        min-height: .5rem;
        font-size: .24rem;
      }
      .mint-button--default.is-plain {
        border: 1px solid #ccc;
      }
      .mint-button--danger.is-plain {
        border: 1px solid #ff3e3e;
      }
    }
  }
</style>
