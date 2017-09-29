<template>
  <div>
    <div class="padding-container-lr changephone">修改手机号码</div>
    <Personinfo :person="item" :key="index"  v-for="(item,index) in list"></Personinfo>
    <router-link to="/setting/lastphone">
     <Btncommon msg="下一步"></Btncommon>
    </router-link>
  </div>
</template>
<script>
import Personinfo from 'components/personinfo/personinfo'
import Btncommon from 'components/btncommon/BtnCommon'
export default {
  components:{Personinfo,Btncommon},
  data(){
    return{
      list:[
        {name:'手机号码',pname:'手机号码'}
      ],
    }
  }
}
</script>
<style lang="less" >
.changephone {
  width: 7.2rem;
  height: 0.92rem;
  line-height: 0.92rem;
  font-size: 0.24rem;
  color: #999;
}
</style>
