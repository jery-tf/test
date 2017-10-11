<template>
  <div>
    <div class="padding-container-lr changephone">修改手机号码</div>
    <div class="idpost">
      <mt-field label="手机号码" class="ipt" v-model="phone" placeholder="手机号码"></mt-field>
    </div>
    <div class="top52 box-margin-top">
      <!--<router-link to="/setting/lastphone">-->
        <mint-button type="primary" size="large" @click="lastphone" >下一步</mint-button>
      <!--</router-link>-->
    </div>
  </div>
</template>
<script>
//import Personinfo from 'components/personinfo/personinfo'
import { Button} from 'mint-ui'
import Util from '../../util'
import {Toast} from 'mint-ui';
export default {
  components:{'mint-button': Button},
  data(){
    return{
      phone:''
    }
  },
  methods:{
    lastphone(){
      if(this.phone==''){
        Toast('请输入手机号码');
        return
      }
      else if(!(/^1[34578]\d{9}$/.test(this.phone))){
        Toast("请输入有效的11位手机号码")
        return;
      }else{
        this.$router.push('/setting/lastphone')
      }
      let newphone =this.phone;
      console.log(newphone)
      Util.other.setSessionStorage('newphone',newphone);
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
.mint-button {
  margin: 0 0.24rem;
}

.mint-button--large {
  width: 6.72rem;
  height: 0.93rem;
  border-radius: 10px;
}

.mint-button-text {
  font-size: 0.3rem;
}
</style>
