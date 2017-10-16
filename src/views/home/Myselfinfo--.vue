<template>
  <div>
    <div class="myheader">
      <router-link to="/selfinfo">
        <div class="hport">
          <h3 class=" OAIndexIcon icon-yonghu11"></h3>
          请登录
        </div>
      </router-link>
      <div class="spanceclt">
        <span class="line"></span>
        <router-link to="/persondata/personlist">
          <div class="myspace">
            <span class=" OAIndexIcon icon-ziliao-copy"></span>
            <p>资料空间</p>
          </div>
        </router-link>
        <div class="mycollect">
          <span class="OAIndexIcon icon-shoucang"></span>
          <p>我的收藏</p>
        </div>
      </div>
    </div>
    <div class="officework padding-container-lr" @click="$router.push({path:'/me/myDo'})">
      <span class="myoffice">我的办件</span>
      <span class="checkall">查看全部<i class="OAIndexIcon icon-next"></i></span>
    </div>
    <ul class="unoffice">
      <li>
        <em class="icon-savetemp OAIndexIcon"></em>
        <p>暂存</p>
        <div class="num">12</div>
      </li>
      <li>
        <em class="icon-daishouli1 OAIndexIcon"></em>
        <p>待受理</p>
        <div class="num">6</div>
      </li>
      <li>
        <em class="icon-daishouli OAIndexIcon"></em>
        <p>待审核</p>
        <div class="num">1</div>
      </li>
      <li>
        <em class="icon-yibanshixiang OAIndexIcon"></em>
        <p>已办结</p>
        <div class="num">3</div>
      </li>
      <li>
        <span class="linetoo"></span>
        <em class="icon-jiaofei OAIndexIcon"></em>
        <p>待您处理</p>
        <div class="num">5</div>
      </li>
    </ul>

    <div class="padding-container-lr officework">
      <span class="myoffice">相关企业/单位(3)</span>
      <span class="checkall">查看全部<i class="OAIndexIcon icon-next"></i></span>
    </div>
    <div class="contentsall padding-container-lr" v-for="item in list">
      <!--<AboutCompany :data="item"></AboutCompany>-->
      <!--<mt-swipe :auto="0" :show-indicators="false">-->
        <!--<mt-swipe-item><AboutCompany :data="item"></AboutCompany></mt-swipe-item>-->
        <!--<mt-swipe-item>123</mt-swipe-item>-->
        <!--<mt-swipe-item>3</mt-swipe-item>-->
      <!--</mt-swipe>-->
      <ul>
        <li @click="getcompany()">
          <AboutCompany :data="item" ></AboutCompany>
        </li>
        <li>
          <AboutCompany :data="item"></AboutCompany>
        </li>
      </ul>
    </div>

    <div class="parttop  padding-container-lr">

      <div class="particulars ">
        <span>
           <i class="OAIndexIcon icon-shijian"></i>我的预约
        </span>
        <em class="OAIndexIcon icon-next"></em>
      </div>
      <div class="particulars ">
        <span>
           <i class="OAIndexIcon icon-charge"></i>缴费记录
        </span>
        <em class="OAIndexIcon icon-next"></em>
      </div>
      <div class="particulars company setting">
        <span>
           <i class="OAIndexIcon icon-tousu"></i>我的投诉
        </span>
        <em class="OAIndexIcon icon-next"></em>
      </div>
    </div>
    <div class="parttop padding-container-lr">
      <div class="particulars " @click="authentication">
        <span>
           <i class="OAIndexIcon icon-shimingrenzheng"></i>实人认证
        </span>
        <em class="OAIndexIcon icon-next"></em>
      </div>
      <div class="particulars">
        <span>
           <i class="OAIndexIcon icon-bangzhu"></i>帮助与反馈
        </span>
        <em class="OAIndexIcon icon-next"></em>
      </div>
      <router-link to="/setting/setting">
        <div class="particulars company setting">
        <span>
           <i class="OAIndexIcon icon-shezhi2"></i>设置
        </span>
          <em class="OAIndexIcon icon-next"></em>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Api from '../../api'
  import $ from 'jquery'
  import AboutCompany from '../../components/aboutCompany/company.vue'
  import { Swipe, SwipeItem } from 'mint-ui';

  export default {
    name: 'myselfinfo',
    components: {AboutCompany},
    data() {
      return {
        list:[
          {contents:"湖南科创信息技术有限公司",time:'2017-07-05',star:'法定代表人',status:'开业'}
        ]
      }
    },
    created() {
    },
    methods: {
      authentication() {
        let url = 'https://iauth.wecity.qq.com/new/cgi-bin/auth.php';
        let appId = '4454', method = 'auth';
        //签名
        Api.realNameApi.getAppSign({method, type: 'H5'}).then(res => {
          console.log(res);
          let _signature = res.signature;
          if (res.signature == 0) {
            _signature = '';
          }
          let args = {
            appid: appId, signature: _signature, redirect: 'http://hillwxtest.s1.natapp.cc/wxAuthentication-test.html',
            uid: '123', type: 0
          };
          sessionStorage.setItem('wxSignatures', _signature);
          let form = $("<form method='post'></form>");
          form.attr({"action": url});
          for (let arg in args) {
            let input = $("<input type='hidden'>")
            input.attr({"name": arg});
            input.val(args[arg]);
            form.append(input);
          }
          $(document.body).append(form);
          form.submit();
        })
      },
      getcompany(){
          this.$router.push('/aboutcmp/aboutcmp')
      }
    },
    computed: {}
  }
