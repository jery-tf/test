/**
* Created by Administrator on 2017/11/13.
*/

<template>
  <div class="consult  box-margin-top">
    <div class="myconsult"  >
      <Consult :title="consults.consultTitle" :content="consults.consultContent" :time="consults.consultTime"></Consult>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import Api from '../../api'
  import Util from '../../util'
  import axios from 'axios'
  import Consult from 'components/others/consult.vue'
    export default {
        name: 'consultingList',
      components: {Consult},
        data() {
            return {
              consults:{}
            }
        },
        created() {
          this.id = this.$route.params.id;
          this.getConsultList()
        },
        methods: {
          getConsultList(){
            Api.consultApi.ConsultList(this.id).then(res=>{
              this.consults=res
              this.consults.consultTime=Util.ctime.ctime(res.consultTime)
            })
          }

        }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .consult {
    .myconsult {
      background-color: #fff;
      padding-right: 0.24rem;
      margin-bottom: 0.2rem;
    }
  }
</style>
