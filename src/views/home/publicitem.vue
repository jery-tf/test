<template>
  <div id="tmpl">
    <div id='cate'>
      <ul class="news" v-bind="{style:'width:'+ulWidth+'px'}">
        <li v-for="(item,index) in list" :key='index' @click="getnews(item.id)" id="conven">{{item.name}}</li>
      </ul>
    </div>
    <router-link to="/publicitem/information">
      <i class="C2-xinjian OAIndexIcon"></i>
    </router-link>
    <div class="contents">
      <mt-swipe :auto="4000" :show-indicators="false">
        <mt-swipe-item>
          <a href="javascript:void(0)">
            <img src="../../assets/img/1.jpg" alt="">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:void(0)">
            <img src="../../assets/img/2.jpg" alt="">
          </a>
        </mt-swipe-item>
        <mt-swipe-item>
          <a href="javascript:void(0)">
            <img src="../../assets/img/3.jpg" alt="">
          </a>
        </mt-swipe-item>
      </mt-swipe>

      <div class="public padding-container-lr" v-for="items in lists">
        <ul class="pubcont">
          <template v-for="items in items.sub">
            <li class="publist">
              <a :href="`${items.detailUrl}`">
                <img :src="items.imageUrls" v-if="items.imageUrls">
                <p>{{items.title}}</p><br>
                <span>{{items.time}}</span>
              </a>
            </li>
          </template>
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
        lists: []
      }
    },
    created() {

    },
    mounted() {
      this.getnews()
    },
    methods: {
      getnews(cateid) {
        // 0.0 如果方法的cateid参数没有传递，则默认是0,代表获取所有新闻数据
        cateid = cateid || 0;
        let box = document.getElementById('conven');
        var w = box.clientWidth;
        console.log(w)
        var count = this.list.length + 1;
        this.ulWidth = (w + 72) * count;
        console.log(this.ulWidth)
        //旧版公开请求promise参数
        Util.cmsdao.fetchAllSubChnlNArti('2', 4).then(res => {
          let arr = [];
          for (let item of res) {
            arr.push({
              sub: item.sub,
              channelId: item.channelId,
              name: item.name,
              icon: Util.icon.getValueBySeed(item.name)
            });
          }
          this.lists = arr
        })
      },
    }
  }
</script>
<style scoped lang="less">
  #tmpl {
    background-color: #fff;
    position: relative;
    height: 1000px;
    #cate {
      width: 6.6rem;
      max-width: 6.6rem;
      overflow-x: auto;
      background-color: #fff;
      height: 0.7rem;
      line-height: 0.7rem;
      ul {
        margin: 0px;
        padding-left: 0.3rem;
        overflow-x: hidden;
        li {
          width: 0.96rem;
          list-style: none;
          display: inline-block;
          color: #222;
          font-size: 0.24rem;
          margin-right: 0.72rem;
        }
        li:hover {
          color: #13B7F6;
          border-bottom: 2px solid #13B7F6;
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
            img {
              width: 100%;
              height: 100%;
            }
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
            /*white-space: nowrap;*/
            /*text-overflow: ellipsis;*/
            /*width: 4.3rem;*/
            overflow: hidden;
          }
          span {
            display: block;
            padding-top: 0.1rem;
            font-family: "微软雅黑";
            color: #dcdcdc;
          }
        }
      }
    }
  }

</style>

