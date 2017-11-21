/**
* Created by Administrator on 2017/10/18.
*/

<template>
  <div class="tmp">
    <mt-field label="收货人" class="ipt" v-model="addlist.apply_name" @on-change="getValue()"></mt-field>
    <mt-field label="手机号码" class="ipt" v-model="addlist.mobilephone"></mt-field>
    <div class="regi " @click="selected">
      <em>所属区域</em>
      {{addlist.province}} <span v-show="addlist.province">-</span> {{addlist.city}} <span
      v-show="addlist.province">-</span>{{addlist.county}}
      <span class="ipt">
                    <i class="OAIndexIcon C2-next common"></i>
                </span>
      <pickerCmp :invator="showChose" @changingType="selected" v-on:increment="listenToMyBoy"></pickerCmp>
    </div>
    <mt-field label="详细地址" class="ipt" v-model="addlist.addressee"></mt-field>
    <mt-field label="邮政编码" class="ipt" v-model="zipcode" placeholder="414400"></mt-field>
    <div class="addressorder" :class="isDefault?'colorRed':''" @click="_selecedAddFun">
      <span>设为默认地址</span><i class="OAIndexIcon C2-check-R"></i>
    </div>
    <div class="box-margin-top">
      <mint-button type="primary" size="large" @click="addaddress(addlist)">保存</mint-button>
    </div>
  </div>
</template>
<script>
  import {Field, Button} from 'mint-ui'
  import pickerCmp from 'components/aboutCompany/pickerCmp'
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import qs from "qs"

  export default {
    name: 'addaddress',
    props: ['addlist'],
    components: {pickerCmp, 'mint-button': Button},
    data() {
      return {
        showChose: false,
        apply_name: '',
        mobilephone: null,
        addressee: null,
        zipcode: null,
        Province: null,
        privince:null,
        city:null,
        district:null,
        City: null,
        District: null,
        colorRed: false,
        isDefault: false
      }
    },
    created() {
      this.listenToMyBoy()
    },
    methods: {
      _selecedAddFun() {
        this.isDefault = !this.isDefault
        console.log(this.isDefault)
      },
      selected() {
        this.showChose = !this.showChose
      },
      //省市区三级联动数据
      listenToMyBoy(Province, province, City, city, District, district) {
        console.log(Province, province, City, city, District, district)
          this.addlist.province = Province,
            this.provincecode=province,
          this.addlist.city = City,
            this.citycode=city,
          this.addlist.county = District
        this.districtcode=district
      },
      //编辑修改地址列表
      addaddress(addlist) {
        if (this.addlist.apply_name == '') {
          alert('请选择收货人')
          return
        }
        else if (this.addlist.mobilephone == "") {
          alert("请输入手机号码");
          return;
        }
        else if (!(/^1[34578]\d{9}$/.test(this.addlist.mobilephone))) {
          alert("请输入有效的11位手机号码")
          return;
        }
        else if (this.addlist.addressee == '') {
          alert("请输入详细收货地址")
          return;
        }
        this.certificateNum = JSON.parse(localStorage.getItem('userInfo')).certificateNum;
        Api.AddressApi.addresscheck(
          qs.stringify({
            addr_id: this.addlist.addr_id,
            apply_id: this.certificateNum,
            apply_type: 1,
            province_name: encodeURIComponent(this.addlist.province),
            province:this.provincecode,
            city_name: encodeURIComponent(this.addlist.city),
            city:this.citycode,
            county_name: encodeURIComponent(this.addlist.county),
            county:this.districtcode,
            addressee: encodeURIComponent(this.addlist.addressee),
            mobilephone: this.addlist.mobilephone,
            apply_name: encodeURIComponent(this.addlist.apply_name),
            is_default: this.isDefault == true ? 'Y' : 'N'
          }),
          {Headers: {'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'}}).then(res => {
            console.log(res)
          if (res.code == 200) {
//                this.$emit('increment')
            history.go(0)
          }
        })

      },
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  .tmp {
    /*background-color: #fff;*/
    width: 7.2rem;
    padding: 0 0.24rem;
    .ipt {
      height: 0.98rem;
      line-height: 0.98rem;
      border-bottom: 1px solid #d9d9d9;
    }
    .mint-cell-text {
      font-size: 0.24rem;
      color: #333;
    }
    .mint-field-core {
      font-size: 0.24rem;
      color: #333;
    }
    .mint-cell-wrapper {
      padding: 0;
    }
    .regi {
      font-size: 0.24rem;
      color: #333;
      position: relative;
      border-bottom: 1px solid #d9d9d9;
      .common {
        font-size: 0.23rem;
        color: #333;
        padding-left: 0.24rem;
        position: absolute;
        top: 0.35rem;
        right: 0.24rem;
      }
      em {
        display: inline-block;
        font-style: normal;
        width: 1.95rem;
        font-size: 0.24rem;
      }
    }
    .telp {
      margin-top: 0.19rem;
      background: #fff;
    }
    .addressorder {
      width: 6.72rem;
      height: 0.97rem;
      line-height: 0.97rem;
      font-size: 0.24rem;
      position: relative;
      .OAIndexIcon {
        position: absolute;
        top: 0.35rem;
        right: 0.24rem;
      }
    }
    .colorRed {
      color: #ff3e3e;
    }

  }

</style>
