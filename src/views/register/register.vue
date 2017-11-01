<template>
  <div>
    <div class="regist">
      <div class="forpeo" @click="ableres()">
        <div class="peo">
          <i class="OAIndexIcon  C2-qiyeyonghu"></i>
        </div>
        个人注册
      </div>
      <div class="forcmp" @click="ablerescmp()">
        <div class="cmp">
          <i class="OAIndexIcon C2-qiye"></i>
        </div>
        企业注册
      </div>
    </div>
    <div class="agreey padding-container-lr">
      我同意《互联网+政务 用户服务协议》
      <mt-switch v-model="value"></mt-switch>
    </div>
    <div class="reglist padding-container-lr">
      <p>《互联网+政务 用户服务协议》</p>
      &nbsp;1.【目的意义】为保证网上政务服务用户信息的真实性、合法性和有效性，自然人、法人用户注册、验证应采用实名制。统一用户注册和验证是开展“互联网+政务服务”、建立政务服务实施机构和行政相对人线上服务法律关系的前提，是今后全国政务服务实现网上“一地注册，各地互认”的基础。在您成为“互联网+政务服务”实名注册用户（简称“注册用户”）之前，请确认您已充分阅读、理解并接受本协议的全部内容，同意遵循本协议的所有约定。<br>

      2.【协议适用主体范围】政务服务门户的运营管理权归政务服务机构所有。本协议是您和湖南省政务服务管理机构（简称“政务服务机构”），明确双方通过湖南省政务服务门户和平台办理政务服务事项过程中的权利义务所订立的协议。订立本协议的用户，应当是具备完全民事权利能力和完全民事行为能力的自然人。<br>

      3.【服务内容】注册用户能够访问互联网政务服务门户网站、检索静态信息、进行在线咨询、申办政务服务事项，可在专属用户空间查询所办事项的过程信息和历史信息，储存信息资料，并自行维护用户空间信息。<br>

      4.【用户承诺与授权】注册用户在政务服务门户进行注册和使用本政务服务平台时承诺并确认：<br>

      (1)提供及时、详尽及准确的个人资料；<br>

      (2)使用本人手机号码、社保账号、银行卡账号、公积金账号、身份证号、驾驶证号等个人信息进行实名验证；<br>

      (3)及时更新注册资料；<br>

      (4)同意接收政务服务机构推送的信息；<br>

      (5)在提请政务服务事项办理过程中，按服务内容要求提供真实、准确的要件材料，并及时对上传本平台的要件材料做好更新维护；<br>

      (6)自愿选择物流快递、网上支付等第三方服务时，及时提供真实姓名、联系地址、联系方式、账户等相关个人信息；<br>

      (7)不存放与政务服务申办无关的信息内容。<br>

      5.【用户信息保障】政务服务机构依法保护个人隐私，不得违法违规向与政务服务无关的第三方提供用户注册资料。<br>

      6.【用户的密码和安全性】考虑到注册用户是特定的行政相对人，以其账号操作的行为由注册用户承担相应法律责任。注册用户应妥善保管密码，不得将账号、密码提供给他人使用。建议定期修改密码，以确保账号安全。<br>

      7.【禁止条款】注册用户有违反法律法规行为的，政务服务机构有权终止为用户提供服务，并保留追责的权利。<br>

      8.【结束服务】注册用户若反对任何服务条款或对后续的条款修改有异议，或不需要接受相关政务服务，可自行注销账号，如之后需要使用相关服务，需重新进行注册认证。<br>

      9.【注意事项】政务服务机构将加强网络安全管理和风险防控，因技术原因和网络中断等因素，可能会造成注册用户的实时操作无效或暂停，请注意备份相关资料。<br>

      10.【其他规定】政务服务机构后期依照本服务条款及相关法律法规发布的补充规则，均为本协议不可分割的组成部分，原则上不再另行签约。<br>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  export default {
    data() {
      return {
        value: true
      }
    },
    methods: {
      ableres() {
        if (this.value == false) {
          Toast("请同意用户协议再进行注册");
          return
        } else {
          this.$router.push("/register/registerforpeo")
        }
      },
      ablerescmp() {
        if (this.value == false) {
          Toast("请同意用户协议再进行注册");
          return
        } else {
          this.$router.push("/register/registerforcmp")
        }
//        alert('功能暂未开放，敬请期待')
//        return
      }
    }
  }
</script>
<style lang='less'>
  .regist {
    width: 7.2rem;
    margin: 0.34rem 0 0.24rem 0;
    height: 3.33rem;
    background-color: #fff;
    .forpeo {
      text-align: center;
      padding-top: 0.55rem;
      float: left;
      width: 50%;
      height: 3.33rem;
      border-right: 1px solid #ddd;
      font-size: 0.4rem;
      .peo {
        margin: 0 auto;
        width: 1.34rem;
        height: 1.34rem;
        line-height: 1.34rem;
        background-color: #29ccb7;
        border-radius: 50%;
        margin-bottom: 0.42rem;
      }
    }
    .forcmp {
      text-align: center;
      float: right;
      width: 50%;
      padding-top: 0.55rem;
      height: 3.33rem;
      font-size: 0.4rem;
      .cmp {
        margin: 0 auto;
        width: 1.34rem;
        height: 1.34rem;
        line-height: 1.34rem;
        background-color: #3b9ac6;
        border-radius: 50%;
        margin-bottom: 0.42rem;
      }
    }
  }

  .agreey {
    width: 7.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.24rem;
    color: #666;
    background-color: #fff;
    margin-bottom: 0.24rem;
    .mint-switch {
      display: inline-block;
      width: 1.12rem;
      height: 0.54rem;
      border-radius: 0.27rem;
      margin-top: 0.12rem;
      vertical-align: top;
      margin-left: 1.4rem;
    }
    .mint-switch-core {
      display: inline-block;
      width: 1.12rem;
      height: 0.54rem;
      background-color: #29ccb7;
      border: 0;
      border-radius: 0.27rem;
    }
    .mint-switch-core::before {
      display: inline-block;
      width: 1.12rem;
      height: 0.54rem;
      border-radius: 27px;
    }
    .mint-switch-core::after {
      display: inline-block;
      width: 0.54rem;
      height: 0.54rem;
      border-radius: 50%;
    }
    .mint-switch-input:checked + .mint-switch-core::after {
      transform: translateX(0.58rem)
    }
    .mint-switch-input:checked.mint-switch-core {
      border-color: #29ccb7;
      background-color: #29ccb7;
      border-radius: 0.27rem;
    }

  }

  .reglist {
    font-size: 0.2rem;
    color: #666;
    background-color: #fff;
    font-family: "微软雅黑";
    line-height: 0.5rem;
    height: 6.72rem;
    overflow-y: auto;
    p {
      font-size: 0.24rem;
      color: #000;
      font-weight: 800;
      text-align: center;
      padding-top: 0.35rem;
      margin-bottom: 0.46rem;
    }
  }

  .OAIndexIcon {
    font-size: 0.67rem;
    color: #fff;
  }
</style>
