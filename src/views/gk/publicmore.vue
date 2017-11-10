<template>
  <div id="tmpl">
    <div class="public padding-container-lr">
      <ul class="pubcont">
        <template v-for="item in result">
          <li class="publist">
            <a :href="`${item.detailUrl}`">
              <img :src="item.imageUrls" v-if="item.imageUrls"> <p>{{item.title}}</p><br>
              <span>{{item.time}}</span>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>

</template>
<script>
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import qs from "qs"

  export default {
    data() {
      return {
        result: [],
      }
    },
    created() {
      this.getnews()
    },
    methods: {
      getnews( ) {
        this.id = this.$route.params.id;
        Util.cmsdao.fetchAllSubChnlNArti('2',4).then(res=>{
         for(let i=0;i<res.length;i++){
            if(this.id==res[i].channelId){
              this.result=res[i].sub
              console.log(this.result)
            }
         }
        })
      },

    }
  }
</script>
<style scoped lang="less">
  #tmpl {
    background-color: #ffffff;
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

