/**
* Created by Administrator on 2017/10/12.
*/

<template>
<div>
  <div class="cmp padding-container-lr">
    <div class="contents">
      <p>建设项目环境影响评价文件审批建设项目环境影响评价文件审批</p>
      <ul>
        <li>法定代表人：<span>陈可要</span></li>
        <li>注册资本：<span>1000万元人民币</span></li>
        <li>注册日期：<span>2017-07-05</span></li>
      </ul>
    </div>
    <div class="btn">
      <button class="openc">开业</button>
    </div>
  </div>
  <div class="spanceclt">
    <span class="line"></span>
      <div class="myspace">
        <span class=" OAIndexIcon C2-ziliao-copy"></span>
        <p>资料空间</p>
      </div>
    <div class="mycollect">
      <span class="OAIndexIcon C2-suoyoubanjian"></span>
      <p>企业办件</p>
    </div>
  </div>
  <div class="accredit ">
     <div class="accred">
       <h5 class="padding-container-lr">授权用户</h5>
     </div>
    <div class="accrepeo" v-for="item in list">
      <!--<router-link v-bind="{to:'/aboutcmp/aboutlist/'+item.id}">-->
      <router-link :to="{ name:'aboutlist', params: {id:item.id,aupe_idcard:item.aupe_idcard}}">
        <div class="peo" >
          <img src="../../assets/img/hport.png"><span>{{item.aupe_name}}</span>
          <div class="waite" :style="`background:${item.backgroundcolor};color:${item.colorcolorfor}`">{{item.star}}</div>
        </div>
      </router-link>
      <!--<div class="peo">-->
        <!--<img src="../../assets/img/hport.png" alt=""><span>陈在人</span>-->
        <!--<div class="one">一级被授权人</div>-->
      <!--</div>-->
      <!--<div class="peo">-->
        <!--<img src="../../assets/img/hport.png" alt=""><span>陈在人</span>-->
        <!--<div class="two">二级被授权人</div>-->
      <!--</div>-->
      <!--<div class="peo">-->
        <!--<img src="../../assets/img/hport.png" alt=""><span>陈在人</span>-->
        <!--<div class="first">法定代表人</div>-->
      <!--</div>-->
      <!--<div class="peo">-->
        <!--<img src="../../assets/img/hport.png" alt=""><span>陈在人</span>-->
        <!--<div class="two">二级被授权人</div>-->
      <!--</div>-->
      <!--<div class="peo">-->
        <!--<img src="../../assets/img/hport.png" alt=""><span>陈在人</span>-->
        <!--<div class="two">二级被授权人</div>-->
      <!--</div>-->
      <!--<div class="peo">-->
        <!--<img src="../../assets/img/hport.png" alt=""><span>陈在人</span>-->
        <!--<div class="three">三级被授权人</div>-->
      <!--</div>-->
      <!--<div class="peo">-->
        <!--<img src="../../assets/img/hport.png" alt=""><span>陈在人</span>-->
        <!--<div class="one">一级被授权人</div>-->
      <!--</div>-->
    </div>
  </div>
</div>
</template>

<script>
  import Api from '../../api'
  import {Swipe, SwipeItem,Toast} from 'mint-ui';
  import Util from '../../util'
  import  qs from "qs"
    export default {
        name: 'aboutcmp',
        components: {},
        data() {
            return {
              list:[
//                {id:1,listname:'陈在人',idcar:'法定代表人',backgroundcolor:'#e7f3fd',colorcolorfor:'#108ee9'},
//                {id:2,listname:'陈在人',idcar:'一级被授权人',backgroundcolor:'#edf6f4',colorcolorfor:'#29ab91'},
//                {id:3,listname:'陈在人',idcar:'三级被授权人',backgroundcolor:'#fff5e9',colorcolorfor:'#fc992c'},
//                {id:4,listname:'陈在人',idcar:'一级被授权人',backgroundcolor:'#edf6f4',colorcolorfor:'#29ab91'},
//                {id:5,listname:'陈在人',idcar:'一级被授权人',backgroundcolor:'#edf6f4',colorcolorfor:'#29ab91'},
//                {id:6,listname:'陈在人',idcar:'三级被授权人',backgroundcolor:'#fff5e9',colorcolorfor:'#fc992c'},
//                {id:7,listname:'陈在人',idcar:'二级被授权人',backgroundcolor:'#feeeed',colorcolorfor:'#f15a4a'},
//                {id:8,listname:'陈在人',idcar:'三级被授权人',backgroundcolor:'#fff5e9',colorcolorfor:'#fc992c'},
              ],
              idcard:1
            }
        },
        created() {
          this.idcard = this.$route.params.id;
          this.getauthorise()
        },
        methods: {
          getauthorise(){
            Api.registerApi.getauthorise(
              qs.stringify({
                aupe_parentid: this.idcard
              }),
              {Headers: {'content-type': 'application/x-www-form-urlencoded'}}).then(res => {
              if(res.code=200){
                console.log(res)
                let arr = [];
                for (let item of res.list) {
                  let _item = {
                    aupe_name: item.aupe_name, star: '法定代表人',aupe_parentname:item.aupe_parentname,
                    status: item.aupe_state,id:item.id,aupe_idcard:item.aupe_idcard
                  };
                  arr.push(_item);
                }
                this.list = arr;
                console.log(this.list)
              }
            })
          },
        }

    }
