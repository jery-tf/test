<template>
  <div>
    <div class="range"  v-for="item in datainfoto"  >
      <h6>{{item.name}}</h6>
      <div class="allbtn" v-for="(item1,index) in datainfolist" :key="index" v-if="item.channelId==21">
        <input type="button" v-model="item1.name" class="btn" :class="item1.name.length>=6? 'fullclass':'otherclass'" @click="popupup(item1)">
      </div>
    </div>
    <mt-popup v-model="popupVisible" closeOnClickModal="false" class="modal" v-if="isshow" pop-transition="popup-fade">
     <h3> <i class="icon-guanbi1 OAIndexIcon" @click="close()"></i>便民列表</h3>
      <ul v-for="(item1,index) in datainfolist">
        <li><i class="OAIndexIcon icon-ZHicon-"></i><a href="#">{{item1.name}}</a></li>
        <!--<li><i class="OAIndexIcon icon-ZHicon-"></i><a href="#">种子生产地点检疫证明</a></li>-->
        <!--<li><i class="OAIndexIcon icon-ZHicon-"></i><a href="#">委托种子生产合同复印件或自行组织种子生产的情况说明和证明材料</a></li>-->
        <!--<li><i class="OAIndexIcon icon-ZHicon-"></i><a href="#">种子生产、加工贮藏、检验专业技术人员的基本情况及其企业缴纳的社保证明复印件...</a></li>-->
      </ul>
    </mt-popup>
  </div>
</template>
<script>
  import { Popup } from 'mint-ui'
  import Popupname from './popupname.vue'
  export default {
    data() {
      return {
        msg: "",
        list: [],
        list1:[],
        clicked: false,
        showModel:false,
        popupVisible:'',
        isshow:false,
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
        this.isshow=!this.isshow
      },
      popupup(item1){
        if(item1.channelId=="24"){
          this.isshow=true
          console.log(this.showModel)
        }else if(item1.channelId==25){
          alert("我是25")
        }
  }
    },
  }
</script>
<style lang="less" scoped>
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
        border: 0;
        outline: 0;
        border-radius: 0.1rem;
        height: 1.18rem;
        border: 1px solid #cecece;
        background-color: #fff;
        margin-bottom: 0.24rem;
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
    width: 6.54rem;
    height: 7.14rem;
   h3{
     font-weight: 400;
     text-align: center;
     font-size: 0.32rem;
     color: #333;
     height: 0.92rem;
     line-height: 0.92rem ;
     border-bottom: 1px solid #d9d9d9;
     .icon-guanbi1{
       font-size: 0.32rem;
       position: absolute;
       top:0;
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
        padding-bottom: 0.5rem;
        padding-left: 0.22rem;
        font-size: 0.24rem;
        color: #666;
        line-height:0.4rem;
        position: relative;
        .icon-ZHicon-{
          font-size: 0.07rem;
          display: inline-block;
          position: absolute;
          top:0;
          left:0;
        }
      }
    }
  }
</style>

