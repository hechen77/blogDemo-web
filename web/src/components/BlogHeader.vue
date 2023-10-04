<template>
  <div class="container">
    <div class="word1">自由博客</div>
    <div class="word2">我们的博客</div>
    <div class="search">
      <el-input placeholder="请输入内容" v-model="searchInfo" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BlogHeader',
  data() {
    return {
      searchInfo: ''
    }
  },
  methods: {}
}


</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 460px;
  background-color: gray;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;

  & > .word1 {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
  }

  & > .word2 {
    text-align: center;
    font-size: 30px;
    font-weight: 400;
  }

  & > .search {
    margin-top: 15px;

    & > .el-input {
      width: 700px;
    }
  }
}


</style>