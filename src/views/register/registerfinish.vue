<template>
  <div class="tmpl">
       <ul>
        <li>验证身份</li>
        <li>→</li>
        <li >基本信息</li>
        <li peoselect>→</li>
        <li class="peoselect">完成注册</li>
      </ul>
      <div class="regsuc">
          <span class="OAIndexIcon icon-gouxuanjian"></span>
          <h3>注册成功</h3>
          <p>您可以使用身份证号码和手机号码进行登录</p>
      </div>
     <p>为了更好的使用网上大厅的功能，建议您完成用户认证</p>
     <div class="certification">
         <div class="certifpcname">
            <span class="OAIndexIcon icon-shimingrenzheng"></span>
         </div>
         <div class="pushc">
             <span class="certic">实人认证</span>
             <span class="certicc">&nbsp;&nbsp;上传人脸录像认证</span>
         </div>
           <div class="payc">
            办理房产证，涉及大额资金申领业务等
         </div>
     </div>
     <a href="javascript:void(0)">
         <p class="looklook">暂不进行认证</p>
     </a>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="less">
    .tmpl{
        max-width: 7.2rem;
         ul{
      max-width: 6.4rem;
      padding-left: 0.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background-color: #fff;
      li{
        float: left;
        padding-right: 0.48rem;
        font-size: 0.26rem;
      }
    }
    .peoselect{
      color: #f56262;
    }
    .regsuc{
        text-align: center;
        margin-top: 0.8rem;
        margin-bottom: 1.14rem;
        .icon-gouxuanjian{
            font-size: 1.07rem;
            color: #29ccb7;
        }
        h3{
            font-size: 0.32rem;
            color: #000;
            margin-top: 0.2rem;
            margin-bottom: 0.48rem;
            font-weight: 400
        }
        p{
            font-size: 0.24rem;
            color: #999;        
        }
    }
        p{
            font-size: 0.24rem;
            color: #000;
            text-align: center;
            font-weight: 600
        }
        .certification{
            margin: 0.3rem 0.24rem 0.26rem 0.24rem;
            width: 6.65rem;
            height: 1.73rem;
            padding-top: 0.33rem;
            padding-left: 0.6rem;
            border: 1px solid #ddd;
           background-color: #fff;
           border-radius: 0.1rem;
           overflow: hidden;
            .certifpname,.certifpcname{
                float: left;
                width: 1.08rem;
                height: 1.08rem;
                line-height: 1.08rem;
                border-radius: 50%;
                background-color: #3b9ac6;
                text-align: center;
                margin-right: 0.45rem;
                .icon-shimingrenzheng{
                    display: inline-block;
                    font-size: 0.4rem;
                    color: #fff;
                }               
            }
            .certifpcname{
                background-color: #f56262;
            }
             .pushc{
                    float: left;
                    margin-bottom: 0.29rem;
                    .certic{
                        font-size: 0.32rem;
                        color: #333;
                        font-weight: 400;
                        margin-right: 0.38rem
                    }
                    .certicc{
                        font-size: 0.24rem;
                    }
                }
                .payc{
                    float: left;
                    font-size: 0.24rem;
                    color: #999;
                }
        }
        .looklook{
            margin-top: 0.4rem;
            margin-bottom: 0.4rem;
            font-size: 0.26rem;
            color: #f5b2b2;
        }
    }
</style>
