<template>
  <div >
          <div  >
            <template v-for="item in list"  v-if="item.channelId!=10">
              <div>
                123
              </div>
            </template>
            <template v-for="item in list"  v-if="item.channelId!=11">
              <div >
               456
              </div>
            </template>
          </div>
  </div>
</template>
<script>
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import qs from "qs"

  export default {
    data() {
      return {
        list:[]
      }
    },
    created() {
      this.getnewsinfo()
    },
   methods:{
     getnewsinfo() {
       Api.getnewsApi.getnews(
         {
           content: btoa(Util.other.Utf8ToUnicode(JSON.stringify({
             channelId: "2",
             start: "0",
             count: "99",
             grantUserName: "xxld",
             userName: "xxld",
             site: "hunanzhengwu"
           })))
         },
         {headers: {'content-type': 'application/x-www-form-urlencoded'}}
       ).then(res => {
         console.log(res.data)
         this.list = res.data
       })
     }
   }
  }
</script>
<style scoped lang='less'>
  .tmpl {
    width: 7.2rem;
    height: 0.96rem;
    border-bottom: #d9d9d9;
  }

  .morecont {
    border-top: 1px solid #eee;
    padding: 0.34rem 0.24rem 0;
    background-color: #fff;
    h3 {
      font-size: 0.32rem;
      color: #000;
      padding-bottom: 0.42rem;
      font-weight: 400;
    }
    span {
      font-size: 0.2rem;
      color: #aaa;
      font-family: "微软雅黑";
    }
    p {
      padding-top: 0.42rem;
      font-size: 0.24rem;
      color: #666
    }
  }
</style>
