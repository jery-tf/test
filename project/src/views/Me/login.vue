<template>
  <div id="me">
    <XHeader title="物流圈-登录" :left-options="{backText: ''}"></XHeader>
    <div class="content">
       <div class="logo">
         <img src="../../assets/image/logo.png" alt="" >
       </div>
       <div class="input-wrapper">
         <x-input title="输入手机号码：" ref="input1" v-model="tel"></x-input>
         <x-input title="登录密码：" type="password" class="password" v-model="password" ref="input2"></x-input>
       </div>
       <div class="btns" v-if="isLogin">
         <button class="res" @click="res">没有账号？点我注册</button>
         <button class="login" @click="login">立即登陆</button>
       </div>
      <toast v-model="showPositionValue" type="text" :time="1000" is-show-mask :text="info" :position="position" width="auto"></toast>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { XHeader,Group,XInput,Toast,Loading} from 'vux'
  import Api from '@/service'
  import Util from '@/util'
    const IS_SUCESS = '0';
    export default {
      components:{XHeader,Group,XInput,Toast,Loading},
      data(){
        return {
          isLogin:true,
          tel:'',
          password:'',
          showPositionValue:false,
          info:'',
          position:'bottom'
        }
      },
      methods:{
        res(){
          this.$router.push({path:'/register'})
        },
        login(){
          if (this.valid()){
            this.showPositionValue = true;
            this.info = this.valid();
            console.log(this.valid())
            return false;
          }else{
            this.$vux.loading.show({
              text: 'Loading'
            })
            Api.MeApi.login({"username":this.tel,password:this.password}).then(res=>{
              this.$vux.loading.hide();
              console.log(res)
              if (res.data.code === IS_SUCESS){
                Util.other.setLocalStorage('userInfo',res.data.data);
                this.$router.push({name:'index'})
              }else{
                this.showPositionValue = true;
                this.info = res.data.msg;
                if (res.data.code === '102') {
                  this.$refs.input1.focus();
                }else{
                  this.$refs.input2.focus();
                }
              }
            })
          }

        },
        /*表单验证*/
        valid(){
          if (!this.tel || !(/^1[34578]\d{9}$/.test(this.tel))){
            /*this.showPositionValue = true;
            this.info = '请输入正确的手机号码';*/
            this.$refs.input1.focus();
            return '请输入正确的手机号码';
          }else if (!this.password){
            return '请输入密码';
          }else{
            return false;
          }
        }
      },
      mounted(){
        //自动获取焦点
        this.$refs.input1.focus()
      },
      created(){
       /* //清除用户信息
        localStorage.removeItem('userInfo')*/
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
          display: flex;
          padding:0 0.17rem;
          margin-top:1.5rem;
          button{
            flex: 1;
            margin-right:.36rem;
            color:#fff;
            border:none;
            background:#c7c7c7;
            border-radius: 0.22rem;
            height:0.86rem;
            font-size:0.28rem;
            &:last-child{
              margin-right:0;
              background: url(./images/denglukuan.png) no-repeat 0 0 ;
              background-size: 3.4rem 0.86rem;
            }
          }
        }
      }
    }
  }

</style>
