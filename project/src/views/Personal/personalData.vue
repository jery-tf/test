<template>
  <div class="page-container personalData">
    <XHeader title="个人资料" :left-options="{backText: ''}"></XHeader>
    <div class="content ">
      <group class="group">
        <cell title="点击上传更换头像" is-link>
          <img :src="userInfo.imgPath" alt="" class="avatar">
        </cell>
        <cell title="点击修改昵称" is-link :value="userInfo.nickName"></cell>
        <cell title="点击修改密码" is-link></cell>
      </group>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader,Group,Cell} from 'vux'
    export default {
      data(){
        return {
          userInfo:{}
        }
      },
      components:{
        XHeader,Group,Cell
      },
      created(){
        this.userInfo = this.$route.query
        console.log(this.userInfo);
      }
    }
</script>

<style scoped lang="less">
  .personalData{
    .avatar{
      height:0.82rem;
      width:0.82rem;
    }
  }
</style>
