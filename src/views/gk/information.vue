/**
* Created by Administrator on 2017/11/17.
*/

<template>
    <div id="tmpl" class="box-margin-top">
        <div class="column padding-container-lr">
          <div class="read"><span>我的订阅</span><i>点击进入栏目</i></div>
          <div class="columnbot">
            <div>1234</div><div v-show="isshow"   @click="ding">5678</div><div>21</div>
          </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'information',
        components: {},
        data() {
            return {
              isshow:true
            }
        },
        created() {

        },
        methods: {
          ding(){
           this.isshow=false
          }
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
        .columnbot{
          width: 100%;
          div{
            display: inline-block;
            width: 2.06rem;
            height: 0.82rem;
           line-height: 0.82rem;
            text-align: center;
            background-color: #f4f5f6;
            margin-right: 0.26rem;
            margin-bottom: 0.26rem;
          }
        }
      }
    }
</style>
