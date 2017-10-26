<template>
  <div>
    <div class="cmp">
      <div class="regi padding-container-lr common">
        <em>证件类型</em>
        <span class="ipt">
                    统一社会信用代码
                    <i class="OAIndexIcon icon-next common"></i>
                </span>
      </div>
      <div class="ableipt common">
        <em>证件代码</em>
        <input type="text" class="idform" placeholder="12146319864936587326587">
      </div>
      <AbleInput content='公司/单位名称'></AbleInput>
      <AbleInput content='公司单位/性质'></AbleInput>
      <AbleInput content='法人名称'></AbleInput>
      <AbleInput content='法人身份证号码'></AbleInput>
      <div class="regi padding-container-lr common" @click="selected">
        <em>所属区域</em>
        {{Province}}-{{City}}-{{District}}-{{Street}}
        <span class="ipt">
                    <i class="OAIndexIcon icon-next common"></i>
                </span>
      </div>
      <AbleInput content='详细地址'></AbleInput>
    </div>
    <AbleInput content='手机号码'></AbleInput>
    <div class="yan common">
      <strong>验证码</strong>
      <input type="text" class=" padding-container-lr ipt" placeholder="请输入短信验证码">
      <button class="btn">52秒后重新获取</button>
    </div>
    <AbleInput content='密码'></AbleInput>
    <AbleInput content='确认密码'></AbleInput>
    <Btncommon msg="提交"></Btncommon>
    <pickerArea :invator="showChose" @changingType="selected" v-on:increment="listenToMyBoy" :pickermore="list"></pickerArea>
  </div>
</template>
<script>
  import Btncommon from 'components/btncommon/BtnCommon'
  import AbleInput from 'components/iptinput/ableinput'
  import pickerArea from 'components/aboutCompany/pickerArea'
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import qs from "qs"
  export default {
    data() {
      return {
        showcase: true,
        data: 0,
        province: '',
        showChose: false,
        Province: null,
        City:null,
        District:null,
        Street:null,
        list:[]
      }
    },
    components: {Btncommon, AbleInput, pickerArea},
    created() {
      this.listenToMyBoy()
    },
    methods: {
      selected() {
        this.showChose = !this.showChose
        Api.pickerAreaApi.pickerAreaf().then(res=>{
          this.list=res
          console.log(this.list)
        })
      },
//      省市区三级联动数据
      listenToMyBoy(Province, City, District,Street) {
        this.Province = Province,
          this.City = City,
          this.District = District
        this.Street = Street
      }
    },
  }
</script>
<style scoped lang='less'>
  .cmp {
    margin: 0.19rem 0;
    width: 7.2rem;
    background-color: #fff;
  }

  .regi,
  .ableipt {
    width: 7.2rem;
    height: 0.97rem;
    line-height: 0.97rem;
    border-top: 1px solid #d9d9d9;
    background-color: #fff;
    .ipt {
      .icon-next {
        float: right;
        color: #c9c9c9;
      }
    }
  }

  .idform {
    border: 0;
    outline: 0;
    width: 3rem;
    height: 0.8rem;
    font-size: 0.23rem;
    color: #333;
  }

  .common {
    font-size: 0.23rem;
    color: #333;
    padding-left: 0.24rem;
  }

  em {
    display: inline-block;
    font-style: normal;
    width: 1.95rem;
  }

  .telp {
    margin-top: 0.19rem;
    background: #fff;
  }

  .yan {
    width: 7.2rem;
    height: 1.07rem;
    line-height: 1.07rem;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    strong {
      font-weight: 400;
      display: inline-block;
      width: 1.88rem;
    }
    .ipt {
      border: 0;
      outline: 0;
      height: 0.8rem;
      font-size: .28rem;
      color: #aaa;
      width: 2.36rem;
    }
    .btn {
      border: 1px solid #a0a0a0;
      outline: 0;
      background-color: #f8f8f8;
      width: 1.82rem;
      height: 0.68rem;
      vertical-align: 20%;
      border-radius: 10px;
      font-size: 0.2rem;
    }
  }
</style>
