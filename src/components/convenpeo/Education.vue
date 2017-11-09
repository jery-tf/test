<template>
  <div class="bhi">
    <div class="range" v-for="item in datainfoto">
      <h6>{{item.name}}</h6>
      <template v-for="items in item.sub">
        <div class="allbtn">
          <a href="javascript:void(0)" class="btn" :class="items.name.length>=6? 'fullclass':'otherclass'"
             @click="popupup(items.channelId)">
            <i :class="`OAIndexIcon ${item.icon}`" class="oson"></i>{{items.name}}</a>
        </div>
      </template>
    </div>
    <mt-popup v-model="popupVisible" closeOnClickModal="false" class="modal" pop-transition="popup-fade">
      <h3><i class="C2-guanbi1 OAIndexIcon" @click="close()"></i>便民列表</h3>
      <ul>
        <template v-for="rig in lists">
          <li><i class="OAIndexIcon C2-ZHicon-"></i>
            <a :href="`${rig.detailUrl}`">{{rig.briefContent}}</a></li>
        </template>
      </ul>
    </mt-popup>
  </div>
</template>
<script>
  import {Popup} from 'mint-ui'
  import Popupname from './popupname.vue'
  import {Toast} from 'mint-ui';
  import Util from '../../util'

  export default {
    data() {
      return {
        msg: "",
        list: [],
        lists: [],
        clicked: false,
        showModel: false,
        popupVisible: false,
        showModel: false
      }
    },
    components: {
      Popupname
    },
    props: ['datainfoto', 'liClickFun', 'selectedId', 'datainfolist'],
    created() {
    },
    methods: {
      close() {
        this.popupVisible = !this.popupVisible
      },
      popupup(items) {
        Util.cmsdao.fetchAllSubChnlNArti(`${items}`, 2).then(res => {
          if(res==null){
            Toast('功能正在开发中，敬请期待')
            this.popupVisible = false
            this.lists=''
            return
          }
          this.popupVisible = true
          let arr = [];
          for (let item of res) {
            arr.push({
              detailUrl: item.detailUrl,
              briefContent: Util.icon.getstr(item.briefContent)
            });
          }
          this.lists = arr
        })


      }
    },
  }
</script>
<style lang="less" scoped>
  .bhi {
    position: relative;
    .range {
      padding: 0.26rem 0.24rem;
      margin-top: 0.24rem;
      background-color: #fff;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      h6 {
        font-size: 0.24rem;
        color: #333;
        font-weight: 400;
        padding-bottom: 0.4rem;
        font-family: "微软雅黑";
        width: 4.59rem;
      }
      .allbtn {
        text-align: center;
        .btn {
          display: inline-block;
          border: 0;
          outline: 0;
          border-radius: 0.1rem;
          height: 1.18rem;
          line-height: 1.18rem;
          border: 1px solid #cecece;
          background-color: #fff;
          margin-bottom: 0.24rem;
          font-size: 0.24rem;
          color: #333;
        }
      }
    }
    .fullclass {
      width: 5rem;
    }
    .otherclass {
      width: 2.42rem;
    }
    .modal {
      width: 6rem;
      height: 7.14rem;
      h3 {
        font-weight: 400;
        text-align: center;
        font-size: 0.32rem;
        color: #333;
        height: 0.92rem;
        line-height: 0.92rem;
        border-bottom: 1px solid #d9d9d9;
        .C2-guanbi1 {
          font-size: 0.32rem;
          position: absolute;
          top: 0.26rem;
          left: 0.26rem;
        }
      }
      ul {
        margin-top: 0.38rem;
        margin-left: 0.26rem;
        margin-right: 0.53rem;
        font-family: "微软雅黑";
        li {
          vertical-align: bottom;
          padding-left: 0.22rem;
          font-size: 0.24rem;
          color: #666;
          line-height: 0.8rem;
          position: relative;
          .C2-ZHicon- {
            font-size: 0.07rem;
            display: inline-block;
            position: absolute;
            top: 0.28rem;
            left: 0;
          }
          a {
            text-overflow: ellipsis;
            width: 4.3rem;
            overflow: hidden;
            height: 1rem;
            display: inline;
          }
        }
      }
    }
    .oson {
      margin-right: 0.1rem;
    }
  }

</style>

