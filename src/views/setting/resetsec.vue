<template>
  <div id="tmpl">
    <mt-field label="请输入原始密码" type="password" class="ipt"><span class="OAIndexIcon icon-yanjing1"></span></mt-field>
    <div class="sect">
      <mt-field label="请输入新密码" type="password" class="ipt"><span class="OAIndexIcon icon-yanjing1"></span></mt-field>
      <mt-field label="请再次输入原始密码" type="password" class="ipt" placeholder="12345" ><span class="OAIndexIcon icon-yanjing1"></span></mt-field>
     <Btncommon msg="保存"></Btncommon>
    </div>
  </div>
</template>
<script>
import Btncommon from 'components/btncommon/BtnCommon'
export default {
  components:{Btncommon},
  data() {
    return {
      password: ''
    }
  }
}
</script>
<style  lang='less'>
#tmpl {
  .icon-yanjing1{
    display: block;
    width: 0.33rem;
    height: 0.24rem;
    font-size: 0.24rem;
    color: #12b7f5
  }
  .ipt {
    width: 7.2rem;
    height: 0.98rem;
    line-height: 0.98rem;
    font-size: 0.28rem;
    color: #333;
    box-sizing: border-box;
    .mintui-field-error{
      content: ""
    }
    .mint-cell-wrapper {
      background-image: none;
      padding: 0 0.24rem;
    }
    .mint-cell-title {
      color: #333;
      font-size: 0.28rem;
      width: 2.6rem;
      margin-right:0.3rem;
    }
    .mint-field-core{
      font-size: 0.28rem;
      color:#99666666;
    }
  }
  .sect {
    margin-top: 0.2rem;
    .mint-cell:last-child {
      background-image: none;
    }
    .mint-cell:first-child {
      border-bottom: 1px solid #d9d9d9
    }
  }
}
.mint-button {
  margin: 0.5rem 0.24rem 0;
}

.mint-button--large {
  width: 6.72rem;
  height: 0.93rem;
  border-radius: 10px;
}

.mint-button-text {
  font-size: 0.3rem;
}
</style>
