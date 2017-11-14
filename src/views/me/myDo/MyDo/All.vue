/**
* Created by wyg on 2017/9/23.
*/

<template>
  <div class="piecesBox" ref="obj">
    <ul>
      <li v-for="item in list">
        <Piece :option="item" @delete="deleteItem"></Piece>
      </li>
    </ul>
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
      }
    },
    created(){
      this.initData();
    },
    methods: {
      loadBottomUse(){
        console.log(11)
      },
      /*删除*/
      deleteItem(instanceId){
        let _this = this;
        MessageBox.confirm('确定执行此操作?').then(action => {
          //deleteProceeding 执行删除
          Api.errandApi.deleteProceeding(instanceId).then(res=>{
            let instance = Toast('删除成功');
            setTimeout(() => {
              instance.close();
            }, 2000);
          })
        }).catch(error=>{
          console.log(error)
        });
      },
      initData() {
        //获取用户id
        let certificateNum =  Util.other.getLocalStorage('userInfo').cidcard;
        let _params = {page: this.page, rows: this.rows,params:encodeURIComponent(JSON.stringify({certificateNum:certificateNum,projectStatus:this.type}))};
        MintUI.Indicator.open('请稍后...');
        Api.errandApi.getProceedingList(_params).then(res => {
          this.list.push(...res.contents);
          console.log( this.list)
          MintUI.Indicator.close();
        }).catch(err => {
          console.log(err)
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
  }
</style>
