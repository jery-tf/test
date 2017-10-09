/**
* Created by Administrator on 2017/10/9.
*/

<template>
  <div class="box-margin-top ">
    <div class="checkpwd">
      <mt-field label="输入新密码" v-model="oldpwd" :disableClear="true"
                :type="isShowPassword?'text':'password'">
        <i :class="`OAIndexIcon icon-yanjing1 ${isShowPassword?'passwordIcon':'textIcon'}`"
           @click="showPassword"></i>
      </mt-field>
    </div>
    <div class="checkpwd">
      <mt-field label="确认新密码" v-model="newpwd" :disableClear="true"
                :type="isShowPasswordtwo?'text':'password'">
        <i :class="`OAIndexIcon icon-yanjing1 ${isShowPasswordtwo?'passwordIcon':'textIcon'}`"
           @click="showPassword1"></i>
      </mt-field>
    </div>
    <Btncommon msg="提交" ></Btncommon>
  </div>
</template>

<script>
  import Btncommon from 'components/btncommon/BtnCommon'

  export default {
    name: 'settingpwd',
    components: {Btncommon},
    data() {
      return {
        oldpwd: "",
        newpwd: "",
        isShowPassword: false,
        isShowPasswordtwo: false
      }
    },
    created() {

    },
    methods: {
      showPassword() {
        this.isShowPassword = !this.isShowPassword;
      },
      showPassword1() {
        this.isShowPasswordtwo = !this.isShowPasswordtwo;
      },
    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  .mint-cell-wrapper {
    width: 7.2rem;
    height: 0.98rem;
  }

  .mint-field-core {
    font-size: 0.28rem;
    color: #999;
  }

  .checkpwd {
    .mint-field {
      .mint-cell-title {
        font-size: 0.28rem;
        color: #333;
        width: 1.7rem;
      }
    }

    .passwordIcon {
      color: #31C0F6;
      font-size: 0.32rem;
    }

    .textIcon {
      color: #ccc;
      font-size: 0.32rem;
    }
  }
</style>
