<template>
  <div id="tmpl">
    <div class="public padding-container-lr" v-for="item in list">
          <div class="title" >
            <h3>{{item.name}}</h3>
            <router-link v-bind="{to:'publicmore/'+item.channelId}">
                <span>
              查看更多
              <i class="OAIndexIcon C2-fanhui4"></i>
            </span>
            </router-link>
          </div>
          <ul class="pubcont">
            <template v-for="items in item.sub">
              <li class="publist">
                <a :href="`${items.detailUrl}`">
                  <img :src="items.imageUrls" v-if="items.imageUrls"> <p>{{items.title}}</p><br>
                  <span>{{items.time}}</span>
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
        list: [],
        result:[]
      }
    },
    created() {
      this.getnews()
    },
    methods: {
      getnews() {

        Util.cmsdao.fetchAllSubChnlNArti('2',4).then(res=>{
          let arr = [];
          for (let item of res) {
            arr.push({
              sub:item.sub,
              channelId: item.channelId,
              name: item.name,
              icon: Util.icon.getValueBySeed(item.name)
            });
          }
          this.list = arr
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

