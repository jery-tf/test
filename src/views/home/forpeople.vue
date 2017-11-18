/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="box-margin-top ">
    <div class="padding-container-lr convenf">
      <h6>互动交流</h6>
      <ul>
        <li class="fle">
          <i class="OAIndexIcon  C2-xinwenfabuhui-"></i>
          <p>新闻发布会</p>
        </li>
        <li class="fle">
          <i class="OAIndexIcon  C2-tiaocha"></i>
          <p> 调查征集</p>
        </li>
        <li class="fle">
          <i class="OAIndexIcon  C2-xinxiang"></i>
          <p>省长信箱</p>
        </li>
        <li class="fle">
          <i class="OAIndexIcon  C2-hangzhengwenti"></i>
          <p>我要问政</p>
        </li>
      </ul>
    </div>
    <div class="padding-container-lr convenf">
      <h6>网上支付</h6>
      <ul>
        <li class="fle">
          <i class="OAIndexIcon  C2-shebao"></i>
          <p>社保缴费</p>
        </li>
        <li class="fle">
          <i class="OAIndexIcon  C2-yinxingqiazhifu"></i>
          <p>教育缴费</p>
        </li>
        <li class="fle">
          <i class="OAIndexIcon C2-jiaotongfakuanjiaofacopy"></i>
          <p>交通罚款</p>
        </li>
        <li class="fle"></li>
      </ul>
    </div>
    <div class=" padding-container-lr convenf" v-for="item in list" v-if="item.channelId==297">
      <div>
        <h6>{{item.name}}</h6>
        <ul>
          <li v-for="items in item.sub" class="wid">
            <i class="OAIndexIcon  C2-shebao"></i>
            <p>{{items.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="padding-container-lr convenf" v-for="item in list" v-if="item.channelId==305">
      <div>
        <h6>{{item.name}}</h6>
        <ul >
            <li v-for="items in item.sub" class="fle">
              <router-link v-bind="{to:'/convenience/facilities/'+items.channelId}">
              <i class="OAIndexIcon  C2-hangzhengwenti"></i>
              <p>{{items.name}}</p>
              </router-link>
            </li>
            <li class="fle"></li>
        </ul>
      </div>
    </div>
    <div class="padding-container-lr convenf" v-for="item in list" v-if="item.channelId==304">
      <div>
        <h6>{{item.name}}</h6>
        <ul>
          <li v-for="items in listss" class="coun" >
            <div class="left" :style="`background:${items.backgroundcolor}`">
              <i class="OAIndexIcon  C2-dianhua"></i>
            </div>
            <div class="right">
              <a :href="`tel:${items.subtitle}`">
                <p>{{items.subtitle}}</p>
                <span>{{items.title}}</span>
              </a>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>

</template>
<script>
  import LeftView from 'components/convenpeo/LeftView.vue'
  import Education from 'components/convenpeo/Education.vue'
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import qs from "qs"
  import {Toast} from 'mint-ui';

  export default {
    name: 'forpeople',
    components: {},
    data() {
      return {
        list: [],
        listss:[]
      }
    },
    created() {
      this.getinfonews()
    },
    methods: {
      getinfonews() {
        Util.cmsdao.fetchAllSubChnlNArti('296', 4).then(res => {
          console.log(res)
          if (res == null) {
            this.list = ''
            return
          }
          let arr = [];
          for (let item of res) {
            arr.push({
              sub: item.sub,
              channelId: item.channelId,
              name: item.name,
            });
          }
          this.list = arr
          this.lists = arr[2].sub
          let arrn=[]
          for(let items of this.lists){
            arrn.push({
              backgroundcolor:Util.icon.getBgcBySeed(items.title),
              subtitle:items.subtitle,
              title:items.title
            })
          }
          this.listss=arrn
        })
      }

    }

  }
</script>

<style lang="less" rel="stylesheet/less">
  .convenf {
    background-color: #fff;
    padding-top: 0.3rem;
    padding-bottom: 0.24rem;
    margin-bottom: 0.18rem;

    .C2-xinwenfabuhui-, .C2-yinxingqiazhifu {
      color: #29ab91;
    }
    .C2-tiaocha, .C2-jiaotongfakuanjiaofacopy {
      color: #fc992c;
    }
    .C2-xinxiang {
      color: #f15a5a;
    }
    .C2-hangzhengwenti, .C2-shebao {
      color: #108ee9;
    }
    h6 {
      margin-bottom: 0.52rem;
      line-height: 1;
      font-size: 0.32rem;
      color: #000;
      font-weight: 400;
      border-left: 3px solid #29a1f7;
      padding-left: 0.12rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      .fle {
        flex: 1;
        font-size: 0.24rem;
        text-align: center;
        .OAIndexIcon {
          font-size: 0.57rem;
        }
        p {
          margin-top: 0.18rem;
        }
      }
      .wid {
        font-size: 0.24rem;
        text-align: center;
        width: 25%;
        margin-bottom: 0.5rem;
        .OAIndexIcon {
          font-size: 0.57rem;
        }
      }
      .coun {
        font-size: 0.24rem;
        width: 50%;
        margin-bottom: 0.5rem;
        position: relative;
        .OAIndexIcon {
          font-size: 0.4rem;
          color: #fff;
        }
        .left {
          border-radius: 50%;
          text-align: center;
          width: 0.6rem;
          height: 0.6rem;
          line-height: 0.7rem;
          position: absolute;
          top: 0.2rem;
          left: 0;
        }
        .right {
          margin-left: 0.76rem;
          p {
            font-size: 0.33rem;
            margin-bottom: 0.16rem;
          }
          span {
            font-size: 0.21rem;
            color: #666;
          }
        }
      }
    }

  }
</style>
