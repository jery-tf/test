/**
* Created by wyg on 2017/9/25.
*/

<template>
  <div>
    <div class="fff padding-container title">
      <p class="twoLineFont">
        最多两行文字最多两行文字最多两行文字最多两行文字最多两行文字最多两行文字最多两行文字最多两行文字最多两行文字最多两行文字最多两行文字最多两行文字最多两行文字最多两行文字最多两行文字
      </p>
    </div>
    <div class="box-margin-top fff">
      <CellSwipe title="这是标题" :rightFun="testFun" label="10kb 2017-05-12" :type="2"></CellSwipe>
      <CellSwipe title="标题2" :rightFun="testFun" label="10.3kb 2017-05-12" :type="1"></CellSwipe>
    </div>
    <p class="add fff box-margin-top">
      <i class="OAIndexIcon icon-xinjian" @click="fileUploadBtn"></i>
      <input id="fileUpInput" type="file" class="fileUp" @change="fileUploadFun">
    </p>
    <div class="padding-container">
      <mt-button type="primary" size="large" @click="submit">完成</mt-button>
    </div>
  </div>
</template>

<script>
  import CellSwipe from 'components/public/CellSwipe.vue'
  export default {
    name: 'fileUpload',
    components: {CellSwipe},
    data () {
      return {
        isSubmit:false,
        selectFiles:null
      }
    },
    created(){

    },
    methods: {
      testFun(){
          console.log(111)
      },
      submit(){
//        this.isSubmit = true;
        this.$router.go(-1);
//        window.history.go(-1);
      },
      //执行input 点击事件
      fileUploadBtn(){
        document.getElementById('fileUpInput').click();
      },
      fileUploadFun(e){
        let files = e.target.files;
        console.log('files-->',files)
      }

    },
//    beforeRouteLeave: (to, from, next) => {
//      if(this.isSubmit){
//        this.$router.go(-1);
////        window.history.go(-1);
//      }else{
//        next();
//      }
//    },
    watch:{
      'selectFiles':()=>{
        console.log(this.selectValue);
      }
    },

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .title{
    font-size: .28rem;
    height: 1.2rem;
  }
  .add{
    display: flex;
    justify-content: center;
    align-items: center;
    height: .81rem;
    i{
      font-size: .41rem;
      color:#ccc;
    }
    .fileUp{
      display: none;
    }
  }
</style>
