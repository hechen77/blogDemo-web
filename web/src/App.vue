<template>
  <div>
    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',
}

</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
