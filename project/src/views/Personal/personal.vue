<!--个人中心-->
<template>
  <div class="personal page-container">
    <XHeader title="个人中心" :left-options="{backText: ''}"></XHeader>
    <div class="content">
      <div class="header clearfix">
        <img :src="infoData.imgPath" alt="" class="fl">
        <span class="fl">昵称：{{infoData.nickName}}</span>
      </div>
      <MyLine h="0.08rem"></MyLine>
      <div class="infoList">
        <group class="group">
          <cell title="我的帖子" is-link></cell>
          <cell title="评论/回复我的" is-link></cell>
          <cell title="个人资料(点我改头像)" is-link @click.native="go"></cell>
        </group>
        <div class="btn">
          <MyButton bg="#e83434">退出登陆</MyButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import Api from '@/service'
    import Util from '@/util'
    import {XHeader,Group,Cell} from 'vux'
    import MyButton from '@/components/Public/myButton'
    import MyLine from '@/components/Public/line'
    export default {
      data(){
        return {
          infoData:{}
        }
      },
      components:{
        XHeader,Group,Cell,MyButton,MyLine
      },
      methods:{
        //获取个人信息
        getUserInfo(){
          let userInfo = Util.user.getUserInfo();
          Api.PersonalApi.getUserInfo({memberId:userInfo.id}).then(res=>{
              console.log(res)
             if(res.data.code === '0'){
                this.infoData = res.data.data;
             }
          }).catch(error=>{
              console.log(error)
          })
        },
        go(){
          this.$router.push({name:'personalData',query:this.infoData})
        }
      },
      created(){
        this.getUserInfo();
      }
    }
</script>

<style scoped lang="less">
  .personal{
    .header{
      padding:0.5rem 0 0.5rem 1.23rem;
      text-align: center;
      img{
        width:1.5rem;
      }
      span{
        height:1.5rem;
        line-height: 1.5rem;
        font-size:0.34rem;
        margin-left:0.6rem;
        color:#2a2a2a;
      }
    }
    .btn{
      margin-top:1.72rem;
      text-align: center;
    }
    .group{
      .weui-cells:before{
        border-top:none;
      }
    }
  }
</style>
