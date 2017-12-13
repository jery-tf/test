<!--底部导航-->
<template>
  <div class="footer-wrapper">
    <div class="content">
      <div>
        <router-link to="/index">
          <i class="icon icon-home"></i>
          <p>首页</p>
        </router-link>
      </div>
      <div class="relative">
        <p @click="open">
          <i class="icon icon-add"></i>
        </p>
      </div>
      <div class="relative">
        <router-link to="/personal">
          <i class="icon icon-personal"></i>
          <span class="tag"></span>
          <p>个人</p>
        </router-link>
      </div>
    </div>
    <postBox :_handleWaybill="handleWaybill" :_handleMood="handleMood" :isOpen="isOpen"></postBox>
  </div>
</template>
<script type="text/ecmascript-6">
    import postBox from './postBox.vue'
    export default {
      components:{
        postBox
      },
      data(){
        return{
          isOpen:{
            state:false
          }
        }
      },
      methods:{
        handleWaybill(){
          console.log('运单贴')
        },
        handleMood(){
          console.log('心情贴')
        },
        open(){
           this.isOpen.state = true;
        }
      }
    }
</script>

<style scoped lang="less">
  .footer-wrapper{
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    height:1rem;
    font-size: 0.28rem;
    text-align: center;
    background: #f3f3f3;
    .content{
      display: flex;
      &>div{
        flex:1;
        padding:0.02rem 0;
        p{
          font-size: 0.2rem;
        }
        i{
          font-size:0.6rem;
          &.icon-add{
            font-size:1.2rem;
            position: absolute;
            top:-25%;
            left:50%;
            margin-left: -0.6rem;
            border:1px solid #fff;
            border-radius: 50%;
          }
        }
        .tag{
          position: absolute;
          width:0.24rem;
          height:0.24rem;
          background: red;
          border-radius: 50%;
          right:1rem;
          top:0.3rem;
        }
        .router-link-active{
          color:#149e38;
          .icon{
            &:before{
              color:#149e38;
            }
          }
        }
      }
    }
  }
</style>