</script>


<style scoped lang='less'>
  .myheader {
    width: 7.2rem;
    height: 3.64rem;
    background-color: #fff;
    margin-bottom: 0.19rem;
    text-align: center;
    .hport {
      display: inline-block;
      padding-top: 0.4rem;
      padding-bottom: 0.66rem;
      font-size: 0.32rem;
      color: #999;
      .icon-yonghu11 {
        font-size: 1.01rem;
        color: #ccc;
      }
    }
    .spanceclt {
      overflow: hidden;
      position: relative;
      .line {
        display: inline-block;
        width: 0.02rem;
        height: 0.49rem;
        background-color: #eee;
        position: absolute;
        top: 0.2rem;
        left: 50%;
      }
      .myspace {
        float: left;
        width: 50%;
        text-align: center;
        .icon-ziliao-copy {
          font-size: 0.4rem;
          color: #666;
        }
        p {
          font-size: 0.24rem;
          color: #666;
        }
      }
      .mycollect {
        float: right;
        width: 50%;
        text-align: center;
        .icon-shoucang {
          font-size: 0.4rem;
          color: #666;
        }
        p {
          font-size: 0.24rem;
          color: #666;
        }
      }
    }
  }

  .officework {
    width: 7.2rem;
    height: 0.92rem;
    line-height: 0.92rem;
    background-color: #fff;
    border-bottom: 1px solid #d9d9d9;
    .myoffice {
      font-size: 0.32rem;
      color: #333;
      font-family: "微软雅黑";
    }
    .checkall {
      float: right;
      font-size: 0.24rem;
      color: #999;
      .icon-next {
        font-size: 0.29rem;
        vertical-align: -3%;
        margin-left: 0.26rem;
        color: #cdcdcd;
      }
    }
  }

  .contentsall {
    width: 7.2rem;
    height: 2.36rem;
    background-color: #fff;
    margin-bottom: 0.24rem;
    padding-top: 0.27rem;
    overflow-x:scroll;
    ul{
      width: 1000px;
      li{
        display: inline-block;
    }
    }
  }

  .unoffice {
    width: 7.2rem;
    height: 1.67rem;
    background-color: #fff;
    display: flex;
    margin-bottom: 0.2rem;
    li {
      width: 20%;
      height: 1.45rem;
      text-align: center;
      padding-top: 0.4rem;
      font-size: 0.24rem;
      color: #666;
      position: relative;
      .icon-savetemp, .icon-daishouli1, .icon-daishouli, .icon-yibanshixiang, .icon-jiaofei {
        font-size: 0.4rem;
        color: #12b8f6;
      }
      .icon-jiaofei {
        font-size: 0.4rem;
        color: #fe6732
      }
      .num {
        width: 0.34rem;
        height: 0.34rem;
        line-height: 0.34rem;
        position: absolute;
        top: 0.25rem;
        right: 0.3rem;
        background-color: #fe6732;
        color: #fff;
        border-radius: 50%;
        font-size: 0.2rem;
      }
    }
    .linetoo {
      display: inline-block;
      width: 0.02rem;
      height: 0.63rem;
      background-color: #eee;
      position: absolute;
      top: 0.5rem;
      right: 1.4rem;
    }
  }

  .parttop {
    background-color: #fff;
  }

  .particulars {
    width: 6.72rem;
    height: 0.98rem;
    line-height: 0.98rem;
    background-color: #fff;
    font-size: 0.32rem;
    color: #333;
    border-bottom: 1px solid #d9d9d9;
    .icon-shijian, .icon-charge, .icon-tousu, .icon-shimingrenzheng, .icon-bangzhu, .icon-shezhi2 {
      font-size: 0.41rem;
      color: #F48074;
      margin-right: 0.26rem;
    }
    .icon-charge {
      color: #108EE9;
    }
    .icon-tousu {
      color: #50BAA5;
      font-size: 0.31rem
    }
    .icon-shimingrenzheng {
      color: #FC992C;
      font-size: 0.31rem
    }
    .icon-bangzhu {
      color: #FC992C;
    }
    .icon-shezhi2 {
      color: #108EE9;
    }
    .icon-next {
      float: right;
      font-size: 0.29rem;
      vertical-align: -3%;
      /*margin-left: 0.26rem;*/
      color: #999;
    }
  }

  .company {
    margin-bottom: 0.24rem;
  }
</style>
