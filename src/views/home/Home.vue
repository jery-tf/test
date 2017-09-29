<template>
  <div class="flex lingheight">
    <div class="content">
      <mt-tab-container v-model="mySelected">
      <mt-tab-container-item id="bs">
        <Errand></Errand>
      </mt-tab-container-item>
      <mt-tab-container-item id="gk">
        <Publicitem></Publicitem>
      </mt-tab-container-item>
      <mt-tab-container-item id="bm">
          <Forpeople></Forpeople>
      </mt-tab-container-item>
      <mt-tab-container-item id="wd">
          <Myselfinfo></Myselfinfo>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
    <mt-tabbar v-model="mySelected" class="_tabbar">
      <mt-tab-item id="bs" class="_tabItem">
        <i class="OAIndexIcon icon-daibanshiyi tabbarIcon"></i>
        <p class="tabbarLabel">办事</p>
      </mt-tab-item>
      <mt-tab-item id="gk" class="_tabItem">
        <i class="OAIndexIcon icon-zhengwugongkai tabbarIcon"></i>
        <p class="tabbarLabel">公开</p>
      </mt-tab-item>
      <mt-tab-item id="bm" class="_tabItem">
        <i class="OAIndexIcon icon-bianminfuwu tabbarIcon"></i>
        <p class="tabbarLabel">便民</p>
      </mt-tab-item>
      <mt-tab-item id="wd" class="_tabItem">
        <i class="OAIndexIcon icon-touxiang-copy-copy tabbarIcon"></i>
        <p class="tabbarLabel">我的</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import proConfig from '../../config'
  import Vue from 'vue'
  import Api from '../../api'
  import Publicitem from './publicitem'
  import Forpeople from './forpeople'
  import Myselfinfo from './Myselfinfo'

  import Me from './me.vue'
  import Errand from './Errand.vue'
  import Util from '../../util'
export default {
  name: 'hello',
  components: {
    Me,Errand,Publicitem,Forpeople,Myselfinfo
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
      this.mySelected = Util.getHomePageUrl();
    }
  },
  watch: {
    'mySelected': function(){
      Util.setHomePageUrl(this.mySelected);
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
  align-items: center;˚
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
