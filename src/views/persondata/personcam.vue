<template>
  <div class="tmpl ">
      <div class="activity padding-container-lr setting">
          <img src="../../assets/img/img1.png" >
          <div class="anlmeeting">
              <h4>公司年会图片.DOC</h4>
              <span>10.55KB 2017-07-18</span>
          </div>
      </div>
       <div class="activity padding-container-lr">
          <img src="../../assets/img/img2.png" >
          <div class="anlmeeting">
              <h4>公司年会图片</h4>
              <span>10.55KB 2017-07-18</span>
          </div>
      </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
    .tmpl{
        border-top: 1px solid #eee;
        .activity{
        width: 7.2rem;
        height: 1.34rem;
        padding-top: 0.25rem;
        background-color: #fff;
        img{
            float: left;
            width: 0.82rem;
            height: 0.82rem;
        }
    }
    .anlmeeting{
        float: left;
        margin-left: 0.25rem;
        h4{
            font-size: 0.26rem;
            color: #333;
            font-weight: 400;
          font-family: "微软雅黑";
        }
        span{
            font-size: 0.2rem;
            color: #999;
            display: inline-block;
            margin-top: 0.2rem;
        }
    }
      .setting{
        border-bottom: 1px solid #d9d9d9;
      }
    }
</style>
