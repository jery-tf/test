<template>
  <div id="tmpl">
    <div class="pubnews padding-container">
      <div class="pubhead">
        <h3>通知公告</h3>
        <span>查看更多
          <i class="OAIndexIcon icon-fanhui4"></i>
        </span>
      </div>
      <ul class="pubcont">
        <li class="publistone">
          <router-link to="/publicmore"> 
            <img src="../../assets/img/text1.jpg">浏阳房产行业1小时募集411万元助力灾后重建<br>
            <span>2017-04-06</span>
          </router-link>
        </li>
        <li class="publistone">
          <a href="javascript:void(0)">浏阳房产行业1小时募集411万元助力灾后重建<br>
            <span>2017-04-06</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="pubnews padding-container">
      <div class="pubhead">
        <h3>政务动态</h3>
        <span>查看更多
          <i class="OAIndexIcon icon-fanhui4"></i>
        </span>
      </div>
      <ul class="pubcont">
        <li class="publistone">
          <a href="javascript:void(0)"> <img src="../../assets/img/text1.jpg">浏阳房产行业1小时募集411万元助力灾后重建<br>
            <span>2017-04-06</span>
          </a>
        </li>
        <li class="publistone">
          <a href="javascript:void(0)">浏阳房产行业1小时募集411万元助力灾后重建<br>
            <span>2017-04-06</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="pubnews padding-container">
      <div class="pubhead">
        <h3>媒体聚焦</h3>
        <span>查看更多
          <i class="OAIndexIcon icon-fanhui4"></i>
        </span>
      </div>
      <ul class="pubcont">
        <li class="publistone">
          <a href="javascript:void(0)"> <img src="../../assets/img/text1.jpg">浏阳房产行业1小时募集411万元助力灾后重建<br>
            <span>2017-04-06</span>
          </a>
        </li>
        <li class="publistone">
          <a href="javascript:void(0)">浏阳房产行业1小时募集411万元助力灾后重建<br>
            <span>2017-04-06</span>
          </a>
        </li>
      </ul>
    </div>


    <router-link to="">这是暂时放到这里，到时候要调到我的首页去的</router-link>
  </div>
</template>
<script>  
export default {

}
</script>
<style scoped>
.pubnews {
  width: 7.2rem;
  position: relative;
  margin-top: 0.2rem;
  background-color: #fff
}
.pubnews .pubhead {
  position: relative;
}

.pubnews .pubhead h3 {
  font-size: 0.34rem;
  color: #000;
  font-weight: 400;
}

.pubnews .pubhead span {
  position: absolute;
  font-size: 0.23rem;
  color: #999;
  top: 0.06rem;
  right: 0;
}

.pubnews .pubhead .icon-fanhui4 {
  font-style: normal;
  width: 0.13rem;
  height: 0.21rem;
  vertical-align: 0;
  color: #999;
  padding-left: 0.24rem
}

.pubnews .pubcont {
  margin-top: 0.26rem;
  overflow: hidden;
  position: relative;
}

.pubnews .pubcont .publistone {
  margin-top: 0.3rem;
  position: relative;
  font-size: 0.27rem;
  color: #666;
  overflow: hidden;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.3rem;
}

.pubnews .pubcont .publistone a {
  color: #666
}

.pubnews .pubcont .publistone img {
  float: right;
  width: 1.97rem;
  height: 1.3rem;
  padding-left: .4rem
}

.pubnews .pubcont .publistone span {
  display: block;
  padding-top: 0.38rem
}
</style>

