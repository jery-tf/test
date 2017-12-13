<template>
  <div class="wrapper" :class="{open:isOpen.state}">
    <div class="type-pic">
      <div class="waybill" @click="_handleWaybill">
        <img src="../../assets/image/waybill.png" alt="运单">
        <p>发布运单贴</p>
      </div>
      <div class="mood" @click="_handleMood">
        <img src="../../assets/image/mood.png" alt="心情">
        <p>发布心情贴</p>
      </div>
    </div>
    <div class="colse">
      <i @click="close " class="icon icon-close"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
      props:["_handleWaybill","_handleMood","isOpen"],
      methods:{
        close(){
          this.isOpen.state = false;
        }
      }
    }
</script>

<style scoped lang="less">
  .wrapper{
    height:3.66rem;
    background: #f1f1f1;
    position: fixed;
    bottom:-3.66rem;
    width: 100%;
    transition: all 0.5s ease 0s;
    &.open{
      transform: translateY(-100%);
    }
    .type-pic{
      display: flex;
      padding-top:0.6rem;
      &>div{
        flex:1;
        &>p{
          font-size:0.34rem;
          color:#2a2a2a;
        }
        &.waybill{
          img{
            width:1.62rem;
            height:1.1rem;
          }
        }
        &.mood{
          img{
            width:1.16rem;
            height:1.12rem;
          }
        }
      }
    }
    .colse{
      margin-top:0.5rem;
      .icon{
        font-size:0.58rem;
      }
    }
  }
</style>
