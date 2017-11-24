<template>
  <div id="tmpl">
    <div id='cate'>
      <ul class="news" v-bind="{style:'width:'+ulWidth+'px'}" >
        <li v-for="(item,index) in list" :key='index' @click="getnews(item.cmsId)" id="conven" ><span :class="item.cmsId==selectedId?'span active':'span'">{{item.name}}</span></li>
      </ul>
    </div>
    <div class="contents">
      <mt-swipe :auto="4000" v-show="isshow">
        <mt-swipe-item v-for="(itemss,index) in listsfor">
          <a :href="`${itemss.detailUrl}`">
            <img :src="itemss.imageUrls">
           <div class="titlename">
             <p>{{itemss.title}}</p>
           </div>
          </a>
        </mt-swipe-item>
      </mt-swipe>

      <div class="public padding-container-lr" v-for="items in lists">
        <ul class="pubcont" >
            <li class="publist">
              <a :href="`${items.detailUrl}`">
                <p>{{items.title}}</p><br>
                <span>{{format(items.time,'yyyy-MM-dd')}}</span>
              </a>
            </li>
        </ul>
      </div>
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
  import {Swipe, SwipeItem} from 'mint-ui';
  import { format} from '@/util/ctime.js'
  export default {
    data() {
      return {
        list: [],
        result: [],
        ulWidth: 750,
        lists: [],
        selectedId: '363',
        listsfor:[],
        isshow:false,

      }
    },
    created() {
      this.selectedId =  Util.other.getLocalStorage('inforid')
    },
    mounted() {
      this.getnews( this.selectedId||363)

    },
    methods: {
      format,
      getnews(cmsId) {
        cmsId = cmsId || 0;
        Util.other.setLocalStorage('inforid',cmsId);
        this.selectedId = cmsId;
        Api.opacityApi.publict().then(res => {
          this.list=res
          let box = document.getElementById('conven')||0;
          var w = box.clientWidth;
          var count = this.list.length + 1;
          this.ulWidth = (w + 72) * count;
        })
        Util.cmsdao.fetchAllSubChnlNArti(`${cmsId}`, 2).then(res => {
//          console.log(res)
         if(res){
           let arrn = [];
           let arrs=[]
           for (let items of res) {
             if(items.imageUrls){
               this.isonshow=true
               arrs.push({
                 detailUrl:items.detailUrl,
                 title: items.title,
                 time:items.time,
                 imageUrls:items.imageUrls
               })
               this.listsfor=arrs
             }else{
               this.isonshow=true
               arrn.push({
                 detailUrl:items.detailUrl,
                 title: items.title,
                 time:items.time
               });
               this.lists=arrn
             }
             }
          if(arrs==''){
             this.isshow=false
          }
          else{
            this.isshow=true
          }
         }
        })
      },
    }
  }
</script>
<style  lang="less">
  #tmpl {
    background-color: #fff;
    position: relative;
    #cate {
      overflow-x: auto;
      background-color: #fff;
      height: 0.7rem;
      line-height: 0.7rem;
      ul {
        margin: 0px;
        padding-left: 0.3rem;
        overflow-x: hidden;
        height: 0.7rem;
        background-color: #fff;
        /*position: fixed;*/
        z-index: 999;
        li {
          width: 0.96rem;
          list-style: none;
          display: inline-block;
          color: #222;
          font-size: 0.24rem;
          margin-right: 0.72rem;
          height:0.62rem;
        }
        span.active {
          color: #13B7F6;
          border-bottom: 2px solid #13B7F6;
          height:0.62rem;

        }
      }
    }
    .C2-xinjian {
      font-size: 0.26rem;
      position: absolute;
      top: 0.25rem;
      right: 0.25rem;
    }
    .contents {
      height: 500px;
      .mint-swipe {
        width: 7.2rem;
        height: 3.2rem;
        .mint-swipe-items-wrap {
          a {
            width: 7.2rem;
            height: 3.2rem;
            display: inline-block;
            position: relative;
            img {
              width: 100%;
              height: 100%;
            }
            .titlename{
              background-color: rgba(0,0,0,0.3);
              padding-left: 0.26rem;
              height: 0.74rem;
              line-height:0.74rem;
              font-size: 0.28rem;
              color: #fff;
              width: 7.2rem;
              position: absolute;
              bottom:0;
              left:0;
            }

          }

        }
        .mint-swipe-indicators{
          position: absolute;
          bottom:10%;
          right:0!important;
          left:0;
          .mint-swipe-indicator{
            background-color: red;
        }
        }
      }
    }

    .public {
      width: 7.2rem;
      background-color: #fff;
      overflow: hidden;
      padding-right: 0.3rem;
      margin-top: 0.24rem;
      .pubcont {
        overflow: hidden;
        position: relative;
        .publist {
          margin-top: 0.15rem;
          position: relative;
          font-size: 0.27rem;
          color: #666;
          overflow: hidden;
          padding-bottom: 0.3rem;
          border-bottom: 1px solid #eee;
          img {
            float: right;
            width: 1.97rem;
            height: 1.3rem;
            padding-left: .4rem
          }
          p {
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 6.3rem;
            overflow: hidden;
          }
          span {
            display: block;
            font-family: "微软雅黑";
            color: #aaa;
          }
        }
      }
    }
  }

</style>

