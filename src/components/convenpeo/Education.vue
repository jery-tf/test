<template>
  <div>
    <div class="range">
      <h6>幼儿园</h6>
      <div class="allbtn" v-for="item in list">
        <!--<input type="button" v-model="msg" class="btn" :class="clicked? 'fullclass':'otherclass'">-->
        <input type="button" v-model="item.msg" class="btn" :class="item.msg.length>=6? 'fullclass':'otherclass'">
        <!--<button class="btn" :class="clicked? 'fullclass':'otherclass'" ref="aaa">{{item.msg}}</button>-->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: "",
        list: [
          {msg: "这里是一个字11111"},
          {msg: "这是两个字"},
          {msg: "三个字"},
          {msg: "这里有好多好多字"},
          {msg: "没有"},
          {msg: "新加的按钮值"},
        ],
        clicked: false
      }
    },
    created() {
    },
    methods: {
    },
  }
</script>
<style lang="less" scoped>
  .range {
    padding: 0.26rem 0.24rem;
    margin-top: 0.24rem;
    background-color: #fff;
    width: 5.14rem;
    h6 {
      font-size: 0.24rem;
      color: #333;
      font-weight: 400;
      padding-bottom: 0.4rem;
      font-family: "微软雅黑";
    }
    .allbtn {
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      display: inline-block;
      .btn {
        border: 0;
        outline: 0;
        border-radius: 0.1rem;
        height: 1.18rem;
        border: 1px solid #cecece;
        background-color: #fff;
        margin-bottom: 0.24rem;
      }
    }
  }
  .fullclass {
    width: 4.59rem;
  }
  .otherclass {
    width: 2.22rem;
  }

</style>