</script>
<style scoped lang="less" rel="stylesheet/less">
        .cmp{
          width: 7.2rem;
          height: 2.56rem;
          border-top:1px solid #d9d9d9;
          padding-top:0.26rem;
          padding-bottom: 0.3rem;
          background-color: #fff;
          overflow: hidden;
          margin-bottom: 0.2rem;
          .contents{
            float: left;
            width: 5.6rem;
           p{
             font-size: 0.28rem;
             color: #333;
             font-family: "微软雅黑";
             padding-bottom: 0.34rem;
           }
            ul{
              li{
                font-size: 0.21rem;
                color: #999;
                line-height: 0.4rem;
                span{
                  color: #333;
                }
              }
            }
          }
          .btn{
            position: relative;
            .openc{
              border:0;
              outline:0;
              background-color: #54bca7;
              position: absolute;
              top:0.07rem;
              right: 0.24rem;
              color: #fff;
              width: 0.54rem;
              height: 0.31rem;
              border-radius: 0.05rem;
            }
          }

        }
        .spanceclt {
          overflow: hidden;
          position: relative;
          background-color: #fff;
          width: 7.2rem;
          height: 1.25rem;
          padding-top: 0.2rem;
          margin-bottom: 0.2rem;
          .line {
            display: inline-block;
            width: 0.02rem;
            height: 0.49rem;
            background-color: #eee;
            position: absolute;
            top: 0.4rem;
            left: 50%;
          }
          .myspace {
            float: left;
            width: 50%;
            text-align: center;
            .C2-ziliao-copy {
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
            .C2-suoyoubanjian {
              font-size: 0.4rem;
              color: #666;
            }
            p {
              font-size: 0.24rem;
              color: #666;
            }
          }
        }
        .accredit{
          background-color: #fff;
          width: 7.2rem;
          display: flex;
          flex-wrap:wrap;
         .accred{
           border-bottom: 1px solid #d9d9d9;
           h5{
             width: 7.2rem;
             height: 0.95rem;
             line-height:0.95rem;
             font-size: 0.32rem;
             color: #333;
             font-weight: 400;
             font-family: "微软雅黑";
           }
         }
          .accrepeo{
            /*display: flex;*/
            /*flex-wrap:wrap;*/
            padding-bottom: 0.24rem;
            padding-left: 0.24rem;
            .peo{
              margin-top: 0.25rem;
              width: 2.02rem;
              height: 1.48rem;
              border: 1px solid #d9d9d9;
              border-radius: 0.1rem;
              /*margin-right: 0.22rem;*/
              .waite{
                font-size: 0.27rem;
                text-align: center;
                height: 0.5rem;
                line-height: 0.5rem;
              }
              img{
                width: 0.54rem;
                height: 0.54rem;
                padding:0.2rem;
                vertical-align: middle;
              }
              span{
                vertical-align: middle;
              }
            }
          }
        }
  /*.three{*/
    /*color: #fc992c;*/
    /*background-color: #fff5e9;*/
    /*font-size: 0.2rem;*/
    /*text-align: center;*/
    /*width: 2rem;*/
    /*height: 0.55rem;*/
    /*line-height:0.55rem;*/
  /*}*/
  /*.first{*/
    /*background-color: #e7f3fb;*/
    /*color: #108ee9;*/
    /*font-size: 0.2rem;*/
    /*text-align: center;*/
    /*width: 2rem;*/
    /*height: 0.55rem;*/
    /*line-height:0.55rem;*/
  /*}*/
  /*.one{*/
    /*background-color: #e9f6f4;*/
    /*color: #29ab91;*/
    /*font-size: 0.2rem;*/
    /*text-align: center;*/
    /*width: 2rem;*/
    /*height: 0.55rem;*/
    /*line-height:0.55rem;*/
  /*}*/
        /*.two{*/
          /*background-color: #feeeed;*/
          /*color: #fa5a4a;*/
          /*font-size: 0.2rem;*/
          /*text-align: center;*/
          /*width: 2rem;*/
          /*height: 0.55rem;*/
          /*line-height:0.55rem;*/
        /*}*/
</style>
