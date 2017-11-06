/**
* Created by Administrator on 2017/10/16.
*/

<template>
  <div class="tmp">
    <div class="theader box-margin-top" v-for="item in list" v-if="list">
      <div class="images-t">
        <i :class="`OAIndexIcon ${item.classn}`" :style="`background:${item.backgroundcolor}`"></i>
      </div>
      <div class="contents">
        <p>{{item.dictdataValue}}</p>
        <span>授权期限:{{aupe_termsta}}-{{aupe_termend}}</span>
      </div>
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
        aupe_termend:'',
        id: 1,
        arr: [],
        list: [
//          {classn:'C2-ertongshouyang',backgroundcolor:'#29ab91',title:'结婚生育',datatime:'2017-02-20-2017-06-15'},
//          {classn:'C2-jiaoyu',backgroundcolor:'#fc992c',title:'教育培训',datatime:'2017-02-20-2017-06-15'},
//          {classn:'C2-weibiaoti9',backgroundcolor:'#108ee9',title:'求职执业',datatime:'2017-02-20-2017-06-15'},
//          {classn:'C2-jiuyifuwu',backgroundcolor:'#f15a4a',title:'就医保健',datatime:'2017-02-20-2017-06-15'},
//          {classn:'C2-weibiaoti9',backgroundcolor:'#108ee9',title:'求职执业',datatime:'2017-02-20-2017-06-15'},
//          {classn:'C2-jiuyifuwu',backgroundcolor:'#f15a4a',title:'就医保健',datatime:'2017-02-20-2017-06-15'},
        ]
      }
    },
    created() {
      this.id = this.$route.params.id;
      this.aupe_idcard = this.$route.params.aupe_idcard
      this.aupe_termsta = this.$route.params.aupe_termsta
      this.aupe_termend = this.$route.params.aupe_termend
      console.log(this.aupe_termend)
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
                  arrN.push(arr[i])
                }
              }
              this.list = arrN
              console.log(this.list)
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
      border-bottom: 1px solid #d9d9d9;
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
  }
</style>
