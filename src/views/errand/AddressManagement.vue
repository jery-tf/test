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
      <p class="add fff box-margin-top" @click="addAddress">
        <i class="OAIndexIcon icon-xinjian"></i>
      </p>
    </div>
    <p @click="addressManFun" class="foot">{{addressManLable}}</p>
  </div>
</template>

<script>
  import AddressManage from 'components/errand/addressManage.vue';
  export default {
    name: 'AddressManagement',
    components: {AddressManage},
    data () {
      return {
        isManagement: false,
        addressList: [
          {
            id: 1,
            address: "这里是地址比较长这里是地址比较长这里是地址比较长这里是地址比较长这里是地址比较长这里是地址比较长这里是地址比较长",
            userName: "张三",
            phone: "12312312",
            isDefault: true
          },
          {
            id: 2,
            address: "这里是地址比较长这里是地址比较长这里是地址比较长这里是地址比较长这里是地址比较长这里是地址比较长这里是地址比较长",
            userName: "张三",
            phone: "12312312",
            isDefault: false
          },
          {
            id: 3,
            address: "这比较长这里是地址比是地址比较长这里是地址比较长这里是地址比较长这里是地址比较长",
            userName: "李四",
            phone: "44342422",
            isDefault: false
          },
        ]
      }
    },
    created(){

    },
    methods: {
      //切换地址管理状态
      addressManFun(){
        this.isManagement = !this.isManagement;
      },
      //选择地址函数
      selecedAddFun(id){
        for (let item of this.addressList) {
          if (id == item.id) {
            item.isDefault = true;
          } else {
            item.isDefault = false;
          }
        }
      },
      //编辑地址
      updatAddrFun(id){
        console.log('要编辑的地址id', id)
      },
      //删除地址
      deleltAddrFun(id){
        console.log('要删除的地址Id', id)
      },
      //添加地址
      addAddress(){
        console.log('添加地址')
      }
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
  }
</style>
