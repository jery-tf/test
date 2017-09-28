/**
* Created by wyg on 2017/9/26.
*/

<template>
  <div>
    <div class="padding-container topImg">
      <div>
        <p>补正补齐</p>
        <div class="box-margin-top font21">
          <p>
            <i class="OAIndexIcon icon-chuangkou"></i><span>3号窗口</span>
            <i class="OAIndexIcon icon-icon21"></i><span>张三</span>
            <i class="OAIndexIcon icon-shijian"></i><span>2017-9-23</span>
          </p>
        </div>
      </div>
      <p><i class="OAIndexIcon icon-fanhui2"></i></p>
    </div>

    <p class="remind fff padding-container">
      <i class="OAIndexIcon icon-guanyu1"></i>
      <span>XXXX材料缺失,请于2017年12月12日之前进行重新提交</span>
    </p>

    <div class="box-margin-top padding-container fff">
      <p class="twoLineFont">文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多文字很多</p>
    </div>

    <div class="box-margin-top padding-container fff Eno">
      <p>
        <span class="label">受理编号</span>
        <span class="number">2312312312</span>
      </p>
      <p>
        <span class="label">查询编码</span>
        <span class="number">2312312312</span>
        <span class="btn">复制</span>
      </p>
    </div>

    <div class="box-margin-top fff">
      <p class="padding-container border-bottom">办件信息</p>
      <div class="padding-container">
        <div>
          <Subtitle title="这是标题" content="这是内容"></Subtitle>
        </div>
        <div class="box-margin-top">
          <Subtitle title="办件类型" content="承诺件"></Subtitle>
        </div>
        <div class="box-margin-top">
          <Subtitle title="办理时限" content="60个工作日"></Subtitle>
        </div>
      </div>
    </div>

    <div class="box-margin-top fff">
      <p class="padding-container border-bottom">申请人(单位)信息</p>
      <div class="padding-container">
        <div>
          <Subtitle title="申报人" content="湖南科创信息"></Subtitle>
        </div>
        <div class="box-margin-top">
          <Subtitle title="联系电话" content="123123123123"></Subtitle>
        </div>
      </div>
    </div>

    <CompleteAddress :key="index" v-for="(item,index) in userInfoArr" :userInfo="item.userInfo"
                     :expressInfo="item.expressInfo" :type="item.type">
    </CompleteAddress>

    <div class="box-margin-top fff padding-container submintBtn">
      <p>提交审批</p>
    </div>
  </div>
</template>

<script>
  import Subtitle from 'components/errand/Subtitle.vue'
  import CompleteAddress from 'components/errand/completeData/address.vue'
  export default {
    name: 'completeData',
    components: {Subtitle, CompleteAddress},
    data () {
      return {
        userInfoArr: [
          {
            userInfo: {
              name: '张三',
              phone: '123123123',
              address: '这是地址信息这是地址信息这是地址信息这是地址信息这是地址信息这是地址信息这是地址信息'
            },
            expressInfo:{
                no:'123123123',
            },
            type:1
          },
          {
            userInfo: {
              name: '张三',
              phone: '123123123',
              address: '这是地址信息这是地址信息这是地址信息这是地址信息这是地址信息这是地址信息这是地址信息'
            },
            expressInfo:{
              no:'123123123',
            },
            type:2
          }
        ],
      }
    },
    created(){

    },
    methods: {}

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
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
    .icon-fanhui2 {
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
</style>
