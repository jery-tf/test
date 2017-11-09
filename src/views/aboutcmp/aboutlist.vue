/**
* Created by Administrator on 2017/10/16.
*/

<template>
  <div class="tmp">
    <div class="theader box-margin-top" v-for="item in list" v-if="list.length>0">
      <div class="images-t">
        <i :class="`OAIndexIcon ${item.classn}`" :style="`background:${item.backgroundcolor}`"></i>
      </div>
      <div class="contents">
        <p>{{item.dictdataValue}}</p>
        <span>授权期限:{{aupe_termsta}}-{{aupe_termend}}</span>
      </div>
    </div>
    <div class="noconsult" v-if="list.length==0">
      暂无授权事项
    </div>
  </div>
</template>

<script>
  import Api from '../../api'
  import {Swipe, SwipeItem, Toast} from 'mint-ui';
  import Util from '../../util'
  import qs from "qs"

  export default {
    name: 'aboutlist',
    components: {},
    data() {
      return {
        aupe_termsta: '',
        aupe_termend: '',
        id: 1,
        arrN: [],
        list: [],
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.aupe_idcard = this.$route.params.aupe_idcard
      this.aupe_termsta = this.$route.params.aupe_termsta
      this.aupe_termend = this.$route.params.aupe_termend
      this.getunicon()
    },
    methods: {
      getunicon() {
        //获得哪几个授权人
        Api.registerApi.getunicon(
          qs.stringify({
            aupe_parentid: 123456,
            aupe_idcard: this.aupe_idcard
          }),
          {Headers: {'content-type': 'application/x-www-form-urlencoded'}}).then(res => {
          if (res.code = 200) {
            let str = res.list.aupe_zt.split(',')
            //获取授权人的授权事项
            Api.registerApi.getapprove().then(res => {
              let arr = res.法人分类
              let arrN = []
              for (let i = 0; i < arr.length; i++) {
                if (str.indexOf(arr[i].dictdataName) != -1) {
                  this.isconsult = true
                  arrN.push(arr[i])
                }
              }
              this.list = arrN
              console.log(arrN.length)
            })
          }
        })
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .tmp {
    background-color: #fff;
    .theader {
      background-color: #fff;
      width: 6.64rem;
      height: 1.34rem;
      padding-top: 0.26rem;
      /*line-height: 1.34rem;*/
      border-top: 1px solid #d9d9d9;
      margin: 0 0.28rem;
      .images-t {
        height: 1.34rem;
        margin-right: 0.28rem;
        float: left;
        .OAIndexIcon {
          display: inline-block;
          width: 0.8rem;
          height: 0.81rem;
          line-height: 0.81rem;
          border-radius: 50%;
          /*background-color: deeppink;*/
          text-align: center;
          font-size: 0.4rem;
          color: #fff;
        }
      }
      .contents {
        float: left;
        p {
          font-size: 0.28rem;
          color: #333;
          font-family: "微软雅黑";
        }
        span {
          font-size: 0.21rem;
          color: #aaa;
          font-family: "微软雅黑";
        }
      }
    }
    .noconsult {
      text-align: center;
      width: 7.2rem;
      height: 2rem;
      line-height: 2rem;
    }
  }
</style>
