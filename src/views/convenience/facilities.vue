/**
* Created by Administrator on 2017/11/18.
*/

<template>
    <div>这是便民设施</div>
</template>

<script>
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import qs from "qs"
  import {Toast} from 'mint-ui';
    export default {
        name: 'facilities',
        components: {},
        data() {
            return {}
        },
        created() {
          this.id = this.$route.params.id;
          console.log(this.id)
          this.getplay()
        },
        methods: {
          getplay(){
            Util.cmsdao.fetchAllSubChnlNArti(`${this.id}`, 4).then(res => {
              console.log(res)
            })
          }
        }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
