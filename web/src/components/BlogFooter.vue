<template>
  <div class="container">
    <div class="footer">
      <span>Copyright © 2021</span>
      <span>自由博客</span>
      <span>- All rights reserved</span>
      <span>粤ICP备19028366号</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "BlogFooter"
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & > .footer {
    width: 600px;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>