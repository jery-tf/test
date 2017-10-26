<template>
  <div>
    <div class="regist">
      <div class="forpeo" @click="ableres()">
        <div class="peo">
          <i class="OAIndexIcon  icon-qiyeyonghu"></i>
        </div>
        个人注册
      </div>
      <div class="forcmp" @click="ablerescmp()">
        <div class="cmp">
          <i class="OAIndexIcon icon-qiye"></i>
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
      &nbsp;&nbsp;国家发改委发言人孟为15日在新闻发布会上透露，2013年以来，城乡居民收入稳步增长，年平均增长7.4%，实现了与GDP增长基本同步；收入差距逐步缩小，基尼系数从2013年的0.473下降到2016年的0.465. <br>
      &nbsp;&nbsp;但孟为同时指出，收入增长功能任需增强，收入分配调节体系还需进一步完善，收入分配公平性有待提高，评估监测机制也要进一步健全，为此，国家发改委会同21个深化收入分配制度改革部际联席会议成员单位。制定出台了《2017年深化收入分配制度改革重点工作安排》，明确了4方面19项重点工作。 <br>
      &nbsp;&nbsp;根据安全，要通过开展城乡居民增收综合配套政策试点、专项激励计划试点和收入监测试点三类试点，树立标杆，提炼可复制、可推行的经验做法
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
