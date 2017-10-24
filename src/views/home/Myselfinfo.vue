<template>
  <div>
    <div class="myheader">
      <router-link to="/selfinfo">
        <div class="hport">
          <h3 :class="islogin ? 'classa' : 'OAIndexIcon icon-yonghu21' "></h3>
          <!--<img :src="'islogin'?'../../assets/img/hport.png':'../../assets/img/img1.png'">-->
          <!--<img src="../../assets/img/hport.png" alt="">-->
          <span :class="text?'classc':'classd'">{{pname}}</span><i class="OAIndexIcon icon-fanhui2" v-if="isshow"></i>
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
        <router-link to="/collection">
          <div class="mycollect">
            <span class="OAIndexIcon icon-shoucang"></span>
            <p>我的收藏</p>
          </div>
        </router-link>
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
    <div class="contentsall padding-container-lr" >
      <ul v-for="item in list">
          <li>
            <router-link v-bind="{to:'/aboutcmp/aboutcmp/'+item.id}">
            <AboutCompany :data="item"></AboutCompany>
            </router-link>
          </li>
      </ul>
    </div>
    <div class="parttop  padding-container-lr">

        <!--<div class="particulars ">-->
          <!--<span>-->
             <!--<i class="OAIndexIcon icon-shijian"></i>我的预约-->
          <!--</span>-->
          <!--<em class="OAIndexIcon icon-next"></em>-->
        <!--</div>-->
      <router-link to="/setting/paycost">
        <div class="particulars">
          <span>
             <i class="OAIndexIcon icon-qianbao"></i>公共缴费
          </span>
          <em class="OAIndexIcon icon-next"></em>
        </div>
      </router-link>
      <router-link to="/setting/consulting">
        <div class="particulars company setting">
        <span>
           <i class="OAIndexIcon icon-tousu"></i>我的咨询
        </span>
          <em class="OAIndexIcon icon-next"></em>
        </div>
      </router-link>

    </div>
    <div class="parttop padding-container-lr">
      <div class="particulars " @click="authentication">
        <span>
           <i class="OAIndexIcon icon-shimingrenzheng"></i>实人认证
        </span>
        <em class="OAIndexIcon icon-next"></em>
      </div>
      <!--<div class="particulars " @click="authenticationTwo">-->
        <!--<span>-->
           <!--<i class="OAIndexIcon icon-shimingrenzheng"></i>二次认证-->
        <!--</span>-->
        <!--<em class="OAIndexIcon icon-next"></em>-->
      <!--</div>-->
      <!--<div class="particulars">-->
        <!--<span>-->
           <!--<i class="OAIndexIcon icon-bangzhu"></i>帮助与反馈-->
        <!--</span>-->
        <!--<em class="OAIndexIcon icon-next"></em>-->
      <!--</div>-->
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
  import {Swipe, SwipeItem,Toast} from 'mint-ui';
  import Util from '../../util'

  export default {
    name: 'myselfinfo',
    components: {AboutCompany},
    data() {
      return {
        list: [
          {id:1,contents: "湖南科创信息技术有限公司", time: '2017-07-05', star: '法定代表人', status: '开业'},
          {id:2,contents: "企业技术改造项目有限公司企业技术改造项目有限公司", time: '2017-07-05', star: '法定代表人', status: '注销'}
        ],
        islogin: false,
        pname: '',
        isshow:'false',
        text:false
      }
    },
    created() {
      this.getimgs()
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
      authenticationTwo(){
        if(!Util.other.getLocalStorage('wxAuthenUserInfo')){
          Toast('请先做实人认证');
          return;
        }
        let wxAuthen = localStorage.getItem('wxAuthen');
        let wxAuthenUserInfo = Util.other.getLocalStorage('wxAuthenUserInfo');

        wxAuthen = JSON.parse(wxAuthen);

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
            uid: '123', type: 1,pic_key:wxAuthen.token,ID:wxAuthenUserInfo.ID,name:wxAuthenUserInfo.name
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
//      getcompany() {
//        this.$router.push('/aboutcmp/aboutcmp')
//      },
      getimgs() {
        let token = Util.login.getAccessToken();
        let userInfo = Util.user.getUserAllInfo();
        console.log(userInfo)
        if (token && userInfo) {
          let username = userInfo.name;
          this.islogin = true
          this.pname=username
          this.text=true
        }else{
          this.pname='请登陆'
          this.isshow=false
        }
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
      span{
        vertical-align: middle;
      }
      .icon-fanhui2{
        color:#333;
        display: inline-block;
        width: 0.1rem;
        height: 0.17rem;
        font-size: 0.34rem;
        /*vertical-align: middle;*/
      }
      h3 {
        margin-bottom: 0.14rem;
      }
      .icon-yonghu21,.classa{
        width: 1.01rem;
        height: 1.01rem;
        text-align: center;
        border-radius: 0.01rem;
        font-size: 1.01rem;
      }
      .classa {
        background-image: url(../../assets/img/hport.png);
        -webkit-background-size: 1.01rem;
        background-size: 1.01rem;
      }
      .classb {
        /*background-image: url(../../assets/img/text1.jpg);*/
        -webkit-background-size: 1.01rem;
        background-size: 1.01rem;
        width: 1.01rem;
        height: 1.01rem;
        text-align: center;
        border-radius: 0.01rem;
      }
      .classc{
        font-size: 0.32rem;
        color: #333;
        font-family: "微软雅黑";
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
    overflow-x: scroll;
    ul {
      width: 1000px;
      li {
        float: left;
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
      p{
        margin-top: 0.2rem;
      }
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
    font-family: "微软雅黑";
    .icon-shijian, .icon-qianbao, .icon-tousu, .icon-shimingrenzheng, .icon-bangzhu, .icon-shezhi2 {
      font-size: 0.41rem;
      color: #F48074;
      margin-right: 0.26rem;
    }
    .icon-qianbao{
      color: #108EE9;
    }
    .icon-tousu {
      color: #50BAA5;
      font-size: 0.35rem
    }
    .icon-shimingrenzheng {
      color: #FC992C;
      font-size: 0.30rem
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
      color: #cdcdcd;
    }
  }

  .company {
    margin-bottom: 0.24rem;
  }

  .active {
  }
</style>
