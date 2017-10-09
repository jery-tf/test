<template>
  <div class="cmp">
       <div class="ableipt common">
                <em>{{person.name}}</em>
                <input type="text" class="idform" :placeholder="person.pname">
         </div>
  </div>
</template>
<script>
export default {
  props:['person']
}
</script>
<style lang="less" scoped>
.cmp {
    width: 7.2rem;
    background-color: #fff;
}
.cmp:last-child{
    margin-bottom: 100px;
}
.regi,
.ableipt {
    width: 7.2rem;
    height: 0.97rem;
    line-height: 0.97rem;
    border-top: 1px solid #d9d9d9;
    background-color: #fff;
    .ipt {
        .icon-next {
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
    color: #aaa;
}

.common {
    font-size: 0.23rem;
    color: #333;
    padding-left: 0.24rem;
}
em{
    display: inline-block;
    font-style: normal;
    width: 1.95rem;
}
.telp{
    margin-top: 0.19rem;
    background: #fff;
}
</style>
