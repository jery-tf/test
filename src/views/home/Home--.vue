<template>
  <div class="flex lingheight">
    <div class="content">
      <mt-tab-container v-model="mySelected">
      <mt-tab-container-item id="bs">
        <Errand v-if="mySelected=='bs'"></Errand>
      </mt-tab-container-item>
      <mt-tab-container-item id="gk">
        <Publicitem v-if="mySelected=='gk'"></Publicitem>
      </mt-tab-container-item>
      <mt-tab-container-item id="bm">
          <Forpeople v-if="mySelected=='bm'"></Forpeople>
      </mt-tab-container-item>
      <mt-tab-container-item id="wd">
          <Myselfinfo v-if="mySelected=='wd'"></Myselfinfo>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
    <mt-tabbar v-model="mySelected" class="_tabbar">
      <mt-tab-item id="bs" class="_tabItem">
        <i class="OAIndexIcon C2-daibanshiyi tabbarIcon"></i>
        <p class="tabbarLabel">办事</p>
      </mt-tab-item>
      <mt-tab-item id="gk" class="_tabItem">
        <i class="OAIndexIcon C2-zhengwugongkai tabbarIcon"></i>
        <p class="tabbarLabel">公开</p>
      </mt-tab-item>
      <mt-tab-item id="bm" class="_tabItem">
        <i class="OAIndexIcon C2-bianminfuwu tabbarIcon"></i>
        <p class="tabbarLabel">便民</p>
      </mt-tab-item>
      <mt-tab-item id="wd" class="_tabItem">
        <i class="OAIndexIcon C2-touxiang-copy-copy tabbarIcon"></i>
        <p class="tabbarLabel">我的</p>
      </mt-tab-item>
    </mt-tabbar>
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
._tabbar{
  height: .88rem;
}
._tabItem{
  display: flex;
  justify-content: center;
  align-items: center;
}
.OAIndexIcon.tabbarIcon{
  width: .4rem;
  height: .4rem;
}
.mint-tabbar > .mint-tab-item{
  color:#666;
}
.mint-tabbar > .mint-tab-item.is-selected{
  color: #29a1f7;
}
.tabbarLabel{
  padding-top: .1rem;
}

.testDiv>p{
  padding: 15px;
}
.lingheight{
  max-height: 100%;
}
.content{
  padding-bottom: .88rem;
  height: 100%;
  overflow-y: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
