<template>
  <div class="addresslist">
    <div class="cmp">
      <div class="regi padding-container-lr common">
        <em>企业类型</em><select name="企业类型" id="select_k1" class="xla_k">
        <option value="选择品牌">企业法人</option>
        <option value="选择品牌1">社团法人</option>
        <option value="选择品牌2">机关事业单位法人</option>
      </select>
      </div>
      <div class="regi padding-container-lr common">
        <em>证件类型</em>
        <span class="ipt">
                   统一社会信用代码 <i class="OAIndexIcon C2-next common"></i>
                </span>
      </div>
      <div class="regi">
        <mt-field label="证件代码" class="ipt" v-model="socialno"></mt-field>
      </div>
      <div class="regi">
        <mt-field label="公司/单位名称" class="ipt" v-model="cmpname"></mt-field>
      </div>
      <div class="regi">
        <mt-field label="公司单位/性质" class="ipt"></mt-field>
      </div>
      <div class="regi">
        <mt-field label="法人名称" class="ipt" v-model="corporator"></mt-field>
      </div>
      <div class="regi">
        <mt-field label="法人身份证号码" class="ipt" v-model="cnpmidcard"></mt-field>
      </div>
      <div class="regi padding-container-lr common" @click="selected">
        <em>所属区域</em>
        {{Province}}<strong v-show="Province">-</strong>{{City}}<strong v-show="District">-</strong>{{District}}<strong
        v-show="Street">-</strong>{{Street}}
        <span class="ipt">
                    <i class="OAIndexIcon C2-next common"></i>
                </span>
      </div>
      <div class="regi">
        <mt-field label="详细地址" class="ipt" v-model="address"></mt-field>
      </div>
    </div>
    <div class="regi">
      <mt-field label="手机号码" class="ipt" v-model="cmpphone"></mt-field>
    </div>
    <div class="yan common">
      <strong>验证码</strong>
      <input type="text" class=" padding-container-lr ipt" placeholder="请输入短信验证码">
      <button class="btn">52秒后重新获取</button>
    </div>
    <div class="regi">
      <mt-field label="密码" class="ipt" v-model="cmppwd"></mt-field>
    </div>
    <div class="regi">
      <mt-field label="确认密码" class="ipt" v-model="ispwd"></mt-field>
    </div>
    <div class="top52">
      <mint-button type="primary" size="large" @click="registercmp">提交</mint-button>
    </div>
    <!--<pickerArea :invator="showChose" @changingType="selected" v-on:increment="listenToMyBoy"-->
                <!--:pickermore="list" :selectAreaa="selectAreaa"></pickerArea>-->
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      position="bottom">
        <h3 class="addresstitle">企业地址<i class="C2-guanbi1 OAIndexIcon" @click="close()"></i></h3>
      <template>
        <pickerArea :invator="showChose" @changingType="selected" v-on:increment="listenToMyBoy"
                    :pickermore="list" :selectAreaa="selectAreaa"></pickerArea>
      </template>
    </mt-popup>
  </div>
