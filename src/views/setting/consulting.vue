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
    <div class="addressorder padding-container-lr pname consult" :class="isopen?'colorRed':''" @click="isopendown">
      <span>是否公开</span><i class="OAIndexIcon C2-check-R"></i>
    </div>
    <div class="box-margin-top about top52">
      <mint-button type="primary" size="large" @click="subconsult">提交</mint-button>
    </div>
    <p class="autions">提示：本栏目接受办事群众和企业对进驻各级政务服务中心政务服务大厅的部门行政审批服务过程中有关法规，政策程序等问题的咨询</p>
    <mt-popup
      v-model="popupVisibles"
      popup-transition="popup-fade"
      position="bottom">
      <h3 class="addresstitle">企业地址<i class="C2-guanbi1 OAIndexIcon" @click="isshowarea(false)"></i></h3>
      <template>
        <pickerArea :invator="showChose" @changingType="selected" v-on:increment="listenToMyBoy"
                    :pickermore="list" :isshowarea="isshowarea"></pickerArea>
      </template>
    </mt-popup>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      position="bottom">
      <h3 class="addresstitle">咨询部门<i class="C2-guanbi1 OAIndexIcon" @click="isshowpub(false)"></i></h3>
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
        areacode:'',
        isDefault: false,
        pname: '',
        phone: '',
        list: {},
        popupVisible: false,
        popupVisibles:false,
        cityshow: [],
        Apartment: null,
        Sumshine: null,
        proshow: [],
        isdep:true,
        consulttitle:'',
        concultconts:'',
      isopen:true
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
      //打开关闭添加修改模态框
      isshowarea(bool){
        this.popupVisibles = bool;
      },
      isshowpub(bool){
        this.popupVisible = bool;
      },
      isopendown(){
        this.isopen=!this.isopen
      },
      close() {
        this.popupVisible = !this.popupVisible
      },
      selected() {
       this.isshowarea(true)
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
          this.areacode=addressInfo.street.id
          this.addressInfo = {}
        }
        else if (addressInfo.district) {
          this.Province = addressInfo.province.value
          this.City = addressInfo.city.value
          this.District = addressInfo.district.value
          this.areacode=addressInfo.district.id
          this.Street = ''
          this.addressInfo = {}
        }
        else if (addressInfo.city) {
          this.Province = addressInfo.province.value
          this.City = addressInfo.city.value
          this.areacode=addressInfo.city.id
          this.District = ''
          this.Street = ''
          this.addressInfo = {}
        }
        else if (addressInfo.province) {
          this.Province = addressInfo.province.value
          this.areacode=addressInfo.province.id
          this.City = ''
          this.District = ''
          this.Street = ''
          this.addressInfo = {}
        }
        this.popupVisibles = false
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
          this.popupVisible = false
      },
//      获得咨询项目的列表
      addproject(Sumshine,sumshine){
        this.Sumshine = Sumshine
        this.sumshine=sumshine
        this.popupVisible = false
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
        if(this.pname==''){
          Toast("输入姓名不能为空")
          return
        }
        else if(this.phone==''){
          Toast("请输入输入手机号码")
          return
        }
        else if(this.Apartment==''){
          Toast("请选择您要咨询的部门")
          return
        }
        else if(this.consulttitle==''){
          Toast("请输入您要咨询的主题")
          return
        }
        else if(this.concultconts==''){
          Toast("咨询内容不能为空")
          return
        }
        let myDate = new Date();
        console.log(myDate)
        let content={
          consultTitle:this.consulttitle, //咨询主题
          orgId:this.apartment, //申请部门id
          orgName:this.Apartment, //申请部门
          applyId:this.userid, //申请者ID
          applyName:this.pname, //申请者名字
          approveId:this.sumshine, // 事项id
          consultContent:this.concultconts, //咨询内容
          applyPhone:this.phone, //申请者电话
          areaCode:this.areacode, //区域编码
          applyType:'1',//申请者类型
          isOpen:this.isopen==true?'Y':'N',  //是否公开
          consultSource:'4' ,//消息来源
          consultTime:myDate
        }
        Api.consultApi.PutConsult(content).then(res=>{
         if(res.code=200){
           alert('咨询成功，即将跳转')
           this.$router.push('/mySelfInfo')
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
    .colorRed{
      color:#ff3e3e;
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
