<template>
  <div class="container">
    <div class="card">
      <div class="photo">
        <img src="" alt="图片">
      </div>
      <span> <a>一些测试文字</a></span>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortInfo"
}
</script>

<style scoped lang="less">
.container {
  background-color: skyblue;
  width: 266px;
  height: 321px;
  padding: 10px;

  & > .card {
    width: 246px;
    height: 271px;
    padding: 10px;
    margin-bottom: 30px;
    &>.photo{
      width: 100%;
      height: 178px;
      background-color: orange;
    }
  }
}
</style>