<template>
  <div>
    <router-link to='/setting/accountsetting'>
      <div class="safety padding-container-lr linet">账户安全设置</div>
    </router-link>
     <router-link to="/search/searchinfo">
      <div class="safety padding-container-lr">推送设置</div>
     </router-link>
     <router-link to='/search/searchlist'>
      <div class="safety padding-container-lr lastline">
        <div class="lastline">
          搜索详情
        </div>
      </div>
    </router-link to='/setting/accountsetting'>
     <router-link to="/register">
      <div class="safety padding-container-lr">关于</div>
     </router-link>
     <a href="javascript:void(0)">
      <div class="safety padding-container-lr outsec">账号退出</div>
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
      height: 0.98rem;
      line-height: 0.98rem;
      font-size: 0.32rem;
      background-color: #fff;
      .lastline{
        border-bottom: 1px solid #d9d9d9;
        height: 0.97rem;  
      }
    }
    .linet{
      margin: 0.2rem 0;   
    }
    .outsec{
      margin-top: 0.4rem;
      text-align: center;
    }
</style>
