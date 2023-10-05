<template>
  <div>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    <blogHeader></blogHeader>
    <div class="container1">
      <h1>自由的算法题</h1>
      <shortInfo></shortInfo>
      <h1>数据结构面试题</h1>
      <longInfo></longInfo>
    </div>
    <blogFooter></blogFooter>
  </div>
</template>

<script>
import blogHeader from "@/components/BlogHeader.vue";
import shortInfo from "@/components/ShortInfo.vue";
import longInfo from "@/components/LongInfo.vue";
import blogFooter from "@/components/BlogFooter.vue";

export default {
  name: "Home",
  components: {blogHeader, shortInfo, longInfo, blogFooter}
}
</script>

<style scoped lang="less">
.container1{
  width: 80%;
  margin: 0 auto;
}
</style>