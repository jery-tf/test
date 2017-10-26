<template>
  <div id="tmpl">
    <div class="public padding-container-lr">
      <ul class="pubcont">
        <template v-for="item3 in list3">
          <li class="publist">
            <a href="http://172.16.17.83:8100/hunanzhengwu/2/12/content_16.html" v-if="item3.type==1">
              <img :src="item3.imageUrls" v-if="item3.imageUrls"> <p>{{item3.title}}</p><br>
              <span>{{item3.time}}</span>
            </a>
          </li>
        </template>
      </ul>
    </div>

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

        list3: [],
      }
    },
    created() {
      this.getnews()
    },
    methods: {
      getnews() {

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
            this.list3 = res.data
          }
        })
      },

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

