/**
* Created by wyg on 2017/9/24.
*/

<template>
  <div class="box-margin-top ">
    <div class="padding-container-lr convenf" v-show="alltrue">
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
    <div class=" padding-container-lr convenf" v-for="item in list" v-if="item.cmsId==348">
      <div>
        <h6>{{item.name}}</h6>
        <ul>
          <li v-for="items in item.child" class="wid">
            <a :href="`${items.url}`">
              <i :class="`OAIndexIcon C2-${items.iconfont}`" :style="`color:${items.iconColor}`"></i>
              <p>{{items.name}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class=" padding-container-lr convenf" v-for="item in list" v-if="item.cmsId==336">
      <div>
        <h6>{{item.name}}</h6>
        <ul>
          <li v-for="items in item.child" class="wid">
            <router-link v-bind="{to:'/convenience/grades/'+items.cmsId}">
              <i :class="`OAIndexIcon  C2-${items.iconfont}`" :style="`color:${items.iconColor}`"></i>
              <p>{{items.name}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="padding-container-lr convenf" v-for="item in list" v-if="item.cmsId==338">
      <div>
        <h6>{{item.name}}</h6>
        <ul>
          <li v-for="items in item.child" class="fle">
            <router-link v-bind="{to:'/convenience/facilities/'+items.cmsId}">
              <i :class="`OAIndexIcon  C2-${items.iconfont}`":style="`color:${items.iconColor}`"></i>
              <p>{{items.name}}</p>
            </router-link>
          </li>
          <li class="fle"></li>
        </ul>
      </div>
    </div>
    <div class="padding-container-lr convenf" v-for="item in list" v-if="item.cmsId==337">
      <div>
        <h6>{{item.name}}</h6>
        <ul>
          <li v-for="itemss in listss" class="coun">
            <div class="left" :style="`background:${itemss.backgroundcolor}`">
              <i class="OAIndexIcon  C2-dianhua"></i>
            </div>
            <div class="right">
              <a :href="`tel:${itemss.subtitle}`">
                <p>{{itemss.subtitle}}</p>
                <span>{{itemss.title}}</span>
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
  import { Indicator } from 'mint-ui';
  export default {
    name: 'forpeople',
    components: {},
    data() {
      return {
        list: [],
        listss: [],
        alltrue:false,
        onpayfor:[],
        oncheckser:[],
        onplaycmp:[]
      }
    },
    created() {
      Indicator.open();
      this.getinfonews()
    },
    methods: {
      getinfonews() {
       Api.opacityApi.forpeo().then(res => {
         console.log(res)
          this.alltrue=true
          Indicator.close();
          if (res == null) {
            this.list = ''
            return
          }
          let arr = [];
          for (let item of res) {
            arr.push({
              child: item.child,
              cmsId: item.cmsId,
              name: item.name,
              icon: item.icon,
              iconColor:item.iconColor
            });
          }
         this.list = arr
         Util.cmsdao.fetchAllSubChnlNArti('304', 2).then(res => {
           let arrn = [];
           for (let itemss of res) {
             arrn.push({
               backgroundcolor: Util.icon.getBgcBySeed(itemss.title),
                subtitle: itemss.subtitle,
                  title: itemss.title,
             });
           }
          this.listss=arrn
         })
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
        p {
          margin-top: 0.18rem;
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
