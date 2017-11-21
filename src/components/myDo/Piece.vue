/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div class="content">
    {{option.instanceId}}
    <div @click="doDetails">
      <div class="font-small padding-container border-bottom">
        <p class="number oneLineFont">受理编号 : {{option.instanceCode || ''}}</p>
        <span :class="`state${pieceState}`" :style="{color:stateColor}" class="state">{{ state }}</span>
      </div>
      <div class="content-warpper">
        <p>
          <i class="C2-ertongshouyang"></i>
        </p>
        <div>
          <p class="font twoLineFont">{{option.instanceName || ''}}</p>
          <span class="time">{{format(option.submitTime,'yyyy-MM-dd')}}</span>
        </div>
      </div>
    </div>
    <div class="foots padding-container" >
      <p>
        <mt-button  size="small" plain type="danger"  v-if="option.projectState === '0' ||option.projectState === '3' " @click.stop="deleteItem(option.projectState)">
          {{operButtonName}}
        </mt-button>
      </p>
    </div>
    <!--为空-->
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
  import { MessageBox } from 'mint-ui'
  export default {
    name: 'Piece',
    components: {
      MessageBox
    },
    props: ['option'],
    data () {
      return {
        pieceState: this.option.projectState,
        stateJson:[
          {
            "projectState": 0,
            "projectAttr" : {
              "projectStateName": "暂存",
              "stateColour":'#ff0000',
              "stateIcon":'ertongshouyang',
              "stateIconColor":'#f15a4a',
              "operButtonName":'删除',
            }
          },
          {
            "projectState": 1,
            "projectAttr" : {
              "projectStateName": "待受理",
              "stateColour":'#ff0000',
              "stateIcon":'ertongshouyang',
              "stateIconColor":'#f15a4a',
              "operButtonName":'查看详情',
            }

          },
          {
            "projectState": 2,
            "projectAttr" : {
              "projectStateName": "不予受理",
              "stateColour":'#ff0000',
              "stateIcon":'ertongshouyang',
              "stateIconColor":'#f15a4a',
              "operButtonName":'查看详情',
            }
          },
          {
            "projectState": 3,
            "projectAttr" : {
              "projectStateName": "补正补齐",
              "stateColour":'#ff0000',
              "stateIcon":'ertongshouyang',
              "stateIconColor":'#f15a4a',
              "operButtonName":'提交审批',
            }
          },
          {
            "projectState": 4,
            "projectAttr" : {
              "projectStateName": "业务办结",
              "stateColour":'#13b76f',
              "stateIcon":'qiyeyonghu',
              "stateIconColor":'#29ab91',
              "operButtonName":'快递寄送',
            }
          },
          {
            "projectState": 5,
            "projectAttr" : {
              "projectStateName": "统一办结",
              "stateColour":'#13b76f',
              "stateIcon":'qiyeyonghu',
              "stateIconColor":'#29ab91',
              "operButtonName":'查看详情',
            }
          },
          {
            "projectState": 6,
            "projectAttr" : {
              "projectStateName": "办结",
              "stateColour":'#13b76f',
              "stateIcon":'qiyeyonghu',
              "stateIconColor":'#29ab91',
              "operButtonName":'查看详情',
            }
          },
          {
            "projectState": 7,
            "projectAttr" : {
              "projectStateName": "作废办结",
              "stateColour":'#ff0000',
              "stateIcon":'ertongshouyang',
              "stateIconColor":'#f15a4a',
              "operButtonName":'查看详情',
            }
          },
          {
            "projectState": 9,
            "projectAttr" : {
              "projectStateName": "网上提交",
              "stateColour":'#ff0000',
              "stateIcon":'ertongshouyang',
              "stateIconColor":'#f15a4a',
              "operButtonName":'查看详情',
            }
          },
          {
            "projectState": 10,
            "projectAttr" : {
              "projectStateName": "预审通过",
              "stateColour":'#ff0000',
              "stateIcon":'ertongshouyang',
              "stateIconColor":'#f15a4a',
              "operButtonName":'查看详情',
            }
          },
          {
            "projectState": 11,
            "projectAttr" : {
              "projectStateName": "预审不通过",
              "stateColour":'#ff0000',
              "stateIcon":'ertongshouyang',
              "stateIconColor":'#f15a4a',
              "operButtonName":'查看详情',
            }
          }
        ],
        stateColor:'',
        operButtonName:'',//当前状态操作名称
        operButtonColor:'',
        state:'',
        isShow:false,
        isEmpty:false
      }
    },
    watch:{
      'this.option.projectState':{
          handler:(val)=>{
              this.pieceState =  this.option.projectState
          },
          deep:true
      }
    },
    created(){
      this.stateStyle;
      sessionStorage.removeItem('stateType')
    },
    methods: {
      format,
      doDetails(){
        if (this.pieceState === '0'){
          let params = {instanceId:this.option.instanceId,approveId:this.option.approveId}
          this.$router.push({path: `/errand/storageOnline`,query:params});
          return false;
        }
        this.option.title =  this.state; //当前状态
        this.option.operButtonName =  this.operButtonName; //当前状态
        console.log(this.option)
        this.$router.push({path:'/me/doDetails/',query:this.option})
      },
      deleteItem(state){
        if (state === '3'){
          sessionStorage.setItem('stateType',3)
          let params = {instanceId:this.option.instanceId,approveId:this.option.approveId}
          this.$router.push({path: `/errand/storageOnline`,query:params});
          return false;
        }
        this.$emit('delete',this.option.instanceId)
      }
    },
    computed: {
      //根据状态 返回图标
      stateToImg(){
        let pieceStateImg = {
          1: '',
          2: tp,
          3: '已完成'
        };
        return pieceStateImg[this.pieceState];
      },
      /*各状态样式*/
      stateStyle(){
        this.stateJson.forEach(e=>{
          if (parseInt(this.pieceState)===parseInt(e.projectState) ){
              this.stateColor =  e.projectAttr.stateColour
              this.operButtonName =e.projectAttr.operButtonName
              this.state = e.projectAttr.projectStateName

          }
        })
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
      border-bottom: 1px solid #eee;
      &>p{
        width:0.81rem;
        height:0.81rem;
        border-radius: 50%;
        background: #f15a4a;
        i{
          font-size:0.4rem;
          display: block;
          text-align: center;
          color:#fff;
          line-height: 0.81rem;
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
    .foots {
      > div {
        font-size: .24rem;
        color: #999;
      }
      > p {
        text-align: right;
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
      .mint-button{
        border-radius:0.04rem;
      }
      .mint-button--small{
        height:0.5rem;
      }
    }
  }
</style>
