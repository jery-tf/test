/**
* Created by wyg on 2017/9/25.
*/

<template>
  <div class="content fff box-margin-top">
    <div class="mall-warp padding-container">
      <p class="font-large">{{addressInfo.apply_name}}</p>
      <span style="font-size: .28rem;color:#333">{{addressInfo.mobilephone}}</span>
    </div>
    <div class="addressBox padding-container-lr">
      <p class="twoLineFont">
        <span class="adddline">{{addressInfo.province_name}}{{addressInfo.city_name}}{{addressInfo.county_name}}</span>
      </p>
    </div>
    <div class="padding-container mall-warp addressMan">
      <div class="letf">
        <p v-if="addressInfo.is_default=='Y'"  :class="addressInfo.is_default=='Y'?'colorRed':''" @click="_selecedAddFun">
          <i class="OAIndexIcon C2-check-R check"></i>
          <span>默认地址</span>
        </p>
        <p v-else @click="_selecedAddFun">
          <i class="OAIndexIcon C2-gouxuankuang check"></i>
          <span>设为默认</span>
        </p>

      </div>
      <div class="right">
        <p @click="_updatAddrFun">
          <i class="OAIndexIcon C2-bianji check"></i>
          <span>编辑</span>
        </p>
        <p @click="_deleltAddrFun">
          <i class="OAIndexIcon C2-lajixiang check"></i>
          <span>删除</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  /***
   * 地址管理  单个地址组件
   *  addressInfo    isManagement   selecedAddFun  updatAddrFun  deleltAddrFun
   *  地址对象         是否在管理状态     设置默认事件     编辑地址按钮    删除地址按钮
   */
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import  qs from "qs"
  export default {
    name: 'addressManage',
    props:['addressInfo','isManagement','selecedAddFun','updatAddrFun','deleltAddrFun'],
    components: {},
    data () {
      return {}
    },
    created(){

    },
    methods: {
      _selecedAddFun(){
        this.selecedAddFun(this.addressInfo.addr_id);
        this.certificateNum = JSON.parse(localStorage.getItem('userInfo')).certificateNum;
        Api.AddressApi.addresscheck(
          qs.stringify({
            addr_id:this.addressInfo.addr_id,
            apply_id:this.certificateNum,
            apply_type:1,
            province:this.addressInfo.province,
            city: this.addressInfo.city,
            county:this.addressInfo.county,
            addressee:this.addressInfo.county,
            mobilephone:this.addressInfo.mobilephone,
            apply_name:this.addressInfo.apply_name,
            is_default:this.addressInfo.is_default='Y'
          }),
          {Headers:{'content-type':'application/x-www-form-urlencoded'}}).then(res => {
          if(res.code==200){
            console.log(res)

          }
        })
      },
      _updatAddrFun(){
        this.updatAddrFun(this.addressInfo.addr_id);
      },
      _deleltAddrFun(){
        this.deleltAddrFun(this.addressInfo.addr_id);
      }

    },
//    computed:{
//      computedAddress(){
//          return this.addressInfo.isDefault?`${this.addressInfo.address}`:this.addressInfo.address;
//      }
//    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .content{
    /*p{*/
    /*display: flex;*/
    /*align-items: center;*/
    /*}*/
    .twoLineFont{
      font-size: .25rem;
      .adddline{
        font-size: 0.28rem;
        color: #333;
        font-family: "微软雅黑";
      }
    }
    color:#666;
    .font-large{
      color:#333;
    }
    .check{
      font-size: .32rem;
      margin-right: .1rem;
    }
    .addressBox{
      padding-bottom: .23rem;
    }
    .letf{
      span{
        margin-left: .15rem;
      }
    }
    .C2-lajixiang{
      font-size:.38rem;
      position: relative;
      bottom:2px;
      left:1px;
    }
    .colorRed{
      color:#ff3e3e;
    }
    .right{
      display: flex;
      align-items: center;
      p{
        display: flex;
        align-items: center;
      }
      p:last-child{
        margin-left: .25rem;
      }
    }
    .addressMan{
      border-top: 1px solid #ccc;
      font-size: .26rem;
    }
  }
</style>
