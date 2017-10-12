<template>
    <div>
        <router-link to="/setting/changenum">
            <div class="safety padding-container-lr firstline" >修改绑定手机
                <span>{{telphone}}<i class=" OAIndexIcon icon-xiayiye"></i> </span>
            </div>
        </router-link>
         <router-link to="/setting/resetsec">
            <div class="safety padding-container-lr " >登录密码
                <span>已设置 <i class=" OAIndexIcon icon-xiayiye"></i> </span>
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
     const telphone= JSON.parse(sessionStorage.getItem('userInfo')).phone;
     console.log(telphone)
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
      span{
        float: right;
        color: #c2c2c2;
        font-size: 0.28rem;
        font-family: "微软雅黑";
      }
       .icon-xiayiye{
            float: right;
            vertical-align: 2%;
            color: #ccc;
            font-size: 0.29rem;
            font-weight: 900;
            padding-left: 0.2rem;
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
