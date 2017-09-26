/**
* Created by wyg on 2017/9/25.
*/

<template>
  <div class="content fff box-margin-top">
    <div class="mall-warp padding-container">
      <p class="font-large">{{addressInfo.userName}}</p>
      <span style="font-size: .28rem;color:#333">{{addressInfo.phone}}</span>
    </div>
    <div class="addressBox padding-container-lr">
      <p class="twoLineFont">
        <span v-if="addressInfo.isDefault&&!isManagement" style="color:#ff3e3e">[默认地址]</span>
        <span>{{addressInfo.address}}</span>
      </p>
    </div>
    <div class="padding-container mall-warp addressMan" v-if="isManagement">
      <div class="letf">
        <p v-if="addressInfo.isDefault" class="colorRed" @click="_selecedAddFun">
          <i class="OAIndexIcon icon-check-R check"></i>
          <span>默认地址</span>
        </p>
        <p v-else @click="_selecedAddFun">
          <i class="OAIndexIcon icon-gouxuankuang check"></i>
          <span>设为默认</span>
        </p>

      </div>
      <div class="right">
        <p @click="_updatAddrFun">
          <i class="OAIndexIcon icon-bianji check"></i>
          <span>编辑</span>
        </p>
        <p @click="_deleltAddrFun">
          <i class="OAIndexIcon icon-lajixiang check"></i>
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
        this.selecedAddFun(this.addressInfo.id);
      },
      _updatAddrFun(){
        this.updatAddrFun(this.addressInfo.id);
      },
      _deleltAddrFun(){
        this.deleltAddrFun(this.addressInfo.id);
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
    .icon-lajixiang{
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
