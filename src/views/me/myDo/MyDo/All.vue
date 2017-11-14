/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div class="piecesBox" ref="obj">
    <mt-loadmore :bottom-method="loadBottom" :autoill="false" :bottom-all-loaded="allLoaded"
                 :bottomDistance="30" ref="loadmore">
      <ul>
        <li v-for="item in list">
          <Piece :option="item"></Piece>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  import Piece from 'components/myDo/Piece.vue'
  import Util from '@/util'
  import Api from '@/api'
  import MintUI,{Field, Button,Toset,Toast} from 'mint-ui'
  export default {
    name: 'All',
    components: {Piece},
    props:['type'],
    data () {
      return {
        allLoaded:false,
        pieceOption: {},
        list: [],
        page:1,
        rows:10,
      }
    },
    created(){
      this.initData();
    },
    methods: {
      loadBottom(){
        console.log('执行加载');
        setTimeout(() => {

        }, 500);
      },
      initData() {
        //获取用户id
        let userId =  Util.other.getLocalStorage('userInfo').userId;
        let cond = {
          filters: {
            groupOp: "AND",
            rules: [{ field: "rzApplyId", op: "eq", data: userId }]
          }
        };
        let _params = {page: this.page, rows: this.rows, cond: encodeURI(JSON.stringify(cond))};
        MintUI.Indicator.open('请稍后...');
        Api.errandApi.getProceedingList(_params).then(res => {
          this.list = res.contents;
          MintUI.Indicator.close();
        }).catch(err => {
          console.log(err)
        })
      }
    },
    watch:{
      top(val){
          console.log(val)
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .piecesBox {
    flex: 1;
    li{
      margin-top: .2rem;
    }
    li:first-child {
      margin-top: 0;
    }
  }
</style>
