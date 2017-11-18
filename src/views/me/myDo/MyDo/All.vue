/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div class="piecesBox" ref="obj">
    <mt-loadmore :autoFill='false'  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <ul>
      <li v-for="item in list">
        <Piece :option="item" @delete="deleteItem"></Piece>
      </li>
    </ul>
  </mt-loadmore>
    <div class="empty" v-if="!list.length&&isEmpty">暂无数据</div>
  </div>
</template>

<script>
  import Piece from 'components/myDo/Piece.vue'
  import Util from '@/util'
  import Api from '@/api'
  import MintUI,{Field, Button,Toset,Toast,MessageBox} from 'mint-ui'
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
        isEmpty:false
      }
    },
    created(){
      this.initData();
    },
    methods: {
      //上滑加载更多
      loadBottom() {
        this.more();
        this.$refs.loadmore.onBottomLoaded();
      },
      more(){
        this.page++;
        this.initData();
      },
      /*删除*/
      deleteItem(instanceId){
        let _this = this;
        MessageBox.confirm('确定执行此操作?').then(action => {
          //deleteProceeding 执行删除
          Api.errandApi.deleteProceeding(instanceId).then(res=>{
            let instance = Toast('删除成功');
            this.list.forEach((item,i)=>{
              if (instanceId === item.instanceId) {
                this.list.splice(i, 1);
              }
            })
          })

        }).catch(error=>{
          console.log(error)
        });
      },
      /*获取数据*/
      fetchData(fn){
        let _params = {page: this.page, rows: this.rows,sidx:'submitTime',sord:'desc',params:encodeURIComponent(JSON.stringify({certificateNum:this.certificateNum,projectStatus:this.projectStatus}))};
        MintUI.Indicator.open('请稍后...');
        Api.errandApi.getProceedingList(_params).then(res => {
          fn(res);
          //判断每页条数
          this.isEmpty = true;
          MintUI.Indicator.close();
        }).catch(err => {
          console.log(err)
        })
      },
      /*初始化数据*/
      initData() {
        //获取用户id
        this.certificateNum = Util.other.getLocalStorage('userInfo').cidcard;
        if (this.type === '1') {
          this.projectStatus = null
        } else if (this.type === '2') {
          this.projectStatus = '0'
        } else if (this.type === '3') {
          this.projectStatus = '9,3'
        } else if (this.type === '4') {
          this.projectStatus = '1,10'
        } else if (this.type === '5') {
          this.projectStatus = '4,5,6,7'
        } else {
          this.projectStatus = '2,11'
        }
        this.fetchData(res => {
          if (res.contents.length<10){
            this.allLoaded = true;
          }
          this.list.push(...res.contents);
        })
      }
    },
    watch:{
      type(val){
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
    .empty{
      text-align: center;
      margin-top:40px;
      font-size:0.3rem;
    }
  }
</style>
