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
      <section class="title" :province1="this.Province">
        <div class="area" @click="provinceSelected()" :class="Province?'':'active'">{{Province ? Province : '请选择'}}
        </div>
        <div class="area" @click="citySelected()" :class="City?'':'active'" v-show="Province">{{City ? City : '请选择'}}
        </div>
        <div class="area" @click="districtSelected()" :class="District?'':'active'" v-show="City">
          {{District ? District : '请选择'}}
        </div>
      </section>
      <ul>
        <li class="addList" v-for="(v,k) in info" @click="getProvinceId(v.areaCode1, v.areaName1, k)" v-show="showProvince"
            :class="v.selected ? 'active' : ''">{{v.areaName1}}
        </li>
        <li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.areaCode2, v.areaName2, k)" v-show="showCity"
            :class="v.selected ? 'active' : ''">{{v.areaName2}}
        </li>
        <li class="addList" v-for="(v,k) in showDistrictList" @click="getDistrictId(v.areaCode3, v.areaName3, k)"
            v-show="showDistrict" :class="v.selected ? 'active' : ''">{{v.areaName3}}
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
  import Api from '../../api'
  import {Swipe, SwipeItem, Toast} from 'mint-ui';
  import Util from '../../util'
  import qs from "qs"
  export default {
    name: 'myAddress',
    props: ['invator'],
    data() {
      return {
        showChose: this.invator,
//        showChose: true,
        showProvince: true,
        showCity: false,
        showDistrict: false,
        showCityList: false,
        showDistrictList: false,
        province: 5,
        city: 3,
        district: 57,
        GetProvinceId: 2,
        District: false,
        Province: false,
        City: false,
        // v-for循环判断是否为当前
        selected: false,
        info:[]
      }
    },
    created() {
     this.getalls()
    },
    methods: {
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
      getalls(){
        Api.AddressApi.province().then(res => {
          this.info=res
        })
      },
      getProvinceId: function (code, input, index) {
        this.province = code;
        this.Province = input;
        this.showProvince = false;
        this.showCity = true;
        this.showDistrict = false;
        this.showCityList = this._filter(this.info, 'city', this.province);
        // 点击选择当前
        this.info.map(a => a.selected = false);
        this.info[index].selected = true;

        Api.AddressApi.getcity(this.province).then(res => {
          this.showCityList=res
        })


      },
      provinceSelected() {
        this.Province=false
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
      },
      getCityId: function (code, input, index) {
        this.city = code;
        this.City = input;
        this.showProvince = false;
        this.showCity = false;
        this.showDistrict = true;
        this.showDistrictList = this._filter(this.showCityList, 'district', this.city);
        // 选择当前添加active
        this.showCityList.map(a => a.selected = false);
        this.showCityList[index].selected = true;

        Api.AddressApi.district(this.city).then(res => {
          let arr = [];
          for (let item of res) {
            let _item = {
              areaCode3: item.areaCode3, areaName3: item.areaName3,
            };
            arr.push(_item);
            this.showDistrictList = arr
          }
          console.log(this.showDistrictList)
        })
      },
      citySelected: function () {
        this.showProvince = false;
        this.showCity = true;
        this.showDistrict = false;
        this.showDistrict = false;
        this.District = false;
        this.City=false;
        this.showCity=true
      },
      getDistrictId: function (code, input, index) {
        this.district = code;
        this.District = input;
        // 选择当前添加active
        this.showDistrictList.map(a => a.selected = false);
        this.showDistrictList[index].selected = true;
        // 选取市区选项之后关闭弹层
        this.showChose = false;
        this.$emit('increment', this.Province, this.province,this.City,this.city, this.District,this.district);
      },
      districtSelected: function () {
        this.showProvince = false;
        this.showCity = false;
        this.showDistrict = true;
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
    ,
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
    top: 0;
    left: 0;
    z-index: 120;
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
      top:0.35rem;
      right:0.24rem;
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
