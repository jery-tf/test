/**
* Created by wyg on 2017/10/1.
*/

<template>
  <div class="fff" @click="btnFun">
    <div class="padding-container border-bottom">
      <p class="twoLineFont" v-html="dataSearch"></p>
      <div class="box-margin-top StarsScore">
        <StarsScore :score="data.score+1"></StarsScore>
        <p class="frequency">
          <i class="OAIndexIcon C2-gouxuan"></i>
          <span>最多跑现场 {{data.frequency}} 次</span>
        </p>
      </div>
    </div>
    <div class="mall-warp padding-container">
      <div class="jigou">
        <i class="OAIndexIcon C2-jigou1"></i>
        <span>{{data.name}}</span>
      </div>
      <div :class="`btn ${btnActive}`">
        <span>在线办理</span>
      </div>
    </div>
  </div>
</template>

<script>
  /***
   * 单个办事指南组件
   * data属性
   * title(str)   name    ID     frequency   score(int)  isActive(bool)    [search](str)
   * 标题         机构名    主键    到现场次数     分数         按钮是否可操作     突出显示的文字(只匹配一次)
   */
  import StarsScore from '../public/StarsScore.vue'
  export default {
    name: 'guideLi',
    props: ['data'],
    components: {StarsScore},
    data () {
      return {}
    },
    created(){

    },
    methods: {
      btnFun(){
        if (!this.data.isActive) return;
        this.$router.push({path:`/errand/guide/${this.data.id}`})
      }
    },
    computed: {
      btnActive(){
        return this.data.isActive ? 'active' : '';
      },
      dataSearch(){
          let search = this.data.search;
          let title = this.data.title;
          if(search){
              let searchIndex = title.indexOf(search);
              if(searchIndex!=-1){
                let start = title.substr(0,searchIndex);
                let middle = title.substr(searchIndex,search.length);
                let end = title.substr(searchIndex+search.length);
                return `<span>${start}</span><span style="color:red">${middle}</span><span>${end}</span>`
              }else{
                return `<span>${title}</span>`;
              }
          }else{
              return `<span>${title}</span>`;
        }
      }
    }

  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .twoLineFont {
    font-size: .28rem;
  }

  .box-margin-top {
    font-size: .21rem;
  }

  .StarsScore {
    display: flex;
    align-items: center;
  }

  .frequency {
    display: flex;
    align-items: center;
    margin-left: .3rem;
    i {
      color: #29ab91;
      margin-right: .1rem;
    }
  }

  .jigou {
    display: flex;
    align-items: center;
    color: #999;
    i {
      color: #13b7f6;
      font-size: .24rem;
      margin-right: .1rem;
    }
  }

  .btn {
    font-size: .2rem;
    color: #aaa;
    border: 1px solid #ccc;
    border-radius: .05rem;
    padding: .03rem .1rem;
  }

  .btn.active {
    border: 1px solid #ff3e3e;
    color: #ff3e3e;
  }

  .mall-warp {
    font-size: .21rem;
  }

</style>
