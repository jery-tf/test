/**
* Created by Administrator on 2017/11/18.
*/

<template>
    <div class="facilities">
        <div>
          <div v-for="item in list" class="gym">
            <a :href="`${item.detailUrl}`">
              <img :src="item.imageUrls" >
              <p>{{item.title}}</p>
            </a>
          </div>
        </div>
      <div v-if="nocont" class="nocont">
        暂无内容
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
        name: 'facilities',
        components: {},
        data() {
            return {
              list:[],
              nocont:false
            }
        },
        created() {
          this.id = this.$route.params.id;
          this.getplay()
        },
        methods: {
          getplay(){
            Util.cmsdao.fetchAllSubChnlNArti(`${this.id}`, 4).then(res => {
              console.log(res)
              if(res){
                let arr = [];
                for (let item of res) {
                  arr.push({
                    imageUrls: item.imageUrls,
                    title: item.title,
                    parentId: item.parentId,
                    detailUrl:item.detailUrl
                  });
                }
                this.list=arr
              }
              else{
                this.nocont=true
              }

            })
          }
        }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
          .facilities{
            width: 7.2rem;
              .gym{
                padding: 0.26rem  0.26rem 0;
                text-align: center;
                margin-bottom: 0.18rem;
                background-color: #fff;
                img{
                  width: 100%;
                  height: 2.68rem;
                }
                p{
                  height: 0.7rem;
                  line-height:0.7rem;
                }
              }
            .nocont{
              text-align: center;
            }
            }
</style>
