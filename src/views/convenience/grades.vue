/**
* Created by Administrator on 2017/11/18.
*/

<template>
  <div class="facilities">
      <div v-for="item in lists" class="gym">
        <a :href="`${item.detailUrl}`">
          <p>{{item.title}}<i class="OAIndexIcon C2-next"></i></p>

        </a>
      </div>
  </div>
</template>

<script>
  import Util from '../../util'
  import axios from 'axios'
  import Config from '../../config'
  import qs from "qs"
  import {Toast} from 'mint-ui';
    export default {
        name: 'grades',
        components: {},
        data() {
            return {
              lists:[]
            }
        },
        created() {
          this.id = this.$route.params.id;
          this.getplay()
        },
        methods: {
          getplay(){
            Util.cmsdao.fetchAllSubChnlNArti(`${this.id}`, 4).then(res => {
              let arr = [];
              for (let item of res) {
                arr.push({
                  imageUrls: item.imageUrls,
                  title: item.title,
                  parentId: item.parentId,
                  detailUrl:item.detailUrl
                });
              }
              this.lists=arr
            })
          }
        }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .facilities{
    background-color: #fff;
    padding: 0 0.3rem;
    .gym{
      height: 0.98rem;
      line-height:0.98rem;
      border-bottom:1px solid #d9d9d9 ;
      p{
        font-size: 0.28rem;
        color: #333;
        position: relative;
      .OAIndexIcon{
        position: absolute;
        top:0.4rem;
        right:0;
        font-size: 0.24rem;
        color: #ccc;
      }
      }
    }
  }
</style>
