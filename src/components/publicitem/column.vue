/**
* Created by Administrator on 2017/11/20.
*/

<template>
  <div v-if="isshow">
    <div>{{data.name}}<i class="OAIndexIcon C2-guanbi2" @click="onshow" v-show="onshow"></i></div>
  </div>
</template>

<script>
  export default {
    name: 'column',
    props: ['data','list'],
    components: {},
    data() {
      return {
        isshow: true,
        onsshow:true
      }
    },
    created() {

    },
    methods: {
      onshow() {
        if(this.data.id=='1'){
            this.onshow=false
            this.isshow=true
        }
        else{
          this.isshow = false;
        }
      },

    },

    computed:{

    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .columnbot {
    width: 100%;
    div {
      position: relative;
      display: inline-block;
      width: 2rem;
      height: 0.82rem;
      line-height: 0.82rem;
      text-align: center;
      background-color: #f4f5f6;
      margin-right: 0.26rem;
      margin-bottom: 0.26rem;
      .C2-guanbi2 {
        position: absolute;
        top: -0.1rem;
        right: -0.1rem;
        font-size: 0.28rem;
        color: #ccc;
      }
    }

  }
</style>
