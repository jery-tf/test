<template>
    <div>
        <form action="">
            <span class="padding-container-lr">公司/单位 全称</span><br>
            <input type="text" placeholder="请输入注册公司/单位的名称" class="ipt">
            <span class="padding-container-lr">证件类型</span><br>
            <input type="text" placeholder="统一社会信用代码" class="ipt">
            <span class="padding-container-lr">证件号码</span><br>
            <input type="text" placeholder="请输入18位统一社会信用代码" class="ipt">
            <span class="padding-container-lr">联系人姓名</span><br>
            <input type="text" placeholder="请输入联系人的手机号码" class="ipt">
            <div class="formipt">
                <span class="padding-container-lr">企业地址</span><br>
                <input type="text" placeholder="请输入企业具体地址" class="ipt">
                <i class=" OAIndexIcon icon-xiayiye"></i>
            </div>
            <div class="formipt">
                <span class="padding-container-lr">所属区域</span><br>
                <input type="text" placeholder="点击选择区域" class="ipt">
                 <i class=" OAIndexIcon icon-xiayiye"></i>
            </div>
        </form>
        <button class="mint-button mint-button--primary mint-button--large "><!----> <label class="mint-button-text">提交</label></button>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang='less'>
.formipt {
    position: relative;
}

span {
    font-size: 0.26rem;
    color: #333;
}

.ipt {
    width: 6.4rem;
    height: 0.88rem;
    line-height: 0.88rem;
    margin: 0.13rem 0 0.25rem 0;
    font-size: 0.29rem;
    margin-left: 0.24rem;
    padding-left: 0.26rem;
    border: 0;
    outline: 0;
    input::-webkit-input-placeholder {
        color: #cbcbcb
    }
}

.icon-xiayiye {
    font-size: 0.29rem;
    color: #cbcbcb;
    position: absolute;
    top: 0.8rem;
    right: 0.53rem;
}
.mint-button{
    margin: 0 0.24rem;
}
.mint-button--large{
    width: 6.72rem;
    height: 0.93rem;
    border-radius: 10px;
}
.mint-button-text{
    font-size: 0.3rem;
}
</style>
