<template>
  <div id="tmpl">
    <div id='cate'>
      <ul class="news" v-bind="{style:'width:'+ulWidth+'px'}" >
        <li v-for="(item,index) in list" :key='index' @click="getnews(item.cmsId)" id="conven" :class="item.cmsId==selectedId?'li active':'li'">{{item.name}}</li>
      </ul>
    </div>
    <!--<router-link to="/publicitem/information">-->
      <!--<i class="C2-xinjian OAIndexIcon"></i>-->
    <!--</router-link>-->
    <div class="contents">
      <mt-swipe :auto="4000" >
        <mt-swipe-item v-for="(itemss,index) in listsfor">
          <a href="javascript:void(0)">
            <img :src="itemss.imageUrls">
           <div class="titlename">
             <p>{{itemss.title}}</p>
           </div>
          </a>
        </mt-swipe-item>
      </mt-swipe>

      <div class="public padding-container-lr" v-for="items in lists">
        <ul class="pubcont">
          <!--<template v-for="items in items.sub">-->
            <li class="publist">
              <a :href="`${items.detailUrl}`">
                <p>{{items.title}}</p><br>
                <span>{{format(items.time,'yyyy-MM-dd')}}</span>
              </a>
            </li>
          <!--</template>-->
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
        list: [
          {id: '1', name: '湖南政务'}, {id: '2', name: '长沙新闻'}, {id: '3', name: '岳阳动态'}, {id: '4', name: '常德牛粉'}, {
            id: '5', name: '川麻辣烫'
          }, {id: '6', name: '汉热干面'}, {id: '6', name: '汉热干面'}, {id: '6', name: '汉热干面'}
        ],
        result: [],
        ulWidth: 750,
        lists: [],
        selectedId: '363',
        listsfor:[]

      }
    },
    created() {
      this.selectedId = 363
    },
    mounted() {
      this.getnews(363)

    },
    methods: {
      format,
      getnews(cmsId) {
        // 0.0 如果方法的cateid参数没有传递，则默认是0,代表获取所有新闻数据
        cmsId = cmsId || 0;
        this.selectedId = cmsId;
        let box = document.getElementById('conven');
        var w = box.clientWidth;
        var count = this.list.length + 1;
        this.ulWidth = (w + 72) * count;
        Api.opacityApi.publict().then(res => {
         this.list=res
        })
        Util.cmsdao.fetchAllSubChnlNArti(`${cmsId}`, 2).then(res => {
          console.log(res)
         if(res){
           let arrn = [];
           let arrs=[]
           for (let items of res) {
             if(items.imageUrls){
               arrs.push({
                 detailUrl:items.detailUrl,
                 title: items.title,
                 time:items.time,
                 imageUrls:items.imageUrls
               })
               this.listsfor=arrs
               console.log(arrs)
             }else{
               arrn.push({
                 detailUrl:items.detailUrl,
                 title: items.title,
                 time:items.time
               });
             }
             this.lists=arrn
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
    height: 1000px;
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
        position: fixed;
        li {
          width: 0.96rem;
          list-style: none;
          display: inline-block;
          color: #222;
          font-size: 0.24rem;
          margin-right: 0.72rem;
          height:0.62rem;
        }
        li.active {
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
        margin-top: 0.26rem;
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

