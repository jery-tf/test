<template>
  <div class="police padding-container-lr">
    <h3>在华外国人集体进行临时宗教活动地点的审批</h3>
    <Approve :approve="item"  :key="index" v-for="(item,index) in list"></Approve>
  </div>

</template>
<script>
import Approve from "components/convenpeo/Approve.vue"
export default {
  components: { Approve },
  name:'police',
  data() {
    return {
      list: [
        { 'title': '办理机构', 'content': '江苏省民政厅婚姻登记处 地址：南京市太平北路82号 邮编：210009 联系电话：025-84510099' },
        { 'title': '受理范围', 'content': '个人' },
        { 'title': '监督投诉电话', 'content': '025-844001025' },
        { 'title': '办理时限', 'content': '当场办结' },
        { 'title': '网上办理', 'content': '网上办理' },
        { 'title': '网上查询', 'content': '<a href="http://www.jszwfw.gov.cn/" style="color:#13b7f6;font-size:0.21rem">http://www.jszwfw.gov.cn/</a>' },
        { 'title': '受理条件', 'content': '一、只对哈萨克斯坦、芬兰、奥地利、荷兰、德国、阿根廷、乌克兰、墨西哥、波兰等九个国家及台湾地区的公证事项继续出具证明; <br>二、出具证明的婚姻登记机关具有管辖权；<br>三、申请出具证明当事人应当达到我国法定婚龄' },
        { 'title': '受理条件', 'content': '一、申请人应在婚姻登记机关填写并提交《申请出具<无婚姻登记记录证明>声明书》或《申请出具<婚姻登记记录证明>声明书》;<br>二、当事人亲自到婚姻登记机关提出申请的，应提供本人户口簿和居民身份证；华侨、外国人提供有效护照；香港居民、澳门居民、台湾居民提供有效通行证、身份证；<br>三、当事人委托他人申请的，委托人应提供本人居民身份证，委托人户口簿和居民身份证原件' },
      ]
    }
  },

}
</script>
<style lang="less" scoped>
.police {
  background-color: #fff;
  h3 {
    width: 7.2rem;
    height: 0.98rem;
    line-height: 0.98rem;
    font-size: 0.32rem;
    color: #000;
  }
}

</style>
