<template>
  <ul>
    <li class="container">
      <div class="card">
        <div class="photo">
          <img src="" alt="图片">
        </div>
        <span> <a>跳转到标题</a></span>
        <h2>一些测试文字</h2>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ShortInfo",
  methods: {},
  computed: {},
}
</script>

<style scoped lang="less">
.container {
  background-color: skyblue;
  width: 266px;
  height: 321px;
  padding: 10px;
  border-radius: 15px;
  transition: box-shadow 0.3s ease;

  & > .card {
    width: 246px;
    height: 271px;
    padding: 10px;
    margin-bottom: 30px;

    & > .photo {
      width: 100%;
      height: 178px;
      background-color: orange;
    }
  }
}

.container:hover {
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.5);
}
</style>