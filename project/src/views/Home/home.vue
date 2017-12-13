<!-- 首页-->
<template>
  <div id="index">
    <Search placeholder="点击搜索帖子" @on-focus="search()"></Search>
    <div>
      <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange" dots-position="center"></swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import { Cell,Group ,Search,Swiper} from 'vux'
    const baseList = [{
      url: 'javascript:',
      img: 'https://static.vux.li/demo/1.jpg',
      title: '送你一朵fua'
    }, {
      url: 'javascript:',
      img: 'https://static.vux.li/demo/2.jpg',
      title: '送你一辆车'
    }]
    const urlList = baseList.map((item, index) => ({
      url: 'http://m.baidu.com',
      img: item.img,
      fallbackImg: item.fallbackImg,
      title: `(可点击)${item.title}`
    }))
    export default {
      data(){
          return {
            demo06_index: 0,
            demo06_list: urlList,
          }
      },
      components:{Cell,Group,Search,Swiper},
      methods:{
        search(){
          this.$router.push({path:'/search'})
        },
        demo06_onIndexChange (index) {
          this.demo06_index = index
        },
      }
    }
</script>

<style scoped lang="less">

</style>
