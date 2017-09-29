<template>
  <div id="tmpl">
    <mt-field label="请输入原始密码" class="ipt" :type="ablesee?'text':'password'">
      <span class="OAIndexIcon icon-yanjing1" @click="isshow()"></span>
    </mt-field>
    <div class="sect">
      <mt-field label="请输入新密码" class="ipt" :type="ablesee1?'text':'password'" v-model="password1">
        <span class="OAIndexIcon icon-yanjing1" @click="isshow1()"></span>
      </mt-field>
      <mt-field label="请再次输入新密码" class="ipt" :type="ablesee2?'text':'password'" v-model="password2">
        <span class="OAIndexIcon icon-yanjing1" @click="isshow2()"></span>
      </mt-field>

      <Btncommon msg="保存" @click.native="handleClick"></Btncommon>
    </div>
  </div>
</template>
<script>
import Btncommon from 'components/btncommon/BtnCommon'
import { Toast } from 'mint-ui';
export default {
  components: {
    Btncommon,
  },

  data() {
    return {
      password: '',
      ablesee: false,
      ablesee1: false,
      ablesee2: false,
      popupVisible: false,
      password1: "",
      password2: '',
    }
  },
  methods: {
    isshow() {
      this.ablesee = !this.ablesee
    },
    isshow1() {
      this.ablesee1 = !this.ablesee1
    },
    isshow2() {
      this.ablesee2 = !this.ablesee2
    },
    handleClick: function() {
      if (this.password1 != this.password2) {
        Toast({
          message: '两次密码输入不一致，请重新输入',
          position: 'top',
        });
      }else
       Toast({
          message: '修改密码成功',
          position: 'top',
        });
    }
  }
}
</script>
<style  lang='less'>
#tmpl {
  .icon-yanjing1 {
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
    .mintui-field-error {
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
      margin-right: 0.3rem;
    }
    .mint-field-core {
      font-size: 0.28rem;
      color: #99666666;
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
