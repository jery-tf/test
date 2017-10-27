<template>
    <div>
        <router-link to="/setting/changenum">
            <div class="safety padding-container-lr firstline" >修改绑定手机
                <span>{{telphone}}<i class=" OAIndexIcon C2-xiayiye"></i> </span>
            </div>
        </router-link>
         <router-link to="/setting/resetsec">
            <div class="safety padding-container-lr " >登录密码
                <span>已设置 <i class=" OAIndexIcon C2-xiayiye"></i> </span>
            </div>
         </router-link>
    </div>
</template>
<script>
export default {
  data(){
    return{
      telphone:""
    }
  },
  created(){
      this.getitems();
  },
  methods:{
    getitems(){
     const telphone= JSON.parse(localStorage.getItem('userInfo')).phone;
     console.log(telphone)
      if(telphone==''){
        alert("您没有绑定手机号，请绑定手机号")
        return
      }
      this.telphone=telphone
    }
  }
}
</script>
<style scoped lang='less'>
 .safety{
      width: 7.2rem;
      height: 0.97rem;
      line-height: 0.97rem;
      font-size: 0.32rem;
      background-color: #fff;
      position: relative;
      span{
        float: right;
        color: #c2c2c2;
        font-size: 0.28rem;
        padding-right: 0.44rem;
        font-family: "微软雅黑";
      }
       .C2-xiayiye{
            /*float: right;*/
            /*vertical-align: 2%;*/
            color: #ccc;
            font-size: 0.29rem;
            font-weight: 900;
            padding-left: 0.2rem;
         position: absolute;
         top: 0.32rem;
         right: 0.24rem;
        }
 }
 .firstline{
     margin: 0.2rem 0;
 }
.bottomline{
    border-top: 1px solid #d9d9d9;
    height: 0.97rem;
}
</style>
