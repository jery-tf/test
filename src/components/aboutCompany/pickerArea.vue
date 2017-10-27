/**
* Created by Administrator on 2017/10/13.
*/

<template>
  <!--居住地址三级联动选项-->
  <section class="showChose" v-show="showChose">
    <section class="address">
      <section class="title addresst">
        <h4>企业地址
          <i class="C2-guanbi1 OAIndexIcon" @click="closeAdd()"></i>
        </h4>
      </section>
      <section></section>
      <section class="title" :province1="this.Province">
        <!--<div class="area" @click="provinceSelected()">{{City?City:'请选择'}}</div>-->
        <div class="area" @click="provinceSelected()" :class="Province?'':'active'">{{Province ? Province : '请选择'}}
        </div>
        <div class="area" @click="citySelected()" :class="City?'':'active'"  v-show="Province">{{City ? City : '请选择'}}</div>
        <div class="area" @click="districtSelected()" :class="District?'':'active'" v-show="City">
          {{District ? District : '请选择'}}
        </div>
        <div class="area" @click="streetSelected()" :class="Street?'':'active'" v-show="District">
          {{Street ? Street : '请选择'}}
        </div>
      </section>
      <ul>
        <li class="addList" @click="getProvinceId(pickermore.id, pickermore.name)" v-show="showProvince"
            :class="pickermore.selected ? 'active' : ''">{{pickermore.name}}
        </li>
        <li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.id, v.name, k)" v-show="showCity"
            :class="v.selected ? 'active' : ''">{{v.name}}
        </li>
        <li class="addList" v-for="(v,k) in showDistrictList" @click="getDistrictId(v.id, v.name, k)"
            v-show="showDistrict" :class="v.selected ? 'active' : ''">{{v.name}}
        </li>
        <li class="addList" v-for="(v,k) in showStreetList" @click="getStreetId(v.id, v.name, k)"
            v-show="showStreet" :class="v.selected ? 'active' : ''">{{v.name}}
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import qs from "qs"
  export default {
    name: 'myAddress',
    props: ['invator','pickermore'],
    data() {
      return {
        showChose: this.invator,
//        showChose: true,
        showProvince: true,
        showCity: false,
        showStreet:false,
        showDistrict: false,
        showCityList: false,
        showDistrictList: false,
        showStreetList:false,
        province: 5,
        city: 3,
        district: 57,
        street:1,
        GetProvinceId: 2,
        District: false,
        Province: false,
        City: false,
        Street:false,
        // v-for循环判断是否为当前
        selected: false,
        info: [],
      }
    },
    methods: {
//      hide(){//弹层消失事件
//        this.$emit('changingType','false');//调用父组件的自定义事件，并传值
//      },
//      choseAdd: function() {
//        this.showChose = false;
//      },
      closeAdd: function () {
        this.showChose = false;
      },
      _filter(add, name, code) {
        let result = [];
        for (let i = 0; i < add.length; i++) {
          if (code == add[i].id) {
            result = add[i][name];
          }
        }
        return result;
      },
      getProvinceId: function (code, input, index) {
        this.province = code;
        this.Province = input;
        this.showProvince = false;
        this.showCity = true;
        this.showDistrict = false;
        this.showCityList = this._filter(this.info, 'city', this.province);
//         点击选择当前
        this.showCityList.map(a => a.selected = false);
        this.showCityList.selected = true;
         this.nameid=this.province
//        console.log(this.nameid)
        Api.pickerAreaApi.pickerAreas(this.nameid).then(res=>{
         this.showCityList=res
//          let arr=[]
//          for(let data of res){
//            arr.push(data)
//          }
//          console.log(arr)
        })
      },
      provinceSelected: function () {
        // 清除市级和区级列表
        this.showCityList = false;
        this.showDistrictList = false;
        // 清除市级和区级选项
        this.City = false;
        this.District = false;
        // 选项页面的切换
        this.showProvince = true;
        this.showCity = false;
        this.showDistrict = false;
        this.showStreet=false;
      },
      getCityId: function (code, input, index) {
        this.city = code;
        this.City = input;
        this.showProvince = false;
        this.showCity = false;
        this.showDistrict = true;
        this.showStreet=false;
        this.showDistrictList = this._filter(this.showCityList, 'district', this.city);
        // 选择当前添加active
        this.showCityList.map(a => a.selected = false);
        this.showCityList[index].selected = true;
        this.nameid=this.city;
       if(this.nameid==4){
         this.showChose = false;
         this.showCityList='';
         this.$emit('increment', this.Province, this.City);
         Util.other.setSessionStorage('cityId',this.city,this.city);
         this.City=false
         return
       }
        Api.pickerAreaApi.pickerAreas(this.nameid).then(res=>{
          this.showDistrictList=res
          //选择的城市
//          console.log(this.city)
        })
      },
      citySelected: function () {
        this.showCity = true;
        this.showDistrict = false;
        this.showStreet=false;
        this.City=false;
      },
      getDistrictId: function (code, input, index) {
        this.district = code;
        this.District = input;
        this.showProvince = false;
        this.showCity = false;
        this.showDistrict = false;
        this.showStreet=true;
        this.showStreetList = this._filter(this.showDistrict, 'street', this.district);
        // 选择当前添加active
        this.showDistrictList.map(a => a.selected = false);
        this.showDistrictList[index].selected = true;
        this.nameid=this.district;
        Api.pickerAreaApi.pickerAreas(this.nameid).then(res=>{
          let arr=['5','3da984d332d64eac801706b2b60cf90a','7100f34bba254518885c225022c83a84','fb0b69f8473748ad9512b2081839a13d',
            '8042e70c013d428b9456d394b91d7d37','1cd83e5c26c449f89cd687f2ffe11cc5','e6796767f9d94683a19ee64d45255f42','34c330204fac4f649df5a2f02681462e',
            'e78060d4635d4128892f31c7b6d2ee4c','f420382f76c948809f409c905ae3771a','4b5c1ffb848041739efe4d00d2fb9f34','85db8269da254cf99627389702d43e05',
            '36d351f50ad8457eb180dfc3d50f3c1f','2328dd64349e4cad8ec5635f28926c8a']
          this.showStreetList=res
          //选择区域
          console.log(this.district+'')
         for(let i=0;i<arr.length;i++){
           if(arr.indexOf( (this.district+''))!=-1){
             this.showChose = false;
             this.$emit('increment', this.Province, this.City, this.District,this.district,this.city,this.province);
             Util.other.setSessionStorage('cityId',this.district);
             this.showStreetList=true
             return
           }
         }
          if(this.showStreetList==''){
            this.showChose = false;
            this.$emit('increment', this.Province, this.City, this.District,'',this.province,this.city,this.district);
          }
        })

      },
      districtSelected: function () {
        this.showProvince = false;
        this.showCity = false;
        this.showDistrict = true;
        this.showStreet=false;
        this.Street=false;
        this.District=false
      },
      getStreetId:function(code, input, index){
        this.street = code;
        this.Street = input;
        this.showStreetList.map(a => a.selected = false);
        this.showStreetList[index].selected = true;
//        this.showStreetList = this._filter(this.showStreet, 'street', this.street);
        this.nameid= this.street
        Api.pickerAreaApi.pickerAreas(this.nameid).then(res=>{
          this.showStreetList=res
        })
        // 选取镇级选项之后关闭弹层
        this.showChose = false;
        this.$emit('increment', this.Province, this.City, this.District,this.Street,this.province,this.city,this.district,this.street);
        Util.other.setSessionStorage('cityId',this.street);
      },
      streetSelected:function () {
        this.showProvince = false;
        this.showCity = false;
        this.showDistrict = false;
        this.showStreet=true;
      }
    },
    watch: {
      invator(cur) {//监听invitor值的变化
//        console.log('currentVal:'+cur)
        if (cur == true) {//当父组件传递值为true是，则显示
          this.showChose = true;
        }
      },
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .myAddress {
    width: 100%;
    background-color: white;
    border-top: 4px solid rgba(245, 245, 245, 1);
    color: #333;
    height: 9rem;
  }

  .myAddress .cont {
    border-bottom: 1px solid rgba(245, 245, 245, 0.8);
  }

  .myAddress .cont span {
    display: inline-block;
    font-size: 0.28rem;
    color: #333;
    line-height: 0.85rem;
    margin-left: 0.32rem;
  }

  .myAddress .cont section {
    float: left;
  }

  .myAddress .cont p {
    display: inline-block;
    font-size: 0.28rem;
    color: #333333;
    line-height: 0.88rem;
    margin-left: 1rem;
  }

  .myAddress .cont .pic2 {
    float: right;
    width: 0.14rem;
    height: 0.24rem;
    margin: 0.32rem 0.32rem 0.32rem 0;
  }

  .myAddress .cont p.text {
    margin-left: 0.72rem;
  }

  .showChose {
    width: 100%;
    height: 100%;
    position: fixed;
    bottom:0;
    left: 0;
    background-color: blue;
    background: rgba(0, 0, 0, 0.5);
    height: 9rem;
  }

  .address {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 121;
    background: #fff;
    width: 100%;
    height: 9rem;
  }

  .title {
    width: 7.2rem;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #ededed;
    position: relative;
  }

  .addresst {
    text-align: center;
  }

  .title h4 {
    text-align: center;
    font-weight: 400;
    width: 7.2rem;
    height: 1rem;
    line-height:1rem;
    border-bottom: 1px solid #d9d9d9;
    font-size: 0.38rem;
    position: relative;
    .C2-guanbi1 {
      position: absolute;
      top: -0.02rem;
      right: 0.24rem;
      font-size: 0.45rem;
    }
  }

  .area {
    display: inline-block;
    font-size: 0.24rem;
    line-height: 1rem;
    padding-left: 0.24rem;
    color: #000;
    font-family: '微软雅黑';
    padding-right: 0.42rem;
  }

  .addList {
    width: 100%;
    /*padding-left:0.32rem;*/
    font-size: 0.24rem;
    line-height: 0.8rem;
    color: #333;
    font-family: "微软雅黑";
  }

  /* 修改的格式 */
  .address ul {
    width: 7.2rem;
    height: 100%;
    /*max-height: 4.4rem;*/
    overflow: auto;
  }

  .address ul li {
    padding-left: 0.24rem;
    width: 6.94rem;
    font-size: 0.26rem;
    color: #000;
    border-bottom: 1px solid #ededed;
  }

  .address .title .active {
    color: #f74c4c;
    border-bottom: 0.03rem solid #f74c4c;
  }

  .address ul .active {
    color: #f74c4c;
  }
</style>
