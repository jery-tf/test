<template>
  <div class="flex lingheight">
    <div class="content">
      <router-link to="/errand" class="center-center">
        <p>办事</p>
      </router-link>
      <!--<router-link to="/errandList/zrrfl" class="center-center">-->
        <!--<p>>>自然人</p>-->
      <!--</router-link>-->
      <!--<p>&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;=-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
      <!--<router-link to="/errandList/frfl" class="center-center">-->
        <!--<p>>>法人</p>-->
      <!--</router-link>-->
      <!--<p>-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
      <!--<router-link to="/errand/completeData/test" class="center-center">-->
        <!--<p>>>详情</p>-->
      <!--</router-link>-->
      <!--<p>-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
      <!--<router-link to="/collection" class="center-center">-->
        <!--<p>>>收藏</p>-->
      <!--</router-link>-->
      <!--<p>-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
      <!--<router-link to="/me/myDo" class="center-center">-->
        <!--<p>>>我的办件</p>-->
      <!--</router-link>-->

      <p>---------------------------------</p>
      <router-link to="/publicitem" class="center-center">
        <p>公开</p>
      </router-link>
      <p>---------------------------------</p>
      <router-link to="/forpeople" class="center-center">
        <p>便民</p>
      </router-link>
      <p>---------------------------------</p>
      <router-link to="/mySelfInfo" class="center-center">
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import proConfig from '../../config'
  import Vue from 'vue'
  import Api from '../../api'
  import Home from './index'
  import Util from '../../util'
export default {
  name: 'hello',
  components: {
    Errand:Home.Errand,Publicitem:Home.Publicitem,Forpeople:Home.Forpeople,Myselfinfo:Home.Myselfinfo
  },
  data () {
    return {
      mySelected:'bs',
      msg: 'Welcome to Your Vue.js App',
      proConfig:proConfig.api
    }
  },
  created(){
    this.pageInit();
  },
  methods: {
    pageInit(){
      this.mySelected = Util.home.getHomePageUrl();
    }
  },
  watch: {
    'mySelected': function(){
      Util.home.setHomePageUrl(this.mySelected);
    }
  }
}
</script>

<style scoped>
.content{
  padding: .24rem;
}
</style>
