<template>
  <div>
    <div class="flow" >
      <div class="title">{{approve.title}}</div><div class="content" refs="heig" v-html="approve.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  props:['approve','appp'],
}
</script>
<style lang="less" scoped>
.flow {
  width: 7.2rem;
  font-size: 0.21rem;
  color: #333;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.title,
.content {
  display: inline-block;
  border:1px solid #ACE0F4;
}

.title {  
  width: 1.75rem;
  background-color: #f3fafd;
  padding-left: 0.2rem;
  height: 100%;
  position: absolute;
   display: flex;
  align-items: center;
}

.content {
  width: 4.83rem;
  padding:0.19rem;
margin-left: 1.75rem;
 a{
  color: blue;
}
}

</style>
