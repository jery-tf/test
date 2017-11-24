<template>
  <div class="ifame-wrapper" v-show="iframeState">
    <iframe id="show"  frameborder=0 name="showHere" width="100%" height= "100%" :src="src" ref="iframe"></iframe>
  </div>
</template>

<script type="text/ecmascript-6">
  import Api from '../../api'
    export default {
      data(){
        return {
          iframeState:true,
          src:''
        }
      },
      methods:{
        show(){
          //console.log(document.getElementById('show').contentDocument)
        }
      },
      created(){
          //approveId,instanceId,formData=[],redirect_uri
          console.log(this.$route.params.id)

      }
    }
</script>

<style scoped lang="less">
  .ifame-wrapper{
    position: absolute;
    width: 100%;
    height:100%;
  }
</style>
