<template>
    <div>
        <router-link to="/setting/changenum">
            <div class="safety padding-container-lr firstline" >修改绑定手机
                <span>18684891234 <i class=" OAIndexIcon icon-xiayiye"></i> </span>
            </div>
        </router-link>
         <router-link to="/setting/resetsec">
            <div class="safety padding-container-lr " >登录密码
                <span>已设置 <i class=" OAIndexIcon icon-xiayiye"></i> </span>
            </div>
         </router-link>
         <a href="javascript:void(0)">
            <div class="safety padding-container-lr " >支付密码
                <span> <i class=" OAIndexIcon icon-xiayiye"></i> </span>
            </div>
        </a>
         <a href="javascript:void(0)">
            <div class="safety padding-container-lr " >
               <div class="bottomline">
                   手势解锁
                    <span>已设置 <i class=" OAIndexIcon icon-xiayiye"></i> </span>
               </div>
            </div>
        </a>
         <a href="javascript:void(0)">
            <div class="safety padding-container-lr" >
                <div class="bottomline">
                    指纹解锁
                    <span> <i class=" OAIndexIcon icon-xiayiye"></i> </span>
               </div>
            </div>
        </a>
        
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang='less'>
 .safety{
      width: 7.2rem;
      height: 0.97rem;
      line-height: 0.97rem;
      font-size: 0.32rem;
      background-color: #fff;
      span{
        float: right;
        color: #999;
        font-size: 0.28rem;
      }
       .icon-xiayiye:before{
            float: right;
            vertical-align: 2%;
            color: #999;
            font-size: 0.29rem;
            font-weight: 900;
            padding-left: 0.2rem;
        }
 }
 .firstline{
     margin: 0.2rem 0;
 }
.bottomline{
    border-top: 1px solid #d9d9d9;
    height: 0.97rem;
}
</style>
