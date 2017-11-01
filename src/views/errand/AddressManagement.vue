/**
* Created by wyg on 2017/9/25.
*/

<template>
  <div class="h100">
    <div class="address">
      <template v-for="(item,index) in addressList">
        <AddressManage :key="index" :addressInfo="item"
                       :isManagement="isManagement" :selecedAddFun="selecedAddFun"
                       :updatAddrFun="updatAddrFun" :deleltAddrFun="deleltAddrFun"
        ></AddressManage>
      </template>
      <p class="add fff box-margin-top" @click="addaddressBtn()">
        <i class="OAIndexIcon C2-xinjian"></i>
      </p>
    </div>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      position="bottom">
      <p class="popupTitle"><i></i> <span>{{ordername}}</span><i class="C2-guanbi1 OAIndexIcon" @click="isShowAddOrUpdataBox(false)"></i></p>
      <template>
        <AddAddress :addlist="updataList"></AddAddress>
      </template>
    </mt-popup>
    <p @click="addressManFun" class="foot">{{addressManLable}}</p>
  </div>
</template>

<script>
  import Api from '../../api'
  import qs from "qs"
  import AddressManage from 'components/errand/addressManage.vue';
  import AddAddress from 'components/address/addaddress.vue'
  import {MessageBox} from 'mint-ui'
//  import AddressManagement from '';
  export default {
    name: 'AddressManagement',
    components: {AddressManage,AddAddress},
    data () {
      return {
        //新增修改地址模态显示
        popupVisible:false,
        isManagement: false,
        addressList: [],
        ordername:'',
        updataList: []
//      {
//        id: 3,
//        address: "这比较长这里是地址比是地址比较长这里是地址比较长这里是地址比较长这里是地址比较长",
//        userName: "李四",
//        phone: "44342422",
//        isDefault: false
//      },


      }
    },
    created(){
      //获取个人地址列表
      this.getAddressList();
    },
    methods: {
      //切换地址管理状态
      addressManFun(){
        this.isManagement = !this.isManagement;
      },
      //选择默认地址
      selecedAddFun(id){
        Api.AddressApi.addressMoreList(
          qs.stringify({
            addr_id: id
          }),
          {Headers: {'content-type': 'application/x-www-form-urlencoded'}}).then(res => {
          if (res.code == 200) {
            console.log(res);
          }
        })
        for (let item of this.addressList) {
          if (id == item.addr_id) {
            item.is_default = 'Y';
          } else {
            item.is_default = 'N';
          }
        }
      },
      //编辑地址
      updatAddrFun(data){
        this.updataList = data;
        this.ordername = '修改地址';
        this.isShowAddOrUpdataBox(true);
      },
      //删除地址
      deleltAddrFun(id){
        console.log('要删除的地址Id', id)
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
      },
      //添加地址按钮
      addaddressBtn(){
        this.ordername = '新增地址';
        this.updataList = [];
        this.isShowAddOrUpdataBox(true);
      },
      //打开关闭添加修改模态框
      isShowAddOrUpdataBox(bool){
        this.popupVisible = bool;
      },
      //获取个人地址列表
      getAddressList() {
        Api.AddressApi.addresslist(
          qs.stringify({
            apply_id: this.$route.params.id
          }),
          {Headers: {'content-type': 'application/x-www-form-urlencoded'}}).then(res => {
          if (res.code == 200) {
              console.log('地址列表',res)
            let arr = [];
            for (let item of res.list) {
              let _item = {
                apply_name: item.apply_name, mobilephone: item.mobilephone,
                city: item.city, is_default: item.is_default, county: item.county,province:item.province,
                addr_id:item.addr_id
              };
              arr.push(_item);
            }
            this.addressList = arr;
          }
        })
      },
    },
    computed: {
      addressManLable(){
        return this.isManagement ? '完成' : '管理地址';
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .h100 {
    /*position: relative;*/
    display: flex;
    flex-direction: column;
    .address {
      flex: 1;
      overflow-y: auto;
    }
    .foot {
      line-height: .8rem;
      background: #3daddd;
      text-align: center;
      color: #fff;
    }
    .add {
      display: flex;
      justify-content: center;
      align-items: center;
      height: .81rem;
      i {
        font-size: .41rem;
        color: #ccc;
      }
      .fileUp {
        display: none;
      }
    }
    .popupTitle{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .2rem .23rem 0 .23rem ;
    }
  }
</style>