</template>
<script>
  import {Field, Button} from 'mint-ui'
  import AbleInput from 'components/iptinput/ableinput'
  import pickerArea from 'components/aboutCompany/pickerArea'
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import qs from "qs"
  import {Toast} from 'mint-ui';

  export default {
    data() {
      return {
        showcase: true,
        data: 0,
        province: '',
        showChose: false,
        Province: null,
        City: null,
        city: '',
        street: '',
        district: '',
        District: null,
        Street: null,
        list: [],
        phone: '',
        cmpname: '',
        cnpmidcard: '',
        cmppwd: '',
        corporator: '',
        cmpphone: '',
        ispwd: '',
        address: '',
        socialno: '',
        popupVisible:false,
      }
    },
    components: {'mint-button': Button, AbleInput, pickerArea},
    created() {

    },
    methods: {
      close(){
        this.isshowarea(false);
      },
      selectAreaa(){
        console.log(address)
      },
      selected() {
        this.isshowarea(true);
        this.showChose = !this.showChose
        Api.pickerAreaApi.pickerAreaf().then(res => {
          this.list = res
          console.log(this.list)
        })
      },
//      省市区三级联动数据
      listenToMyBoy(addressInfo) {
        if(addressInfo.street){
          this.Province = addressInfo.province.value
          this.City = addressInfo.city.value
          this.District = addressInfo.district.value
          this.Street = addressInfo.street.value
          this.addressInfo={}
        }
        else if(addressInfo.district){
          this.Province = addressInfo.province.value
          this.City = addressInfo.city.value
          this.District = addressInfo.district.value
          this.Street=''
          this.addressInfo={}
        }
        else if(addressInfo.city){
          this.Province = addressInfo.province.value
          this.City = addressInfo.city.value
          this.District = ''
          this.Street=''
          this.addressInfo={}
        }
        else if(addressInfo.province){
          this.Province = addressInfo.province.value
          this.City =''
          this.District = ''
          this.Street=''
          this.addressInfo={}
        }
      },
      //打开关闭添加修改模态框
      isshowarea(bool){
        this.popupVisible = bool;
      },
//      企业注册的正则验证非空验证以及请求接口
      registercmp() {
        let postId = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
        if (this.socialno == "") {
          Toast("请输入社会统一信用代码");
          return;
        }
        else if(!(/^[0-9A-Z]{18}$/).test(this.socialno)){
          Toast("请输入有效的18位有效社会统一信用代码")
          return;
        }
        else if (this.cmpname == "") {
          Toast("请输入企业名称");
          return;
        }
        else if (!postId.test(this.cnpmidcard)) {
          Toast("请输入合法的身份证号")
          return
        }

        else if (this.cmpphone == "") {
          Toast("请输入手机号码");
          return;
        }
        else if (!(/^1[34578]\d{9}$/.test(this.cmpphone))) {
          Toast("请输入有效的11位手机号码")
          return;
        }
        else if (this.cmppwd == "") {
          Toast("请输入密码");
          return;
        }
        else if (this.ispwd == "") {
          Toast("请输入密码");
          return;
        }
        else if (this.cmppwd != this.ispwd) {
          Toast({
            message: '两次密码输入不一致，请重新输入',
            position: 'top',
          });
          return
        }
        Api.registerApi.registerCmp(
          qs.stringify({
            type: 1,  //法人类型
            corp_name: this.cmpname, //企业名称
            idcard: this.cnpmidcard,//企业身份证号
            pwd: this.cmppwd,
            corporator: this.corporator,
            phone: this.cmpphone,
            socialno: this.socialno,
            city: this.City,
            area: this.District,
            street: this.Street
          }),
          {Headers: {'content-type': 'application/x-www-form-urlencoded'}}
        ).then(res => {
          if (res.code = 200) {
            Toast(res.info)
            this.$router.push('/')
          } else {
            alert(res.info)
          }
        })
      }
    },
  }
</script>
<style lang='less'>
  .addresslist{
    .cmp {
      margin: 0.19rem 0;
      width: 7.2rem;
      background-color: #fff;

      .xla_k {
        width: 4.7rem;
        height: 0.98rem;
        border: 0;
        outline: 0;
        font-size: 0.23rem;
        color: #333;
      }
    }

    .regi,
    .ableipt {
      font-size: 0;
      width: 7.2rem;
      height: 0.97rem;
      line-height: 0.97rem;
      border-top: 1px solid #d9d9d9;
      background-color: #fff;
      position: relative;
      .ipt {
        .C2-next {
          color: #c9c9c9;
          position: absolute;
          top: 0.35rem;
          right: 0.24rem;
        }
      }
      .mint-cell-wrapper {
        padding: 0 0.24rem;
        .mint-field-core {
          font-size: 0.23rem;
        }
      }
      .mint-field {
        .mint-cell-text {
          font-size: 0.23rem;
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
    .mint-popup{
      width: 7.2rem;
      height: 9rem;
    }
    .addresstitle{
      width: 7.2rem;
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid #ededed;
      position: relative;
      text-align: center;
      font-weight: 400;
      line-height:1rem;
      border-bottom: 1px solid #d9d9d9;
      font-size: 0.38rem;
      .C2-guanbi1 {
        position: absolute;
        top:0.35rem;
        right:0.24rem;
        font-size: 0.45rem;
      }
    }
  }

</style>
