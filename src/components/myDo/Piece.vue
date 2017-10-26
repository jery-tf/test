/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div class="content">
    <router-link :to="`/me/doDetails/${option.id}`">
      <div class="font-small padding-container border-bottom">
        <p class="number oneLineFont">受理编号 : {{option.number || ''}}</p>
        <span :class="`state${option.state}`">{{ stateToZW }}</span>
      </div>
      <div class="img border-bottom padding-container">
        <p>
          <img :src="stateToImg">
        </p>
        <div>
          <p class="font twoLineFont">{{option.content || ''}}</p>
          <span class="time">{{option.time || ''}}</span>
        </div>
      </div>
    </router-link>
    <div class="foot padding-container">
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
    </div>
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
  export default {
    name: 'Piece',
    components: {},
    props: ['option'],
    data () {
      return {
        pieceState: this.option.state
      }
    },
    created(){

    },
    methods: {
      cancelFun(){
        let id = this.option.id;
        console.log(id);
      },
      //提交审核
      submitFun(){
        let id = this.option.id;
        console.log(id);
      },
      //我要评价
      svaluateFun(){
        let id = this.option.id;
        console.log(id);
      }

    },
    computed: {
      //根据状态 返回当前中文状态
      stateToZW(){
        let pieceStateSheet = {
          1: '未完成',
          2: '已办结',
          3: '已完成'
        };
        return pieceStateSheet[this.pieceState];
      },
      //根据状态 返回图标
      stateToImg(){
        let pieceStateImg = {
          1: '../../assets/img/ok.png',
          2: '已办结',
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
    }
    .state1 {
      color: #ff0000;
    }
    .state2, .state3 {
      color: #5fd8b7;
    }
    .number {
      color: #666;
    }
    .img {
      display: flex;
      align-items: center;
      > div {
        margin-left: .32rem;
      }
      > p, img {
        width: .81rem;
        height: .81rem;
      }
      .time {
        font-size: .2rem;
        color: #aaa;
      }
      .font {
        color: #333;
        font-size: .28rem;
      }
    }
    .foot {
      display: flex;
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
