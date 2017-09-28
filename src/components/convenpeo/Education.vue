<template>
  <div>
    <div class="range">
      <h6>幼儿园</h6>
      <router-link to="/convenience/police">
        <button class="btn">
        <i class="OAIndexIcon icon-mian"></i>免收保育费和伙食费政策</button>
      </router-link>
        <router-link to="/convenience/guideto">
           <button class="litbtn">
        <i class="OAIndexIcon icon-banshizhinan"></i>办事指南</button>
        </router-link>
        <button class="litbtn">
        <i class="OAIndexIcon icon-youer"></i>幼儿园信息</button>
        <button class="litbtn">
        <i class="OAIndexIcon icon-zhengce"></i>入园政策</button>
        <button class="litbtn">
        <i class="OAIndexIcon icon-cloud-standard"></i>收费标准</button>
    </div>
    <div class="range edu">
       <h5>小学</h5>
      <button class="litbtn">
        <i class="OAIndexIcon icon-xuexiao"></i>学校信息</button>
        <button class="litbtn">
        <i class="OAIndexIcon icon-zhengce"></i>就读政策</button>
    </div>
     <div class="range edu">
       <h5>初中</h5>
      <button class="litbtn">
        <i class="OAIndexIcon icon-xuexiao"></i>学校信息</button>
        <button class="litbtn">
        <i class="OAIndexIcon icon-zhengce"></i>就读政策</button>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.range {
  padding: 0.26rem 0.24rem;
  background-color: #fff;  
  .btn {
    border: 1px solid #cecece;
    outline: 0;
    background-color: #fff;
    width: 4.57rem;
    height: 1.16rem;
    line-height: 1.16rem;
    border-radius: 10px;
    font-size: 0.24rem;
    color: #333;
    .icon-mian {
      color: #f15a4a;
    }
  }
}
.edu{
  margin-top: 0.18rem;
}
h6 {
  font-size: 0.24rem;
  color: #333;
  font-weight: 400;
  padding-bottom: 0.4rem;
}
h5 {
  font-size: 0.24rem;
  color: #333;
  font-weight: 400;
  padding-bottom: 0.27rem;
}

.OAIndexIcon {
  font-size: 0.4rem;
  vertical-align: middle;
  margin-right: 0.12rem;
}

.litbtn {
  width: 2.2rem;
  height: 1.16rem;
  line-height: 1.16rem;
  font-size: 0.24rem;
  color: #333;
  margin-top: 0.13rem;
  background-color: #fff;
  border: 1px solid #cecece;
  border-radius: 10px;
}
.icon-youer{
  color: #108EE9
}
.icon-cloud-standard{
  color: #29ab91;
}
.icon-zhengce{
  color: #fc992f
}
.icon-xuexiao{
  color:  #29AB91;
}
</style>

