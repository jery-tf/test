/**
* Created by Administrator on 2017/10/23.
*/

<template>
  <div class="box-margin-top citysel">
    <div class="koukou">
      <mt-field label="我的姓名" class="ipt" v-model="pname"></mt-field>
      <mt-field label="手机号码" class="ipt" v-model="phone"></mt-field>
      <div class="pname" @click="selected">
        <span>行政区域</span>{{Province}}<strong v-show="Province">-</strong>{{City}}<strong v-show="District">-</strong>{{District}}<strong
        v-show="Street">-</strong>{{Street}}
        <i class="OAIndexIcon C2-next"></i>
      </div>
      <div class="pname consult" @click="department">
        <span> 咨询部门</span>{{Apartment}}
        <i class="OAIndexIcon C2-next"></i>
      </div>
      <div class="pname consult" @click="seleproject">
        <span>咨询项目</span>{{Sumshine}}
        <i class="OAIndexIcon C2-next"></i>
      </div>
      <mt-field label="咨询主题" class="ipt" v-model="consulttitle"></mt-field>
      <div class="pname padding-container-lr">咨询内容</div>
      <textarea v-model="concultconts"></textarea>
    </div>
    <div class="addressorder padding-container-lr pname consult">
      <span>是否公开</span><i class="OAIndexIcon C2-check-R"></i>
    </div>
    <div class="box-margin-top about top52">
      <mint-button type="primary" size="large" @click="subconsult">提交</mint-button>
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
        <DepartPro :cityshow="cityshow" v-on:increments="addaddress" :isdep="isdep"  :proshow="proshow"  v-on:increment="addproject"></DepartPro>
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
        cityshow: [],
        Apartment: null,
        Sumshine: null,
        proshow: [],
        isdep:true,
        consulttitle:null,
        concultconts:null
      }
    },
    created() {
      this.pname = JSON.parse(localStorage.getItem('userInfo')).name
      this.phone = JSON.parse(localStorage.getItem('userInfo')).phone
      this.userid = JSON.parse(localStorage.getItem('userInfo')).userId
      console.log(this.pname)
      console.log(this.userid)
    },
    methods: {
      close() {
        this.popupVisible = !this.popupVisible
      },
      selected() {
        this.showChose = !this.showChose
        Api.pickerAreaApi.pickerAreaf().then(res => {
          this.list = res
        })
      },
      //省市区三级联动数据
      listenToMyBoy(addressInfo) {
        if (addressInfo.street) {
          this.Province = addressInfo.province.value
          this.City = addressInfo.city.value
          this.District = addressInfo.district.value
          this.Street = addressInfo.street.value
          this.addressInfo = {}
        }
        else if (addressInfo.district) {
          this.Province = addressInfo.province.value
          this.City = addressInfo.city.value
          this.District = addressInfo.district.value
          this.Street = ''
          this.addressInfo = {}
        }
        else if (addressInfo.city) {
          this.Province = addressInfo.province.value
          this.City = addressInfo.city.value
          this.District = ''
          this.Street = ''
          this.addressInfo = {}
        }
        else if (addressInfo.province) {
          this.Province = addressInfo.province.value
          this.City = ''
          this.District = ''
          this.Street = ''
          this.addressInfo = {}
        }
      },
      department() {
        this.popupVisible = !this.popupVisible
        this.nameid = Util.other.getSessionStorage('cityId')
        Api.pickerAreaApi.pickerAreas(this.nameid).then(res => {
          this.cityshow = res
        })
        this.isdep=true;
      },
//      获得咨询部门的列表
      addaddress(Apartment,apartment) {
          this.Apartment = Apartment
        this.apartment=apartment;
          console.log(apartment)
          this.popupVisible = false
      },
//      获得咨询项目的列表
      addproject(Sumshine,sumshine){
        this.Sumshine = Sumshine
        this.sumshine=sumshine
        this.popupVisible = false
        console.log( this.sumshine)
      },
//      根据ID获取到咨询项目
      seleproject() {
        this.popupVisible = !this.popupVisible
        this.isdep=false
        this.projectId = Util.other.getSessionStorage('projectId')
        let id = this.projectId
        let cond = {};
        cond = {
          filters: {
            groupOp: "AND",
            rules: [
              {field: 'orgId', op: "eq", data: id}
            ]
          }
        }
        let params = {page: 1, rows: 100, cond: encodeURI(JSON.stringify(cond))};
        Api.errandApi.getErrandList(params).then(res => {
          this.proshow = res
          //取接口数据
          let arr = [];
          for (let item of res.contents) {
            let _item = {
              id: item.approveId, title: item.approveName, score: parseInt(item.transactLevel) + 1,
              frequency: item.minSeq, name: item.orgName, isActive: true
            };
            arr.push(_item);
            this.proshow = arr
          }
        })
      },
      subconsult(){
        let content={consultTitle:this.consulttitle,
          orgId:this.apartment,
          orgName:this.Apartment,
          applyId:this.userid,
          applyName:this.pname,
          approveId:this.sumshine,
          consultContent:this.concultconts,
          applyPhone:this.phone,
          areaCode:'5',
          applyType:'1',
          isOpen:'Y',
          consultSource:'4'

        }
        Api.consultApi.PutConsult(content).then(res=>{
         if(res.code=200){
           alert('咨询成功，即将跳转')
         }
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .citysel {
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
        position: relative;
        span {
          margin-right: 0.6rem;
        }
        i {
          float: right;
          font-size: 0.28rem;
          color: #c2c2c2;
        }
        .C2-next {
          position: absolute;
          top: 0.35rem;
          right: 0.24rem;
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
        top: 0.4rem;
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
    .mint-popup {
      width: 7.2rem;
    }
    .mint-cell-title{
      width: 1rem;
      margin-right: 0.6rem;
    }
    .mint-field-core{
      font-size: 0.24rem;
    }
  }

</style>
