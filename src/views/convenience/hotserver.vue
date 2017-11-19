/**
* Created by Administrator on 2017/11/19.
*/

<template>
  <div class="engh">
    <div class="catenum">
      <div class="cleft">
        <img src="../../assets/img/rpr.png" >
      </div>
      <div class="cright">
        <img src="../../assets/img/idcard.png" >
        <img src="../../assets/img/city.png" >
      </div>
    </div>
    <div class="house">
      <img src="../../assets/img/house.png" >
    </div>
    <div class="catenum">
      <div class="cleft">
        <img src="../../assets/img/enbe.png" >
      </div>
      <div class="cright">
        <img src="../../assets/img/sheng.png" class="sheng">
      </div>
    </div>
    <div class="house">
      <img src="../../assets/img/hk.png" >
    </div>
  </div>
</template>

<script>
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import qs from "qs"
  import {Toast} from 'mint-ui';
  import { Indicator } from 'mint-ui';
  export default {
    name: 'hotserver',
    components: {},
    data() {
      return {}
    },
    created() {
        this.gethotnews()
    },
    methods: {
      gethotnews() {
        Util.cmsdao.fetchAllSubChnlNArti('286', 4).then(res => {
          console.log(res)
        })
      }

    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .engh {
          padding: 0.2rem 0.2rem;
    .catenum {
      margin-bottom: 0.2rem;
      overflow: hidden;
        .cleft{
          float: left;
          width: 3.3rem;
          height: 3.34rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
      .cright{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        float: right;
        width: 3.3rem;
        height: 3.34rem;
        img{
          width: 100%;
          height: 1.57rem;
        }
        .sheng{
          height: 3.34rem;
        }
      }
    }
    .house{
      width: 6.8rem;
      margin-bottom: 0.2rem;
      img{
        width: 100%;
        height: 1.81rem;
      }
    }
  }
</style>
