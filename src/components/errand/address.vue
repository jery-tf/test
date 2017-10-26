/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="padding-container fff">
    <div class="mall-warp">
      <p>{{componentType}}</p>
      <mt-switch v-model="isShow"></mt-switch>
    </div>
    <div v-if="isShow" class="info box-margin-top" @click="selectAddress">
      <i class="OAIndexIcon C2-dingwei"></i>
      <div class="box-margin-left font-middle flex1">
        <p class="color333">
          <span>{{userInfo}}</span>
          <span>{{option.phone}}</span>
        </p>
        <div class="color999 box-margin-top mall-warp">
          <p class="twoLineFont">{{option.address}}</p>
          <i class="OAIndexIcon C2-fanhui4"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /***
   * 在线办理 地址组件
   * option参数列表
   *    id   'isDefault' 'userName'  'phone'  'address'   'type'
   * userId  默认是否选择    用户名       手机       地址    类型 1寄出 2收取
   * addressSelect 点击地址事件
   */
  export default {
    name: 'address',
    props: ['option', 'addressSelect'],
    components: {},
    data () {
      return {
        isShow: this.option.isDefault
      }
    },
    created(){
//      console.log(this.option)
    },
    methods: {
      selectAddress(){
        this.$router.push({path:`/errand/AddressManagement/${this.option.id}`})
//        if (this.addressSelect) {
//          this.addressSelect(11);
//        }
      }
    },
    computed: {
      userInfo(){
        let myType = {
          1: '寄件人 : ',
          2: '收件人 : '
        };
        return myType[this.option.type] + this.option.userName;
      },
      componentType(){
        let myType = {
          1: '原件快递收取',
          2: '办结快递送达'
        };
        return myType[this.option.type]
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .C2-fanhui4 {
    font-size: .29rem;
    margin-left: .1rem;
    color: #ccc;
  }
.info{
  display: flex;
  align-items: center;
}
  .user-phone {
    color: #333;
  }

  .C2-dingwei {
    font-size: .4rem;
  }

  .color333 {
    span:last-child {
      margin-left: .2rem;
    }
  }
</style>
