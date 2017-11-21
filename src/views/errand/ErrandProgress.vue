<template>
  <div id="errandProgress">
    <div class="title-wrapper">
      <p class="title">{{title}}</p>
    </div>
    <div class="line">
      <MyLine></MyLine>
    </div>
    <History :timeList="timeList">
      <div v-for="(item,index) in dataList" :slot="renderSlot(index)" >
        <p class="state">{{item.guochengName}}</p>
        <p class="info">
          <span>办理窗口：1窗口</span>
          <span>办理人：{{item.handler}}</span>
        </p>
      </div>
    </History>
    <div class="empty" v-show="!dataList.length">暂无办件进度数据</div>
  </div>
</template>

<script type="text/ecmascript-6">
    import History from '@/components/errand/history'
    import MyLine from '@/components/public/line'
    import Api from '@/api'
    import Util from '@/util'
    export default {
      components:{History,MyLine},
      data(){
        return {
          historyList:[

          ],
          timeList:[],
          dataList:[
            {
              "guochengId": "01@774",
              "guochengName": "受理",
              "handleTime": 1511083278000,
              "handler": "人社厅测试",
              "instanceId": "3262"
            },
            {
              "guochengId": "01@776",
              "guochengName": "审批",
              "handleTime": 1511083484000,
              "handler": "人社厅测试",
              "handlerId": "tvYBkwQTSbG90BZ8WSkEuw",
              "instanceId": "3262"
            },
            {
              "guochengId": "01@775",
              "guochengName": "审核123",
              "handleTime": 1511083471000,
              "handler": "人社厅测试",
              "handlerId": "tvYBkwQTSbG90BZ8WSkEuw",
              "instanceId": "3262"
            },
            {
              "guochengId": "01@777",
              "guochengName": "退窗",
              "handleTime": 1511083495000,
              "handler": "人社厅测试",
              "handlerId": "tvYBkwQTSbG90BZ8WSkEuw",
              "instanceId": "3262"
            }
          ],
          title:''
        }
      },
      created(){
        this.title = this.$route.query.title;
        let instanceId =  this.$route.query.instanceId;

        //测试instanceId 3262
        Api.errandApi.getDetailProcessinfo(instanceId).then(res=>{
            this.dataList = res;
            this.formatTime();
        });

      },
      methods:{
        renderSlot(index){
          return `slot${index}`
        },
        formatTime(){
          this.dataList.forEach(e=>{
            this.timeList.push({
              time:Util.ctime.format(e.handleTime,'hh:mm'),
              date:Util.ctime.format(e.handleTime,'yyyy-MM-dd')
            })
          })
        }
      }
    }
</script>

<style scoped lang="less">
  #errandProgress{
    position: absolute;
    width: 100%;
    height:100%;
    background: #fff;
    left:0;
    top:0;
    .title-wrapper{
      position: fixed;
      top:0;
      left:0;
      width: 100%;
      display: table;
      padding:0.21rem 0.26rem;
      line-height: 0.38rem;
      border-bottom: 0.02rem solid #eee;
      background: #fff;
      height:1.21rem;
      font-size: 0.28rem;
      p{
        display: table-cell;
        vertical-align: middle;
      }
    }
    .line{
      margin-top:1.18rem;
    }
    .empty{
      text-align: center;
    }
  }

</style>
