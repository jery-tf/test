<template>
    <div class="tmpl">
        <input type="text" class="ipt " placeholder="请输入搜索内容" v-model="getcont"><i class="OAIndexIcon icon-sousuo" v-show="isshow"></i>
        <div class="history padding-container-lr">
            历史搜索
        </div>
        <div class="checkedmore padding-container-lr">编号</div>
        <div class="checkedmore padding-container-lr">省委</div>
        <div class="checkedmore padding-container-lr">湖南</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            getcont:'',
            isshow:true
        }
    },
}
</script>
<style  lang='less'>
.tmpl{
    position: relative;
.ipt {
    display: block;
    width: 6.8rem;
    height: 0.58rem;
    margin: 0.2rem auto;
    font-size: 0.24rem;
    outline: 0;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center
}
input::-webkit-input-placeholder{
    color: #bbb;
}
.icon-sousuo{
    position: absolute;
    top: 0.13rem;
    left: 2.4rem;
    font-size: 0.29rem;
    color: #ddd;
    font-weight: 900
}
.history{
    height: 0.64rem;
    line-height: 0.64rem;
    background-color: #fff;
    color: #999;
    font-size: 0.2rem;
    border-top: 1px solid #eee;
    outline: 0
}
.checkedmore{
    width: 7.2rem;
    height: 0.94rem;
    line-height: 0.94rem;
    font-size: 0.26rem;
    color: #666;
    background-color: #fff;
    border-top: 1px solid #eee
}
}
</style>
