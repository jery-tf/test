/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div class="piecesBox">
    <mt-loadmore :bottom-method="loadBottom" :autoill="false" :bottom-all-loaded="allLoaded"
                 :bottomDistance="20" ref="loadmore">
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
  export default {
    name: 'All',
    components: {Piece},
    data () {
      return {
        allLoaded:false,
        pieceOption: {
          id: 'test',
          number: 123123123123123,
          state: 2,
          content: '中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文',
          logisticsNo: '12312312312',//物流单号
        },
        list: [
          {
            id: 'test',
            number: 123123123123123,
            state: 2,
            content: '中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文',
            logisticsNo: '12312312312',//物流单号
          },
          {
            id: 'test',
            number: 123123123123123,
            state: 2,
            content: '中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文',
            logisticsNo: '12312312312',//物流单号
          }, {
            id: 'test',
            number: 123123123123123,
            state: 2,
            content: '中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文',
            logisticsNo: '12312312312',//物流单号
          },
          {
            id: 'test',
            number: 123123123123123,
            state: 2,
            content: '中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文',
            logisticsNo: '12312312312',//物流单号
          },
          {
            id: 'test',
            number: 123123123123123,
            state: 2,
            content: '中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文',
            logisticsNo: '12312312312',//物流单号
          },
          {
            id: 'test',
            number: 123123123123123,
            state: 2,
            content: '中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文',
            logisticsNo: '12312312312',//物流单号
          }, {
            id: 'test',
            number: 123123123123123,
            state: 2,
            content: '中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文中文全部是中文',
            logisticsNo: '12312312312',//物流单号
          }
        ]
      }
    },
    created(){

    },
    methods: {
      loadBottom(){
        console.log('执行加载');
        let data = [
          {
            id: 'test',
            number: 222222222222,
            state: 2,
            content: '222222',
            logisticsNo: '222222',//物流单号
          },
          {
            id: 'test',
            number: 3333333,
            state: 2,
            content: '33333333',
            logisticsNo: '33333333',//物流单号
          },
        ];
        setTimeout(() => {
          this.list.push(...data);
//          this.allLoaded = true;// 若数据已全部获取完毕
          this.$refs.loadmore.onBottomLoaded();
        }, 1000);

      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .piecesBox {
    overflow-y: auto;
    flex: 1;
    li{
      margin-top: .2rem;
    }
    li:first-child {
      margin-top: 0;
    }
  }
</style>
