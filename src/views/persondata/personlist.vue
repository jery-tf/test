<template>
  <div>
      <router-link to="personlist/personinfo">
          <div class="information padding-container-lr">
                <i class="OAIndexIcon icon-gerenxinxi"></i>个人信息
                <span class="infornext">
                    <em class="OAIndexIcon icon-next"></em>
                </span>
          </div>
      </router-link>
       <router-link to="personlist/personcam">
          <div class="information padding-container-lr">
                <i class="OAIndexIcon icon-wodezhengjianzhao"></i>证照
                <span class="infornext">
                    2 <em class="OAIndexIcon icon-next"></em>
                </span>
          </div>
       </router-link>
       <a href="#">
          <div class="information padding-container-lr">
                <i class="OAIndexIcon icon-shenqingkaijuwaichujingyinghuodongshuishouguanlizhengming"></i>证明函
                <span class="infornext">
                   13 <em class="OAIndexIcon icon-next"></em>
                </span>
          </div>
      </a>
      
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="less">
    .information{
        width: 7.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
        margin-top: 0.26rem;
        font-size: 0.32rem;
        color: #333;
        background-color: #fff;
        .icon-gerenxinxi,.icon-wodezhengjianzhao,.icon-shenqingkaijuwaichujingyinghuodongshuishouguanlizhengming{
            font-size: 0.41rem;
            color: #f9ae0f;
            margin-right: 0.25rem;
        }
         .icon-wodezhengjianzhao{
            font-size: 0.41rem;
            color: #f62e63;
            margin-right: 0.25rem;
        }
       .icon-shenqingkaijuwaichujingyinghuodongshuishouguanlizhengming{
            font-size: 0.41rem;
            color: #18c5c0;
            margin-right: 0.25rem;
        }
        .infornext{
            float: right;
            font-size: 0.32rem;
            color:#ff3e3e;
            .icon-next{
                font-size: 0.3rem;
                color: #a3a3a3
            }
        }
    }
</style>
