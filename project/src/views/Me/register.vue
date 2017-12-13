<template>
  <div id="me">
    <XHeader title="物流圈-注册" :left-options="{backText: ''}"></XHeader>
    <div class="content">
      <div class="logo">
        <img src="../../assets/image/logo.png" alt="" >
      </div>
      <div class="input-wrapper">
        <x-input title="输入手机号码：" ref="input1" v-model="tel"></x-input>
        <x-input title="验证码" class="weui-vcode" v-model="code" ref="input2" :show-clear="false">
          <div slot="right" v-if="isClick">
            <x-button  type="primary" mini @click.native="send" >发送验证码</x-button>
          </div>
          <div slot="right" v-if="!isClick">
            <x-button  mini  >{{count}}s</x-button>
          </div>
        </x-input>
        <x-input title="昵称：" v-model="name" ref="input3"></x-input>
      </div>
      <div class="btns">
        <button class="login" @click="register">立即注册</button>
      </div>
      <p class="info">注册成功后登录密码会发送到您的手机上</p>
    </div>
    <toast v-model="showPositionValue" type="text" :time="1000" is-show-mask :text="info" :position="position" width="auto"></toast>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XHeader,Group,XInput,XButton,Toast} from 'vux'
  import Api from '@/service'
  const TIME_COUNT = 5;
  export default {
    components:{XHeader,Group,XInput,XButton,Toast},
    data(){
      return{
        isClick:true,
        count:'',
        timer: null,
        tel:'',
        code:'',
        name:'',
        showPositionValue:false,
        info:'',
        position:'bottom'
      }
    },
    methods:{
      /*倒计时*/
    	countDown(){
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.isClick = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.isClick = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      },
      /*表单验证*/
      valid(){
        if (!this.tel || !(/^1[34578]\d{9}$/.test(this.tel))){
          this.$refs.input1.focus()
          return '请输入正确的手机号码'
        }else if (!this.code){
          this.$refs.input2.focus()
          return '请输入验证码'
        }else if (!this.name){
          this.$refs.input3.focus()
          return '请输入昵称'
        }else {
          return false
        }
      },
      register(){
        if (this.valid()){
          this.showPositionValue = true;
          this.info = this.valid();
          return false;
        }else{
          let params = {
            "mobile":this.tel,
            "vCode":this.code,
            "nickName":this.name
          }
          Api.MeApi.register(params).then(res=>{
            if (res.data.code === '0'){
              localStorage.removeItem('userInfo');
              this.showPositionValue = true;
              this.info = '注册成功，请登录';
              this.position = 'middle'
              setTimeout(()=>{
                this.$router.push({name:'login'})
              },1500)
            }else{
              this.showPositionValue = true;
              this.info = '昵称已存在';
              this.$refs.input3.focus()
              return false;
            }
          })
        }
      },
      /*发送验证码*/
      send(){
        if (!this.tel || !(/^1[34578]\d{9}$/.test(this.tel))){
          this.showPositionValue = true;
          this.info = '请输入正确的手机号码';
          return false;
        }
        this.isClick= false;
        Api.MeApi.sendCode({"mobile":this.tel}).then(res=>{
            console.log(res);
            if (res.data.code === '0') {
              Api.MeApi.getCode({"mobile":this.tel}).then(res=>{
                console.log(res.data.data.vCode);
              })
            }else{
              this.showPositionValue = true;
              this.info = res.data.msg;
              this.tel = ''
              this.isClick= true;
              this.$refs.input1.focus()
              return false;
            }
        })
        this.countDown();
      }
    },
    mounted(){
      //自动获取焦点
      this.$refs.input1.focus()
    },
    watch:{
      time(val){
        console.log(val)
      }
    }
  }
</script>

<style scoped lang="less">
  body{
    #me{
      position: absolute;
      width:100%;
      height:100%;
      top:0;
      left:0;
      background: #fff;
      .content{
        .logo{
          margin-top:1.12rem;
          text-align: center;
          img{
            width:3rem;
            height:1rem;
          }
        }
        .input-wrapper{
          margin-top:1.34rem;
          .vux-x-input{
            font-size:0.32rem;
          }
        }
        .btns{
          padding:0 0.17rem;
          margin-top:1.5rem;
          button{
            display: block;
            width: 3.4rem;
            color:#fff;
            border:none;
            border-radius: 0.22rem;
            height:0.86rem;
            font-size:0.28rem;
            text-align: center;
            background: url(./images/denglukuan.png) no-repeat 0 0 ;
            background-size: 3.4rem 0.86rem;
            margin:0 auto;
          }
        }
        .info{
          font-size:0.32rem;
          color:#535353;
          text-align: center;
          padding-top:0.55rem;
        }
      }
    }
  }

</style>
