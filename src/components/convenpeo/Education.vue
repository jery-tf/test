<template>
  <div>
    <div class="range">
      <h6>小不点</h6>
      <div class="allbtn" v-for="item in list">
        <!--<input type="button" v-model="msg" class="btn" :class="clicked? 'fullclass':'otherclass'">-->
        <input type="button" v-model="msg" class="btn" :class="clicked? 'fullclass':'otherclass'">
        <!--<button class="btn" :class="clicked? 'fullclass':'otherclass'">{{item.msg}}</button>-->
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
          {msg: "这里是一个字"},
          {msg: "这是两个字"},
          {msg: "三个字"},
          {msg: "这里有好多好多字"},
          {msg: "没有"},
          {msg: "小可爱的叔叔"},
        ],
        clicked: ""
      }
    },
    created() {
      this.changeclass()
    },
    methods: {
      changeclass() {
        if (this.msg.length >= 6) {
          this.clicked = true
        }
        else {
          this.clicked = false
        }
      }
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
      .btn {
        border: 0;
        outline: 0;
        border-radius: 0.1rem;
        height: 1.18rem;
        border: 1px solid #cecece;
      }
    }
  }

  .fullclass {
    width: 4.59rem;
    background-color: deeppink;
  }

  .otherclass {
    flex-wrap: wrap;
    background-color: red;
    width: 2.22rem;

  }

</style>

