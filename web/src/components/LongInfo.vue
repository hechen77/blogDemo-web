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
          <p>一段文章描述</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LongInfo",
  methods: {},
  computed: {},
}
</script>

<style scoped lang="less">
.container {
  background-color: skyblue;
  width: 600px;
  height: 200px;
  padding: 10px;
  border-radius: 15px;
  transition: box-shadow 0.3s ease;

  & > .card {
    width: 100%;
    height: 180px;
    padding: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-flow: row wrap;
    background-color: gray;

    & > .photo {
      width: 40%;
      height: 100%;
      background-color: orange;
    }

    & > .card-info {
      width: 60%;
      height: 100%;
      background-color: chartreuse;
    }
  }
}

.container:hover {
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.5);
}
</style>