<template>
  <div>
      <div class="ableipt common">
                <em>{{content}}</em>
                <input type="text" class="idform">
            </div>
  </div>
</template>
<script>
export default {
  props:['content']
}
</script>
<style lang="less" scoped>

.regi,
.ableipt {
    width: 7.2rem;
    height: 0.97rem;
    line-height: 0.97rem;
    border-top: 1px solid #d9d9d9;
    background-color: #fff;
    .ipt {
        .C2-next {
            float: right;
        }
    }
}

.idform {
    border: 0;
    outline: 0;
    width: 3rem;
    height: 0.8rem;
    font-size: 0.23rem;
    color: #333;
}

.common {
    font-size: 0.23rem;
    color: #333;
    padding-left: 0.24rem;
}

em {
    display: inline-block;
    font-style: normal;
    width: 1.95rem;
}

.telp {
    margin-top: 0.19rem;
    background: #fff;
}

.yan {
    width: 7.2rem;
    height: 1.07rem;
    line-height: 1.07rem;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    strong {
        font-weight: 400;
        display: inline-block;
        width: 1.88rem;
    }
    .ipt {
        border: 0;
        outline: 0;
        height: 0.8rem;
        font-size: .28rem;
        color: #aaa;
        width: 2.36rem;
    }
    .btn {
        border: 1px solid #a0a0a0;
        outline: 0;
        background-color: #f8f8f8;
        width: 1.82rem;
        height: 0.68rem;
        vertical-align: 20%;
        border-radius: 10px;
        font-size: 0.2rem;
    }
}
</style>
