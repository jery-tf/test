<template>
    <div>
        <Personinfo :person='item'  :key="index"  v-for="(item,index) in list"></Personinfo>
       <Btncommon msg="保存"></Btncommon>
    </div>
</template>
<script>
import Personinfo from 'components/personinfo/personinfo.vue'
import Btncommon from 'components/btncommon/BtnCommon'
export default {
    components:{Personinfo,Btncommon},
    data() {
        return {
            list: [
                { name: "客户名称", pname: "" },
                { name: "固定电话", pname: "" },
                { name: "行政区域", pname: "请输入行政区域" },
                { name: "客户类型", pname: "请输入客户类型" },
                { name: "销售区域", pname: "请输入销售区域" },
                { name: "建材市场", pname: "请输入建材市场" },
                { name: "详细地址", pname: "请输入详细地址" },

            ]
        }
    }
}
</script>
<style lang="less">

 .mint-button {
        margin: 0.26rem 0.24rem 0 0.24rem; 
    }
    .mint-button--large {
        width: 6.72rem;
        height: 0.93rem;
        border-radius: 10px;
    }
    .mint-button-text {
        font-size: 0.32rem;
        color: #fff;
    }
</style>
