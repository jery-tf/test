/**
* Created by Administrator on 2017/10/17.
*/

<template>
  <div class="popup">
    <template v-for="(item,index) in addressList">
      <AddressMang :key="index" :addressInfo="item"
                   :updatAddrFun="updatAddrFun" :deleltAddrFun="deleltAddrFun"
                   :selecedAddFun="selecedAddFun"></AddressMang>
    </template>
    <p class="add fff " @click="addAddress">
      <i class="OAIndexIcon C2-xinjian"></i>
    </p>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
    position="bottom">
      <h3> {{ordername}}<i class="C2-guanbi1 OAIndexIcon" @click="close()"></i></h3>
      <template>
        <AddAddress :addlist="list" :selecedAddFun="selecedAddFun"  v-on:increment="addaddress" ></AddAddress>
      </template>
    </mt-popup>
  </div>
</template>

<script>
  import AddressMang from 'components/address/addressMang.vue';
  import AddAddress from 'components/address/addaddress.vue'
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import qs from "qs"
  import {Popup} from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  export default {
    name: 'AdeeressList',
    components: {AddressMang, AddAddress},
    data() {
      return {
//        id: null,
        addressList: [],
        popupVisible: false,
        ordername: null,
        list: []
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.getAddressList()
    },
    methods: {
      close() {
        this.popupVisible = !this.popupVisible
//        console.log(this.popupVisible)
      },
      addaddress(){
        this.popupVisible = !this.popupVisible

      },
      //获取个人地址列表
      getAddressList(id) {
        Api.AddressApi.addresslist(
          qs.stringify({
            apply_id: this.id
          }),
          {Headers: {'content-type': 'application/x-www-form-urlencoded'}}).then(res => {
          if (res.code == 200) {
//            this.addressList = res.list
            console.log(res);
            let arr = [];
            for (let item of res.list) {
              let _item = {
                apply_name: item.apply_name, mobilephone: item.mobilephone,
                county_name: item.county_name, is_default: item.is_default, city_name: item.city_name,province_name:item.province_name,
                addr_id:item.addr_id,addressee:item.addressee
              };
              arr.push(_item);
            }
            this.addressList = arr;
          }
        })
      },
      selecedAddFun(id) {
        for (let item of this.addressList) {
          if (id == item.addr_id) {
            item.is_default = true;
          } else {
            item.is_default = false;
          }
        }
      },
      updatAddrFun(id) {
//        console.log('要编辑的地址id', id)
        Api.AddressApi.addressMoreList(
          qs.stringify({
            addr_id: id
          }),
          {Headers: {'content-type': 'application/x-www-form-urlencoded'}}).then(res => {
          if (res.code == 200) {
            this.list = res.bean
            this.popupVisible = true,
              this.ordername = '修改地址'
          }
        })
      },
      //删除地址
      deleltAddrFun(id) {
        MessageBox.confirm('', {
          message: '确定删除地址吗？',
          title: '',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(action => {
          if (action == 'confirm') {
            Api.AddressApi.deleteaddress({
                addr_id: id
              }).then(res => {
              if (res.code == 200) {
               history.go(0)
              }
            })
          }
        }).catch(err => {
          if (err == 'cancel') {
            return
          }
        });
//        console.log('要删除的地址Id', id)
      },
      //添加地址
      addAddress() {
        this.list.is_default=false
        this.popupVisible = true
        this.ordername = '新增地址'
        this.list.province=''
        this.list.city=''
        this.list.county=''
        this.list.mobilephone=''
        this.list.apply_name=''
      },
      addaddress(){
        this.popupVisible = false
      }
    },
  }
</script>

<style  lang="less" rel="stylesheet/less">
  .popup{
    position: relative;
    .add {
      display: flex;
      justify-content: center;
      align-items: center;
      height: .81rem;
      margin-top: 0.26rem;
      i {
        font-size: .41rem;
        color: #ccc;
      }
      .fileUp {
        display: none;
      }
    }

    .mint-popup {
      width: 7.2rem;
      height:9rem;
      h3 {
        text-align: center;
        font-weight: 400;
        width: 7.2rem;
        height: 1rem;
        line-height:1rem;
        border-bottom: 1px solid #d9d9d9;
        .C2-guanbi1 {
          position: absolute;
          top:0.35rem;
          right:0.24rem;
          font-size: 0.45rem;
        }
      }
    }
    .mint-msgbox{
      border-radius: 0.1rem;
      background-color: blue;
    }
  }
</style>
