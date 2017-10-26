/**
* Created by Administrator on 2017/10/23.
*/

<template>
  <div class="box-margin-top ">
    <div class="koukou">
      <mt-field label="我的姓名" class="ipt" v-model="pname"></mt-field>
      <mt-field label="手机号码" class="ipt" v-model="phone"></mt-field>
      <div class="pname" @click="selected">
        <span>行政区域</span>
        {{Province}}-{{City}}-{{District}}-{{Street}}
        <i class="OAIndexIcon C2-next"></i>
      </div>
      <div class="pname consult" @click="department">
        <span> 咨询部门</span>
        <i class="OAIndexIcon C2-next"></i>
      </div>
      <div class="pname consult">
        <span>咨询项目</span>
        <i class="OAIndexIcon C2-next"></i>
      </div>
      <mt-field label="咨询主题" class="ipt"></mt-field>
      <div class="pname padding-container-lr">咨询内容</div>
      <textarea></textarea>
    </div>
    <div class="addressorder padding-container-lr pname consult">
      <span>是否公开</span><i class="OAIndexIcon C2-check-R"></i>
    </div>
    <div class="box-margin-top about">
      <mint-button type="primary" size="large">提交</mint-button>
    </div>
    <p class="autions">提示：本栏目接受办事群众和企业对进驻各级政务服务中心政务服务大厅的部门行政审批服务过程中有关法规，政策程序等问题的咨询</p>
    <pickerArea :invator="showChose" @changingType="selected" v-on:increment="listenToMyBoy"
                :pickermore="list"></pickerArea>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      position="center">
      <h3>咨询部门<i class="C2-guanbi1 OAIndexIcon" @click="close()"></i></h3>
      <template>
        <DepartPro></DepartPro>
      </template>
    </mt-popup>
  </div>
</template>

<script>
  import {Field, Button} from 'mint-ui'
  import pickerArea from 'components/aboutCompany/pickerArea'
  import DepartPro from 'components/aboutCompany/DepartPro.vue'
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import qs from "qs"

  export default {
    name: 'consulting',
    components: {'mint-button': Button, pickerArea, DepartPro},
    data() {
      return {
        showChose: false,
        apply_name: '',
        mobilephone: null,
        addressee: null,
        zipcode: null,
        Province: null,
        City: null,
        District: null,
        Street: null,
        colorRed: false,
        isDefault: false,
        pname: '',
        phone: '',
        list: {},
        popupVisible: false,
        cityshow:[]
      }
    },
    created() {
      this.pname = JSON.parse(localStorage.getItem('userInfo')).name
      this.phone = JSON.parse(localStorage.getItem('userInfo')).phone
      console.log(this.pname)
      console.log(this.phone)
    },
    methods: {
      close() {
        this.popupVisible = !this.popupVisible
      },
      selected() {
        this.showChose = !this.showChose
        Api.pickerAreaApi.pickerAreaf().then(res => {
          this.list = res
//              console.log(this.list)
        })
      },
      //省市区三级联动数据
      listenToMyBoy(Province, City, District, Street) {
        this.Province = Province,
          this.City = City,
          this.District = District
        this.Street = Street
      },
      department() {
        this.popupVisible = !this.popupVisible
        this.nameid = Util.other.getSessionStorage('cityId')
        console.log(this.nameid)
        Api.pickerAreaApi.pickerAreas(this.nameid).then(res => {
          this.cityshow = res
          console.log(this.data)
        })
      }
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  .koukou {
    margin-bottom: 0.1rem;
    .mint-cell-wrapper {
      padding: 0 0.24rem;
    }
    .mint-cell-title {
      font-size: 0.24rem;
      color: #333;
    }
    .ipt {
      border-top: 1px solid #d9d9d9;
      width: 7.2rem;
    }
    .pname {
      font-size: 0.24rem;
      color: #333;
      padding: 0 0.24rem;
      border-top: 1px solid #d9d9d9;
      background-color: #fff;
      width: 7.2rem;
      height: 0.97rem;
      line-height: 0.97rem;
      span {
        margin-right: 0.9rem;
      }
      i {
        float: right;
        font-size: 0.28rem;
        color: #c2c2c2;
      }
      .C2-next {
        color: #cbcbcb;
      }
    }
    .content {
      width: 7.2rem;
      height: 1rem;
      background-color: #fff;
    }
    textarea {
      border: 0;
      outline: 0;
      width: 6.96rem;
      height: 1rem;
      padding-left: 0.24rem;
      border-bottom: 1px solid #d9d9d9;
      font-family: "微软雅黑";
    }

  }

  .addressorder {
    width: 7.2rem;
    height: 0.97rem;
    line-height: 0.97rem;
    font-size: 0.24rem;
    position: relative;
    background-color: #fff;
    .OAIndexIcon {
      position: absolute;
      top: 0;
      right: 0.24rem;
    }
  }

  .about {
    width: 6.72rem;
    margin: 0.24rem 0.24rem 0;
  }

  .autions {
    padding: 0 0.24rem;
    font-size: 0.21rem;
    color: #999;
    margin-top: 0.26rem;
  }

  .consult {
    padding-left:;
  }
</style>
