<template>
  <div class="history">
    <div class="h-body">
      <ul>
        <li v-for="(item,index) in timeList">
          <div class="content">
            <div class="time">
              <p class="detail-time">{{item.time}}</p>
              <p>{{item.date}}</p>
            </div>
            <div class="detail">
              <div class="detail-content">
                <slot :name="className(index)"></slot>
              </div>
            </div>
          </div>
          <div class="line" v-show="index!== timeList.length-1">
            <p></p>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    compontents:{},
    props:['timeList'],
    data(){
      return {

      }
    },
    methods:{
      className(index){
        return `slot${index}`
      }
    }
  }
</script>

<style scoped lang="less">
  .history{
    color:#333;
    .h-body{
      background: #fff;
      ul{
        padding-top:0.6rem;
        li{
          font-size:0.2rem;
          line-height: 0.43rem;
          color:#999;
          &:first-child{
            color:#333;
            .content{
              .time>p:nth-child(2){
                color:#999;
              }
            }
          }
          .content{
            display: flex;
            .time{
              flex: 0 0 1.85rem;
              text-align: center;
              p{
                &.detail-time{
                  font-size:0.29rem;
                }
              }
            }
            .detail{
              flex:1;
              font-size:0.29rem;
              .detail-content{
                display: table;
                height:0.7rem;
                &>div{
                  display: table-cell;
                  vertical-align: middle;
                }
                .info{
                  font-size:0.26rem;
                }
              }

            }
            padding:0.14rem 0;
          }
          .line{
            width:1.81rem;
            p{
              width: 0.02rem;
              height:0.5rem;
              background: #eee;
              margin:0 auto;
            }
          }
        }
      }

    }
  }

</style>
