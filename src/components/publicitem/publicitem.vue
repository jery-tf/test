<template>
    <div id="tmpl">
        <div class="pubnews padding-container">
            <div class="pubhead">
                <h3>{{content.displayName}}</h3>
                <span>查看更多
                    <i class="OAIndexIcon C2-fanhui4"></i>
                </span>
            </div>
            <ul class="pubcont" v-for="item1 in list1">
                <li class="publistone">
                    <router-link to="/publicmore">
                        <img src="../../assets/img/text1.jpg">{{content.contentf}}<br>
                        <span>{{content.timef}}</span>
                    </router-link>
                </li>
                <li class="publistone">
                    <a href="javascript:void(0)">{{content.contents}}<br>
                        <span>{{content.times}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'Publicitem',
    props:['content','content1','content2','content3',"list1"]
}
</script>
<style lang="less">
.pubnews {
  width: 7.2rem;
  position: relative;
  margin-top: 0.2rem;
  background-color: #fff
}
.pubnews .pubhead {
  position: relative;
}

.pubnews .pubhead h3 {
  font-size: 0.34rem;
  color: #000;
  font-weight: 400;
  font-family: "微软雅黑";
}

.pubnews .pubhead span {
  position: absolute;
  font-size: 0.23rem;
  font-family: "微软雅黑";
  color: #999;
  top: 0.06rem;
  right: 0;
}

.pubnews .pubhead .C2-fanhui4 {
  font-style: normal;
  font-size: 0.21rem;
  vertical-align: 5%;
  color: #ccc;
}

.pubnews .pubcont {
  margin-top: 0.26rem;
  overflow: hidden;
  position: relative;
}

.pubnews .pubcont .publistone {
  margin-top: 0.15rem;
  position: relative;
  font-size: 0.27rem;
  color: #666;
  overflow: hidden;
  padding-bottom: 0.3rem;
}
.pubnews .pubcont .publistone:first-child{
  border-bottom: 1px solid #eee;
}
.pubnews .pubcont .publistone a {
  color: #666
}

.pubnews .pubcont .publistone img {
  float: right;
  width: 1.97rem;
  height: 1.3rem;
  padding-left: .4rem
}

.pubnews .pubcont .publistone span {
  display: block;
  padding-top: 0.5rem;
  font-family: "微软雅黑";
  color: #dcdcdc;
}
</style>
