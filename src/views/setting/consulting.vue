/**
* Created by Administrator on 2017/10/23.
*/

<template>
  <div class="box-margin-top ">
    <div class="koukou">
      <mt-field label="我的姓名" class="ipt" v-model="pname" ></mt-field>
      <mt-field label="手机号码" class="ipt" v-model="phone" ></mt-field>
      <div class="pname">
        地址管理
        <span class="OAIndexIcon icon-next"></span>
      </div>
      <div class="pname">
        咨询部门
        <span class="OAIndexIcon icon-next"></span>
      </div>
      <div class="pname">
        咨询项目
        <span class="OAIndexIcon icon-next"></span>
      </div>
      <mt-field label="咨询主题" class="ipt"  ></mt-field>
      <div class="pname padding-container-lr">咨询内容</div>
      <textarea></textarea>
    </div>
    <div class="addressorder padding-container-lr pname"  >
      <span>设为默认地址</span><i class="OAIndexIcon icon-check-R"></i>
    </div>
    <div class="box-margin-top about">
      <mint-button type="primary" size="large" >提交</mint-button>
    </div>
  </div>

</template>

<script>
  import {Field, Button} from 'mint-ui'
    export default {
        name: 'consulting',
      components: {'mint-button': Button},
        data() {
            return {}
        },
        created() {
          this.pname = JSON.parse(sessionStorage.getItem('userInfo')).name
          this.phone = JSON.parse(sessionStorage.getItem('userInfo')).phone
          console.log(this.pname)
          console.log(this.phone)
        },
        methods: {}

    }
</script>

<style lang="less" rel="stylesheet/less">
.koukou{
  margin-bottom: 0.1rem;
  .mint-cell-wrapper{
    padding: 0 0.24rem;
  }
  .mint-cell-title{
    font-size: 0.24rem;
    color: #333;
  }
  .ipt{
    border-top: 1px solid #d9d9d9;
    width: 7.2rem;
  }
  .pname {
    font-size: 0.24rem;
    color: #333;
    padding:0 0.24rem;
    border-top: 1px solid #d9d9d9;
    background-color: #fff;
    width: 7.2rem;
    height: 0.97rem;
    line-height: 0.97rem;
    span {
      float: right;
      font-size: 0.28rem;
      color: #c2c2c2;
    }
    .icon-next {
      color: #cbcbcb;
    }
  }
  .content{
    width: 7.2rem;
    height:1rem;
    background-color: #fff;
  }
  textarea{
    border: 0;
    outline:0;
    width: 6.96rem;
    height: 1rem;
    padding-left: 0.24rem;
    border-bottom: 1px solid #d9d9d9;
    font-family: "微软雅黑";
  }

}
.addressorder{
  width: 7.2rem;
  height: 0.97rem;
  line-height: 0.97rem;
  font-size: 0.24rem;
  position: relative;
  background-color: #fff;
  .OAIndexIcon{
    position: absolute;
    top:0;
    right:0.24rem;
  }
}
  .about{
    width: 6.72rem;
    margin: 0.24rem 0.24rem 0;
  }
</style>
