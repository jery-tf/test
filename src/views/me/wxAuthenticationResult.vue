/**
* Created by wyg on 2017/10/9.
*/

<template>
  <div>
    <p>{{initStr}}</p>
    <p>-------------------</p>
    <p>{{huancun}}</p>
    <p>-------------------</p>
    <div>
      <p>wxAuthen:</p>
      <p>------->{{wxAuthen}}</p>
    </div>
    <p>----------------------</p>
    <p v-if="signature">开始请求接口...</p>
    <p>结果:{{jg}}</p>
  </div>
</template>

<script>
  //微信认证结果
  import Api from '../../api'
  import {Toast} from 'mint-ui'
  export default {
    name: 'wxAuthenticationResult',
    components: {},
    data () {
      return {
        initStr:'',
        huancun:'',
        wxAuthen:'',
        signature:'',
        jg:''
      }
    },
    created(){
      this.init();
    },
    methods: {
      init(){
        this.initStr = '执行初始化...';
        let wxAuthen = sessionStorage.getItem('wxAuthen');
        if(wxAuthen){
            this.huancun = '获取缓存成功';
        }else{
            this.huancun = '获取缓存失败';
        }
        wxAuthen = JSON.parse(wxAuthen)

        this.wxAuthen = wxAuthen;
        this.signature = true;
        console.log('111',this.wxAuthen);
        Api.realNameApi.getWxAuthenticationResult({token:wxAuthen.token},{loading:'请稍后...'})
          .then(res=>{
            this.jg = JSON.stringify(res);
            console.log('微信处理结果',JSON.stringify(res));
        });
      }
    },
    computed: {
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
