<template>
  <ul>
    <li class="container">
      <div class="card">
        <div class="photo">
          <img src="" alt="图片">
        </div>
        <div class="card-info">
          <span> <a>跳转到标题</a></span>
          <h2>一些测试文字</h2>
        </div>
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
  margin: 10px 0;
  transition: box-shadow 0.3s ease;

  & > .card {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-bottom: 30px;
    background-color: gray;

    & > .photo {
      width: 100%;
      height: 60%;
      background-color: orange;
    }
    & > .card-info {
      width: 100%;
      height: 40%;
      background-color: chartreuse;
    }
  }
}

.container:hover {
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.5);
}
</style>