/**
* Created by wyg on 2017/10/9.
*/

<template>
  <div>
    <div class="padding-container fff">
      <div class="icon" v-if="errormsg">
        <i class="OAIndexIcon icon-guanbi"></i>
        <p>认证失败!</p>
      </div>
      <div class="icon" v-else>
        <i class="OAIndexIcon icon-xuanzhong"></i>
        <p>认证成功!</p>
      </div>
      <p class="error">{{errormsg}}</p>
    </div>
    <div class="btn padding-container-lr" @click="resultBtn">
      <p v-if="errormsg">重新上传</p>
      <p v-else>确认</p>
    </div>
    <!--<div>{{testData}}</div>-->
  </div>
</template>

<script>
  //微信认证结果
  import Api from '../../api'
  import $ from 'jquery'
  import Util from '../../util'
  import {Toast} from 'mint-ui'
  export default {
    name: 'wxAuthenticationResult',
    components: {},
    data () {
      return {
        errormsg: null,//失败原因
        wxAuthenResult: {},//微信实人返回结果
        testData:''
      }
    },
    created(){
      this.init();
    },
    methods: {
      //初始化
      init(){
        let wxAuthen = localStorage.getItem('wxAuthen');
        wxAuthen = JSON.parse(wxAuthen);
//        if (!wxAuthen) {
//          this.errormsg = '认证失败,请重试!';
//          this.testData = '缓存获取失败';
//          return
//        }
        //'{2ADEB344-C5B7-46A4-9F89-95DDDC05643B}'
//        Api.realNameApi.getWxAuthenticationResult({token: '{8486D7FB-4F73-42C9-95EB-C12D665F96B2}',type:'H5'}, {loading: '请稍后...'})
        Api.realNameApi.getWxAuthenticationResult({token: wxAuthen.token,type:'H5'}, {loading: '请稍后...'})
          .then(res => {
            if (res.errorcode === 0) {
              Util.other.setLocalStorage('wxAuthenUserInfo',res.data);
              //成功
              this.testData = JSON.stringify(res.data);

              this.wxAuthenResult = res.data;
            } else {
              //失败
              this.errormsg = res.errormsg;
            }
          });
      },
      //底部按钮
      resultBtn(){
        if (this.errormsg) {
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
            sessionStorage.setItem('wxSignatures',_signature);
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
          return
        }
        console.log('成功');
        this.$router.replace('/')
      }
    },
    computed: {}

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .icon {
    text-align: center;
    i {
      font-size: 1.08rem;
      color: #f56262;
    }
    i.icon-xuanzhong {
      color: #4caf50;
    }
    p {
      margin-top: .24rem;
      font-size: .32rem;
      color: #000;
    }
  }

  .error {
    font-size: .21rem;
    color: #666;
    text-align: center;
    padding: .3rem 0;
  }

  .btn {
    margin-top: .23rem;
    p {
      background: #12b7f5;
      font-size: .32rem;
      color: #fff;
      text-align: center;
      line-height: .94rem;
      border-radius: .1rem;
    }
  }
</style>
