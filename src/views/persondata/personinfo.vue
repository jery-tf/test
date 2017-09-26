<template>
    <div>
        <div class="tmpl" v-for="item in list">
            <mt-field :label="item.name" type="text" :placeholder="item.pname" class="ipt"></mt-field>
        </div>
        <button class="mint-button mint-button--primary mint-button--large ">
            <!---->
            <label class="mint-button-text">保存</label>
        </button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                { name: "客户名称", pname: "请输入客户名称" },
                { name: "固定电话", pname: "请输入固定电话" },
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
.tmpl {
    margin-top: 0.2rem;
    .ipt {
        width: 7.2rem;
        height: 1rem;
        border-bottom: 1px solid #aaa;
        .mint-cell-wrapper {
            padding-left: 0.24rem;
            .mint-field-core {
                font-size: 0.24rem;
            }
            .mint-cell-title {
                width: 1.14rem;
                margin-right: 0.66rem;
                .mint-cell-text {
                    font-size: 0.28rem;
                    color: #333;
                }
            }
        }
        .mint-field-core::-webkit-input-placeholder {
            color: #aaa;
        }
    }
   
}
 .mint-button {
        margin: 0 0.24rem;
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
