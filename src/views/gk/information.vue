/**
* Created by Administrator on 2017/11/17.
*/

<template>
    <div id="tmpl" class="box-margin-top">
        <div class="column padding-container-lr">
          <div class="read"><span>我的订阅</span><i>点击进入栏目</i></div>
          <div class="columnbot" >
              <Column :data="item" :list="list.length" v-for="(item,index) in list"></Column>
          </div>
        </div>
    </div>

</template>

<script>
  import Column from 'components/publicitem/column.vue'
    export default {
        name: 'information',
        components: {
          Column
        },
        data() {
            return {
              list: [
                {id: '1', name: '湖南政务'}, {id: '2', name: '长沙新闻'}, {id: '3', name: '岳阳动态'}, {id: '4', name: '常德牛粉'}, {
                  id: '5', name: '川麻辣烫'
                }, {id: '6', name: '汉热干面'}, {id: '7', name: '汉热干面'}, {id: '8', name: '汉热干面'}
              ],
            }
        },
        created() {
              //console.log(this.list.length)
        },
        methods: {
        }

    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    #tmpl{
      .column{
        background-color: #fff;
        padding-top: 0.34rem ;
       .read{
         margin-bottom: 0.38rem;
         span{
           font-size: 0.32rem;
           color: #000;
           font-family: '微软雅黑';
           border-left: 0.08rem solid blue;
           padding-left: 0.1rem;
         }
         i{
           font-size: 0.24rem;
           color: #999;
           font-style: normal;
           padding-left: 0.24rem;
         }
       }
      }
    }
</style>
