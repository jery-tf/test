<template>
    <div>
        <div class="regist">
            <router-link to="/register/registerforpeo">
                <div class="forpeo">
                    <div class="peo">
                        <i class="OAIndexIcon  icon-qiyeyonghu"></i>
                    </div>
                    个人注册
                </div>
            </router-link>
            <router-link to="/register/registerforcmp">
                <div class="forcmp">
                    <div class="cmp">
                        <i class="OAIndexIcon icon-qiye"></i>
                    </div>
                    企业注册</div>
            </router-link>
        </div>
        <div class="agreey padding-container-lr">
            我同意《互联网+政务 用户服务协议》
            <mt-switch></mt-switch>
        </div>
        <div class="reglist padding-container-lr">
            <p>《互联网+政务 用户服务协议》</p>
            国家发改委发言人
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style  lang='less'>
.regist {
    width: 7.2rem;
    margin: 0.34rem 0 0.24rem 0;
    height: 3.33rem;
    background-color: #fff;
    .forpeo {
        text-align: center;
        padding-top: 0.55rem;
        float: left;
        width: 50%;
        height: 3.33rem;
        border-right: 1px solid #ddd;
        font-size: 0.4rem;
        .peo {
            margin: 0 auto;
            width: 1.34rem;
            height: 1.34rem;
             line-height: 1.34rem;
            background-color: #29ccb7;
            border-radius: 50%;
            margin-bottom: 0.42rem;
        }
    }
    .forcmp {
        text-align: center;
        float: right;
        width: 50%;
        padding-top: 0.55rem;
        height: 3.33rem;
        font-size: 0.4rem;
        .cmp {
            margin: 0 auto;
            width: 1.34rem;
            height: 1.34rem;
            line-height: 1.34rem;
            background-color: #3b9ac6;
            border-radius: 50%;
            margin-bottom: 0.42rem;
        }
    }
}

.agreey {
    width: 7.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.24rem;
    color: #666;
    background-color: #fff;
    margin-bottom: 0.24rem;
    .mint-switch {
        display: inline-block;
        width: 1.12rem;
        height: 0.54rem;
        border-radius: 0.27rem;
        margin-top: 0.12rem;
        vertical-align: top;
        margin-left: 1.4rem;
    }
    .mint-switch-core {
        display: inline-block;
        width: 1.12rem;
        height: 0.54rem;
        background-color: #29ccb7;
        border: 0;
        border-radius: 0.27rem;
    }
    .mint-switch-core::before {
        display: inline-block;
        width: 1.12rem;
        height: 0.54rem;
        border-radius: 27px;
    }
    .mint-switch-core::after {
        display: inline-block;
        width: 0.54rem;
        height: 0.54rem;
        border-radius: 50%;
    }
    .mint-switch-input:checked+.mint-switch-core::after {
        transform: translateX(0.58rem)
    }
    .mint-switch-input:checked.mint-switch-core {
        border-color: #29ccb7;
        background-color: #29ccb7;
        border-radius: 0.27rem;
    }
    
}

.reglist {
    font-size: 0.2rem;
    color: #666;
    background-color: #fff;
    p {
        font-size: 0.24rem;
        color: #000;
        font-weight: 800;
        text-align: center;
        padding-top: 0.35rem;
        margin-bottom: 0.46rem;
    }
}
.OAIndexIcon{
    font-size: 0.67rem;
    color: #fff;
}
</style>
