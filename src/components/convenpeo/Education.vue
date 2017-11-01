<template>
  <div class="bhi">
    <div class="range"  v-for="item in datainfoto"  >
      <h6>{{item.name}}</h6>
      <div class="allbtn" v-for="(item1,index) in datainfolist" :key="index"   v-if="item.channelId==21">
        <!--<input type="button" v-model="item1.name" class="btn" :class="item1.name.length>=6? 'fullclass':'otherclass'" @click="popupup(item1)">-->
        <a href="javascript:void(0)"class="btn" :class="item1.name.length>=6? 'fullclass':'otherclass'" @click="popupup(item1)">
          <i></i>{{item1.name}}</a>
      </div>
    </div>
    <mt-popup v-model="popupVisible" closeOnClickModal="false" class="modal"  pop-transition="popup-fade">
     <h3> <i class="C2-guanbi1 OAIndexIcon" @click="close()"></i>便民列表</h3>
      <ul>
        <li><i class="OAIndexIcon C2-ZHicon-"></i><a href="http://hnzwfwcms.s1.natapp.cc/hunanzhengwu/3/14/21/24/content_17.html">收费政策</a></li>
        <li><i class="OAIndexIcon C2-ZHicon-"></i><a href="http://hnzwfwcms.s1.natapp.cc/hunanzhengwu/3/14/21/24/content_18.html">入园政策</a></li>
        <li><i class="OAIndexIcon C2-ZHicon-"></i><a href="http://hnzwfwcms.s1.natapp.cc/hunanzhengwu/3/14/21/24/content_19.html">幼儿园信息</a></li>
        <li><i class="OAIndexIcon C2-ZHicon-"></i><a href="http://hnzwfwcms.s1.natapp.cc/hunanzhengwu/3/14/21/24/content_20.html">办事指南</a></li>
        <li><i class="OAIndexIcon C2-ZHicon-"></i><a href="http://hnzwfwcms.s1.natapp.cc/hunanzhengwu/3/14/21/24/content_21.html">异地剩余费用报账</a></li>
      </ul>
    </mt-popup>
  </div>
</template>
<script>
  import { Popup } from 'mint-ui'
  import Popupname from './popupname.vue'
  import {Toast} from 'mint-ui';
  export default {
    data() {
      return {
        msg: "",
        list: [],
        list1:[],
        clicked: false,
        showModel:false,
        popupVisible:false,
        showModel:false
      }
    },
    components:{
      Popupname
    },
    props: ['datainfoto', 'liClickFun', 'selectedId','datainfolist'],
    created() {
    },
    methods: {
      close(){
        this.popupVisible=!this.popupVisible
      },
      popupup(item1){
        if(item1.channelId=="24"){
          this.popupVisible=true
          console.log(this.showModel)
        }else{
          alert("功能正在开发中，敬请期待")
        }
  }
    },
  }
</script>
<style lang="less" scoped>
  .bhi{
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
      width: 4.59rem;
    }
    .otherclass {
      width: 2.22rem;
    }
    .modal{
      width: 6rem;
      height: 7.14rem;
      h3{
        font-weight: 400;
        text-align: center;
        font-size: 0.32rem;
        color: #333;
        height: 0.92rem;
        line-height: 0.92rem ;
        border-bottom: 1px solid #d9d9d9;
        .C2-guanbi1{
          font-size: 0.32rem;
          position: absolute;
          top:0.26rem;
          left: 0.26rem;
        }
      }
      ul{
        margin-top: 0.38rem;
        margin-left: 0.26rem;
        margin-right: 0.53rem;
        font-family: "微软雅黑";
        li{
          vertical-align: bottom;
          padding-left: 0.22rem;
          font-size: 0.24rem;
          color: #666;
          line-height:0.8rem;
          position: relative;
          .C2-ZHicon-{
            font-size: 0.07rem;
            display: inline-block;
            position: absolute;
            top:0.28rem;
            left:0;
          }
        }
      }
    }
  }

</style>

