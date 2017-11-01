<template>
  <div id="tmpl">
    <div class="public padding-container-lr" v-for="item in list">
          <div class="title" >
            <h3>{{item.displayName}}</h3>
            <!--<router-link to="/publicmore">-->
              <span @click="getMore(item)">
              查看更多
              <i class="OAIndexIcon C2-fanhui4"></i>
            </span>
            <!--</router-link>-->
          </div>
          <ul class="pubcont">
           <template v-for="item1 in list1" v-if="item.channelId ==10">
               <li class="publist">
                 <a href="http://172.16.17.83:8100/hunanzhengwu/2/10/content_13.html" v-if="item1.type==2">
                   <img :src="item1.imageUrls" v-if="item1.imageUrls"> <p>{{item1.title}}</p><br>
                   <span>{{item1.time}}</span>
                 </a>
                 <a href="http://172.16.17.83:8100/hunanzhengwu/2/10/content_12.html" v-if="item1.type==1">
                   <img :src="item1.imageUrls" v-if="item1.imageUrls"> <p>{{item1.title}}</p><br>
                   <span>{{item1.time}}</span>
                  </a>
               </li>
           </template>
            <template v-for="item2 in list2" v-if="item.channelId ==11">
              <li class="publist">
                <a href="http://172.16.17.83:8100/hunanzhengwu/2/11/content_15.html" v-if="item2.type==1">
                  <img :src="item2.imageUrls" v-if="item2.imageUrls"> <p>{{item2.title}}</p><br>
                  <span>{{item2.time}}</span>
                </a>
                <a href="http://172.16.17.83:8100/hunanzhengwu/2/11/content_14.html" v-if="item2.type==2">
                  <img :src="item2.imageUrls" v-if="item2.imageUrls"> <p>{{item2.title}}</p><br>
                  <span>{{item2.time}}</span>
                </a>
              </li>
            </template>
            <template v-for="item3 in list3" v-if="item.channelId ==12">
              <li class="publist">
                <a href="http://172.16.17.83:8100/hunanzhengwu/2/12/content_16.html" v-if="item3.type==1">
                  <img :src="item3.imageUrls" v-if="item3.imageUrls"> <p>{{item3.title}}</p><br>
                  <span>{{item3.time}}</span>
                </a>
              </li>
            </template>
          </ul>
    </div>
    <!--暂时不需要-->
    <!--<router-link to="/convenience/police">这是暂时放到这里，到时候要调到我的首页去的</router-link>-->
  </div>

</template>
<script>
  //import Publicitem from 'components/publicitem/publicitem.vue'
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import qs from "qs"

  export default {
//  components:{Publicitem},
    data() {
      return {
        list: [],
        list1: [],
      list2:[],
      list3:[],
      }
    },
    created() {
      this.getnews()
    },
    methods: {
      getnews() {
        Api.getnewsApi.getnews(
          {
            content: btoa(Util.other.Utf8ToUnicode(JSON.stringify({
              channelId: "2",
              start: "0",
              count: "99",
              grantUserName: "xxld",
              userName: "xxld",
              site: "hunanzhengwu"
            })))
          },
          {headers: {'content-type': 'application/x-www-form-urlencoded'}}
        ).then(res => {
          this.list = res.data

        })
        Api.getnewsApi.getnewsinfo(
          {
            content: btoa(Util.other.Utf8ToUnicode(JSON.stringify({
              channelId: "10",
              start: "0",
              count: "99",
              grantUserName: "xxld",
              userName: "xxld",
              site: "hunanzhengwu"
            })))
          },
          {headers: {'content-type': 'application/x-www-form-urlencoded'}}
        ).then(res => {
          if (res.resp_code == "1") {
            console.log(res)
            this.list1 = res.data
          }
//        else if(res.code=="200"){
//          this.$router.push("/register/registerinfo");
//        }
        })
        Api.getnewsApi.getnewsinfo(
          {
            content: btoa(Util.other.Utf8ToUnicode(JSON.stringify({
              channelId: "11",
              start: "0",
              count: "99",
              grantUserName: "xxld",
              userName: "xxld",
              site: "hunanzhengwu"
            })))
          },
          {headers: {'content-type': 'application/x-www-form-urlencoded'}}
        ).then(res => {
          if (res.resp_code == "1") {
//            console.log(res.data)
            this.list2 = res.data
          }
//        else if(res.code=="200"){
//          this.$router.push("/register/registerinfo");
//        }
        })
        Api.getnewsApi.getnewsinfo(
          {
            content: btoa(Util.other.Utf8ToUnicode(JSON.stringify({
              channelId: "12",
              start: "0",
              count: "99",
              grantUserName: "xxld",
              userName: "xxld",
              site: "hunanzhengwu"
            })))
          },
          {headers: {'content-type': 'application/x-www-form-urlencoded'}}
        ).then(res => {
          if (res.resp_code == "1") {
//            console.log(res.data)
            this.list3 = res.data
          }
//        else if(res.code=="200"){
//          this.$router.push("/register/registerinfo");
//        }
        })
      },
      getMore(item){
        if(item.channelId==10){
          this.$router.push("/publicmore")
        }else if(item.channelId==11){
          this.$router.push("/publicmore1")
        }
        else if(item.channelId==12){
          this.$router.push("/publicmore2")
        }
      }
    }
  }
</script>
<style scoped lang="less">
  #tmpl {
    background-color: #f2f2f2;
  .public {
    width: 7.2rem;
    background-color: #fff;
    overflow: hidden;
    padding-right: 0.24rem;
    margin-top: 0.24rem;
    .title{
      overflow: hidden;
      position: relative;
      h3{
        float: left;
        font-size: 0.34rem;
        color: #000;
        font-weight: 400;
        font-family: "微软雅黑";
        padding-top: 0.34rem;
      }
      span{
        position: absolute;
        font-size: 0.23rem;
        font-family: "微软雅黑";
        color: #999;
        top: 0.45rem;
        right: 0.24rem;
        .C2-fanhui4{
          font-style: normal;
          font-size: 0.21rem;
          vertical-align: 5%;
          color: #ccc;
        }
      }
    }
  }
    .pubcont{
      margin-top: 0.26rem;
      overflow: hidden;
      position: relative;
        .publist{
          margin-top: 0.15rem;
          position: relative;
          font-size: 0.27rem;
          color: #666;
          overflow: hidden;
          padding-bottom: 0.3rem;
          img{
            float: right;
            width: 1.97rem;
            height: 1.3rem;
            padding-left: .4rem
          }
          p{
            white-space:nowrap;
            text-overflow:ellipsis;
            width:4.3rem;
            overflow: hidden;
          }
          span{
            display: block;
            padding-top: 0.1rem;
            font-family: "微软雅黑";
            color: #dcdcdc;
          }
        }
      .publist:first-child{
        border-bottom: 1px solid #eee;
      }
    }
  }

</style>

